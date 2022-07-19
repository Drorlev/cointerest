import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

let currentUserEmail;
const apiUrl = "http://194.90.158.74/bgroup53/test2/tar4/api/Users/?email=";
const apiUrlFollow = "http://194.90.158.74/bgroup53/test2/tar4/api/Follows/?email=";

const UserDiscoverBio = (props) => {
    const [user, setUser] = useState();
    const [following, setFollwing] = useState("Follow");
    //const [userEmail, setUserEmail] = useState();
    
    AsyncStorage.getItem('loggedInUserEmail').then((token) => {
      //setUserEmail(token)
      currentUserEmail= token;
      //console.log("use effect ",token)
      //userEmail = token
    })
    
    //alert(currentUserEmail)


    const follow = () =>{
      (following == "Follow") ?  postFollowState() : deleteFollowState();
    }

    const deleteFollowState = () => {
      fetch(apiUrlFollow + currentUserEmail + "&discover_user="+ props.searchedUser, {
        method: 'DELETE',
        headers: new Headers({
          'Content-Type': 'application/json; charset=UTF-8',
          'Accept': 'application/json; charset=UTF-8'
        })
      })
        .then(res => {
          //console.log('res=', res);
          //console.log('res.status', res.status);
          console.log('res.ok', res.ok);
          setFollwing("Follow")
        },
          (error) => {
            console.log("err post=", error);
          });
    }
    
    const postFollowState = () =>{
      if(currentUserEmail != undefined){
        fetch(apiUrlFollow + currentUserEmail + "&discover_user="+ props.searchedUser, {
          method: 'POST',
          body: "",
          headers: new Headers({
            'Content-type': 'application/json; charset=UTF-8',
            'Accept': 'application/json; charset=UTF-8'
          })
        })
          .then(res => {
            return res.json()
          })
          .then(
            (result) => {
                console.log("FETCH post=", result);
                setFollwing("unFollow")
            },
            (error) => {
              console.log("err post=", error);
            });
      }
    }
    
    const getFollowState = (userEmail) =>{
      if(userEmail != undefined){
        //alert(apiUrlFollow + userEmail + "&discover_user="+ props.searchedUser)
        fetch(apiUrlFollow + userEmail + "&discover_user="+ props.searchedUser, {
          method: "GET",
          headers: new Headers({
            "Content-Type": "application/json; charset=UTF-8",
            Accept: "application/json; charset=UTF-8",
          }),
        }) .then((res) => {
          console.log("res.status ", res.status);
          console.log("res.ok ", res.ok);
          return res.json();
        })
        .then(
          (result) => {
              //console.log("User Discover Follow",result);
              //alert(result);
              (result == "True" ) ? setFollwing("unFollow") :  setFollwing("Follow");
            },(error) => {
              console.log("err post=", error);
            });
    } 
  }


    const getUser = () => {
        console.log()
        fetch(apiUrl + props.email + "&n=1", {
          method: "GET",
          headers: new Headers({
            "Content-Type": "application/json; charset=UTF-8",
            Accept: "application/json; charset=UTF-8",
          }),
        })
          .then((res) => {
            //console.log('res=', res);
            console.log("res.status ", res.status);
            console.log("res.ok ", res.ok);
            return res.json();
          })
          .then(
            (result) => {
                console.log("User Discover Bio",result)
                getFollowState(currentUserEmail)
                if(result != undefined){
                    setUser(
                      <>
                        <View style={styles.leftCol}>
                          <Text style={styles.txt}>{result.Bio}{'\n'}</Text>
                            <TouchableOpacity style={(following == "Follow") ? styles.followBtn : styles.unfollowBtn} onPress={follow}>
                              <Text style={styles.txtFollow}>{following}</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.rightCol}>
                          <Image source={{uri:result.Image}} style={styles.roundButton1}/>
                        </View>
                        </>);
                        
                        //alert(currentUserEmail)
                        
                    //getFollowState();
                    
                }
                
              
              //setProfileImg(result.Image);
            },
            (error) => {
              console.log("err post=", error);
            }
          );
      };
    
      useEffect(() => {
        getUser();
      }, [props,following]);


  return (
    <View style={styles.container} >
        <View style={styles.row}>
           {user}
        </View>
    </View>
  );
};

export default UserDiscoverBio;

const styles = StyleSheet.create({
    container: {
        //backgroundColor:"green",
        //backgroundColor: '#504CF1',
        flex: 0.2,
        alignSelf:'center',
        width:"90%",
        borderRadius:10,
        marginBottom:"5%"
        //height:150
    },
    roundButton1: {
        width: 100,
        height: 100,
        //justifyContent: 'center',
        //alignItems: 'center',
        borderRadius: 100,
        //backgroundColor: 'black',
        alignSelf:"flex-end",
        borderColor:'white',
        borderWidth: 1.5,
        //marginRight:10,
        marginRight:"5%",
        //marginBottom:"10%",
        marginTop:"-2%"
    },
    userName:{
        fontSize:25,
        marginTop:10,
        color:'#fff',
        marginLeft:50
    },
    row:{
        flexDirection:'row',
        justifyContent:'space-between',
        //alignContent:'center',
        alignItems:'center',
        paddingTop:5
    },
    txt:{
        fontSize:16,
        color:'#fff',
        //alignSelf:'flex-end',
        marginLeft:20,
        marginTop:"5%",
        fontWeight:"bold"
    },
    rightCol:{
      //backgroundColor:"blue",
      width:"40%",
      height:"100%",
    },
    leftCol:{
      width:"60%",
      height:"100%",
     // backgroundColor:"green",
    },
    followBtn:{
      flexDirection:"row",
      backgroundColor:"#504CF1",
      borderRadius:20,
      //marginTop:"3%",
      marginLeft:"10%",
      width:"35%",
      height:"30%",
      //alignContent:"center",
      textAlign:"center"
    },
    unfollowBtn:{
      flexDirection:"row",
      backgroundColor:"#504CF1",
      borderRadius:20,
      //marginTop:"3%",
      marginLeft:"10%",
      width:"50%",
      height:"30%",
      //alignContent:"center",
      textAlign:"center"
    },
    txtFollow:{
      fontSize:20,
      color:'white',
      //alignSelf:"center",
      marginLeft:"10%",
      //alignContent:"center",
      //textAlign:"center"
      //marginTop:50
    },
    txtview:{
      flex:0.6
    }
});
