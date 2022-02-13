import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { TouchableOpacity } from "react-native-gesture-handler";
import Underline from "./Comps/Underline";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import SettingBtnComp from "./Comps/SettingBtnComp";
const hello = () => {
  alert("hello");
};
const SettingsPage = ({ route, navigation }) => {
  const goToStartPage = () => {
    console.log("in");

    //navigation.navigate('UserPage')
    navigation.popToTop();
  };

  const clearAsyncStorage = async () => {
    try {
      await AsyncStorage.clear().then(goToStartPage());
    } catch (e) {
      // error reading value
      alert("NoT!!");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.profileIcon}>
          <MaterialCommunityIcons
            name="camera-plus-outline"
            color={"white"}
            size={30}
          />
        </View>
        <View style={styles.UserInfo}>
          <Text style={styles.Username}>David Cohen</Text>
          <Text style={styles.UserBio}>Loves Krav Maga</Text>
        </View>
      </View>
      <Underline />
      <View style={styles.SettingsBtn}>
        <SettingBtnComp text={"Change Password"} icon={"chevron-right"} />
        <SettingBtnComp onPress={clearAsyncStorage} text={"Log Out"} icon={"logout"} />
      </View>

    </SafeAreaView>
  );
};

export default SettingsPage;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    flex: 1,
    backgroundColor: "#1A1A1A",
  },
  header: {
    flexDirection: "column",
    flex: 0.4,
    top: "6%",
    alignItems: "center",
  },
  profileIcon: {
    flexDirection: "column",
    width: 150,
    height: 150,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    backgroundColor: "black",
    borderColor: "white",
    borderWidth: 1.5,
  },
  UserInfo: {
    top: "5%",
    alignItems: "center",
  },
  Username: {
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
  },
  UserBio: {
    color: "#C7C7C7",
    fontWeight: "500",
    fontSize: 15,
    //letterSpacing:"-1.5%",
  },
  SettingsBtn: {
    flex: 0.6,
    top: "4%",
  },

  balance: {
    //flexDirection:'row',
    //paddingTop:30,
    //backgroundColor: '#1A1A1A',
    backgroundColor: "#504CF1",
    flex: 1,
    width: "100%",
    //color:'#fff'
    alignSelf: "center",
    borderRadius: 10,
    // justifyContent: 'center',
  },
  blnTxt: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 20,
    marginTop: 20,
    marginRight: 5,
    //justifyContent:'center'
  },
});
