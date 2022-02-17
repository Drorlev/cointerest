import { StyleSheet, Text, View, Image } from 'react-native'
import Underline from "./Underline";

import React from 'react'

const CoinCardBuySell = (props) => {
    let image ={ uri: props.img};
  return (
     
      <View>
      <View style={styles.header}>
        <View style={styles.welcome}>
          <Text style={{ color: "#A7A7A7", fontWeight: "bold", fontSize: 20 }}>
            {props.action}
          </Text>
          <Text style={styles.text}>{props.name}</Text>
        </View>

        <View style={styles.profileIcon}>
        <Image source={image}  style={styles.image} />

        </View>
      </View>
      <Underline />
    </View>
      




  );
}

export default CoinCardBuySell

const styles = StyleSheet.create({
   
    image: {

      width: '100%',
      height:  '100%',
    },
    text: {
      color: "white",
      fontWeight: "bold",
      fontSize: 25,
    },
    welcome: {
      justifyContent: "flex-start",
      left: 20,
      flexDirection: "column",
      flex: 0.7,
    },
    header: {
      height: 80,
      marginTop: "5%",
      flexDirection: "row",
    },
    profileIcon: {
      flexDirection: "column",
      justifyContent: "space-around",
      left: 80,
      width: 70,
      height: 70,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 90,
      backgroundColor: "black",
      // borderColor: "white",
      // borderWidth: 1,
      
    },
  });
  