import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import CoinCard from "./CoinCard";

const apiUrl = "http://194.90.158.74/bgroup53/test2/tar4/api/Coins";

const MarketCoinsComp = (props) => {
  // const [userEmail,setUserEmail]=useState();
  const [coin, setCoin] = useState();
  let flag;
  const getAssets = () => {
    console.log("MarketCoinsComp:");
    console.log("MarketCoinsComp: " + props.action.op);
    switch (props.action.op) {
      case "Buy":
        console.log("Buy case");
        //console.log("bEFROE rENDER ", apiUrl);
        fetch(apiUrl, {
          method: "GET",
          headers: new Headers({
            "Content-Type": "application/json; charset=UTF-8",
            Accept: "application/json; charset=UTF-8",
          }),
        })
          .then((res) => {
            //console.log('res=', res);
            //console.log("res.status", res.status);
            //console.log("res.ok", res.ok);
            
            flag = res.ok;
            console.log("Buy case flag : " + flag);
            /*
            if (!flag) {
              setCoin(
                <View>
                  <Text style={styles.headerTxt}>No Assets</Text>
                </View>
              );
              return;
            }
            */
            return res.json();
          })
          .then(
            (result) => {
              console.log("fetch Assets= ", result.Coin_name);
              if (result != undefined) {
                console.log("-------inBuy----"+props.action.txt);
                  let coinsList;
                  
                  if(props.action.txt == ""){
                  coinsList =result.map((asset) =>
                     <CoinCard key={asset.Coin_name} name={asset.Coin_name} img={asset.Coin_picture} value={asset.Price_history[0].Coin_value} change={asset.Price_history[0].Percent_change_24h}/>
                  );
                  }
                  else{
                    let coins = result.filter((coin) => coin.Coin_name.toLowerCase().includes(props.action.txt.toLowerCase()));
                   
                    coinsList =coins.map((asset) =>
                      <CoinCard key={asset.Coin_name} name={asset.Coin_name} img={asset.Coin_picture} value={asset.Price_history[0].Coin_value} change={asset.Price_history[0].Percent_change_24h}/>
                  );
                  }
                  
                 /*
               
               */
              /*
                  coinsList =result.map((asset) =>
                  <CoinCard key={asset.Coin_name} name={asset.Coin_name} img={asset.Coin_picture} value={asset.Price_history[0].Coin_value}/>
               );

               let transactionsList =result.map(asset => 
                <CoinCard key={asset.Coin_name} name={asset.Coin_name} img={asset.Coin_picture} value={asset.Price_history[0].Coin_value}/>
              );
              */
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
        let coinsList = <><View style={styles.container}><Text style={styles.headerTxt}>Sell MF</Text></View></>
        setCoin(coinsList)
        break;
    }
  };

  useEffect(() => {
    getAssets();
  }, [props]);
  return (
    
      <ScrollView style={styles.history}
      contentContainerStyle={{paddingBottom: "100%", flexGrow:1}}>
        {coin}
      </ScrollView>
  
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
    fontSize: 20
  },
  assets:{
    flex:1,
   // backgroundColor: 'lightblue',
    borderRadius:10,
  },
  history: {
    //flexDirection:'row',
    //paddingTop:30,
    //backgroundColor: '#1A1A1A',
    //backgroundColor: 'lightblue',
    flex: 0.9,
    width:"100%",
     height:2000,
    //color:'#fff'
    alignSelf: 'center',
    borderRadius:10,
    // justifyContent: 'center',
  },
  container2: {
    marginTop:5,
  //flexDirection:'row',
    //paddingTop:30,
    //backgroundColor: '#1A1A1A',
    backgroundColor: '#1A1A1A',
    flex: 1,
    width:"90%",
    alignSelf: 'center',
    justifyContent:"center",
    //marginBottom:"20%",
  },

});
