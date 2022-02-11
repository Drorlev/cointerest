import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TouchableOpacity } from 'react-native-gesture-handler';






const hello=()=>{
    alert("hello")
}
const SettingsPage = ({ route, navigation }) => {


    const goToStartPage=()=>{
        console.log("in")

        //navigation.navigate('UserPage')
        navigation.popToTop()
    }

    const clearAsyncStorage = async() => {
      try {
        await AsyncStorage.clear()
          .then(
              goToStartPage()
            );
        
      } catch(e) {
        // error reading value
        alert("NoT!!")
      }
  }

    

   

  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.container2}>
            <Text onPress={clearAsyncStorage}>Logout</Text>
            <Text onPress={goToStartPage}>SettingsPage</Text>
            
        </View>
       
          
    </SafeAreaView>
  )
}

export default SettingsPage

const styles = StyleSheet.create({
    container: {
        //flexDirection:'row',
        //paddingTop:30,
        //backgroundColor: '#1A1A1A',
        flex: 1,
        alignItems: 'center',
        //justifyContent: 'center',
        
       /*
        marginTop: 0,
        flex: 1,
        backgroundColor: '#1A1A1A'
        */
        
       
    },
    container2:{
      flex: 1,
       justifyContent: 'center',
    },
    balance: {
      //flexDirection:'row',
      //paddingTop:30,
      //backgroundColor: '#1A1A1A',
      backgroundColor: '#504CF1',
      flex: 1,
      width:"100%",
      //color:'#fff'
      alignSelf: 'center',
      borderRadius:10,
     // justifyContent: 'center',
  },
  blnTxt:{
    color:'#fff',
    fontWeight:'bold',
    textAlign:'center',
    fontSize:20,
    marginTop:20,
    marginRight:5
    //justifyContent:'center'
}
})