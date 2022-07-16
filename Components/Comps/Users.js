import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React, {useState,useEffect} from 'react';
import UserBlock from './UserBlock';


const users_HardCoded=[
    {
        UserName:"Dror",
        ImgUrl:"https://purepng.com/public/uploads/large/lion-fqv.png",
        BirthDate:'26-07-2021',
        Password:"123456",
        Balance:20000
    },
    {
        UserName:"Dror_the_2",
        ImgUrl:"https://purepng.com/public/uploads/large/lion-fqv.png",
        BirthDate:'26-07-2025',
        Password:"123456",
        Balance:20000
    },
    {
        UserName:"Dror_the_3",
        ImgUrl:"https://purepng.com/public/uploads/large/lion-fqv.png",
        BirthDate:'26-07-2059',
        Password:"123456",
        Balance:20000
    },
    {
        UserName:"Dror_the_4",
        ImgUrl:"https://purepng.com/public/uploads/large/lion-fqv.png",
        BirthDate:'26-07-2059',
        Password:"123456",
        Balance:20000
    },
]


const apiUrl = "http://194.90.158.74/bgroup53/test2/tar4/api/users/?search="; 

const Users = (props,{navigation}) => {
    const [users,setUsers]=useState(<></>);
    //will be the fetch get users

    let searchName=(props.search == undefined)? "" : props.search;

    /*
    const getDataFromChild=(data)=>{
        console.log("Users "+ data)
        props.send2papa(data)
    }
    */

    const getUsers=()=>{
        
        fetch(apiUrl + searchName, {
            method: 'GET',
            headers: new Headers({
              'Content-Type': 'application/json; charset=UTF-8',
              'Accept': 'application/json; charset=UTF-8'
            })
          })
            .then(res => {
              //console.log('res=', res);
              console.log('res.status', res.status);
              console.log('res.ok', res.ok);
              return res.json()
            })
            .then(
              (result) => {
               // console.log("fetch Assets= ", result);
                
                let usersList =result?.map(user => 
                   // <UserBlock send2papa={getDataFromChild} key={user.Username} user={user}/>
                   <UserBlock key={user.Username} user={user} searchWord={searchName}/>
                );
                
                setUsers(usersList)
                
              },
              (error) => {
                console.log("err post=", error);
              });
    }

    
    useEffect(() => {
        getUsers(); 
        console.log(searchName)
      },[props]);
  return (
      <ScrollView style={styles.container} fadingEdgeLength={50}>
        {(props.search == "")? <Text style={styles.centerText}>Top 5 weekly Earners </Text>:<></>}
          {users}
      </ScrollView>
    
          
  );
};

export default Users;

const styles = StyleSheet.create({
    container: {
        //backgroundColor: 'lightblue',
        flex: 1,
        marginTop:30,
       
       
    },
    centerText:{
        color:"white",
        alignSelf:"center",
        fontSize:20,
        fontWeight:"bold",
    }
});
