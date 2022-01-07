import React from "react";
import { VStack, Box, Divider, Image, Heading, Text } from "native-base";

export default function MediaTab() {
  return (
    <Box borderWidth="1" borderRadius="md" borderColor="coolGray.200">
      <VStack space="4" divider={<Divider />}>
        <Box p="4">
          <Image
            width="100%"
            height="150"
            alt="Skate session"
            source={{
              uri: "http://galaxypro.s3.amazonaws.com/spot-media/315/315-macba-skate-barcelona-spain.jpg",
            }}
          />
          <Heading my="2">Saturday afternoon session at Macba</Heading>
          <Text color="darkText">Ariel Conti</Text>
          <Text color="coolGray.400">2 hours ago</Text>
        </Box>
      </VStack>
    </Box>
  );
}
