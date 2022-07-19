import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import Asset from "./Asset";

const apiUrl = "http://194.90.158.74/bgroup53/test2/tar4/api/Assets/?email=";
//render the whole assetes
//Asset will be ready later on
//<Assets/>
const Assets = (props) => {
  // console.log("in Assets",props.email)
  const [userEmail, setUserEmail] = useState();
  const [assets, setAssets] = useState();
  //send name in props!!
  //do the fetch based on props email

  let flag;
  const getAssets = () => {
    //console.log("bEFROE rENDER ",apiUrl + props.email)
    fetch(apiUrl + props.email, {
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
          setAssets(
            <View>
              <Text style={styles.headerTxt}>No Assets!!!</Text>
            </View>
          );
          return;
        }
        return res.json();
      })
      .then(
        (result) => {
          console.log("fetch Assets= ", result);
          if (result != undefined) {
            let filterAssets = result.filter((asset) => asset.Amount > 0);
            let assetsList = filterAssets.map((asset) => (
              <Asset
                key={asset.Coin_name}
                img={asset.Coin_info.Coin_picture}
                amount={Number.parseFloat(asset.Amount).toFixed(3).replace(/[.,]000$/, "")}
              />
            ));

            setAssets(assetsList);
          }
        },
        (error) => {
          console.log("err post=", error);
        }
      );
  };

  useEffect(() => {
    //setUserEmail(props.email)
    //();
    //console.log("Assets ", props.email)
    getAssets();
  }, [props]);
  return (
    <View style={styles.container}>
      <Text style={styles.headerTxt}>Assets Collection</Text>
      <ScrollView horizontal={true} style={styles.assets} fadingEdgeLength={50}>
        {assets}
      </ScrollView>
    </View>
  );
};

export default Assets;

const styles = StyleSheet.create({
  container: {
    //flexDirection:'row',
    //paddingTop:30,
    //backgroundColor: '#1A1A1A',

    flex: 0.23,
    width: "97%",
    //color:'#fff'
    marginTop: 5,
    alignSelf: "center",
    marginBottom: 10,
    
    // justifyContent: 'center',
  },
  text: {
    color: "white",
  },
  headerTxt: {
    color: "#fff",
    fontWeight: "bold",
    marginLeft: "6%",
    marginBottom: 10,
    fontSize: 20,
  },
  assets: {
    flex: 1,
    // backgroundColor: 'lightblue',
    borderRadius: 10,
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    
  },
});
