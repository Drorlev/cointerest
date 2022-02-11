import { StyleSheet, Text, View ,SafeAreaView } from 'react-native'
import React, {useState,useEffect} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

let val;

const clearAsyncStorage = async() => {
    try {
      await AsyncStorage.clear().then(alert(cleared));
    
      //alert("cleard")
    } catch(e) {
      // error reading value
      alert("NoT!!")
    }
}



const dataToConsole=()=>{
    getData().then(res => {
      val=res;
    });
    console.log("the val", val)
}

const clearAllData=()=> {
  alert("1")
  try{
    alert("2")
     AsyncStorage.getAllKeys()
      .then(keys =>  AsyncStorage.multiRemove(keys))
      .then(() => alert('success'));
    } catch(e) {
      // error reading value
      alert("NoT!!")
    }
}  
  

const pressMe=()=>{
    clearAsyncStorage();
}  

//START OF THE HOME PAGE
const HomePage = ({ route, navigation }) => {
    const [user,setUser]=useState();


    
    const getData = async () => {
      try {
        //const jsonValue = await AsyncStorage.getItem('@loggedInUser')
        let jsonVal = await AsyncStorage.getItem('loggedInUserEmail')
        console.log("Home Page ", jsonVal)
        //return jsonValue != null ? await JSON.parse(jsonValue) : null;
        //return  jsonVal;
        setUser( await AsyncStorage.getItem('loggedInUserEmail'));
      } catch(e) {
        // error reading value
      }
    }

    useEffect(() => {
      getData();
      console.log("after render ",user)
    },[]);

  return (
    <SafeAreaView style={styles.container}>
        <View>
            <Text onPress={getData}>Hello World</Text>
            <Text>This is HomePage</Text>
        </View>
    </SafeAreaView>
  )
}

export default HomePage

const styles = StyleSheet.create({
    container: {
        //flexDirection:'row',
        //paddingTop:30,
        //backgroundColor: '#1A1A1A',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        
       /*
        marginTop: 0,
        flex: 1,
        backgroundColor: '#1A1A1A'
        */
        
       
    },
})