import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import User from '../UserDiscoverPage';
import SettingsPage from '../SettingsPage';
import CameraComp from '../Comps/CameraComp'
import BuySellPage from '../BuySellPage';
const Stack = createNativeStackNavigator();

const InAppStackNavigator = () => {
  return (
    <Stack.Navigator
    initialRouteName='SettingsPage'
    screenOptions={{
        headerShown: false
    }} 
  >
    <Stack.Screen name="SettingsPage" component={SettingsPage}/>
    <Stack.Screen name="UserPage" component={User}/>
    <Stack.Screen name="BuySell" component={BuySellPage}/>
    <Stack.Screen name="Camera" component={CameraComp}/>
  </Stack.Navigator>
  );
};

export default InAppStackNavigator;

const styles = StyleSheet.create({});
