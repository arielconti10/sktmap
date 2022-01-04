import React, { useState, useEffect } from "react";
import { Alert } from 'react-native';
import firestore from '@react-native-firebase/firestore'

import Map from "@components/Map";
import { Spot } from "@src/shared/types";

import { Container } from "./styles";

export function Home() {
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
    fetchSpots();
  }, []);

  return (
    <Container>
      <Map spots={spots}/>
    </Container>
  );
}