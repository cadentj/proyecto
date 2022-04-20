import * as React from "react";
import { Pressable, VStack, Box, NativeBaseProvider } from "native-base";
import { useNavigation } from '@react-navigation/native';

export default function Event(props) {
  const navigation = useNavigation();
  let margin = "20%";
  if (props.isFirst) {
    margin = 0;
  }

  return <Pressable mt="3"  w="275"  marginLeft={margin} onPress={() => navigation.navigate('MyModal', { params: { user: 'Caden' } })}>
    <Box justifyContent="center" alignItems="center" h="10" bg="indigo.500" rounded="md" shadow={3}>{props.name}</Box>
  </Pressable>;
}