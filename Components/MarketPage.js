import { StyleSheet, Text, View } from 'react-native'
import BottomSheet from "./Comps/BottomSheet";
import React from 'react'

const MarketPage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.container2}>
        <Text style={styles.title}>Market</Text>
        <View style={styles.body}>
          <BottomSheet/>
        </View>
      </View>
    </View>
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
        flex:1,
        marginTop:40,
      }

})