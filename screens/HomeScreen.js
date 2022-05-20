import * as React from 'react';
import { useState } from "react";
import { Text, View } from 'react-native';
import AgendaScreen from './AgendaScreen';
import { Center, Box, Button } from 'native-base';

import { createStackNavigator } from '@react-navigation/stack';
import ModalScreen from '../components/AgendaSchedule/ModalScreen';
import EventScreen from '../components/AgendaSchedule/EventScreen';

import AppBar from '../components/AppBar';

import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import Icon from 'react-native-vector-icons/Ionicons';

const RootStack = createStackNavigator();

export default function HomeScreen() {
    return (
        <RootStack.Navigator
            screenOptions={{
                presentation: "card",
                contentStyle: { backgroundColor: "#ffffff" },
            }}>
            <RootStack.Group>
                <RootStack.Screen
                    options={{
                        headerStyle: {
                            height: 70,
                        },
                        headerRight: () => (
                            <Icon onPress={() => console.log("Icon Pressed")} name="person-circle" size="40" color="red" style={{ marginRight: 10 }} />

                        ),
                    }}
                    name="Agenda"
                    component={AgendaScreen}
                />
                <RootStack.Screen options={{
                    headerTitle: "",
                    headerStyle: {
                        height: 70,
                        
                    },
                }} name="Event" component={EventScreen} />
            </RootStack.Group>
            <RootStack.Group>
                <RootStack.Screen options={{
                    headerStyle: {
                        height: 70,
                    },
                }} name="MyModal" component={ModalScreen} />
            </RootStack.Group>
        </RootStack.Navigator>
    );
}