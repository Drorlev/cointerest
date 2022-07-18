import { StyleSheet, Text, View ,Keyboard,
  TouchableWithoutFeedback,TouchableOpacity,Switch} from 'react-native'
import BottomSheet from "./Comps/BottomSheet";
import React,{useEffect,useState} from 'react';
import { TextInput } from 'react-native-gesture-handler'
import MarketHeader from './Comps/MarketHeader';
import MarketCoinsComp from './Comps/MarketCoinsComp';
import { useIsFocused } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

let count = 0;

let action = { op:"Buy", txt:"",}
let email ="";
const dict ={false:"Buy", true:"Sell"}


const MarketPage = () => {
  //action = getDataFromSon();
  const isFocused = useIsFocused();
  const [userEmail,setUserEmail]=useState();
  const [isEnabled, setIsEnabled] = useState(false);
  const [search, setSearch] = useState("");
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  //const [action, setAction] = useState({ op:"Buy", txt:"",});
  const [body,setBody]=useState(( <MarketCoinsComp action={action}  />));
  //const [body,setBody]=useState(( <></>));
  //const [search, setSearch] = useState(action);

  console.log("--------Market Page------"+ action.op + "----"+action.txt )
  /*
  const getDataFromSon = (value) =>{
    console.log("In MarketPage",value)
   // setSearch(value)
    return value
  }
  */

  const setUpComps=()=>{
    action.op = dict[isEnabled]
    action.txt = search
    let comps =  <>
       <MarketCoinsComp action={action} userEmail={email}/>
      </>
    setBody(comps);
  }
  

  console.log("-----------rendered" + count++);

  useEffect(() => {
      AsyncStorage.getItem('loggedInUserEmail').then((token) => {
        //setUserEmail(token)
        console.log("use effect ",token)
        email=token
        setUserEmail(token)
        
      })
      if(userEmail != undefined){
        setUpComps()
      }
  }, [isFocused, isEnabled ,search]);
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
    <View style={styles.container}>
      <View style={styles.container2}>
        <View style={styles.header}>
              <Text style={styles.title}>Market</Text>
              <View style={styles.switch}>
                  <Text style={styles.txt}>Buy</Text>
                  <Switch style={styles.switch}
                  trackColor={{ false: "green", true: "gray" }}
                  thumbColor={isEnabled ? "lightgray" : "lightgreen"}
                  //ios_backgroundColor="#3e3e3e"
                  onValueChange={ toggleSwitch}
                  value={isEnabled}
                  />
                  <Text style={styles.txt}>Sell</Text>
              </View>
              <View style={styles.search}>
              <TextInput  style={styles.input}
                          value={search}
                          placeholder="Search a Coin"   
                          placeholderTextColor="#1A1A1A" 
                          onChangeText={setSearch}
                          />
                  <TouchableOpacity
                      //onPress={navigate_to_signUp}
                      style={styles.signUp}>
                      <MaterialIcons name="search" color={"gray"} size={30}/>
                  </TouchableOpacity>
              </View>
          </View>
        <View style={styles.body}>
         {body}
        </View>
      </View>
    </View>
    </TouchableWithoutFeedback>
  )
}

export default MarketPage

const styles = StyleSheet.create({
    container: {
        //flexDirection:'row',
        //paddingTop:30,
        backgroundColor: '#1A1A1A',
        flex: 1,
        //alignItems: 'center',
       // justifyContent: 'center',
       /*
        marginTop: 0,
        flex: 1,
        backgroundColor: '#1A1A1A'
        */
      },
      container2:{
        marginTop:30,
        backgroundColor: '#1A1A1A',
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
        flex:0.68,
        //marginTop:20,
       //backgroundColor: 'lightblue',

      },
      header: {
        //flexDirection:'row',
        //paddingTop:30,
       // backgroundColor: 'lightblue',
        flex: 0.22,
        //alignItems: 'center',
       // justifyContent: 'center',
       /*
        marginTop: 0,
        flex: 1,
        backgroundColor: '#1A1A1A'
        */
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
    switch:{
       flexDirection:"row",
       justifyContent:"center",
       alignItems:"center",
    },
    txt:{
        fontSize:20,
        color:"white"
    },
    

})