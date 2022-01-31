import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Assets from './Comps/Assets';
import Balance from './Comps/Balance';
import Transactions from './Comps/Transactions';
//import Tabs from './Navigation/Tab';

const Portfolio = (props,{navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.container2}>
        <Text style={styles.title}>Portfolio</Text>
        <View style={styles.body}>
          <Balance balance={1000}/>
          <Assets/>
          <Transactions/>
        </View>
      </View>
    </View>
  );
};

export default Portfolio;

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
    marginTop:20,
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
    marginTop:60,
  }
});
