import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';

//render the whole assetes
//Asset will be ready later on 
//<Assets/>
const Assets = (props) => {

    //do the fetch

  return (
    <View style={styles.container}>
        <Text style={styles.headerTxt}>Assets  Collection</Text>
        <ScrollView style={styles.assets}>
         <Text style={styles.text}>Hello we are the Assets</Text>
        </ScrollView>
    </View>
  );
};

export default Assets;

const styles = StyleSheet.create({
    container: {
        //flexDirection:'row',
        //paddingTop:30,
        //backgroundColor: '#1A1A1A',
       
        flex: 0.3,
        width:"90%",
        //color:'#fff'
        alignSelf: 'center',
        marginBottom:40
       // justifyContent: 'center',
    },
    text:{
        color:'white'
    },
    headerTxt:{
        color:'#fff',
        fontWeight:'bold',
        marginLeft:10,
        marginBottom:10,
        fontSize:20
    },
    assets:{
        flex:1,
        backgroundColor: 'lightblue',
        borderRadius:10,
    }
});
