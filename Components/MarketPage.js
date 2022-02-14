import { StyleSheet, Text, View ,Keyboard,
  TouchableWithoutFeedback,} from 'react-native'
import BottomSheet from "./Comps/BottomSheet";
import React from 'react'
import MarketHeader from './Comps/MarketHeader';

const MarketPage = () => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
    <View style={styles.container}>
      <View style={styles.container2}>
        
        <MarketHeader/>
        <View style={styles.body}>
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
        flex:1,
        marginTop:40,
      }

})