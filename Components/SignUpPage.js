import { StyleSheet, Dimensions,View, Text, Image,TextInput ,TouchableOpacity,Keyboard,TouchableWithoutFeedback,ImageBackground  } from 'react-native';
import Sign_Up from  '../assets/Sign_Up.png'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import React ,{useState} from 'react'
import * as Animatable from 'react-native-animatable'

const SignUp = ({navigation}) => {
  const [data,setData]=useState({
    email:'',
    username:'',
    password:'',
    isValidEmail:true,
    isValidPassword:true,
   });
  const navigate_to_Camera=()=>{
    navigation.navigate('InAppPages',{
      screen: 'Camera',
    })}

  const emailInputChange=(val)=>{
    setData({
      ...data,
      email: val
    })}
 
  const passwordInputChange=(val)=>{
    setData({
      ...data,
      password: val
    })}

  const usernameInputChange=(val)=>{
    setData({
      ...data,
      username: val
    })}
    const btnPost=()=>{
     console.log(data);
    }

    const handleValidEmail=(val)=>{
      let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
      if (reg.test(val) === true) {
        setData({
          ...data,
          isValidEmail:true
        });
      } 
    else {
      setData({
        ...data,
        isValidEmail:false
      });
    }    
  }

  const handleValidPassword=(val)=>{
    let reg = /^.*(?=.{8,}).*$/;
    if (reg.test(val) === true) {
      setData({
        ...data,
        isValidPassword:true
      });
    } 
  else {
    setData({
      ...data,
      isValidPassword:false
    });
  }    
}

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>

    <ImageBackground source={Sign_Up} resizeMode="cover" style={styles.image}>
      <View style={styles.container}>
        <View style={styles.header}>
          
          <Text style={styles.headerTxt,{fontFamily:'MontserratMed',fontSize:30,color:"white"}} >
            Create {"\n"}
            Account
          </Text>

          <TouchableOpacity onPress={navigate_to_Camera} style={styles.roundButton1}>
            <MaterialCommunityIcons name="camera-plus-outline" color={"white"} size={30} />
          </TouchableOpacity>
          
        </View>
        <View style={styles.body}>
          <View style={styles.test}>
          <TextInput
                style={styles.textbox}
                placeholder="Email"
                placeholderTextColor="#fff"
                onChangeText={(val)=> emailInputChange(val)}
                onEndEditing={(e)=>handleValidEmail(e.nativeEvent.text)}
              />
              {data.isValidEmail ? null :
              <Animatable.View animation="fadeInLeft" duration={800}>
              <Text style={styles.msgEror}>Must be a valid email</Text>
              </Animatable.View>
              }

              <TextInput
                style={styles.textbox}
                placeholder="User Name"
                placeholderTextColor="#fff"
                onChangeText={(val)=> usernameInputChange(val)}

              />
              <TextInput
                style={styles.textbox}
                secureTextEntry={true}
                placeholder="Password"
                placeholderTextColor="#fff"
                onChangeText={(val)=> passwordInputChange(val)}
                onEndEditing={(e)=>handleValidPassword(e.nativeEvent.text)}
              />
              {data.isValidPassword ? null :
              <Animatable.View animation="fadeInLeft" duration={800}>
              <Text style={styles.msgEror}>Password must be atleast 8 characters</Text>

              </Animatable.View>}
                  {/* <TextInput
                style={styles.textbox}
                placeholder="Birthdate"
                placeholderTextColor="#fff"
              /> */}
          </View>
          <TouchableOpacity style={styles.login} onPress={btnPost}>
          <Text style={styles.buttonTxt}>Create Account</Text>
        </TouchableOpacity>
        </View>

    
      </View>
    </ImageBackground>
    </TouchableWithoutFeedback>

  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
},
header:{
  //paddingTop:90,
  //flex:1
  justifyContent: 'center',
  padding:10,
  marginTop:95,
  flexDirection:'row',
},
msgEror:{
  color:"red",
  alignSelf:'center',
  fontSize:20
},

body:{
flexDirection:'column',
},


textbox:{
  borderColor:'white',
  borderRadius:10,
  color:'white',
  alignSelf:'center',
  borderWidth: 1,
  width: 270,
  height:50,
  marginTop:12,
  textAlign: 'center',
  backgroundColor:'#1A1A1A',
  //fontFamily:'MontserratMed',
  fontSize:20
        
},


test:{
  //backgroundColor:'blue',
  marginTop:15,
},

headerTxt:{
    color:'white',
    fontSize:30,
    fontWeight:'bold',
    
   //fontFamily:"Montserrat" //need to fix it
},
 
image: {
  flex:1,
 position: 'absolute',
  left: 0,
  top: 0,
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height+50,
},
login:{
    width: 300,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#504CF1',
    alignSelf:"center",
    borderRadius:10,
    marginTop:80
},

buttonTxt:{
    color:'#fff',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection:'column',
    padding: 10,
    marginBottom: 10,
    fontWeight:'bold',

},
roundButton1: {
  width: 60,
  height: 60,
  justifyContent: 'center',
  alignItems: 'center',
  marginLeft:100,
  borderRadius: 100,
  backgroundColor: 'black',
  alignSelf:"flex-end",
  borderColor:'white',
  borderWidth: 1.5
},

})
export default SignUp;

