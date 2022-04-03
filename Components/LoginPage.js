//import logo from './assets/cointerest.png';
import logo from '../assets/cointerest.png'
//Money_motivation-bro_1
//import { Header } from 'react-navigation-stack';
import pic from '../assets/Money_motivation-bro_1.png'
import React ,{useState,useEffect} from 'react'
import { StyleSheet, View, TextInput, Image,Text ,TouchableOpacity,KeyboardAvoidingView, ScrollView  } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';

import { useFocusEffect } from '@react-navigation/native';

const apiUrl = "http://194.90.158.74/bgroup53/test2/tar4/api/Users/"; 

const storeData = async (value) => {
    try {
      //const jsonValue = JSON.stringify(value)
      await AsyncStorage.setItem('loggedInUserEmail', value)
      const jsonVal = await AsyncStorage.getItem('loggedInUserEmail')
      console.log("after saving ",jsonVal);
    } catch (e) {
      // saving error
    }
  }

  

const Login = ({navigation}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate_to_homePage=()=>{
        //navigation.navigate('HomePage')
        navigation.navigate('InApp')
        //navigation.popToTop() && navigation.navigate('InApp')
    }
    
    const getData = async () => {
        try {
          //const jsonValue = await AsyncStorage.getItem('@loggedInUser')
          let jsonVal = await AsyncStorage.getItem('loggedInUserEmail')
          console.log("Login Page ", jsonVal)
            if(jsonVal != null){
                navigate_to_homePage();
            }
          /*
          await AsyncStorage.getAllKeys()
          .then(keys => AsyncStorage.multiRemove(keys))
          .then(() => alert('success'));
          */
          //return jsonValue != null ? await JSON.parse(jsonValue) : null;
          //return  jsonVal;
          //setUser( await AsyncStorage.getItem('@loggedInUser'));
        } catch(e) {
          // error reading value
        }
    }
    getData();

    
    /*
    const [keyboardVisible,setKeyboardVisible]=useState(false);

    //option one use useState to hide View of the img and the Welcome
    _keyboardDidShow = () => {
        setKeyboardVisible(true)
      };
    
    _keyboardDidHide = () => {
    setKeyboardVisible(false)
    };
    */

    //flag for respone Ok true or false
    let flag;

    

    //this method get the data from the TextInputs
    //and fetch(get) from the server true/false
    //if true navigate_to_homePage() invoked
    const userAuth =()=>{
        

      let user ={
          userEmail:email,
          userPassword:password
      }
      // console.log(user)

      const logs = (email) =>{
        fetch("http://194.90.158.74/bgroup53/test2/tar4/api/Logins/?email="+email, {
          method: "POST",
          body: JSON.stringify(),
          headers: new Headers({
            "Content-type": "application/json; charset=UTF-8",
          }),
        })
          .then((res) => {
            console.log("res=", res.ok);
            (res.ok ? navigate_to_homePage() : "no_op");
            return res.json();
          })
          .then(
            (result) => {
              console.log("fetch logInlOG POST= ", result);
            },
            (error) => {
              console.log("err post=", error);
            }
          );  
      }

      fetch(apiUrl +"?email="+ email+"&password="+ password , {
          method: 'GET',
          headers: new Headers({
            'Content-Type': 'application/json; charset=UTF-8',
            'Accept': 'application/json; charset=UTF-8'
          })
        })
          .then(res => {
          //console.log('res=', res); cant do console.log to this
            console.log('res.status', res.status);
            console.log('res.ok', res.ok);
            /*
            if(res.ok != true){
                return;
            }
            */
            //if the respone is Ok go to home page
            //navigate_to_homePage();
            flag = res.ok;
            return res.json()
          })
          .then(
            (result) => {
              console.log("fetch user = ", result);
              flag ? storeData(result.Email).then(logs(result.Email)) : alert(result.Message)
            },
            (error) => {
                //should throw generic 
                //email or password are wrong 
              console.log("err post=", error);
            });
    } 

    //this function navigate to the home page
    //only and only if the password and the mail are correct
    //this function is used after userAuthentication 
   

  
    //ScrollView
    //the second option is the current one 
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.logoHeader} >
                    <Image source={logo} style={styles.logo}/>
                    <Text style={styles.headerTxt}>CoinTerest</Text>
                </View>
                <ScrollView>
                    <Image source={pic} style={styles.pic}/>
                    <Text style={styles.welcome}>Welcome Back!</Text>
                </ScrollView>
            </View>
               <View>
                    <TextInput  style={styles.input}
                    placeholder="Enter Email" 
                    placeholderTextColor="#fff" 
                    onChangeText={setEmail}
                    />
                    <TextInput style={styles.input}
                    secureTextEntry={true}
                    placeholder="Enter Password"
                    placeholderTextColor="#fff" 
                    onChangeText={setPassword}
                    />
                </View> 
            <TouchableOpacity
               onPress={userAuth}
                style={styles.login}>
                <Text style={styles.buttonTxt}>Login</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#1A1A1A',
        flex: 1,
    },
    logo: {
        width: 30,
        height: 30,
    },
    headerTxt:{
        color:'white',
        fontSize:30,
       // fontFamily:"Montserrat" //need to fix it
    },
    header:{   
        paddingTop:40,
        flex:0.8
    },
    pic:{
    alignSelf:'center',
    marginTop:50
    },
    login:{
        width: 300,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 10,
        backgroundColor: '#504CF1',
        alignSelf:"center",
        marginTop:"10%",
        borderRadius:10,
    },
    logoHeader:{
       flexDirection:'row',
       alignItems: 'center',
       alignSelf:'center',
    },
    buttonTxt:{
        color:'#fff',
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom:10
    },
    input:{
        borderColor:'white',
        borderRadius:10,
        color:'white',
        alignSelf:'center',
        borderWidth: 1,
        width: 250,
        marginTop:10,
        textAlign: 'center'
    },
    welcome:{
        color:'#fff',
        alignSelf:'center',
        fontSize:30
    },
      

})
export default Login
