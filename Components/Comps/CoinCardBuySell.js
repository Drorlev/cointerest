import { StyleSheet, Text, View, Image } from "react-native";
import Underline from "./Underline";

import React, { useState } from "react";

const CoinCardBuySell = (props) => {
  const [color, setColor] = useState("red");

  let image = { uri: props.img };
  return (
    <View style={styles.con}>
      <View style={styles.header}>
        <View style={styles.row}>
          <View style={styles.leftCol}>
            
            <View style={styles.welcome}>
              {/* <Text style={{ color: "#A7A7A7", fontWeight: "bold", fontSize: 20 }}>
                {props.action}
              </Text> */}
              <Text style={{
                color: "#A7A7A7",
                fontWeight: "bold",
                fontSize: 20,
                marginBottom: "2%",
                alignSelf:"center"
              }}
            >
              {props.name}
            </Text>
              <Text style={styles.text}>{"$" + props.value}</Text>
              <Text style={props.precentage}>{props.change + "%"}</Text>
              <Text style={styles.text2}>24H Volume {props.vol}</Text>
            </View>
          </View>
          <View style={styles.rightCol}>
              <Image source={image} style={styles.image} />
          </View>
        </View>
      </View>
      <Underline/>
    </View>
  );
};

export default CoinCardBuySell;

const styles = StyleSheet.create({
  image: {
    width: "60%",
    height: "100%",
   
    borderRadius: 80,
  },
  con:{
   
    flex:1
  },
  text: {
    color: "white",
    fontWeight: "bold",
    fontSize: 25,
  },
  text2: {
    color: "white",
    fontWeight: "bold",
    fontSize: 13,
  },
  welcome: {
    justifyContent: "center",
    alignItems: "center",

    flexDirection: "column",
    flex: 0.7,
  },
  header: {
   flex:1,
    marginTop: "2%",
    alignItems: "center",
    flexDirection: "column",
  },
  profileIcon: {
    width: "50%",
    height: "70%",
    borderRadius: 90,
    backgroundColor: "black",
    marginBottom: "2%",
    // borderColor: "white",
    // borderWidth: 1,
  },
  container: {
    //backgroundColor: '#504CF1',
    flex: 0.2,
    alignSelf:'center',
    width:"90%",
    borderRadius:10,
    //height:150
  },
  rightCol:{
    //backgroundColor:"blue",
    width:"40%",
    height:"100%",
    
    alignItems:"center"
  },
  leftCol:{
    width:"60%",
    height:"100%",
    //backgroundColor:"green",
  },
  row:{
    flex:0.95,
    flexDirection:'row',
    justifyContent:'space-between',
    //alignContent:'center',
    alignItems:'center',
    paddingTop:"5%",
    
},
roundButton1: {
  width: "60%",
  height: "100%",
  //justifyContent: 'center',
  //alignItems: 'center',
  borderRadius: 100,
  //backgroundColor: 'black',
  alignSelf:"center",
  borderColor:'white',
  borderWidth: 1.5,
  
},
});
