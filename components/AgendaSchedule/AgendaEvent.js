import * as React from "react";
import { Pressable, VStack, Box, NativeBaseProvider } from "native-base";
import { useNavigation } from '@react-navigation/native';

import RotationData from '../SevenDayRotation.json';


function createDay(day) {
  const navigation = useNavigation();
  const ScheduleData = RotationData[day];
  let schedule = ScheduleData.map((carrier) => {
    const carrierName = Object.keys(carrier)[0];
    let dayStyle = {
      bg: "indigo.500",
      alignItems: "center",
      justifyContent: "center",
      h: "10",
      rounded: "md",
      shadow: 3,
      w:"275",
      ml :0,
      position:"relative",
    };
    if (carrierName.length <= 1) {
      dayStyle.bg = "indigo.300";
    }
    return <Pressable mt="3" onPress={() => navigation.navigate('MyModal', { params: { user: 'Caden' } })}>
      <Box  {...dayStyle}>{Object.keys(carrier)[0]}</Box>
    </Pressable>
  }
  );
  return schedule;
};

export default function Event(props) {
  const c = createDay("two");

  return <VStack>
    {c}
  </VStack>;
}