import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';

const UserDiscoverBio = (props) => {
  return (
    <View style={styles.container} >
        <View style={styles.row}>
            <Text style={styles.balance}>{props.email}{'\n'}</Text>
            <Image  style={styles.roundButton1}/>
        </View>
    </View>
  );
};

export default UserDiscoverBio;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#504CF1',
        flex: 0.2,
        alignSelf:'center',
        width:"90%",
        borderRadius:10,
        //height:150
    },
    roundButton1: {
        width: 100,
        height: 100,
        //justifyContent: 'center',
        //alignItems: 'center',
        borderRadius: 100,
        //backgroundColor: 'black',
        alignSelf:"flex-end",
        borderColor:'white',
        borderWidth: 1.5,
        marginRight:10,
    },
    userName:{
        fontSize:25,
        marginTop:10,
        color:'#fff',
        marginLeft:50
    },
    row:{
        flexDirection:'row',
        justifyContent:'space-between',
        //alignContent:'center',
        alignItems:'center',
        paddingTop:5
    },
    balance:{
        fontSize:20,
        color:'#fff',
        //alignSelf:'flex-end',
        marginLeft:20,
        //marginTop:50
    }
});
