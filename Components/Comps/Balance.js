import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const Balance = (props) => {
    let balance = (props.balance != undefined) ? props.balance : 0
    
    return (
        <View style={styles.container}>
            <Text style={styles.headerTxt}>Balance</Text>
            <View style={styles.balance}>
                <Text style={styles.blnTxt}>{"$" + balance}</Text>
            </View>
        </View>
    );
};



const styles = StyleSheet.create({
    container: {
        //flexDirection:'row',
        //paddingTop:30,
        //backgroundColor: '#1A1A1A',
        backgroundColor: '#1A1A1A',
        flex: 0.2,
        width:"90%",
        alignSelf: 'center',
        marginBottom:50
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
    headerTxt:{
        color:'#fff',
        fontWeight:'bold',
        marginLeft:10,
        marginBottom:10,
        fontSize:20
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
});

export default Balance;