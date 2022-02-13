import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Balance = (props) => {
  //send email in props!!
  console.log(props.email)
  console.log("-----------------------------------"+props.balance);
  //fetch based email
  let balance = props.balance != undefined ? props.balance : 0;

  return (
    <View style={styles.container}>
      <View style={styles.balance}>
      <Text style={styles.headerTxt}>Balance</Text>
      <Text style={styles.blnTxt}>{"$" + props.balance}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    //flexDirection:'row',
    //paddingTop:30,
    //backgroundColor: '#1A1A1A',
    backgroundColor: "#1A1A1A",
    flex: 0.2,
    width: '95%',
    alignSelf: "center",
    marginTop: 10,
    //marginBottom: 30,
  },
  balance: {
    //flexDirection:'row',
    //paddingTop:30,
    //backgroundColor: '#1A1A1A',
    backgroundColor: "#6136DA",
    //flex: 1,
    //color:'#fff'
    alignSelf: "center",
    borderRadius: 10,
    // justifyContent: 'center',
    width: '95%',
    height: 102,
    
  },
  headerTxt: {
    color: "#fff",
    fontWeight: "bold",
    marginLeft: 20,
    marginTop:10,
   // marginBottom: 10,
    fontSize: 20,
  },
  blnTxt: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 29,
   marginRight: 5,
    justifyContent: 'center',
    alignSelf: "center",

  },
});

export default Balance;
