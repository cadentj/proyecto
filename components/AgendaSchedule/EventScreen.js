import * as React from 'react';
import { Text, View,Button } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';

function ModalScreen({ navigation }) {
    return (
        <View style={{ flex: 1}}>
            <Text style={{ fontSize: 30 }}>This is a modal!</Text>
            <Button onPress={() => navigation.goBack()} title="Dismiss" />
        </View>
    );
}
