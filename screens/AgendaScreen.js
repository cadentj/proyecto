import * as React from 'react';
import { Text, View, Button } from 'react-native';
import AgendaComponent from '../components/Agenda.js';
import { Center } from 'native-base';

import ActionButton from 'react-native-action-button';


export default function AgendaScreen() {
    return (
        <View style={{ flex: 1 }}>
            <AgendaComponent />
            <ActionButton
                buttonColor="rgba(231,76,60,1)"
                onPress={() => { console.log("hi") }}
            />
        </View>
    )
}