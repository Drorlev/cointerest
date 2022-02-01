//import logo from './assets/cointerest.png';
import logo from '../assets/cointerest.png'
//Money_motivation-bro_1
import pic from '../assets/Money_motivation-bro_1.png'
import React from 'react'
import { StyleSheet, View, Button, Image,Text ,TouchableOpacity} from 'react-native'


//Test

const Start = ({navigation} ) => {

    const navigate_to_login=()=>{
        navigation.navigate('Login')
    }

    const navigate_to_signUp=()=>{
        navigation.navigate('SignUpPage')
    }

    
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.logoHeader} >
                    <Image source={logo} style={styles.logo}/>
                    <Text style={styles.headerTxt}>CoinTerest</Text>
                </View>
                
                <Image source={pic} style={styles.pic}/>
            </View>
            <TouchableOpacity
                onPress={navigate_to_signUp}
                style={styles.signUp}>
                <Text style={styles.buttonTxt}>Sign Up</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={navigate_to_login}
                style={styles.login}>
                <Text style={styles.buttonTxt}>Login</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        //flexDirection:'row',
        //paddingTop:30,
        backgroundColor: '#1A1A1A',
        flex: 1,
        //alignItems: 'center',
        //justifyContent: 'center',
        
       /*
        marginTop: 0,
        flex: 1,
        backgroundColor: '#1A1A1A'
        */
        
       
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
    //alignItems: 'center',
    alignSelf:'center',
    marginTop:50
    },
    signUp:{
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
    login:{
        width: 300,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 10,
        backgroundColor: '#1A1A1A',
        alignSelf:"center",
        marginTop:"10%",
        borderColor:'#fff',
        borderRadius:10,
        borderWidth: 1,
    },
    buttonTxt:{
        color:'#fff',
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom:10
    }
      

})
export default Start
