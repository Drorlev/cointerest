import { StyleSheet, Dimensions,View, TextInput, Image,Text ,TouchableOpacity,Keyboard,TouchableWithoutFeedback,ImageBackground  } from 'react-native';
import Sign_Up from  '../assets/Sign_Up.png'


const SignUp = ({navigation}) => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>

    <ImageBackground source={Sign_Up} resizeMode="cover" style={styles.image}>
      <View style={styles.container}>
        <View style={styles.header}>
          
            <Text style={styles.headerTxt,{fontFamily:'Montserrat',fontSize:30,color:"white"}}>
              Create {"\n"}
              Account
            </Text>

            <TouchableOpacity style={styles.roundButton1}>
              <Text>+</Text>
            </TouchableOpacity>
          
        </View>
        <View style={styles.body}>
        <View style={styles.test}>
            <TextInput
              style={styles.textbox}
              secureTextEntry={true}
              placeholder="Enter User Name"
              placeholderTextColor="#fff"
            />
            <TextInput
              style={styles.textbox}
              secureTextEntry={true}
              placeholder="Enter Password"
              placeholderTextColor="#fff"
            />
                <TextInput
              style={styles.textbox}
              secureTextEntry={true}
              placeholder="Enter Birthdate"
              placeholderTextColor="#fff"
            />
          </View>
          <TouchableOpacity style={styles.login}>
          <Text style={styles.buttonTxt}>Create Account</Text>
        </TouchableOpacity>
        </View>

    
      </View>
    </ImageBackground>
    </TouchableWithoutFeedback>

  );
};

export default SignUp;

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
        backgroundColor:'#1A1A1A'
        
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
  backgroundColor: 'lightgrey',
  alignSelf:"flex-end",
 
},

});

