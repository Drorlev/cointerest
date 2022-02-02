import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import UserDiscoverBio from './Comps/UserDiscoverBio';
import Balance from './Comps/Balance';
import Assets from './Comps/Assets';
import Transactions from './Comps/Transactions';

const User = ({route,navigation}) => {
 
  let userNameRoute = 'Erorr';
  if(route.params != undefined){
    console.log(route.params.userName)
    userNameRoute = route.params.userName
  }
  //let usernameFromNRoute= route.params;
  return (
    <View style={styles.container}>
    <View style={styles.container2}>
      <Text style={styles.title}>{userNameRoute}</Text>
      <View style={styles.body}>
        <UserDiscoverBio/>
        <Balance balance={1000}/>
        <Assets/>
        <Transactions/>
      </View>
    </View>
  </View>
  );
};

export default User;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1A1A1A',
    flex: 1,
},
container2:{
    marginTop:30,
    backgroundColor: '#1A1A1A',
    flex: 1,
    //alignItems: 'center',
  },
  title:{
    color:'#fff',
    alignSelf:'flex-start',
    marginLeft:20,
    fontSize:30,
    fontWeight:'bold',
  },
  body:{
    flex:1,
    marginTop:10,
  },
});
