import {
  StyleSheet,
  Dimensions,
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  Keyboard,
  TouchableWithoutFeedback,
  ImageBackground,
} from "react-native";
import Sign_Up from "../assets/Sign_Up.png";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import React, { useState } from "react";
import * as Animatable from "react-native-animatable";
import AsyncStorage from "@react-native-async-storage/async-storage";

const storeData = async (value) => {
  try {
    await AsyncStorage.setItem("loggedInUserEmail", value);
    // const jsonVal = await AsyncStorage.getItem('loggedInUserEmail')
    // console.log("after saving ",jsonVal);
  } catch (e) {
    console.log(e);
  }
};

const SignUp = ({ navigation }) => {
  const [data, setData] = useState({
    email: "",
    username: "",
    password: "",
    isValidEmail: true,
    isValidPassword: true,
  });

  const [errorText, setErrorText] = useState({
    text: "Must be a valid Email",
  });

  const navigate_to_Camera = () => {
    navigation.navigate("InAppPages", {
      screen: "Camera",
    });
  };

  const logs = (email) =>{
    fetch("http://194.90.158.74/bgroup53/test2/tar4/api/Logins/?email="+email, {
      method: "POST",
      body: JSON.stringify(),
      headers: new Headers({
        "Content-type": "application/json; charset=UTF-8",
      }),
    })
      .then((res) => {
        console.log("res=", res.ok);
        (res.ok ? navigate_to_homePage() : "no_op");
        return res.json();
      })
      .then(
        (result) => {
          console.log("fetch logInlOG POST= ", result);
        },
        (error) => {
          console.log("err post=", error);
        }
      );  
  }

  const navigate_to_homePage = () => {
    //navigation.navigate('HomePage')
    navigation.navigate("InApp");
  };
  // validate the input from the email input section and updating the states
  const emailInputChange = (val) => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (reg.test(val) === true) {
      setData({
        ...data,
        email: val,
        isValidEmail: true,
      });
    } else {
      setData({
        ...data,
        email: val,
        isValidEmail: false,
      });
    }
  };
  // validate the input from the password input section and updating the states

  const passwordInputChange = (val) => {
    if (val.trim().length >= 8) {
      setData({
        ...data,
        password: val,
        isValidPassword: true,
      });
    } else {
      setData({
        ...data,
        password: val,
        isValidPassword: false,
      });
    }
  };
  // user name input section and updating the states

  const usernameInputChange = (val) => {
    setData({
      ...data,
      username: val,
    });
  };

  //check if the all register is valid
  const isValidRegister = () => {
    if (
      data.isValidEmail &&
      data.isValidPassword &&
      data.email.trim().length != 0 &&
      data.username.trim().length != 0 &&
      data.password.trim().length != 0
    ) {
      return true;
    } else {
      return false;
    }
  };
  //post the user's data to the DB
  const btnPost = () => {
    if (isValidRegister()) {
      const s = {
        Email: data.email,
        Username: data.username,
        Password: data.password,
        Image: "",
        Bio: "",
      };
      fetch("http://194.90.158.74/bgroup53/test2/tar4/api/Users/", {
        method: "POST",
        body: JSON.stringify(s),
        headers: new Headers({
          "Content-type": "application/json; charset=UTF-8",
        }),
      })
        .then((res) => {
          console.log("res=", res.ok);

          res.ok
            ? storeData(data.email).then(logs(data.email))
            : setData({
                ...data,
                isValidEmail: false,
              });
          setErrorText({
            text: "Email already in used",
          });

          return res.json();
        })
        .then(
          (result) => {
            console.log("fetch POST= ", result);
            console.log(result.Avg);
          },
          (error) => {
            console.log("err post=", error);
          }
        );
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <ImageBackground source={Sign_Up} resizeMode="cover" style={styles.image}>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text
              style={
                (styles.headerTxt,
                { fontFamily: "MontserratMed", fontSize: 30, color: "white" })
              }
            >
              Create {"\n"}
              Account
            </Text>

            <TouchableOpacity
              onPress={navigate_to_Camera}
              style={styles.roundButton1}
            >
              <Image
                style={styles.tinyLogo}
                source={{
                  uri: "http://194.90.158.74/bgroup53/test2/tar4/Assets/default.png",
                }}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.body}>
            <View style={styles.test}>
              <TextInput
                style={styles.textbox}
                placeholder="Email"
                placeholderTextColor="#fff"
                onChangeText={(val) => emailInputChange(val)}
                //   onEndEditing={(e)=>handleValidEmail(e.nativeEvent.text)}
              />
              {data.isValidEmail ? null : (
                <Animatable.View animation="fadeInLeft" duration={800}>
                  <Text style={styles.msgEror}>{errorText.text}</Text>
                </Animatable.View>
              )}

              <TextInput
                style={styles.textbox}
                placeholder="User Name"
                placeholderTextColor="#fff"
                onChangeText={(val) => usernameInputChange(val)}
              />
              <TextInput
                style={styles.textbox}
                secureTextEntry={true}
                placeholder="Password"
                placeholderTextColor="#fff"
                onChangeText={(val) => passwordInputChange(val)}
                // onEndEditing={(e)=>handleValidPassword(e.nativeEvent.text)}
              />
              {data.isValidPassword ? null : (
                <Animatable.View animation="fadeInLeft" duration={800}>
                  <Text style={styles.msgEror}>
                    Password must be atleast 8 characters
                  </Text>
                </Animatable.View>
              )}
              {/* <TextInput
                style={styles.textbox}
                placeholder="Birthdate"
                placeholderTextColor="#fff"
              /> */}
            </View>
            <TouchableOpacity style={styles.login} onPress={btnPost}>
              <Text style={styles.buttonTxt}>Create Account</Text>
            </TouchableOpacity>
            {/* <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                padding: 10,
              }}
            >
              <View style={{ flex: 1, height: 1, backgroundColor: "white" }} />
              <View>
                <Text
                  style={{ width: 50, textAlign: "center", color: "white" }}
                >
                  Or
                </Text>
              </View>
              <View style={{ flex: 1, height: 1, backgroundColor: "white" }} />
            </View> */}
            {/* <TouchableOpacity style={styles.GoogleLogin} onPress={btnPost}>
              <View style={styles.GoogleIcon}>
                <MaterialCommunityIcons
                  name="google"
                  color={"#504CF1"}
                  size={30}
                />
                <Text style={styles.buttonTxt}>Continue with Google</Text>
              </View>
            </TouchableOpacity> */}
          </View>
        </View>
      </ImageBackground>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  tinyLogo:{
    width: "100%",
    height: "100%",
  },
  header: {
    //paddingTop:90,
    //flex:1
    justifyContent: "center",
    padding: 10,
    marginTop: 95,
    flexDirection: "row",
  },
  msgEror: {
    color: "red",
    alignSelf: "center",
    fontSize: 15,
  },
  GoogleIcon: {
    justifyContent: "center",
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 7,
  },

  body: {
    flexDirection: "column",
  },

  textbox: {
    borderColor: "white",
    borderRadius: 10,
    color: "white",
    alignSelf: "center",
    borderWidth: 1,
    width: 270,
    height: 50,
    marginTop: 12,
    textAlign: "center",
    backgroundColor: "#1A1A1A",
    //fontFamily:'MontserratMed',
    fontSize: 20,
  },

  test: {
    //backgroundColor:'blue',
    marginTop: 15,
  },

  headerTxt: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",

    //fontFamily:"Montserrat" //need to fix it
  },

  image: {
    flex: 1,
    position: "absolute",
    left: 0,
    top: 0,
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height + 50,
  },
  login: {
    width: 300,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#504CF1",
    alignSelf: "center",
    borderRadius: 10,
    marginTop: 65,
  },
  GoogleLogin: {
    width: 300,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "white",
    borderWidth: 2,
    alignSelf: "center",
    borderRadius: 10,
    marginTop: 10,
  },

  buttonTxt: {
    color: "#fff",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "column",
    padding: 10,
    marginBottom: 10,
    fontWeight: "bold",
  },
  roundButton1: {
    width: 90,
    height: 90,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 100,
    borderRadius: 100,
    backgroundColor: "black",
    alignSelf: "flex-end",
    borderColor: "white",
    borderWidth: 1.5,
  },
});
export default SignUp;
