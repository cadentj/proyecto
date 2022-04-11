import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import MyTabs from './components/BottomNavBar';

import { NativeBaseProvider, Text, Box, extendTheme } from 'native-base';
import AppBar from './components/AppBar';



export default function App() {
  const theme = extendTheme({
    config: {
      // Changing initialColorMode to 'dark'
      //initialColorMode: 'dark',
    },
  });
  return (
    <NativeBaseProvider theme={theme}>
      <AppBar/>
      <NavigationContainer theme={theme} >
        <MyTabs />
      </NavigationContainer>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
