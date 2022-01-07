import React, {useEffect, useState} from "react";
import {
  Text,
  Center,
  HStack,
  Heading,
} from "native-base";

import firestore from '@react-native-firebase/firestore'

import { UserAvatar } from "@components/Avatar";
import { useAuth } from "@hooks/useAuth";

import { ProfileContainer } from "./styles";
import { ProfileTabs } from "@components/ProfileTabs";
import { Spot } from "@src/shared/types";
import { Alert } from "react-native";
import { User } from '@hooks/useAuth';

export function Profile() {
  const { user } = useAuth();

  const [userSpots, setUserSpots] = useState<Spot[]>([] as Spot[])
  const [userCheckins, setUserCheckins] = useState<any[]>([]);

  useEffect(() => {

    const getCreatedSpots = async (user: User['id']) => {


      firestore()
        .collection('spots')
        .where('created_by', '==', user)
        .get()
        .then((response) => {
          const data = response.docs.map((doc: any) => {
            return {
              id: doc.id,
              ...doc.data(),
            }
          }) as Spot[];
          
          setUserSpots(data);
        })
        .catch(() => Alert.alert('Consulta', 'Não foi possível realizar a consulta'));
    }

    const getUserCheckins = async (user: User["id"]) => {
      firestore()
        .collection('checkins')
        .where('user', '==', user)
        .get()
        .then((response) => {
          const data = response.docs.map((doc: any) => {
            return {
              id: doc.id,
              ...doc.data(),
            }
          });
  
          setUserCheckins(data);
        })
        .catch(() => Alert.alert('Consulta', 'Não foi possível realizar a consulta'));
    }

    if(user) {
      getCreatedSpots(user.id)
      getUserCheckins(user.id)
    }
    
  }, [])

  console.log(userCheckins, userSpots)

  return (
    <ProfileContainer>
      {user && (
        <Center>
          <UserAvatar name={user.name} image={user.photo} />
          <Text fontSize="lg" mt="5">
            {user.name}
          </Text>
          <Text fontSize="lg" mt="1">
            {user.email}
          </Text>
          <Text fontSize="lg" mt="1">
            +55 11 984375202
          </Text>
        </Center>
      )}

      <HStack space={5} alignItems="center" marginY="6">
        <Center>
          <Text>Medias</Text>
          <Heading size="lg">10</Heading>
        </Center>

        <Center>
          <Text>Created spots</Text>
          <Heading size="lg">{userSpots.length}</Heading>
        </Center>

        <Center>
          <Text>Check-ins</Text>
          <Heading size="lg">{userCheckins.length}</Heading>
        </Center>
      </HStack>

      <ProfileTabs />
    </ProfileContainer>
  );
}
