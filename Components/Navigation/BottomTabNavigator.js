import { StyleSheet, View, KeyboardAvoidingView, Text} from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LinearGradient from 'react-native-linear-gradient';
import Portfolio from '../PortfolioPage';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign'
//FontAwesome5Free
import DiscoverPage from '../DiscoverPage';
//import User from '../UserDiscoverPage';
import InAppStackNavigator from './InAppStackNavigator';
import HomePage from '../HomePage';
import MarketPage from '../MarketPage';
import { TouchableOpacity } from 'react-native-gesture-handler';
import SettingsPage from '../SettingsPage';

//import Start from './Components/StartPage';
const Tab = createBottomTabNavigator();



const CustomButton = ({ children, onPress }) => (
  <TouchableOpacity
    style={{
      top: -20,
      justifyContent: "center",
      alignItems: "center",
    }}
    onPress={onPress}
  >
    <View
      style={{
        width: 60,
        height: 60,
        //borderRadius: 30,
        //backgroundColor: "#504CF1",
        backgroundColor:"white"
      }}
    >
      
    </View>
  </TouchableOpacity>
);

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
          name="Market" 
          component={MarketPage}
          options={{
            tabBarLabel: 'Market',
            tabBarIcon: ({ focused }) => (
              <CustomButton/>
            ),
            tabBarIcon: ({ focused }) => (
              <View style={{alignItems:'center',
              resizeMode:'contain'}}>
                <MaterialCommunityIcons name="bank" color={"white"} size={30} />
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
  tabBarCustomBtton:{
    top:-30,
    justifyContent:'center',
    alignItems:'center',
   // ...styles.shadow
  },
  customBtton:{
    width:70,
    height:70,
    borderRadius:35,
   // ...styles.shadow
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
});

/*
//will make the Icon hide nut still be pressable
 tabBarIcon: ({ focused }) => (
              <View style={{
              resizeMode:'contain'}}>
              </View>
          ),
*/
