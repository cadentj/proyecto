import * as React from "react";
import { VStack, Center, NativeBaseProvider,Heading, Box } from "native-base";
import moment from "moment";

export default function Date(props) {
  return <Box w={10}><Heading size="sm" mt="5" ml="3" flex={1}>{props.day}</Heading></Box>
}