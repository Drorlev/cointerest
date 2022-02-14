import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { Camera } from 'expo-camera';
import * as ImagePicker from 'expo-image-picker';

export default function CameraComp(props) {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [camera, setCamera] = useState(null);
  const [picUri, setPicUri] = useState();
  const [image, setImage] = useState();

  btnOpenGalery = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      console.log("shit");
      setImage(result.uri);
    }
  };

  const snapClicked=(val)=>{
    props.sendData(val);
  };

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
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
      <Camera style={styles.camera}
        ref={ref => setCamera(ref)}
        type={type}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}>
            <Text style={styles.text}> Flip </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={async () => {
              if (camera) {
                const data = await camera.takePictureAsync(null);
                console.log(data.uri)
                setPicUri(data.uri);
                console.log("snap: "+ picUri)
                snapClicked(picUri);
              }

            }}>
            <Text style={styles.text}> Snap </Text>
          </TouchableOpacity>
            <TouchableOpacity
             style={styles.button1}
            onPress={btnOpenGalery}
            >
            <Text style={styles.text}>Upload</Text>

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
    flex:1,
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    margin: 20,
  },
  button: {
    flex: 0.2,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  button1: {
    left:"25%",
    alignSelf: 'flex-end',
    alignItems: 'center',
    justifyContent: "space-between",

  },
  text: {
    fontSize: 18,
    color: 'white',
  },
});