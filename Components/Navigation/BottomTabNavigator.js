import { StyleSheet, View, KeyboardAvoidingView, Text} from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { LinearGradient } from 'expo-linear-gradient';
import Portfolio from '../PortfolioPage';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign'
//FontAwesome5Free
import DiscoverPage from '../DiscoverPage';
//import User from '../UserDiscoverPage';
import InAppStackNavigator from './InAppStackNavigator';
import HomePage from '../HomePage';
import MarketPage from '../MarketPage';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import SettingsPage from '../SettingsPage';

//import Start from './Components/StartPage';
const Tab = createBottomTabNavigator();

const marketBuySell= () =>{
  alert("Market")
}

const CustomButton = ({ children, onPress }) => (
  <TouchableOpacity
    style={{
      top: -20,
      justifyContent: "center",
      alignItems: "center",
    }}
    onPress={onPress}
  >
     <LinearGradient
              // Button Linear Gradient
              colors={['#4c669f', '#3b5998', '#192f6a']}
              style={styles.customBtton}>
              <Text style={styles.text}>Sign in with Facebook</Text>
      </LinearGradient>
  </TouchableOpacity>
);

const BottomTabNavigator = () => {
  const navigation = useNavigation();
  return (
    <Tab.Navigator 
       initialRouteName="Home"
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel:false,
        tabBarHideOnKeyboard:true,
        tabBarStyle: {
          showLabel: false,
          backgroundColor: '#6136DA',
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
            resizeMode:'contain'}} >
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
              <TouchableOpacity
                style={{
                  top: -15,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
               <LinearGradient 
                  // Button Linear Gradient
                  colors={['#8A43F4', '#6949E7']}
                  
                  style={styles.linerGrad}>
                    <MaterialIcons name="sync-alt" color={"white"} size={40} style={{ marginTop:10}}/>
                </LinearGradient>
            </TouchableOpacity>
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
          listeners={{
            tabPress: (e) => {
              // Prevent default action
              e.preventDefault();
              
              navigation.navigate('InAppPages',{
                screen: 'SettingsPage',
                
            })
            },
          }}
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
  linerGrad:{
    width:66,
    height:62,
    borderRadius:25,
    alignItems:'center',
    //shadowRadius:200,
    //shadowColor:"black"
   // ...styles.shadow
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
