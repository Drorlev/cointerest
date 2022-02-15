import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import CoinCard from "./CoinCard";

const apiUrl = "http://194.90.158.74/bgroup53/test2/tar4/api/Coins";

const MarketCoinsComp = (props) => {
  // const [userEmail,setUserEmail]=useState();
  const [coin, setCoin] = useState();
  let flag;
  const getAssets = () => {
    switch (props.action) {
      case "Buy":
          console.log("MarketCoins:");
        console.log("bEFROE rENDER ", apiUrl);
        fetch(apiUrl, {
          method: "GET",
          headers: new Headers({
            "Content-Type": "application/json; charset=UTF-8",
            Accept: "application/json; charset=UTF-8",
          }),
        })
          .then((res) => {
            //console.log('res=', res);
            console.log("res.status", res.status);
            console.log("res.ok", res.ok);
            flag = res.ok;
            if (!flag) {
              setCoin(
                <View>
                  <Text style={styles.headerTxt}>No Assets</Text>
                </View>
              );
              return;
            }
            return res.json();
          })
          .then(
            (result) => {
              console.log("fetch Assets= ", result.Coin_name);
              if (result != undefined) {

                  let coinsList =result.map((asset,i) =>
                     <CoinCard name={asset.Coin_name} value={asset.Price_history[0].Coin_value}/>
                  );
                  setCoin(coinsList)
              }
            },
            (error) => {
              console.log("err post=", error);
            }
          );
        break;

      case "Sell":
        console.log("Sell");

        break;
    }
  };

  useEffect(() => {

    getAssets();
  }, [props]);
  return (
    <View style={styles.container}> 
      {coin}
    </View>
  );
};

export default MarketCoinsComp;

const styles = StyleSheet.create({
    container: {
     flex:1,
      },
  headerTxt: {
    color: "#fff",
    fontWeight: "bold",
    marginLeft: 10,
    marginBottom: 10,
    fontSize: 20,
  },
});
