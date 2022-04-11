import * as React from "react";
import { VStack, Center, NativeBaseProvider,Heading } from "native-base";
import moment from "moment";

export default function Date(props) {
  return <Heading size="sm" mt="5" ml="3">{props.day}</Heading>
}