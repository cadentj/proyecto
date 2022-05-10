import * as React from 'react';
import HomeScreen from '../screens/HomeScreen.js';
import SettingsScreen from '../screens/SettingsScreen.js';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import AppBar from './AppBar.js';

const Tab = createBottomTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator 
      screenOptions={{
      }}
    >
      <Tab.Screen name="Home" options={{headerShown: false}} component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}