import { StyleSheet, Text, View } from 'react-native'
import React,{useEffect,useState} from 'react'

const apiUrl = "http://194.90.158.74/bgroup53/test2/tar4/api/Coins";

const Coins = () => {
    const [coins,setCoins]=useState();


    const getCoinsCurrentValue=()=>{
        fetch(apiUrl , {
            method: 'GET',
            headers: new Headers({
              'Content-Type': 'application/json; charset=UTF-8',
              'Accept': 'application/json; charset=UTF-8'
            })
          })
            .then(res => {
              console.log('res=', res);
              console.log('res.status', res.status);
              console.log('res.ok', res.ok);
              return res.json()
            })
            .then(
              (result) => {
                console.log("fetch Coins= ", result);
                let ing =result?.map(rec =>
                   console.log(rec)
                )
                //console.log(ing);
                //setIngredients(ing);
                
              },
              (error) => {
                console.log("err post=", error);
              });
    }


    useEffect(() => {
        getCoinsCurrentValue();
      },[]);
  return (
    <View>
      <Text>Coins</Text>
    </View>
  )
}

export default Coins

const styles = StyleSheet.create({})