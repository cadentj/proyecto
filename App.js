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


export default function App() {
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
        <NavigationContainer theme={DarkTheme}>
          <MyTabs />
        </NavigationContainer>
      </NativeBaseProvider>
    </SafeAreaProvider>
  );
}