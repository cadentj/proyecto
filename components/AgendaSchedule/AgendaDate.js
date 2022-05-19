import * as React from "react";
import { VStack, Center, NativeBaseProvider,Heading, Box,Divider} from "native-base";
import moment from "moment";

export default function Date(props) {
  return <Box w="20%"><Heading  size="md" mt="3.5" ml="5" >{props.day}</Heading></Box>
}