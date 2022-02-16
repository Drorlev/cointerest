import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const BuySellPage = ({route}) => {
 
  return (
    <View style={styles.container}>
    <View style={styles.container2}>
      <Text style={styles.title}>BUy Sell</Text>
      <View style={styles.body}>
        {console.log("in BuySell")}
       
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
   // justifyContent: 'center',
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
  }
})