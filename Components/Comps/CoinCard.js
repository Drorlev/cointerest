import { StyleSheet, Text, View, Image,TouchableOpacity} from "react-native";
import React, { useState, useEffect } from "react";
import { useNavigation } from '@react-navigation/native';

import pic from "../../assets/BTC.png";

const CoinCard = (props) => {
  const navigation = useNavigation();

  const btnCliked=()=>{
    //alert("1");
    navigation.navigate('InAppPages',{
      screen: 'BuySell',
      params: { transaction: {
        //email:props.email,
        coinName:props.name,
        op:props.op,
        coinPrice:props.value,
        coinImg: props.img,
        change:props.change,
        vol:props.vol
      } },
  })
  };
  const [colorText, setColorText] = useState({
    color: "blue",
  });
  let image ={ uri: props.img};
  console.log(props.img);


  return (
    <TouchableOpacity style={styles.container} onPress={()=> {
      btnCliked()
    }}>
  
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
        <Text style={styles.coinName}>{Number.parseFloat(props.value).toFixed(3).replace(/[.,]000$/, "")} $</Text>
        <Text style={(props.change >= 0) ? styles.green : styles.red}>{Number.parseFloat(props.change).toFixed(3).replace(/[.,]000$/, "")+"%"}</Text>
      </View>

    </TouchableOpacity>


  );
};

export default CoinCard;

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
  img: {
    //marginTop:2,
    alignSelf: "center",
    width: 40 ,
    height: 40 ,
    
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
