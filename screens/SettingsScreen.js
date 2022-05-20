import { Button } from 'native-base';
import * as React from 'react';
import { Text, View } from 'react-native';

import CardView from '../components/Announcements/AnnouncementsList';
import AsyncStorage from '@react-native-async-storage/async-storage';


import AssignmentData from '../components/data/Assignments.json';
import ScheduleData from '../components/data/ScheduleData.json';
import RotationData from '../components/data/SevenDayRotation.json';
import StudentData from '../components/data/StudentData.json';

export default function SettingsScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Button onPress={() => {
                    AsyncStorage.clear();
                    AsyncStorage.setItem('assignments', JSON.stringify(AssignmentData));
                    AsyncStorage.setItem('schedule', JSON.stringify(ScheduleData));
                    AsyncStorage.setItem('rotation', JSON.stringify(RotationData));
                    AsyncStorage.setItem('student', JSON.stringify(StudentData));
                
            }}/>
        </View>
    );
}


//<CardView/>