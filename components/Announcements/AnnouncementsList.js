import React from "react";
import { ScrollView, VStack, Center, useTheme, Heading, NativeBaseProvider } from "native-base";
import Card from "./AnnouncementCard";

export default function CardView() {
  const {
    colors
  } = useTheme();
  return <Center>
      <ScrollView h="80" _contentContainerStyle={{
      px: "20px",
      mb: "4",
      minW: "72"
    }}>
        <VStack>
            <Card/>
        </VStack>
        <Center mt="3" mb="4">
          <Heading fontSize="xl">Cyan</Heading>
        </Center>
        <VStack flex="1">
          {Object.keys(colors.cyan).map((key, index) => {
          if (index >= 1 && index <= 5) return <Center py="4" bg={`cyan.${key}`} key={key + "cyan"}>
                  {key}
                </Center>;
        })}
        </VStack>
        <Center mt="8" mb="4">
          <Heading fontSize="xl">Yellow</Heading>
        </Center>
        <VStack flex="1">
          {Object.keys(colors.yellow).map((key, index) => {
          if (index >= 1 && index <= 5) return <Center py="4" bg={`yellow.${key}`} key={key + "yellow"}>
                  {key}
                </Center>;
        })}
        </VStack>
        <Center mt="8" mb="4">
          <Heading fontSize="xl"> Violet</Heading>
        </Center>
        <VStack flex="1">
          {Object.keys(colors.violet).map((key, index) => {
          if (index >= 1 && index <= 5) return <Center py="4" bg={`violet.${key}`} key={key + "violet"}>
                  {key}
                </Center>;
        })}
        </VStack>
      </ScrollView>
    </Center>;
}