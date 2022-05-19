import * as React from 'react';
import { useState } from 'react';
import { View } from 'react-native';

import DropDownPicker from 'react-native-dropdown-picker';

import { Divider, Flex, Box, Button, Heading, Center, NativeBaseProvider, Text, Input, ScrollView } from "native-base";

import CalendarSelect from '../CalendarSelect';

import Collapsible from 'react-native-collapsible/Collapsible';

import AssignmentList from '../Assignment';

export default function ModalScreen({ navigation, route }) {
    const props = route.params[Object.keys(route.params)[0]];
    const user = props[Object.keys(props)[0]];

    console.log(user);
    const { name, carrier } = route.params;
    return (
        <ScrollView contentContainerStyle={{ flex: 1, alignItems: 'center', justifyContent: 'top' }}>
        <Text fontSize="3xl" my="2">{carrier}</Text>
        <Divider/>
        <Text fontSize="xl" my="2">Assignments</Text>
        <Divider/>
        <AssignmentList carrier={'A'}/>
    </ScrollView>
    );
}
