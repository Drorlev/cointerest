import { StyleSheet, Text, View, SafeAreaView, Alert, Modal, Pressable, } from "react-native";
import React, { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Underline from "./Comps/Underline";
import SettingBtnComp from "./Comps/SettingBtnComp";
import { TextInput } from 'react-native-gesture-handler';
import SettingsHeader from "./Comps/SettingsHeader";
import { useIsFocused } from "@react-navigation/native";
import * as ImagePicker from 'expo-image-picker';

let email =""
const SettingsPage = ({ route, navigation }) => {
  const isFocused = useIsFocused();
  const [isLoading,setIsLoading]=useState(true);
  const [user, setUser] = useState();
  const [imgUrl, setimgUrl] = useState();
  const [modalVisible, setModalVisible] = useState(false);
  const [bio, setBio] = useState("");

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


  const editBio = () =>{
    //alert(bio + " 132 "+ email)
    //setModalVisible(!modalVisible)
    let value = bio
    fetch("http://194.90.158.74/bgroup53/test2/tar4/api/Users/?id=0&email="+email+"&value="+bio, {
      method: "PUT",
      body: JSON.stringify(),
      headers: { 'Content-Type': 'application/json' },
    })
      .then((res) => {
        console.log("res=", res.ok);
        (res.ok ? setModalVisible(!modalVisible) : "no_op");
        return res.json();
      })
      .then(
        (result) => {
          alert(result)
          console.log("fetch logInlOG POST= ", result);
        },
        (error) => {
          alert(error)
          console.log("err post=", error);
        }
      );  
  }
  
  
  const HandleData = (data)=>{
    switch(data) {

      case 'Edit Bio':
        setModalVisible(true)
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
    navigation.navigate('Start')
    //navigation.popToTop();
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
      email = token
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
        <SettingBtnComp text={"Edit Bio"} icon={"chevron-right"} sendData={HandleData} />
        <SettingBtnComp text={"Log Out"} icon={"logout"} sendData={HandleData} /> 
        <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => {
                setModalVisible(!modalVisible);
              }}
            >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text style={styles.smallHeader}>Edit Bio</Text>
                <View style={styles.search}>
                  <TextInput  style={styles.input}
                                      placeholder="Enter Bio"   
                                      placeholderTextColor="#1A1A1A" 
                                      onChangeText={setBio}
                                      maxLength={30}
                                      />
                </View>
                <Pressable
                  style={[styles.button3, styles.buttonClose]}
                  onPress={editBio}
                >
                  <Text style={styles.textStyle}>Save</Text>
                </Pressable>
              </View>
            </View>
          </Modal>
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
  centeredView: {
    flex: 1,
    width:"100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
    backgroundColor:'#1A1A1A'
  },
  modalView: {
    margin: 20,
    width:"100%",
    flex:0.4,
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  smallHeader:{
    color:"white",
    fontSize:20,
    fontWeight:"bold",
    textAlign:"center",
    marginTop:"5%"

  },
  buttonClose: {
    backgroundColor: "#6136DA",
    marginTop:"10%",
    
  },
  search:{
    width: 300,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    alignSelf:"center",
    borderColor:'#fff',
    borderRadius:10,
    flexDirection:'row',
    //borderWidth: 1,
    marginTop:10,
  },
  input:{
    borderColor:'white',
   // backgroundColor:"red",
    borderRadius:10,
    color:'black',
    alignSelf:'center',
    borderWidth: 1,
    textAlign: 'center',
    flex:1,
    height:'100%',
    
},
button3: {
  borderRadius: 20,
  padding: 10,
  elevation: 2.
},
textStyle: {
  color: "white",
  fontWeight: "bold",
  textAlign: "center",
  fontSize:19
},
});
