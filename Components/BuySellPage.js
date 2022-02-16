import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React,{useEffect,useState} from 'react';
import { useIsFocused } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TextInput } from 'react-native-gesture-handler';

let email="";
let transDetails;

const BuySellPage = ({route,navigation}) => {
  const [search, setSearch] = useState("");
  const isFocused = useIsFocused();
  const [userEmail,setUserEmail]=useState();
  console.log("---------------------route params buy sell "+route.params);
  if(route.params != undefined){
    transDetails = route.params.transaction
  }
  console.log("---------------------transDetails buy sell "+transDetails.op);
 
  AsyncStorage.getItem('loggedInUserEmail').then((token) => {
    //setUserEmail(token)
    console.log("use effect ",token)
    email=token
    setUserEmail(token)
  })

  

  useEffect(() => {  
  
  }, [isFocused]);

  return (
    <View style={styles.container}>
    <View style={styles.container2}>
      <Text style={styles.title}>BUy Sell</Text>
      <Text style={styles.title}>{userEmail}</Text>
      <View style={styles.body}>
        {console.log("in BuySell")}
      
      <View>
        <Text style={styles.title}>{transDetails.coinPrice}</Text>
        <Text style={styles.title}>{transDetails.coinName}</Text>
      </View>
      <View style={styles.search}>
        <TextInput  style={styles.input}
                            placeholder="enter Coin amount "   
                            placeholderTextColor="#1A1A1A" 
                            onChangeText={setSearch}
                            />
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.title}>{transDetails.op}</Text>
      </TouchableOpacity>
      </View>
    </View>
  </View>
  )
}

export default BuySellPage

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
  container2:{
    marginTop:30,
   // backgroundColor: '#1A1A1A',
   //backgroundColor:"white",
    flex: 1,
    //alignItems: 'center',
  },
  title:{
    color:'#fff',
    alignSelf:'center',
    fontSize:30,
    fontWeight:'bold',
  },
  body:{
    flex:1,
    marginTop:40,
  },
  button:{
    backgroundColor:"lightblue",
    width:"40%",
    alignSelf:"center",
    marginTop:10,
    //alignItems:"center",
    //alignContent:"center"
    
  },
  input:{
    borderColor:'white',
   // backgroundColor:"red",
    borderRadius:10,
    color:'black',
    alignSelf:'center',
    borderWidth: 1,
    textAlign: 'center',
    flex:1,
    height:'100%'
},
search:{
  width: 300,
  height: 60,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#fff',
  alignSelf:"center",
 // borderColor:'#fff',
  borderRadius:10,
  flexDirection:'row',
  //borderWidth: 1,
},
})