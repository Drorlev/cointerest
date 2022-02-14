import { StyleSheet, Text, View } from "react-native";
import React from "react";

const apiUrl = "http://194.90.158.74/bgroup53/test2/tar4/api/Assets/?email=";

let balance;
let flag;

const Balance = (props) => {
  //send email in props!!
  console.log(props.email)
  //console.log("-----------------------------------"+props.balance);
  //fetch based email
 

  const getBalance = () => {
    fetch(apiUrl + props.email+"&n=1", {
      method: 'GET',
      headers: new Headers({
        'Content-Type': 'application/json; charset=UTF-8',
        'Accept': 'application/json; charset=UTF-8'
      })
    })
      .then(res => {
        //console.log('res=', res);
        console.log('res.status', res.status);
        console.log('res.ok', res.ok);
        flag=res.ok;
        /*
        if(!flag){
          setAssets(<View><Text style={styles.headerTxt}>No Assets!!!</Text></View>)
          return;
        }
        */
        return res.json()
      })
      .then(
        (result) => {
          console.log("fetch Balance = ", result);
          /*
            balance = result != undefined ? result : 0;
          */
          balance = result
          },
        (error) => {
          console.log("err post=", error);
        });
  }

  getBalance();

  return (
    <View style={styles.container}>
      <View style={styles.balance}>
      <Text style={styles.headerTxt}>Balance</Text>
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
