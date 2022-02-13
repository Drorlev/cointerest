import React, { useRef } from "react";
import { View, Button,Text } from "react-native";
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
            <View> 
                       <Text>dff</Text>
            </View>
      </RBSheet>
    </View>
  );
}