import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React, { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Balance from './Comps/Balance';

let val;

const clearAsyncStorage = async () => {
  try {
    await AsyncStorage.clear().then(alert(cleared));

    //alert("cleard")
  } catch (e) {
    // error reading value
    alert("NoT!!");
  }
};

const dataToConsole = () => {
  getData().then((res) => {
    val = res;
  });
  console.log("the val", val);
};

const clearAllData = () => {
  alert("1");
  try {
    alert("2");
    AsyncStorage.getAllKeys()
      .then((keys) => AsyncStorage.multiRemove(keys))
      .then(() => alert("success"));
  } catch (e) {
    // error reading value
    alert("NoT!!");
  }
};

const pressMe = () => {
  clearAsyncStorage();
};

//START OF THE HOME PAGE
const HomePage = ({ route, navigation }) => {
  const [user, setUser] = useState();

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
      <View style={{left:20}}>
      <Text style={styles.text}>Your Protfolio</Text>

      </View>
      <Balance balance={14000}/>
      <View style={styles.bodyText}>
      <View style={styles.following}>
      <Text style={styles.text}>Following</Text>
      <MaterialCommunityIcons
            name="chevron-right"
            color={"white"}
            size={30}
            style={{top:5,left:4}}
          />

      </View>

      <View style={styles.trending}>
      <Text style={styles.text}>Trending</Text>
      <MaterialCommunityIcons
            name="chevron-right"
            color={"white"}
            size={30}
            style={{top:5,left:4}}
          />
      </View>
      </View>
      <View style={styles.body}>
      <View style={styles.followingInfo}>
      <Text style={styles.textInComp}>leo messi</Text>
      <Text style={styles.textInComp2}>sold 0.4 Bitcoin</Text>

      </View>
      <View style={styles.trendingInfo}>
      <Text style={styles.textInCompTrend1}>@elonmusk</Text>
      <Text style={styles.textInCompTrend2}>Elon just tweeted about Doge</Text>
      </View>
      </View>

    </SafeAreaView>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    flex: 1,
    backgroundColor: "#1A1A1A",
  },
  textInCompTrend2:{
    color:"white",
    fontSize:17,
    textAlign:"center",
    borderRadius: 11,
    backgroundColor: "#4F28AB",
    height:65,
    top:10,
  },
  textInCompTrend1:{
    color:"white",
    fontSize:20,
    fontWeight: "bold",
    textAlign:"center",
    
  },
  textInComp2:{
    color:"white",
    fontSize:17,
    textAlign:"center",
    borderRadius: 11,
    backgroundColor: "#4F28AB",
    height:65,
    top:10,
  },
  textInComp:{
    color:"white",
    fontSize:20,
    fontWeight: "bold",
    textAlign:"center",

  },
  trendingInfo:{
    flexDirection:"column",
    backgroundColor: "#6136DA",
    width:150,
    marginLeft:50,
    borderRadius: 10,

  },
  followingInfo:{
    flexDirection:"column",
    backgroundColor: "#6136DA",
    width:150,
    marginLeft:20,
    borderRadius: 10,

  },
  trending:{
    flexDirection: "row",
    marginLeft: 80,
  },
  header: {
    height: 80,
    marginTop: 60,
    flexDirection: "row",
  },
  body:{
    flexDirection: "row",
    height: 100,
    marginTop:10,
  },
  bodyText:{
   // marginTop:10,
    //height: 200,
    flexDirection: "row",
  },
  following:{
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
