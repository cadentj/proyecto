import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, useColorScheme } from 'react-native';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import MyTabs from './components/BottomNavBar';

const MyTheme = {
  dark: true,
};

import { NativeBaseProvider, Text, Box, extendTheme } from 'native-base';
import AppBar from './components/AppBar';

import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';


import AssignmentData from './components/data/Assignments.json';
import ScheduleData from './components/data/ScheduleData.json';
import RotationData from './components/data/SevenDayRotation.json';
import StudentData from './components/data/StudentData.json';

import AsyncStorage from '@react-native-async-storage/async-storage';

const Theme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    background: "#121212",
  }
}


export default function App() { 

  AsyncStorage.setItem('assignments', JSON.stringify(AssignmentData));
  AsyncStorage.setItem('schedule', JSON.stringify(ScheduleData));
  AsyncStorage.setItem('rotation', JSON.stringify(RotationData));
  AsyncStorage.setItem('student', JSON.stringify(StudentData));

  const scheme = useColorScheme();
  const theme = extendTheme({
    config: {
      // Changing initialColorMode to 'dark'
      initialColorMode: 'dark',
    },
  });
  return (
    <SafeAreaProvider>
      <NativeBaseProvider theme={theme}>
        <NavigationContainer theme={Theme}>
          <MyTabs />
        </NavigationContainer>
      </NativeBaseProvider>
    </SafeAreaProvider>
  );
}