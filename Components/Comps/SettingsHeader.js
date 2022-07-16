import { StyleSheet, Text, View, TouchableOpacity, Modal,Image } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import React, { useState, useEffect } from "react";

import CameraComp from "./CameraComp";
const apiUrl = "http://194.90.158.74/bgroup53/test2/tar4/api/Users/?email=";




const SettingsHeader = (props) => {

  const [state, setState] = useState({
    isVisible: false,
  });
  const [user, setUser] = useState();
  const [profileImg, setProfileImg] = useState();
  const [bio, setBio] = useState();



  const getData = (data)=>{
    setProfileImg(data);
    displayModal(!state.isVisible);
    };
    
  // hide show modal
  const displayModal = (show) => {
    setState({ isVisible: show });
  };

  const getUser = () => {
    fetch(apiUrl + props.email + "&n=1", {
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json; charset=UTF-8",
        Accept: "application/json; charset=UTF-8",
      }),
    })
      .then((res) => {
        console.log("res.status ", res.status);
        console.log("res.ok ", res.ok);
        return res.json();
      })
      .then(
        (result) => {
          setUser(result.Username);
          setProfileImg(result.Image);
          setBio(result.bio)
        },
        (error) => {
          console.log("err post=", error);
        }
      );
  };

  useEffect(() => {
    getUser();
  }, [state,props,profileImg]);

  return (
    <View style={styles.header}>
      <Modal
        animationType={"slide"}
        transparent={false}
        visible={state.isVisible}
        onRequestClose={() => {
          displayModal(!state.isVisible);
        }}
        
      >
        <CameraComp sendData={getData} user={props.email} />
      </Modal>
      <TouchableOpacity
        onPress={() => {
          displayModal(true);
        }}
      >
        <View style={styles.profileIcon}>
          <Image source={{uri:profileImg}} style={styles.image} />
        </View>
      </TouchableOpacity>

      <View style={styles.UserInfo}>
        <Text style={styles.Username}>{user}</Text>
        <Text style={styles.UserBio}>{bio}</Text>
      </View>
    </View>
  );
};

export default SettingsHeader;

const styles = StyleSheet.create({

  image: {

    width: '100%',
    height:  '100%',
  },
  closeText: {
    color: "white",
    alignItems: "center",
    textAlign: "center",
    borderRadius: 4,
    width: "20%",
    backgroundColor: "black",
    left: "40%",
    bottom: "1%",
  },
  header: {
    flexDirection: "column",
    flex: 0.4,
    top: "10%",
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
    borderWidth: 3,
    resizeMode: 'contain',
    overflow: "hidden",
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
  },
});
