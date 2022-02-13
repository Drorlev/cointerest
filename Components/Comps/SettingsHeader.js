import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const SettingsHeader = () => {
  return (
    <View style={styles.header}>
    <View style={styles.profileIcon}>
      <MaterialCommunityIcons
        name="camera-plus-outline"
        color={"white"}
        size={50}
      />
    </View>
    <View style={styles.UserInfo}>
      <Text style={styles.Username}>David Cohen</Text>
      <Text style={styles.UserBio}>Loves Krav Maga</Text>
    </View>
  </View>
  )
}

export default SettingsHeader

const styles = StyleSheet.create({

    header: {
        flexDirection: "column",
        flex: 0.4,
        top: "6%",
        alignItems: "center",
      },
      profileIcon: {
        flexDirection: "column",
        width: 150,
        height: 150,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 100,
        backgroundColor: "black",
        borderColor: "white",
        borderWidth: 2,
      },
      UserInfo: {
        top: "5%",
        alignItems: "center",
      },
      Username: {
        color: "white",
        fontSize: 25,
        fontWeight: "bold",
      },
      UserBio: {
        color: "#C7C7C7",
        fontWeight: "500",
        fontSize: 15,
      },

    
})