import * as React from 'react';
import { Text, View, Button } from 'react-native';
import AgendaScreen from './AgendaScreen';
import { Center } from 'native-base';

import { createStackNavigator } from '@react-navigation/stack';
import ModalScreen from '../components/AgendaSchedule/ModalScreen';

const RootStack = createStackNavigator();

export default function HomeScreen() {
    return (
        <RootStack.Navigator
            screenOptions={{
                headerShown: false,
                presentation: "card",
                contentStyle: { backgroundColor: "#ffffff" },
            }}>
            <RootStack.Group>
                <RootStack.Screen name="Agenda" component={AgendaScreen} />
            </RootStack.Group>
            <RootStack.Group screenOptions={{ presentation: 'modal' }}>
                <RootStack.Screen name="MyModal" component={ModalScreen} />
            </RootStack.Group>
        </RootStack.Navigator>
    );
}