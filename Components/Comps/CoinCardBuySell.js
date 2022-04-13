import { StyleSheet, Text, View, Image } from "react-native";
import Underline from "./Underline";

import React, { useState } from "react";

const CoinCardBuySell = (props) => {
  const [color, setColor] = useState("red");

  let image = { uri: props.img };
  return (
    <View>
      <View style={styles.header}>
        <Text
          style={{
            color: "#A7A7A7",
            fontWeight: "bold",
            fontSize: 20,
            marginBottom: "2%",
          }}
        >
          {props.name}
        </Text>
        <View style={styles.profileIcon}>
          <Image source={image} style={styles.image} />
        </View>
        <View style={styles.welcome}>
          {/* <Text style={{ color: "#A7A7A7", fontWeight: "bold", fontSize: 20 }}>
            {props.action}
          </Text> */}
          <Text style={styles.text}>{"$" + props.value}</Text>
          <Text style={props.precentage}>{props.change + "%"}</Text>
        </View>
      </View>
      <Underline />
    </View>
  );
};

export default CoinCardBuySell;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: "100%",
  },
  text: {
    color: "white",
    fontWeight: "bold",
    fontSize: 25,
  },
  welcome: {
    justifyContent: "center",
    alignItems: "center",

    flexDirection: "column",
    flex: 0.7,
  },
  header: {
    height: 150,
    marginTop: "2%",
    alignItems: "center",
    flexDirection: "column",
  },
  profileIcon: {
    width: "15%",
    height: "40%",
    borderRadius: 90,
    backgroundColor: "black",
    marginBottom: "2%",
    // borderColor: "white",
    // borderWidth: 1,
  },
});
