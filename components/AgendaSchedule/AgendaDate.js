import * as React from "react";
import { VStack, Center, NativeBaseProvider,Heading, Box,Divider} from "native-base";
import moment from "moment";

export default function Date(props) {
  return <Box w="20%"><Heading  size="md" mt="5" ml="5" >{props.day}</Heading><Divider orientation="vertical" h="300" mx="8" mt="2" /></Box>
}