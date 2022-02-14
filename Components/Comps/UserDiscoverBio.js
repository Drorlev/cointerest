import { StyleSheet, Text, View, Image } from 'react-native';
import React, { useState, useEffect } from "react";

const apiUrl = "http://194.90.158.74/bgroup53/test2/tar4/api/Users/?email=";

const UserDiscoverBio = (props) => {
    const [user, setUser] = useState();

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
                
                if(result != undefined){
                    setUser(<>
                        <Text style={styles.txt}>{result.Bio}{'\n'}</Text>
                        <Image source={{uri:result.Image}} style={styles.roundButton1}/>
                        </>);
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
      }, [props]);


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
        backgroundColor: '#504CF1',
        flex: 0.2,
        alignSelf:'center',
        width:"90%",
        borderRadius:10,
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
        marginRight:10,
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
        fontSize:20,
        color:'#fff',
        //alignSelf:'flex-end',
        marginLeft:20,
        //marginTop:50
    }
});
