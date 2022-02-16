import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const CoinCardBuySell = (props) => {

    let image ={ uri: props.img};
  return (
    <View style={styles.container}>
       <View style={styles.Coin}>
        <Image source={image} style={styles.img} />
      </View>
      <View style={styles.CoinInfo}>
        <Text style={styles.coinName}>{props.name}</Text>
      </View>
      <View style={styles.CoinGraph}>
        <Text style={styles.coinName}></Text>
      </View>
      <View style={styles.Precent}>
        <Text style={styles.coinName}>{props.value} $</Text>
      </View>
    </View>
  )
}

export default CoinCardBuySell

const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      height: 80,
  
      
      //flex: 1,
      marginTop: "5%",
      width: "92%",
      alignSelf: "center",
      backgroundColor: "#1C1C1C",
     
      borderRadius: 10,
      shadowColor: "black",
      shadowOffset: {
        width: 0,
        height: 5,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4.84,
  
      elevation: 5,
    },
    Coin: {
      flexDirection: "column",
      flex: 0.3,
      justifyContent:"center",
     
    },
    CoinInfo: {
      flexDirection: "column",
      flex: 0.3,
      
    },
    CoinGraph: {
      flexDirection: "column",
      flex: 0.05,
      
    },
    Precent: {
      flexDirection: "column",
      flex: 0.4,
      
    },
    coinName: {
      color: "white",
      fontSize: 23,
      fontWeight: "bold",
      textAlign: "center",
      top: "35%",
    },
    coinPrecent: {
      color: "red",
      fontSize: 15,
      fontWeight: "bold",
      alignSelf: "center",
      textAlign: "center",
      top: "35%",
    },
    img: {
      //marginTop:2,
      alignSelf: "center",
      width: 40,
      height: 40,
    },
  });
  