import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Transaction = (props) => {
  return (
    <View style={styles.container}>
        <View style={styles.row}>
            <View style={styles.dateCol}>
                <Text style={styles.txt}>date</Text>
            </View>
            <View style={styles.OpCol}>
                <Text style={styles.txt}>Oparation</Text>
            </View>
            <View style={styles.amountCol}>
                <Text style={styles.txt}>amount</Text>
            </View>
         </View>
    </View>
  )
}

export default Transaction

const styles = StyleSheet.create({
    container: {
       // flexDirection:'row',
        //paddingTop:30,
        //backgroundColor: '#1A1A1A',
        backgroundColor: 'gray',
        flex: 1,
        width:"95%",
        alignSelf: 'center',
        marginTop:4,
        marginBottom:1,
        borderRadius:10,
        //marginBottom:10,
        //justifyContent:'center'
       // borderRadius:10,
    },
    row:{
       // height:"30%",
        flexDirection:'row',
        //justifyContent:'space-between',
        //borderRadius:10,
    },
    dateCol:{
        //flexDirection:"column",
        //backgroundColor:"purple",
        width:"40%",
    },
    OpCol:{
       // flexDirection:"column",
        //backgroundColor:"lightgreen",
        width:"30%",
    },
    amountCol:{
        //flexDirection:"column",
       // backgroundColor:"yellow",
        width:"30%",
    },
    txt:{
        textAlign:'center',
        color:'white'
    }

})