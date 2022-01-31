
import { StyleSheet, View } from 'react-native';
import StartPage from './Components/StartPage';
import LoginPage from './Components/LoginPage';
import SignUp from './Components/SignUpPage';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';

const Stack = createNativeStackNavigator();

export default function App() {
  const [loaded] = useFonts({
    Montserrat: require('./assets/fonts/MontserratAlternates-Medium.otf'),
  
  });
  
  return (
    <>
    {loaded && <NavigationContainer style={{fontFamily:'Montserrat',fontSize:30,color:"white"}}>
      <Stack.Navigator  initialRouteName="SignUp" 
        screenOptions={{
            headerShown: false
        }} 
      >
        <Stack.Screen name="StartPage" component={StartPage} />
        <Stack.Screen name="LoginPage" component={LoginPage} />
        <Stack.Screen name="SignUp" component={SignUp} />

      </Stack.Navigator>
    </NavigationContainer>
  }
  </>  
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
