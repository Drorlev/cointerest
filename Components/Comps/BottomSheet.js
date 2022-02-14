import React, { useRef } from "react";
import { StyleSheet,Button, Text, View, TouchableOpacity, Image } from 'react-native';
import RBSheet from "react-native-raw-bottom-sheet";
 
export default function Example() {
  const refRBSheet = useRef();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#000"
      }}
    >
      <Button title="OPEN BOTTOM SHEET" onPress={() => refRBSheet.current.open()} />
      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={false}
        customStyles={{
          wrapper: {
            backgroundColor: "transparent",
            flex:1
          },
          draggableIcon: {
            backgroundColor: "#000"
          }
        }}
      >
            <View style={styles.container}>
              <TouchableOpacity style={styles.btn}> 
              <Text style={styles.text}>Buy</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn}>
              <Text style={styles.text}>Sell</Text>
            </TouchableOpacity>
            </View>
      </RBSheet>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#1A1A1A",
  },
  btn:{
    // backgroundColor:"blue",
    flex:0.4,
    marginTop:'10%',
    flexDirection: "row",
    backgroundColor: "#6136DA",
    alignSelf: "center",
    borderRadius: 10,
    width: "50%",
  },
 text:{
  width:"100%",
  color: "#fff",
  fontWeight: "bold",
  fontSize: 25,
  marginRight: 5,
  alignSelf: "center",
  marginLeft:"37%"
 },
});