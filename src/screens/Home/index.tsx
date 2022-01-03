import React, { useState, useEffect, useRef } from "react";
import { Alert, Dimensions } from 'react-native';
import MapView, { LatLng, Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import * as Location from 'expo-location';

import { Container, customStyleMap } from "./styles";
import { LocationObject } from "expo-location";
import firestore from '@react-native-firebase/firestore'

export interface Spot {
  id: string;
  latitude: string;
  longitude: string;
  name: string;
  description: string;
}

export function Home() {
  const [location, setLocation] = useState<LocationObject>();

  const [errorMsg, setErrorMsg] = useState('');
  const [spots, setSpots] = useState<Spot[]>([]);

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

            onPress={() => Alert.alert(spot.name, spot.description)}
          />
        ))}
      </MapView>
    </Container>
  );
}
