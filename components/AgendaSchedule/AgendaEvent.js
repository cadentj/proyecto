import * as React from "react";
import { Text, View } from 'react-native';
import { Pressable, VStack, Box, NativeBaseProvider, Flex, Wrap } from "native-base";
import { useNavigation } from '@react-navigation/native';

import RotationData from '../data/SevenDayRotation.json';

import StudentData from '../data/StudentData.json';


function createDay(day) {
  const navigation = useNavigation();
  const ScheduleData = RotationData[day];
  let schedule = ScheduleData.map((carrier) => {
    let carrierName = Object.keys(carrier)[0];
    let dayStyle = {
      bg: "rose.500",
      alignItems: "center",
      rounded: "sm",
      shadow: 3,
      w: "275",
      position: "relative",
      flexDirection: 'row',
      justifyContent: "space-between",
      py:"2"
    };
    let tokenStyle = {
      bg: "rose.100",
      alignItems: "center",
      justifyContent: "center",
      h: "30",
      w: "30",
      rounded: "full",
      position: "relative",
      ml:"5"

    };
    let event;
    if (carrierName.length <= 1) {
      dayStyle.bg = "rose.300";
      carrierName = StudentData[carrierName];
      event = <Box {...tokenStyle}>{Object.keys(carrier)[0]}</Box>;
    }
    let column = {
      w:"15%",
      flexWrap:"wrap",
    }

    return <Pressable mt="2" style={{ justifyContent: "center" }} onPress={() => navigation.navigate('MyModal', { params: { user: 'Caden' } })}>
      <Flex  {...dayStyle}>

        <Flex {...column}>
          {event}
        </Flex>
        <Flex style={{w:"70%", flexWrap:"wrap"}}>
          {carrierName}
        </Flex>
        <Flex {...column}>

        </Flex>
      </Flex>
    </Pressable>
  }
  );
  return schedule;
};

export default function Event(props) {
  const c = createDay(props.name);

  return <VStack>
    {c}
  </VStack>;
}