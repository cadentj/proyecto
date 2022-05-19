import * as React from 'react';
import { useState, Component } from 'react';
import { View } from 'react-native';

import DropDownPicker from 'react-native-dropdown-picker';

import { Divider, Flex, Box, Button, Heading, Center, NativeBaseProvider, Text, Input, ScrollView } from "native-base";

import CalendarSelect from '../CalendarSelect';

import Accordion from 'react-native-collapsible/Accordion';




const SECTIONS = [
    {
        title: 'First',
        content: 'Lorem ipsum...',
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...',
    },
];





export default function EventScreen({ navigation, route }) {
    const props = route.params[Object.keys(route.params)[0]];
    const user = props[Object.keys(props)[0]];


    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        { label: 'Apple', value: 'apple' },
        { label: 'Banana', value: 'banana' },
        { label: 'Apple', value: 'apple' },
        { label: 'Banana', value: 'banana' },
        { label: 'Apple', value: 'apple' },
        { label: 'Banana', value: 'banana' }
    ]);

    const [collapsed, setCollapsed] = useState(true);

    state = {
        activeSections: [],
    };

    _renderSectionTitle = (section) => {
        return (
            <View style={styles.content}>
                <Text>{section.content}</Text>
            </View>
        );
    };

    _renderHeader = (section) => {
        return (
            <View style={styles.header}>
                <Text style={styles.headerText}>{section.title}</Text>
            </View>
        );
    };

    _renderContent = (section) => {
        return (
            <View style={styles.content}>
                <Text>{section.content}</Text>
            </View>
        );
    };

    _updateSections = (activeSections) => {
        this.setState({ activeSections });
    };


    return (
        <ScrollView contentContainerStyle={{ flex: 1, alignItems: 'center', justifyContent: 'top' }}>
            <Box alignItems="center" my="5">
                <Input size="2xl" mx="3" placeholder="Task" w="75%" maxWidth="300px" variant="unstyled" />
            </Box>
            <Divider />
            <Box my="5" mx="10" zIndex="2">
                <DropDownPicker
                    open={open}
                    value={value}
                    items={items}
                    setOpen={setOpen}
                    setValue={setValue}
                    setItems={setItems}
                />
            </Box>
            <Divider />
            <Box w="100%" zIndex="1">
                {/* <Button onPress={() => setCollapsed((collapsed) ? false : true)}>Calendar</Button>
                <Collapsible collapsed={collapsed}>
                    <CalendarSelect />
                </Collapsible> */}
                <Accordion
                    sections={SECTIONS}
                    activeSections={this.state.activeSections}
                    renderSectionTitle={this._renderSectionTitle}
                    renderHeader={this._renderHeader}
                    renderContent={this._renderContent}
                    onChange={this._updateSections}
                />
            </Box>
            <Divider />
            <Box alignItems="center" my="5" zIndex="1">
                <Button onPress={() => navigation.goBack()}>Click Me</Button>
            </Box>
        </ScrollView>
    );
}
