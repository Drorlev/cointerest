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
                  let filterdRes;
                  filterdRes = result.filter((coin) => coin.Coin_name != "USD")
                  if(props.action.txt == ""){
                    coinsList =filterdRes?.map((asset) =>
                     <CoinCard key={asset?.Coin_name} name={asset.Coin_name} img={asset.Coin_picture} value={asset.Price_history[0].Coin_value} change={asset.Price_history[0].Percent_change_24h} op={props.action.op} vol={asset.Price_history[0].Volume_24h}/>
                  );
                  }
                  else{
                    let coins = filterdRes?.filter((coin) => coin.Coin_name.toLowerCase().includes(props.action.txt.toLowerCase()));
                   
                    coinsList = coins?.map((asset) =>
                      <CoinCard key={asset.Coin_name} name={asset.Coin_name} img={asset.Coin_picture} value={asset.Price_history[0].Coin_value} change={asset.Price_history[0].Percent_change_24h} op={props.action.op} vol={asset.Price_history[0].Volume_24h}/>
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

      const sellApiUrl = "http://194.90.158.74/bgroup53/test2/tar4/api/assets/?email="
        console.log("Sell "+ props.userEmail );
        //let coinsList = <><View style={styles.container}><Text style={styles.headerTxt}>Sell MF</Text></View></>
        fetch(sellApiUrl + props.userEmail, {
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
            console.log("Sell case flag : " + flag);
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
                console.log("-------in Sell----"+props.action.txt);
                  let coinsList;
                  let filterdRes;
                  filterdRes = result.filter((coin) => coin.Coin_name != "USD")
                  if(props.action.txt == ""){
                    let filterAssets = filterdRes.filter((asset) => asset.Amount > 0);
                    coinsList =filterAssets.map((asset) =>
                     <CoinCard key={asset.Coin_name} name={asset.Coin_name}  img={asset.Coin_info.Coin_picture} value={asset.Coin_info.Price_history[0].Coin_value} change={asset.Coin_info.Price_history[0].Percent_change_24h} op={props.action.op} vol={asset.Coin_info.Price_history[0].Volume_24h}/>
                  );
                  }
                  else{
                    let filterAssets = filterdRes.filter((asset) => asset.Amount > 0);
                    let coins = filterAssets.filter((coin) => coin.Coin_name.toLowerCase().includes(props.action.txt.toLowerCase()));
                   
                    coinsList =coins.map((asset) =>
                    <CoinCard key={asset.Coin_name} name={asset.Coin_name}  img={asset.Coin_info.Coin_picture} value={asset.Coin_info.Price_history[0].Coin_value} change={asset.Coin_info.Price_history[0].Percent_change_24h} op={props.action.op} vol={asset.Coin_info.Price_history[0].Volume_24h}/>
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
        
        //setCoin(coinsList)
        break;
    }
  };

  useEffect(() => {
    getAssets();
  }, [props]);
  return (
    
      <ScrollView style={styles.history} fadingEdgeLength={50}>
        <View style={styles.test}>{coin}</View>
        
      </ScrollView>
  
  );
};

export default MarketCoinsComp;

const styles = StyleSheet.create({
  test:{
    flex:1,
    paddingBottom:"5%",
  },
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
    flex: 0.9,
    width:"100%",
    //height:'100%',
     //height:2000,
    //color:'#fff'
    alignSelf: 'center',
    //borderRadius:10,
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
