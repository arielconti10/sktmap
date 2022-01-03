import React, { useState, useEffect, useRef } from "react";
import { Alert, Animated, Dimensions, TouchableOpacity, View } from 'react-native';
import MapView, { LatLng, Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import * as Location from 'expo-location';
import { LocationObject } from "expo-location";
import firestore from '@react-native-firebase/firestore'

import { Modalize } from "react-native-modalize";
import { Portal } from 'react-native-portalize';

import { Badge, Heading, Text, VStack } from "native-base";

import { Container, customStyleMap } from "./styles";

enum SpotType {
  street_spot = "Street Spot",
  skatepark = "Skate Park",
  park = "Park",
  parking_lot = "Parking Lot",
  court = "Court",
  downhill = "Downhill",
  square = "Square",
  other = "Other"
}

export interface Spot {
  id: string;
  latitude: string;
  longitude: string;
  name: string;
  description: string;
  type: keyof SpotType;
}

export function Home() {
  const modalizeRef = useRef<Modalize>(null);
  const animated = useRef(new Animated.Value(0)).current;

  const onOpen = () => {
    modalizeRef.current?.open();
  };

  const [location, setLocation] = useState<LocationObject>();
  const [errorMsg, setErrorMsg] = useState('');

  const [spots, setSpots] = useState<Spot[]>([]);
  const [currentSpot, setCurrentSpot] = useState<Spot>();

  function fetchSpots() {
    firestore()
      .collection('spots')
      .get()
      .then((response: any) => {
        const data = response.docs.map((doc: any) => {
          return {
            id: doc.id,
            ...doc.data(),
          }
        }) as Spot[];

        setSpots(data);
      })
      .catch(() => Alert.alert('Consulta', 'Não foi possível realizar a consulta'));
  }

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});

      setLocation(location);
    })();

  }, []);

  useEffect(() => {
    fetchSpots();
  }, []);

  const handleSpotClick = (spot: Spot) => {
    setCurrentSpot(spot);
    onOpen();
  };

  const mapRef = useRef<MapView>(null);

  return (
    <Container>
      <MapView 
        ref={mapRef}
        showsMyLocationButton
        showsUserLocation
        zoomControlEnabled
        zoomEnabled
        provider={PROVIDER_GOOGLE} 
        style={{ 
          paddingBottom: Dimensions.get('window').height * 0.1,
          width: Dimensions.get('window').width,
          height: Dimensions.get('window').height - 80,
        }} 
      >
        {spots.map((spot, index) => (
          <Marker
            key={index}
            coordinate={{ latitude : parseFloat(spot.latitude) , longitude : parseFloat(spot.longitude) }}
            onPress={() => handleSpotClick(spot)}
          />
        ))}

      </MapView>

      <Portal>
        {currentSpot ? (
          <Modalize 
            ref={modalizeRef} 
            snapPoint={300} 
            modalHeight={600} 
            panGestureAnimatedValue={animated}
            velocity={10}
            closeOnOverlayTap
            HeaderComponent={() => (
              <View style={{
                backgroundColor: '#fff',
                padding: 10,
                borderBottomWidth: 1,
                borderBottomColor: '#ccc',
              }}>
                <Heading size="xl">{currentSpot?.name}</Heading>
              </View>
            )}
          >
            <VStack p={2}>
              <Badge width="100" colorScheme="info" mb={2}>{(SpotType as any)[currentSpot?.type]}</Badge>
              <Text fontSize="lg">{currentSpot?.description}</Text>
              
            </VStack>

        </Modalize>
        ): null}
      </Portal>

    </Container>
  );
}
