import * as React from "react";
import { VStack, Center, NativeBaseProvider } from "native-base";

export default function Event(props) {
  return <VStack space={4} alignItems="center" mt="5">
      <Center w="64" h="10" bg="indigo.500" rounded="md" shadow={3}>{props.name}</Center>
    </VStack>;
}