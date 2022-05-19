import React from "react";
import { VStack, HStack, Button, IconButton, Icon, Text, NativeBaseProvider, Center, Box, StatusBar } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";

export default function AppBar() {
  return <HStack bg="#6200ee" justifyContent="space-between" alignItems="center" w="100%" h="20">
    <HStack alignItems="center">
      <IconButton icon={<Icon size="sm" as={MaterialIcons} name="menu" color="white" />} />
      <Text color="white" fontSize="20" fontWeight="bold">
        Home
      </Text>
    </HStack>
    <HStack>
      <IconButton icon={<Icon as={MaterialIcons} name="favorite" size="sm" color="white" />} />
      <IconButton icon={<Icon as={MaterialIcons} name="search" size="sm" color="white" />} />
      <IconButton icon={<Icon as={MaterialIcons} name="more-vert" size="sm" color="white" />} />
    </HStack>
  </HStack>;
}