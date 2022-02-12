import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const HeadlineInHomePageWithChevron = (props) => {
  return (
    <View style={styles.Watchlist}>
    <Text style={styles.text}>{props.text}</Text>
    <MaterialCommunityIcons
        name="chevron-right"
        color={"white"}
        size={30}
        style={{ top: 4, left: 4 }}
      />
  </View>
  )
}

export default HeadlineInHomePageWithChevron

const styles = StyleSheet.create({

    text: {
        color: "white",
        fontWeight: "bold",
        fontSize: 25,
      },
      Watchlist:{
        justifyContent: "flex-start",
        left: 20,
        flexDirection: "row",
        marginTop:10,
        
      },
})