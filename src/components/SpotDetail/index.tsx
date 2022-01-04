import React from "react";

import {
  Box,
  AspectRatio,
  Image,
  Center,
  Stack,
  Text,
  VStack,
  HStack,
  Heading,
} from "native-base";
import { Spot, SpotType } from "@src/shared/types";

interface SpotDetailProps {
  spot: Spot;
}

export function SpotDetail({ spot }: SpotDetailProps) {
  const type = SpotType[spot.type as keyof typeof SpotType];

  return (
    <Box rounded="lg" overflow="hidden">
      <Box>
        <AspectRatio w="100%" ratio={16 / 9}>
          <Image
            source={{
              uri: spot.image,
            }}
            alt="image"
          />
        </AspectRatio>
        <Center
          bg="violet.500"
          _dark={{
            bg: "violet.400",
          }}
          _text={{
            color: "warmGray.50",
            fontWeight: "700",
            fontSize: "xs",
          }}
          position="absolute"
          bottom="0"
          px="3"
          py="1.5"
        >
          {type}
        </Center>
      </Box>
      <Stack p="4" space={3}>
        <Stack space={2}>
          <Heading size="xl" ml="-1">
            {spot.name}
          </Heading>
        </Stack>
        <Text fontWeight="400">{spot.description}</Text>
        <HStack alignItems="center" space={4} justifyContent="space-between">
          {spot.obstacles && spot.obstacles.length > 0 && (
            <HStack alignItems="center">
              <VStack space={2}>
                <Text fontWeight="700">Obstacles</Text>
                {spot.obstacles.map((item) => (
                  <HStack
                    w="100%"
                    justifyContent="space-between"
                    alignItems="center"
                    key={item}
                  >
                    <Text>{item}</Text>
                  </HStack>
                ))}
              </VStack>
            </HStack>
          )}
        </HStack>
      </Stack>
    </Box>
  );
}
