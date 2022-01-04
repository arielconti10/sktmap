import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Spot } from '@src/shared/types';
import React from 'react';
import {Marker as Pin} from 'react-native-maps';
// import { Container } from './styles';

interface MarkerProps{
  spot: Spot
  onPress: () => void
}

export function Marker({ spot, onPress }: MarkerProps) {
  return (
    <Pin
      coordinate={{ latitude : parseFloat(spot.latitude) , longitude : parseFloat(spot.longitude) }}
      onPress={onPress}
    >
      <MaterialCommunityIcons name="skateboard" size={48} color="black" />
    </Pin>
  );
}