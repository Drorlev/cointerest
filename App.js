
import { StyleSheet, View } from 'react-native';
import Start from './Components/StartPage';
import Login from './Components/LoginPage';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Portfolio from './Components/PortfolioPage';
import BottomTabNavigator from './Components/Navigation/BottomTabNavigator';

const Stack = createNativeStackNavigator();
//Protfolio
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Start" 
        screenOptions={{
            headerShown: false
        }} 
      >
        <Stack.Screen name="Start" component={Start} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Portfolio" component={BottomTabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {  
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerTxt:{
    color:'white'
  }
});
