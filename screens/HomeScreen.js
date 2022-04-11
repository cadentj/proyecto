import * as React from 'react';
import { Text, View, Button } from 'react-native';
import AgendaComponent from '../components/Agenda.js';
import { Center } from 'native-base';

import { createStackNavigator } from '@react-navigation/stack';

const RootStack = createStackNavigator();

function ModalScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 30 }}>This is a modal!</Text>
            <Button onPress={() => navigation.goBack()} title="Dismiss" />
        </View>
    );
}

export default function HomeScreen() {
    return (
        <RootStack.Navigator
            screenOptions={{
                headerShown: false,
                presentation: "card",
                contentStyle: { backgroundColor: "#ffffff" },
            }}>
            <RootStack.Group>
                <RootStack.Screen name="Agenda" component={AgendaComponent} />
            </RootStack.Group>
            <RootStack.Group screenOptions={{ presentation: 'modal' }}>
                <RootStack.Screen name="MyModal" component={ModalScreen} />
            </RootStack.Group>
        </RootStack.Navigator>
    );
}