import { StyleSheet, View } from 'react-native';
import Start from './Components/StartPage';
import SignUp from './Components/SignUpPage';
import Login from './Components/LoginPage';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Portfolio from './Components/PortfolioPage';
import BottomTabNavigator from './Components/Navigation/BottomTabNavigator';
import { useFonts } from 'expo-font';
import Camera from './Components/Comps/CameraComp';
//import User from './Components/UserPage';

const Stack = createNativeStackNavigator();
//<Stack.Screen name="UserPage" component={User} />
export default function App() {
  const [loaded] = useFonts({
    Montserrat: require('./assets/fonts/Montserrat-ThinItalic.otf'),
    MontserratMed: require('./assets/fonts/MontserratAlternates-Medium.otf'),
  });
  
  return (
    <>
    {loaded && <NavigationContainer style={{fontFamily:'Montserrat',fontSize:30,color:"white"}}>
      <Stack.Navigator  initialRouteName="Start" 

        screenOptions={{
            headerShown: false
        }} 
      >
        {/* <Stack.Screen name="Camera" component={Camera} /> */}
        <Stack.Screen name="Start" component={Start} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUpPage" component={SignUp} />
        <Stack.Screen name="InApp" component={BottomTabNavigator} />
        
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
