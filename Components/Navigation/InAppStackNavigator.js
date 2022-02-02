import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import User from '../UserDiscoverPage';

const Stack = createNativeStackNavigator();

const InAppStackNavigator = () => {
  return (
    <Stack.Navigator
    screenOptions={{
        headerShown: false
    }} 
  >
    <Stack.Screen name="UserPage" component={User}/>
  </Stack.Navigator>
  );
};

export default InAppStackNavigator;

const styles = StyleSheet.create({});
