import * as React from 'react';
import { useState, Component, useEffect } from 'react';
import { View } from 'react-native';
import { Divider, Flex, Box, Button, Heading, Center, NativeBaseProvider, Text, Input, ScrollView, VStack, AspectRatio } from "native-base";
import CalendarSelect from '../CalendarSelect';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Collapsible from 'react-native-collapsible/Collapsible';

// Data 
import AssignmentData from '../data/Assignments.json';
import StudentData from '../data/StudentData.json';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Add new assignment to aync data
function updateAssignments(input, selected, date) {

    let data;
    const update = async () => {

        data = JSON.parse(await AsyncStorage.getItem('assignments'));


        let carrierLetter = Object.keys(StudentData).find(key => StudentData[key] === selected);

        let obj = {};
        obj[date] = input;


        let assignmentList = data[carrierLetter];
        assignmentList.push(obj);

        console.log(assignmentList);

        AsyncStorage.removeItem('assignments');
        AsyncStorage.setItem('assignments', JSON.stringify(data));
    }

    update().then(
        () => {
            console.log("new");
        }
    );

    

}

export default function EventScreen({ navigation, route }) {

    // Save button
    navigation.setOptions({
        headerRight: () => (
            <Box alignItems="center" mr="3">
                <Button onPress={() => updateAssignments(input, selected, date)}>Save</Button>
            </Box>
        ),
    })

    // Collapsable hooks    
    const [collapsedOne, setCollapsedOne] = useState(true);
    const [collapsedTwo, setCollapsedTwo] = useState(true);
    // Class selector hook
    const [selected, setSelected] = useState();
    const changeText = (text) => setSelected(text);
    // Date selector hook
    const [date, setDate] = useState();
    const changeDate = (day) => setDate(day);
    // Task Input hook
    const [input, setInput] = useState('');
    const handleChange = task => setInput(task);

    return (
        <View style={{ flex: 1 }}>
            <ScrollView contentContainerStyle={{ justifyContent: 'top' }}>
                <Box alignItems="center" my="5">
                    <Input size="2xl" mx="2" placeholder="Task" w="75%" variant="unstyled" value={input} onChangeText={handleChange} />
                </Box>
                <Divider />
                <Box zIndex="1" w="100%">
                    <Button
                        leftIcon={<Icon name="google-classroom" color="white" size="30" />}
                        style={{
                            alignSelf: "left",
                        }}
                        onPress={() => setCollapsedOne((collapsedOne) ? false : true)}
                        variant="unstyled"
                    >
                        <Text w="300" flexDirection="row">Selected: {selected}</Text>
                    </Button>
                    <Collapsible collapsed={collapsedOne}>
                        <VStack style={{}}>
                            <Button onPress={() => {
                                changeText("APUSH");
                                console.log(input);
                            }} variant="unstyled">APUSH</Button>
                            <Button onPress={() => {
                                changeText("English");
                                console.log("SELECTED");
                            }} variant="unstyled">English</Button>
                            <Button onPress={() => {
                                changeText("Physics");
                                console.log("SELECTED");
                            }} variant="unstyled">Physics</Button>
                        </VStack>
                    </Collapsible>
                </Box>
                <Divider />
                <Box w="100%" zIndex="1">
                    <Button
                        leftIcon={<Icon name="calendar" color="white" size="30" />}
                        style={{
                            flexDirection: "row",
                            alignSelf: "left",
                        }}
                        onPress={() => setCollapsedTwo((collapsedTwo) ? false : true)}
                        variant="unstyled">
                        <Text w="300" flexDirection="row">{date}</Text>
                    </Button>
                    <Collapsible collapsed={collapsedTwo}>
                        <CalendarSelect selectDate={changeDate} />
                    </Collapsible>
                </Box>
                <Divider />
            </ScrollView>
        </View>
    );
}
