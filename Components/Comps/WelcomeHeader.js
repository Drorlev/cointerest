import { StyleSheet, Text, View, Image,BackHandler} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import React, { useState, useEffect } from "react";
const apiUrl = "http://194.90.158.74/bgroup53/test2/tar4/api/Users/?email=";
import Underline from "./Underline";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useIsFocused } from "@react-navigation/native";

const WelcomeHeader = (props) => {
  const isFocused = useIsFocused();

  const [user, setUser] = useState();
  const [profileImg, setProfileImg] = useState();
  // const userEmail = await AsyncStorage.getItem('loggedInUserEmail')

  const getData = async () => {
    try {
      const value  = await AsyncStorage.getItem('loggedInUserEmail')
      if(value !== null) {
        console.log("----------------------------------"+value);
        return value
      }
    } catch(e) {
      // error reading value
    }
  }
  const getUser = () => {
    
    fetch(apiUrl + props.email + "&n=1", {
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json; charset=UTF-8",
        Accept: "application/json; charset=UTF-8",
      }),
    })
      .then((res) => {
        //console.log('res=', res);
        console.log("res.status ", res.status);
        console.log("res.ok ", res.ok);
        return res.json();
      })
      .then(
        (result) => {
          setUser(result.Username);
          setProfileImg(result.Image);
        },
        (error) => {
          console.log("err post=", error);
        }
      );
  };

  useEffect(() => {
    let value=getData()
    getUser();
  }, [isFocused]);
  
  return (
    <View>
      <View style={styles.header}>
        <View style={styles.welcome}>
          <Text style={{ color: "#A7A7A7", fontWeight: "bold", fontSize: 20 }}>
            Welcome,
          </Text>
          <Text style={styles.text}>{user}</Text>
        </View>

        <View style={styles.profileIcon}>
        <Image source={{uri:profileImg}}  style={styles.image} />

        </View>
      </View>
      <Underline />
    </View>
  );
};

export default WelcomeHeader;

const styles = StyleSheet.create({
  image: {

    width: '100%',
    height:  '100%',
  },
  text: {
    color: "white",
    fontWeight: "bold",
    fontSize: 25,
  },
  welcome: {
    justifyContent: "flex-start",
    left: 20,
    flexDirection: "column",
    flex: 0.7,
  },
  header: {
    height: 80,
    marginTop: 60,
    flexDirection: "row",
  },
  profileIcon: {
    flexDirection: "column",
    justifyContent: "space-around",
    left: 80,
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    backgroundColor: "black",
    borderColor: "white",
    borderWidth: 1.5,
    resizeMode: 'contain',
    overflow: "hidden",
  },
});
