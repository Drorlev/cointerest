
import { StyleSheet, View } from 'react-native';
import StartPage from './Components/StartPage';
import LoginPage from './Components/LoginPage';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="StartPage" 
        screenOptions={{
            headerShown: false
        }} 
      >
        <Stack.Screen name="StartPage" component={StartPage} />
        <Stack.Screen name="LoginPage" component={LoginPage} />
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
