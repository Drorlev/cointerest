import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { Camera } from "expo-camera";


export default function CameraComp(props) {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [camera, setCamera] = useState(null);
  const [picUri, setPicUri] = useState();
  const [email, setEmail] = useState(props.user);


  const imageUpload = (imgUri, picName) => {
 
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
        snapClicked(responseData);
        setPicUri(responseData);
      })
      .catch((err) => {
        alert("err upload= " + err);
      });
  };

  const snapClicked = (val) => {
    props.sendData(val);
  };

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      if(status !== null){
      setHasPermission(status === "granted");
      }
      
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <View style={styles.container}>
      <Camera style={styles.camera} ref={(ref) => setCamera(ref)} type={type}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}
          >
            <Text style={styles.text}> Flip </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={async () => {
              if (camera) {
                const data = await camera.takePictureAsync({quality : 0.4});
                imageUpload(data.uri, email + ".jpg");
                
              }
            }}
          >
            <Text style={styles.text}> Snap </Text>
          </TouchableOpacity>
          
        </View>
        
      </Camera>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: "transparent",
    flexDirection: "row",
    margin: 20,
  },
  button: {
    flex: 0.2,
    alignSelf: "flex-end",
    alignItems: "center",
  },
  button1: {
    left: "25%",
    alignSelf: "flex-end",
    alignItems: "center",
    justifyContent: "space-between",
  },
  text: {
    fontSize: 18,
    color: "white",
  },
});
