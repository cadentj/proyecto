import * as React from 'react';
import { Text, View } from 'react-native';
import AgendaComponent from '../components/Agenda.js';


export default function HomeScreen() {
    return (
        <View style={{ flex: 1}}>
            <AgendaComponent/>
        </View>
    );
}