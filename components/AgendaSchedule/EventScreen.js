import * as React from 'react';
import { useState } from 'react';
import { View, Button } from 'react-native';

import DropDownPicker from 'react-native-dropdown-picker';

import { Divider, Flex, Box, Heading, Center, NativeBaseProvider, Text } from "native-base";


export default function EventScreen({ navigation, route }) {
    const props = route.params[Object.keys(route.params)[0]];
    const user = props[Object.keys(props)[0]];


    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        { label: 'Apple', value: 'apple' },
        { label: 'Banana', value: 'banana' }
    ]);


    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'top' }}>
            <Text fontSize="3xl" my="2">This is an event!</Text>
            <Divider />
            <Box my="5" mx="3">
                <DropDownPicker
                    open={open}
                    value={value}
                    items={items}
                    setOpen={setOpen}
                    setValue={setValue}
                    setItems={setItems}

                />
            </Box>
            <Button onPress={() => navigation.goBack()} title="Dismiss" />
        </View>
    );
}
