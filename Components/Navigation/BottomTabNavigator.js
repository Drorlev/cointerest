import { StyleSheet, View, KeyboardAvoidingView} from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LinearGradient from 'react-native-linear-gradient';
import Portfolio from '../PortfolioPage';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import DiscoverPage from '../DiscoverPage';

//import Start from './Components/StartPage';
const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator 
      //  initialRouteName="Portfolio"
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel:false,
        tabBarHideOnKeyboard:true,
        tabBarStyle: {
          showLabel: false,
          backgroundColor: '#504CF1',
          position: 'absolute',
          borderTopWidth: 0,
      },
      
    })}
    
      >
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
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;

const styles = StyleSheet.create({
 
});
