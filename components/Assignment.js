import * as React from "react";
import { Text, View } from 'react-native';
import { Pressable, VStack, Box, NativeBaseProvider, Flex, Wrap, Divider } from "native-base";
import { useNavigation } from '@react-navigation/native';

import RotationData from './data/SevenDayRotation.json';

import StudentData from './data/StudentData.json';

import AssignmentData from './data/Assignments.json'


function createList(carrier) {
    //const navigation = useNavigation();
    const Assignments = AssignmentData[carrier];

    let schedule = Assignments.map((carrier) => {
        let assignmentDate = Object.keys(carrier)[0];
        let assignmentName = carrier[assignmentDate];
        let dayStyle = {
            bg: "rose.700",
            alignItems: "center",
            rounded: "sm",
            shadow: 3,
            w: "300",
            position: "relative",
            flexDirection: 'row',
            justifyContent: "space-between",
            py: "2"
        };
        let tokenStyle = {
            bg: "rose.200",
            alignItems: "center",
            justifyContent: "center",
            h: "30",
            w: "30",
            rounded: "full",
            position: "relative",
            ml: "3"

        };
        let column = {
            w: "15%",
            flexWrap: "wrap",
        }

        return <Flex  {...dayStyle}>

            <Flex {...column}>
                
            </Flex>
            <Flex style={{ w: "70%"}}>
                {assignmentDate}: {assignmentName}
            </Flex>
            <Flex {...column}>

            </Flex>
        </Flex>;
    }
    );
    return schedule;
};

export default function AssignmentList(props) {
    const carrier = createList(props.carrier);
    
    return <VStack my="5">
        {carrier}

    </VStack>;
}