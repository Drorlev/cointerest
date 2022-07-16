import { StyleSheet, Text, View, SafeAreaView,BackHandler,Alert  } from "react-native";
import React, { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Balance from "./Comps/Balance";
import WelcomeHeader from "./Comps/WelcomeHeader";
import FollowingComp from "./Comps/FollowingComp";
import HeadlineInHomePageWithChevron from "./Comps/HeadlineInHomePageWithChevron";
import { useIsFocused } from "@react-navigation/native";
import Transactions from "./Comps/Transactions";
import Feed from "./Comps/FeedComp";


//START OF THE HOME PAGE
const HomePage = ({ route, navigation }) => {
  const isFocused = useIsFocused();
  const [isLoading,setIsLoading]=useState(true);
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
      AsyncStorage.getItem('loggedInUserEmail').then((token) => {
        //setUserEmail(token)
        console.log("use effect ",token)
        setUser(token)
        const backHandler = BackHandler.addEventListener('hardwareBackPress', () => true)
        return () => backHandler.remove()
      })
      if(user != undefined){
      setIsLoading(false);
      console.log("error");
      }
      
      
  }, [isFocused,user]);

  if(isLoading){
    return <View><Text>Loading...</Text></View>
  }
  return (
    <SafeAreaView style={styles.container}>
      <WelcomeHeader email={user} />
      <View style={{ left: 20}}>
        <Text style={styles.text}>Balance</Text>
      </View>
      <View style={{ height:120}}>
      <Balance email={user} balance={14000} />
      </View>
      <HeadlineInHomePageWithChevron text={"Following"}/>
      <Feed email={user}/>
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
    marginBottom:"5%"
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