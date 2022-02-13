import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Underline = () => {
  return (
    <View
    style={{
      flexDirection: "row",
      alignItems: "center",
      marginBottom:10,

    }}
  >
    <View
      style={{
        position: "absolute",
        width: '90%',
        height: 1,
        left: 17,
        backgroundColor: "#474747",
      }}
    />
  </View>
  )
}

export default Underline

const styles = StyleSheet.create({})