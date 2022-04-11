import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View,useColorScheme } from 'react-native';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import MyTabs from './components/BottomNavBar';

const MyTheme = {
  dark: true,
};

import { NativeBaseProvider, Text, Box, extendTheme } from 'native-base';
import AppBar from './components/AppBar';


export default function App() {
  const scheme = useColorScheme();
  const theme = extendTheme({
    config: {
      // Changing initialColorMode to 'dark'
      initialColorMode: 'dark',
    },
  });
  return (
    <NativeBaseProvider theme={theme}>
      <AppBar />
      <NavigationContainer theme={DarkTheme}>
        <MyTabs />
      </NavigationContainer>
    </NativeBaseProvider>
  );
}