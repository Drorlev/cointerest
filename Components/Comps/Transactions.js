import { StyleSheet, Text, View , ScrollView, Image} from 'react-native';
import React from 'react';
import Transaction from './Transaction';

const Transactions = (props) => {
  //send email in props!!

  //fetch get based on props email
  const getTransactions=()=>{
    
  }

  return (
    <View style={styles.container}>
       <Text style={styles.headerTxt}>Transactions History</Text>
        <ScrollView style={styles.history}>
          <Transaction/>
          <Transaction/>
          <Transaction/>
          <Transaction/>
          <Transaction/>
          <Transaction/>
          <Transaction/>
          <Transaction/>
          <Transaction/>
          <Transaction/>
          <Transaction/>

        </ScrollView>
    </View>
  );
};

export default Transactions;

const styles = StyleSheet.create({
    container: {
        //flexDirection:'row',
        //paddingTop:30,
        //backgroundColor: '#1A1A1A',
        backgroundColor: '#1A1A1A',
        flex: 0.4,
        width:"90%",
        alignSelf: 'center',
        marginBottom:60,
    },
    history: {
        //flexDirection:'row',
        //paddingTop:30,
        //backgroundColor: '#1A1A1A',
        //backgroundColor: 'lightblue',
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
    }
});
