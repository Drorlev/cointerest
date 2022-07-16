import { StyleSheet, Text, View } from "react-native";
import React,{useEffect,useState} from 'react';

const apiUrl = "http://194.90.158.74/bgroup53/test2/tar4/api/Assets/?email=";

let flag;

const Balance = (props) => {
  const [balance,setBalance]=useState();

  console.log(props.email)
  
  const getBalance = () => {
    console.log("-------balance api:", apiUrl + props.email+"&n=1")
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
          
          setBalance(<><Text style={styles.blnTxt}>{"$" + Number.parseFloat(result.Net_worth).toFixed(3).replace(/[.,]000$/, "")}</Text><View style={styles.blnTxt}>
            <Text style={(result.Weekly_change_percent >= 0) ? styles.green : styles.red}>Last 24 hours {Number.parseFloat(result.Weekly_change_percent).toFixed(2).replace(/[.,]00$/, "")+"%"}</Text>
            </View></>) 
          },
        (error) => {
          console.log("err post=", error);
        });
  }
  useEffect(() => {
    getBalance();    
  }, [props]);
  

  return (
    <View style={styles.container}>
      <View style={styles.balance}>
      <Text style={styles.headerTxt}>Wallet Worth</Text>
        {balance}
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
  green: {
    color: '#00ff00',
    fontWeight: "bold",
    fontSize: 14,
    alignSelf: "center",
    textAlign: "center",
    top: "35%",
  },
  red: {
    color: '#ff0000',
    fontWeight: "bold",
    fontSize: 14,
    alignSelf: "center",
    textAlign: "center",
    top: "35%",

  }
});

export default Balance;
