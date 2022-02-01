import { StyleSheet, Text, View, Image, Alert } from 'react-native';
import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';

const UserBlock = (props) => {

    const sendDataToFather=()=>{
        console.log("User "+ props.userName)
        props.send2papa(props.userName)
    }

    let balance = (props.balance != undefined) ? props.balance : 0 ;
    let Image_Http_URL ={ uri: props.img};
  return (
    <TouchableOpacity style={styles.container} >
        <Text style={styles.userName} onPress={sendDataToFather}>{props.userName}</Text>
        <View style={styles.row}>
            <Text style={styles.balance}>{"$"+ balance}</Text>
            <Image source={Image_Http_URL} style={styles.roundButton1}/>
        </View>
    </TouchableOpacity>
  );
};

export default UserBlock;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#504CF1',
        flex: 1,
        margin:5,
        alignSelf:'center',
        width:"100%",
        borderRadius:10,
        height:150
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
        borderWidth: 1.5
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
        
    },
    balance:{
        fontSize:20,
        color:'#fff',
        //alignSelf:'flex-end',
        marginLeft:100,
        marginTop:50
    }
});
