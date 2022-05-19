import * as React from 'react';
import { useState } from 'react';
import { View } from 'react-native';

import DropDownPicker from 'react-native-dropdown-picker';

import { Divider, Flex, Box, Button, Heading, Center, NativeBaseProvider, Text, Input, ScrollView } from "native-base";

import CalendarSelect from '../CalendarSelect';

import Collapsible from 'react-native-collapsible/Collapsible';


export default function ModalScreen({ navigation, route }) {
    const props = route.params[Object.keys(route.params)[0]];
    const user = props[Object.keys(props)[0]];

    console.log(user);

    return (
        <ScrollView contentContainerStyle={{ flex: 1, alignItems: 'center', justifyContent: 'top' }}>
        <Text fontSize="3xl" my="2">This is an event!</Text>
        <Divider />
        <Divider />
        <Box alignItems="center" my="5">
            <Input size="lg" mx="3" placeholder="Input" w="75%" maxWidth="300px" />
        </Box>
        <Divider />
        <Divider />
        <Box alignItems="center" my="5">
            <Button onPress={() => navigation.goBack()}>Click Me</Button>
        </Box>
    </ScrollView>
    );
}
