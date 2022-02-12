import { StyleSheet, Text, View, Image } from "react-native";
import React, { useState, useEffect } from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import InsideFollowingCompStyle from "./InsideFollowingCompStyle";
const FollowingComp = (props) => {
  console.log(props);
  const [colorText, setColorText] = useState({
    bought: "green",
    sold: "red",
  });

  return (
    <>
      <View style={styles.body}>
        <View style={styles.followingInfo}>
          <InsideFollowingCompStyle name={"messi"} action={"bought"} number={10}/>
          <InsideFollowingCompStyle name={"messi"} action={"sold"} number={50}/>
        </View>
      </View>
    </>
  );
};

export default FollowingComp;

const styles = StyleSheet.create({
  
  followingInfo: {
    flexDirection: "column",
    backgroundColor: "#6136DA",
    flex: 1,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 10,
  },
  body: {
    flexDirection: "row",
    height: 120,
    marginTop: 10,
  },
  bodyText: {
    flexDirection: "row",
  },
  
});
