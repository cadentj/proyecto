import * as React from "react";
import { useEffect, useState } from "react";
import { Text, View } from 'react-native';
import { Pressable, VStack, Box, NativeBaseProvider, Flex, Wrap, Divider } from "native-base";
import { useNavigation } from '@react-navigation/native';

import RotationData from './data/SevenDayRotation.json';

import StudentData from './data/StudentData.json';

import AssignmentData from './data/Assignments.json'

import AsyncStorage from "@react-native-async-storage/async-storage";

function createList(carrier) {

    let data;
    const update = async () => {
        data = JSON.parse(await AsyncStorage.getItem('assignments'));
    }

    update().then(
        () => {
            const Assignments = data[carrier];

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
                    py: "2",
                    mt: "2"
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
                    w: "5%",
                    flexWrap: "wrap",
                }

                return <Flex  {...dayStyle}>

                    <Flex {...column}>

                    </Flex>
                    <Flex style={{ w: "%", flexDirection: 'row' }}>
                        {assignmentDate}: {assignmentName}
                    </Flex>
                    <Flex {...column}>

                    </Flex>
                </Flex>;
            }
            );
            return schedule;
        }
    );
};

export default function AssignmentList(props) {

    const [carrierData, setCarrierData] = useState();

    useEffect(() => {
        if (!carrierData) {
            getCarrierData();
        }
    }, []);

    const getCarrierData = async () => {
        const carrier = await createList(props.carrier);
        console.log("JADLKWAJDALWDJWALKDJAWLDKJADLKWJDWLKJALKJLWKJ")
        setCarrierData(carrier);
    };


    
}