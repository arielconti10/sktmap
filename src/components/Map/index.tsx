import React, { useCallback, useMemo, useRef } from 'react';
import { View, Dimensions, StyleSheet } from 'react-native';

import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { BottomSheetModal } from '@gorhom/bottom-sheet';

import { Spot } from '@src/shared/types';
import { Text } from 'native-base';


// import { Container } from './styles';
interface MapProps {
  spots: Spot[];
}

export default function Map({ spots }: MapProps) {
  const mapRef = useRef<MapView>(null);

  // ref
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  // variables
  const snapPoints = useMemo(() => ['25%', '50%', '98%'], []);

  // callbacks
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  
  return (
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
          onPress={handlePresentModalPress}
        >
          <MaterialCommunityIcons name="skateboard" size={48} color="black" />
        </Marker>
      ))}

      <BottomSheetModal
        ref={bottomSheetModalRef}
        index={0}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
      >
        <View style={styles.contentContainer}>
          <Text>Awesome 🎉</Text>
        </View>
      </BottomSheetModal>
    </MapView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    backgroundColor: 'grey',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
});
