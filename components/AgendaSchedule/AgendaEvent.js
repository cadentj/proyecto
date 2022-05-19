import * as React from "react";
import { Text, View } from 'react-native';
import { Pressable, VStack, Box, NativeBaseProvider, Flex, Wrap, Divider } from "native-base";
import { useNavigation } from '@react-navigation/native';

import RotationData from '../data/SevenDayRotation.json';

import StudentData from '../data/StudentData.json';


function createDay(day) {
  const navigation = useNavigation();
  const ScheduleData = RotationData[day];
  let schedule = ScheduleData.map((carrier) => {
    let carrierName = Object.keys(carrier)[0];
    let dayStyle = {
      bg: "rose.700",
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
      bg: "rose.200",
      alignItems: "center",
      justifyContent: "center",
      h: "30",
      w: "30",
      rounded: "full",
      position: "relative",
      ml:"3"

    };
    let carrierLetter;
    let event;
    if (carrierName.length <= 1) {
      dayStyle.bg = "transparent";
      dayStyle.borderColor ="red.400";
      dayStyle.borderWidth="1";
      dayStyle.borderStyle="dotted";
      carrierLetter = carrierName;
      carrierName = StudentData[carrierName];
      event = <Box {...tokenStyle}>{Object.keys(carrier)[0]}</Box>;
    }
    let column = {
      w:"15%",
      flexWrap:"wrap",
    }

    return <Pressable mt="2" style={{ justifyContent: "center" }} onPress={() => navigation.navigate('MyModal', { name: 'Caden', carrierLetter: carrierLetter, carrier: carrierName})}>
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

  return <VStack mb="10">
    {c}
    
  </VStack>;
}