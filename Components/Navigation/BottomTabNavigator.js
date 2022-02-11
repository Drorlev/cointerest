import { StyleSheet, View, KeyboardAvoidingView} from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LinearGradient from 'react-native-linear-gradient';
import Portfolio from '../PortfolioPage';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign'
import DiscoverPage from '../DiscoverPage';
//import User from '../UserDiscoverPage';
import InAppStackNavigator from './InAppStackNavigator';
import HomePage from '../HomePage';

//import Start from './Components/StartPage';
const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator 
       initialRouteName="Home"
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel:false,
        tabBarHideOnKeyboard:true,
        tabBarStyle: {
          showLabel: false,
          backgroundColor: '#504CF1',
          position: 'absolute',
          borderTopWidth: 0,
          //width:'130%',
      },
      
      
    })}>
        <Tab.Screen  
          style={{backgroundColor:'white'}}
          name="Home" 
          component={HomePage}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ focused }) => (
              <View style={{alignItems:'center',
              resizeMode:'contain'}}>
                <MaterialCommunityIcons name="home-outline" color={"white"} size={30} />
              </View>
            ),
            
           
        }}/>

        <Tab.Screen 
        name="Discover" 
        component={DiscoverPage}
        options={{
         
          tabBarLabel: 'Discover',
          tabBarIcon: ({ focused }) => (
            <View style={{alignItems:'center',
            resizeMode:'contain'}}>
              <MaterialCommunityIcons name="account-search-outline" color={"white"} size={30} />
            </View>
          ),
        }}
        />
      <Tab.Screen 
        name="User Portfolio" 
        component={Portfolio}
        options={{
          tabBarLabel: 'Portfolio',
          tabBarIcon: ({ focused }) => (
            <View style={{alignItems:'center',
            resizeMode:'contain'}}>
              <MaterialCommunityIcons name="wallet-outline" color={"white"} size={30} />
            </View>
          ),
        }}
        />

        <Tab.Screen  
          style={{backgroundColor:'white'}}
          name="InAppPages" 
          component={InAppStackNavigator}
          options={{
            tabBarLabel: 'InApp',
            tabBarIcon: ({ focused }) => (
              <View style={{alignItems:'center',
              resizeMode:'contain'}}>
                <AntDesign name="setting" color={"white"} size={30} />
              </View>
            ),
           
        }}/>
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;

const styles = StyleSheet.create({
 
});

/*
//will make the Icon hide nut still be pressable
 tabBarIcon: ({ focused }) => (
              <View style={{
              resizeMode:'contain'}}>
              </View>
          ),
*/
