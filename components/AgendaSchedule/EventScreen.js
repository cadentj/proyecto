import * as React from 'react';
import { useState } from 'react';
import { View } from 'react-native';

import DropDownPicker from 'react-native-dropdown-picker';

import { Divider, Flex, Box, Button, Heading, Center, NativeBaseProvider, Text, Input, ScrollView } from "native-base";

import CalendarSelect from '../CalendarSelect';

import Collapsible from 'react-native-collapsible/Collapsible';


export default function EventScreen({ navigation, route }) {
    const props = route.params[Object.keys(route.params)[0]];
    const user = props[Object.keys(props)[0]];


    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        { label: 'Apple', value: 'apple' },
        { label: 'Banana', value: 'banana' }
    ]);

    const [collapsed, setCollapsed] = useState(true);

    return (
        <ScrollView contentContainerStyle={{ flex: 1, alignItems: 'center', justifyContent: 'top' }}>
            <Text fontSize="3xl" my="2">This is an event!</Text>
            <Divider />
            <Box my="5" mx="10">
                <DropDownPicker
                    open={open}
                    value={value}
                    items={items}
                    setOpen={setOpen}
                    setValue={setValue}
                    setItems={setItems}
                    zIndex={100}
                />
            </Box>
            <Divider />
            <Box alignItems="center" my="5">
                <Input size="lg" mx="3" placeholder="Input" w="75%" maxWidth="300px" />
            </Box>
            <Divider />
            <Box w="100%">
                <Button onPress={() => setCollapsed((collapsed) ? false : true)}>Calendar</Button>
                <Collapsible collapsed={collapsed}>
                    <CalendarSelect />
                </Collapsible>
            </Box>
            <Divider />
            <Box alignItems="center" my="5">
                <Button onPress={() => navigation.goBack()}>Click Me</Button>
            </Box>
        </ScrollView>
    );
}
