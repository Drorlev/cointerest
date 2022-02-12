import { StyleSheet, Text, View, SafeAreaView,Image } from "react-native";
import React, { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Balance from "./Comps/Balance";

//START OF THE HOME PAGE
const HomePage = ({ route, navigation }) => {
  const [user, setUser] = useState();
  const [colorText,setColorText]=useState({
    bought:"green",
    sold:"red"
  }
  );
  const getData = async () => {
    try {
      //const jsonValue = await AsyncStorage.getItem('@loggedInUser')
      const jsonVal = await AsyncStorage.getItem("loggedInUserEmail");
      console.log("Home Page ", jsonVal["Username"]);
      //return jsonValue != null ? await JSON.parse(jsonValue) : null;
      //return  jsonVal;
      setUser(await AsyncStorage.getItem("loggedInUserEmail"));
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getData();
    console.log("after render ", user);
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.welcome}>
          <Text
            onPress={getData}
            style={{ color: "#A7A7A7", fontWeight: "bold", fontSize: 20 }}
          >
            Welcome,
          </Text>
          <Text onPress={getData} style={styles.text}>
            idan the king
          </Text>
        </View>
        <View style={styles.profileIcon}>
          <MaterialCommunityIcons
            name="camera-plus-outline"
            color={"white"}
            size={30}
          />
        </View>
      </View>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          padding: 10,
        }}
      >
        <View
          style={{
            position: "absolute",
            width: 356,
            height: 2,
            left: 17,
            backgroundColor: "#474747",
          }}
        />
      </View>
      <View style={{ left: 20}}>
        <Text style={styles.text}>Your Protfolio</Text>
      </View>
      <View style={{ height:120}}><Balance balance={14000} /></View>

      <View style={styles.bodyText}>
        <View style={styles.following}>
          <Text style={styles.text}>Following</Text>
          <MaterialCommunityIcons
            name="chevron-right"
            color={"white"}
            size={30}
            style={{ top: 5, left: 4 }}
          />
        </View>
      </View>
      <View style={styles.body}>

        <View style={styles.followingInfo}>
          <View style={styles.followingComp}>
          <Text style={styles.textInComp}>
            <Text style={{ color: "white", fontWeight: "bold", fontSize: 27 }}>
              leo messi
            </Text>
            <Text style={{ color: colorText.bought }}> bought</Text> <Text style={{fontSize:24}}>10</Text>
            
            </Text>
            <Image style={{resizeMode: "contain",
            height: 40,
            width: 30,
            left:30}}  source={require("../assets/BTC.png") } />
          </View>
          <View style={styles.followingComp}>
          <Text style={styles.textInComp}>
            <Text style={{ color: "white", fontWeight: "bold", fontSize: 27 }}>
              leo messi
            </Text>
            <Text style={{ color: colorText.sold }}> sold</Text> <Text style={{fontSize:24}}>50</Text>
            
            </Text>
            <Image style={{resizeMode: "contain",
            height: 40,
            width: 30,
            left:30}}  source={require("../assets/BTC.png") } />
          </View>
      
        </View>
      </View>
      <View style={styles.Watchlist}>
        <Text style={styles.text}>Watchlist</Text>
        <MaterialCommunityIcons
            name="chevron-right"
            color={"white"}
            size={30}
            style={{ top: 4, left: 4 }}
          />
      </View>
    </SafeAreaView>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  followingComp:{
   borderRadius: 11,
    backgroundColor: "#4F28AB",
    height: 45,
    top: 10,
    marginBottom: 10,
    width: 330,
    left: 10,
    flexDirection: "row",

  },
  container: {
    flexDirection: "column",
    flex: 1,
    backgroundColor: "#1A1A1A",
  },
  Watchlist:{
    justifyContent: "flex-start",
    left: 20,
    flexDirection: "row",
    marginTop:10,
    
  },

  textInComp: {
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: 0, height: 3 },
    textShadowRadius: 10,
    color: "white",
    fontSize: 27,
    textAlign: "center",
    left:10,
  },
  followingInfo: {
    flexDirection: "column",
    backgroundColor: "#6136DA",
    flex: 1,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 10,
  },
  header: {
    height: 80,
    marginTop: 60,
    flexDirection: "row",
    
  },
  body: {
    flexDirection: "row",
    height: 120,
    marginTop: 10,
  },
  bodyText: {
    flexDirection: "row",
  },
  following: {
    justifyContent: "flex-start",
    left: 20,
    flexDirection: "row",
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
  },
  profileIcon: {
    flexDirection: "column",
    marginLeft: 130,
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    backgroundColor: "black",
    borderColor: "white",
    borderWidth: 1.5,
  },
});