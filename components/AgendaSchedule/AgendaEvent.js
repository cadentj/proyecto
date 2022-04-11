import * as React from "react";
import { Pressable, VStack, Center, NativeBaseProvider } from "native-base";
import { useNavigation } from '@react-navigation/native';

export default function Event(props) {
  const navigation = useNavigation();

  return <VStack space={4} alignItems="center" mt="5">
    <Pressable onPress={() => navigation.navigate('MyModal', {params: {user:'Caden'}})}>
      <Center w="64" h="10" bg="indigo.500" rounded="md" shadow={3}>{props.name}</Center>
    </Pressable>
  </VStack>;
}