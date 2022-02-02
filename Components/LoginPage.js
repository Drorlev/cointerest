//import logo from './assets/cointerest.png';
import logo from '../assets/cointerest.png'
//Money_motivation-bro_1
//import { Header } from 'react-navigation-stack';
import pic from '../assets/Money_motivation-bro_1.png'
import React ,{useState} from 'react'
import { StyleSheet, View, TextInput, Image,Text ,TouchableOpacity,KeyboardAvoidingView, ScrollView } from 'react-native'




const Login = ({navigation}) => {
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


    //this method get the data from the TextInputs
    //and fetch(get) from the server true/false
    //if true navigate_to_homePage() invoked
    const userAuth =()=>{

       //this fetch will return just true/false
       //or
       //this fetch will get the whole data if the get is true
       //should we send all the data to HomePage
       //or we should fetch the whole data in HomePage??
       
    } 

    //this function navigate to the home page
    //only and only if the password and the mail are correct
    //this function is used after userAuthentication 
    const navigate_to_homePage=()=>{
        //navigation.navigate('HomePage')
        navigation.navigate('InApp')
    }


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
                    />
                    <TextInput style={styles.input}
                    secureTextEntry={true}
                    placeholder="Enter Password"
                    placeholderTextColor="#fff" 
                    />
                </View> 
            <TouchableOpacity
                onPress={navigate_to_homePage}
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
