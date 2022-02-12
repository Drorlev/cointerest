import { StyleSheet, Text, View,Image} from 'react-native'
import React, { useState, useEffect } from "react";

const InsideFollowingCompStyle = (props) => {
    const [colorText, setColorText] = useState({
        color: "blue",
      });
      useEffect(() => {
        if(props.action == "sold" ){
            setColorText({
               color:"red"
              });
        }
        else{
            setColorText({
                color:"green"
               });
        }      }, [props]);


    
   
  return (
    <View style={styles.followingComp}>
    <Text style={styles.textInComp}>
      <Text
        style={{ color: "white", fontWeight: "bold", fontSize: 27 }}
      >
        {props.name}
      </Text>
      <Text style={{ color: colorText.color }}> {props.action}</Text>{" "}
      <Text style={{ fontSize: 24 }}>{props.number}</Text>
    </Text>
    <Image
      style={{ resizeMode: "contain", height: 40, width: 30, left: 30 }}
      source={require("../../assets/BTC.png")}
    />
  </View>
  )
}

export default InsideFollowingCompStyle

const styles = StyleSheet.create({
    followingComp: {
        borderRadius: 11,
        backgroundColor: "#4F28AB",
        height: 45,
        top: 10,
        marginBottom: 10,
        width: '94%',
        left: 10,
        flexDirection: "row",
      },
      textInComp: {
        textShadowColor: "rgba(0, 0, 0, 0.75)",
        textShadowOffset: { width: 0, height: 3 },
        textShadowRadius: 10,
        color: "white",
        fontSize: 27,
        textAlign: "center",
        left: 10,
      },
    
})