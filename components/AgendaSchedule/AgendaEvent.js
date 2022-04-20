import * as React from "react";
import { Pressable, VStack, Box, NativeBaseProvider } from "native-base";
import { useNavigation } from '@react-navigation/native';

import RotationData from '../SevenDayRotation.json';


function createDay(day) {
  const navigation = useNavigation();
  const ScheduleData = RotationData[day];
  let schedule = ScheduleData.map((carrier) => 
    <Pressable mt="3" w="275" onPress={() => navigation.navigate('MyModal', { params: { user: 'Caden' } })}>
      <Box justifyContent="center" alignItems="center" h="10" bg="indigo.500" rounded="md" shadow={3}>{Object.keys(carrier)[0]}</Box>
    </Pressable>
  );
  return schedule;
};

export default function Event(props) {
  const c = createDay("two");
  
  return <VStack>
    {c}
  </VStack>;
}