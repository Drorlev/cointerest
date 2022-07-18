import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import pic from '../../assets/BTC.png'

const Asset = (props) => {
    let image ={ uri: props.img};
    console.log(props.img)
  return (
    <View style={styles.container}>
        <View style={styles.asset}>
            <Image source={image} style={styles.img}/>
            <Text style={styles.txt}>{props.amount}</Text>
        </View>
    </View>
  )
}

export default Asset

const styles = StyleSheet.create({
    container: {
        // flexDirection:'row',
         //paddingTop:30,
         //backgroundColor: '#1A1A1A',
         //backgroundColor: 'gray',
         flex: 1,
         width:100,
         alignSelf: 'center',
         marginLeft:3,
         marginRight:3,
         //marginTop:4,
         //marginBottom:1,
         borderRadius:10,
         
         //marginBottom:10,
         //justifyContent:'center'
        // borderRadius:10,
       // justifyContent:'center',
        //alignItems:'center'
     },
     row:{
        // height:"30%",
         flexDirection:'row',
         //justifyContent:'space-between',
         //borderRadius:10,
     },
     asset:{
        flex:0.7,
        justifyContent:'center'
     },
     txt:{
         marginTop:4,
         textAlign:'center',
         color:'white',
         fontSize:17
     },
     
    img: {
        //marginTop:2,
        alignSelf:'center',
        width: 40,
        height: 40,
    },
})