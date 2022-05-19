import * as React from 'react';
import { Text, View, Button } from 'react-native';
import AgendaComponent from '../components/Agenda.js';
import { Center } from 'native-base';

import { useNavigation } from '@react-navigation/native';


import ActionButton from 'react-native-action-button';



export default function AgendaScreen() {
    const navigation = useNavigation();

    return (
        <View style={{ flex: 1}} >
            <AgendaComponent />
            <ActionButton
                buttonColor="rgba(231,76,60,1)"
                onPress={() => navigation.navigate('Event', { params: { user: 'Caden' } })}
            />
        </View>
        
    )
}