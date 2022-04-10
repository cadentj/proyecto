import * as React from "react";
import { VStack, Center, NativeBaseProvider } from "native-base";

export default function Event(props) {
  return <VStack space={4} alignItems="center">
      <Center w="64" h="10" bg="indigo.300" rounded="md" shadow={3} >{props.name}</Center>
      <Center w="64" h="10" bg="indigo.500" rounded="md" shadow={3} />
      <Center w="64" h="10" bg="indigo.700" rounded="md" shadow={3} />
    </VStack>;
}