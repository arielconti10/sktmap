import React, { useCallback, useRef, useState } from 'react';
import { Dimensions } from 'react-native';

import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { BottomSheetModal } from '@gorhom/bottom-sheet';

import { Spot } from '@src/shared/types';
import { Marker } from '@components/Marker';
import { Modal } from '@components/Modal';

interface MapProps {
  spots: Spot[];
}

export default function Map({ spots }: MapProps) {
  const currentSpot = useState<Spot>({} as Spot);
  const mapRef = useRef<MapView>(null);
  
  // ref
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  // callbacks
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
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
        <Marker spot={spot} key={index} onPress={handlePresentModalPress} />
      ))}

      <Modal data={currentSpot} ref={bottomSheetModalRef} />
    </MapView>
  );
}
