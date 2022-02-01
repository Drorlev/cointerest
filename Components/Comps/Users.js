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


const Users = (props) => {
    const [users,setUsers]=useState();
    //will be the fetch get users

    const getDataFromChild=(data)=>{
        console.log("Users "+ data)
        props.send2papa(data)
    }

    const getUsers=()=>{
        /*
            fetch(get)
        */
        let usersList = users_HardCoded.map(user =>     
            <UserBlock send2papa={getDataFromChild} key={user.UserName} userName={user.UserName} balance={user.Balance} img={user.ImgUrl}/>)
        //setUsers(usersList);
        setUsers(usersList)
    }

    
    useEffect(() => {
        getUsers();
      },[]);
  return (
      <ScrollView style={styles.container}>
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
});
