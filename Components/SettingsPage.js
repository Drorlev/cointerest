import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React, { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { TouchableOpacity } from "react-native-gesture-handler";
import Underline from "./Comps/Underline";
import SettingBtnComp from "./Comps/SettingBtnComp";
import SettingsHeader from "./Comps/SettingsHeader";
import BottomSheet from "./Comps/BottomSheet";
import { useIsFocused } from "@react-navigation/native";
import * as ImagePicker from 'expo-image-picker';


const SettingsPage = ({ route, navigation }) => {
  const isFocused = useIsFocused();
  const [isLoading,setIsLoading]=useState(true);
  const [user, setUser] = useState();
  const [imgUrl, setimgUrl] = useState();

  let openImagePickerAsync = async () => {
    
    let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 4],
      });

      if (pickerResult.cancelled === true) {
        return;
      }
     
     imageUpload(pickerResult.uri,user+".jpg" );
     
  
  }

  const imageUpload = (imgUri, picName) => {
    console.log("mashu mashu 2131231231 ==========="+imgUri);
    let urlAPI = "https://proj.ruppin.ac.il/bgroup53/test2/tar4/uploadpicture";
    let dataI = new FormData();
    dataI.append("picture", {
      uri: imgUri,
      name: picName,
      type: "image/jpg",
    });

    const config = {
      method: "POST",
      body: dataI,
    };

    fetch(urlAPI, config)
      .then((res) => {
        if (res.status == 201) {
          return res.json();
        } else {
          return "err";
        }
      })
      .then((responseData) => {
            setimgUrl(responseData);
        // setPicUri(responseData);
      })
      .catch((err) => {
        alert("err upload= " + err);
      });
  };


  

  const HandleData = (data)=>{
    switch(data) {

      case 'Change Password':
        console.log("change password");
        break;
      
      case 'Log Out':
        clearAsyncStorage();
      break;

      case 'Upload Image':
        openImagePickerAsync();
        break;
    
      }
    }
    
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

  useEffect(() => {
    AsyncStorage.getItem('loggedInUserEmail').then((token) => {
      //setUserEmail(token)
      console.log("use effect ",token)
      setUser(token)
      
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
      <SettingsHeader email={user} pic_url={imgUrl} />
      <Underline />
      <View style={styles.SettingsBtn}>

        {/* <SettingBtnComp text={"Change Password"} icon={"chevron-right"} sendData={HandleData} /> */}
        <SettingBtnComp text={"Upload Image"} icon={"chevron-right"} sendData={HandleData} />
        <SettingBtnComp text={"Log Out"} icon={"logout"} sendData={HandleData} /> 
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
  text:{
    backgroundColor:"red",
    color: "white",
  },
  button1: {
    //left: "25%",
    alignSelf: "flex-end",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
