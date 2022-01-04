import React, { forwardRef, Ref, useMemo } from "react";
import { View, StyleSheet } from "react-native";
import {
  AspectRatio,
  Badge,
  Box,
  Heading,
  Image,
  Text,
  Center,
  HStack,
  Stack,
  VStack,
} from "native-base";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { Spot, SpotType } from "../../shared/types";

interface ModalProps {
  ref: React.RefObject<BottomSheetModal>;
  data: Spot;
}

export const Modal = forwardRef(
  ({ data }: ModalProps, ref: Ref<BottomSheetModal>) => {
    const snapPoints = useMemo(() => ["25%", "50%", "98%"], []);

    const type = SpotType[data.type as keyof typeof SpotType];
		console.log(data.obstacles)
    return (
      <>
				{data && (
					<BottomSheetModal ref={ref} index={0} snapPoints={snapPoints}>
          <Box rounded="lg" overflow="hidden">
            <Box>
              <AspectRatio w="100%" ratio={16 / 9}>
                <Image
                  source={{
                    uri: data.image,
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
                  {data.name}
                </Heading>
              </Stack>
              <Text fontWeight="400">{data.description}</Text>
              <HStack
                alignItems="center"
                space={4}
                justifyContent="space-between"
              >
								{data.obstacles && data.obstacles.length > 0 && (
									<HStack alignItems="center">
                  <VStack space={2}>
										<Text fontWeight="700">Obstacles</Text>
                    {data.obstacles.map((item) => (
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
        </BottomSheetModal>
				)}
        
      </>
    );
  }
);
