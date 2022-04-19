import * as React from "react";
import { Pressable, VStack, Box, NativeBaseProvider } from "native-base";
import { useNavigation } from '@react-navigation/native';

export default function Event(props) {
  const navigation = useNavigation();
  let margin = 20;
  if (props.name == "1") {
    margin = 10;
  }

  return <Pressable mt="5" onPress={() => navigation.navigate('MyModal', { params: { user: 'Caden' } })}>
    <Box justifyContent="center" alignItems="center" alignSelf="center" alignContent="center" marginLeft={margin} w={200} h="10" bg="indigo.500" rounded="md" shadow={3}>{props.name}</Box>
  </Pressable>;
}