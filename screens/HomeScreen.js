import * as React from 'react';
import { Text, View, Button } from 'react-native';
import AgendaScreen from './AgendaScreen';
import { Center } from 'native-base';

import { createStackNavigator } from '@react-navigation/stack';
import ModalScreen from '../components/AgendaSchedule/ModalScreen';
import EventScreen from '../components/AgendaSchedule/EventScreen';

import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

const RootStack = createStackNavigator();

export default function HomeScreen() {
    return (
        <SafeAreaView style={{flex:1}}>
            <RootStack.Navigator
                screenOptions={{
                    presentation: "card",
                    contentStyle: { backgroundColor: "#ffffff" },
                }}>
                <RootStack.Group>
                    <RootStack.Screen name="Agenda" component={AgendaScreen} />
                    <RootStack.Screen options={{headerShown: false}} name="Event" component={EventScreen} />
                </RootStack.Group>
                <RootStack.Group>
                    <RootStack.Screen name="MyModal" component={ModalScreen} />
                </RootStack.Group>
            </RootStack.Navigator>
        </SafeAreaView>
    );
}