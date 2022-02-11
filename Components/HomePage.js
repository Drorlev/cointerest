import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React, { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";


//START OF THE HOME PAGE
const HomePage = ({ route, navigation }) => {
  const [user, setUser] = useState();

  const getData = async () => {
    try {
      //const jsonValue = await AsyncStorage.getItem('@loggedInUser')
      const jsonVal = await AsyncStorage.getItem("loggedInUserEmail");
      console.log("Home Page ", jsonVal);
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
      <View>
        <Text onPress={getData}>Hello World</Text>
        <Text>This is HomePage</Text>
      </View>
    </SafeAreaView>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  container: {
    //flexDirection:'row',
    //paddingTop:30,
    //backgroundColor: '#1A1A1A',
    flex: 1,
    alignItems: "center",
    justifyContent: "center",

    /*
        marginTop: 0,
        flex: 1,
        backgroundColor: '#1A1A1A'
        */
  },
});
