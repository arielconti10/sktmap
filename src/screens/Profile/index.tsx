import React from "react";
import {
  Box,
  Text,
  Center,
  Pressable,
  View,
} from "native-base";

import { UserAvatar } from "@components/Avatar";
import { useAuth } from "@hooks/useAuth";

import { ProfileContainer } from "./styles";
import { ProfileTabs } from "@components/ProfileTabs";

export function Profile() {
  const { user } = useAuth();
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

      <ProfileTabs />
    </ProfileContainer>
  );
}
