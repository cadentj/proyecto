import * as React from 'react';
import { Text, View, Button } from 'react-native';


export default function ModalScreen({ navigation, route }) {
    const props = route.params[Object.keys(route.params)[0]];
    const user = props[Object.keys(props)[0]];

    React.useEffect(() => {
        if (route.params?.user) {
            console.log("yo");
        }
    }, [route.params?.post]);

    console.log(user);

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 30, color: "white" }}>This is a modal!</Text>
            <Button onPress={() => navigation.goBack()} title="Dismiss" />
        </View>
    );
}
