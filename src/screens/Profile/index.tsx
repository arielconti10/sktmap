import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import { UserAvatar } from '@components/Avatar';
import { useAuth } from '@hooks/useAuth';

import {ProfileContainer} from './styles';
import { Center, Text } from 'native-base';

export function Profile() {
  const { user } = useAuth();

  return (
    <SafeAreaView>
      <ProfileContainer>
        {user && (
          <Center>
            <UserAvatar name={user.name} image={user.photo} />
            <Text fontSize="lg" mt="5">{user.name}</Text>
            <Text fontSize="lg" mt="5">{user.email}</Text>
          </Center>
        )}
      </ProfileContainer>
    </SafeAreaView>
  );
}