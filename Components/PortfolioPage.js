import { StyleSheet, Text, View } from 'react-native';
import React,{useEffect,useState} from 'react';
import Assets from './Comps/Assets';
import Balance from './Comps/Balance';
import Transactions from './Comps/Transactions';
//import Tabs from './Navigation/Tab';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useIsFocused } from "@react-navigation/native";

/*
  <Balance email={userEmail} balance={1000}/>
          {portffolio}
          <Assets email={userEmail}/>
  <Transactions email={userEmail}/>
*/
const Portfolio = ({navigation}) => {
  const isFocused = useIsFocused();
  const [userEmail,setUserEmail]=useState();
  const [portffolio,setPortfolio]=useState((<View><Text>Loading...</Text></View>));
  const [isLoading,setIsLoading]=useState(true);

  const getUserEmail = async () =>{
    //setUserEmail(await AsyncStorage.getItem('loggedInUserEmail')).then(setIsLoading(false))
    return  AsyncStorage.getItem('loggedInUserEmail')
  }
  const setUpComps=()=>{
    let comps =  <>
      <Balance email={userEmail} />
      
      <Assets email={userEmail}/>
      
      <Transactions email={userEmail}/>
      </>
    setPortfolio(comps);
  }

  useEffect(() => {
    //getUserEmail().then(console.log("after get user EMAIL"));
    //(userEmail == undefined) ? setIsLoading(true) : setIsLoading(false)
    //getUserEmail().then(setUserEmail).then(setUpComps())
   // AsyncStorage.getItem('accessToken').then((token) => {
      AsyncStorage.getItem('loggedInUserEmail').then((token) => {
        //setUserEmail(token)
        console.log("use effect ",token)
        setUserEmail(token)
        
      })
      if(userEmail != undefined){
        setUpComps()
        setIsLoading(false);
      }
     
  
  }, [isFocused,userEmail]);

  
  //if ( userEmail == undefined || userEmail == null) {
  if(isLoading){
    return <View><Text>Loading...</Text></View>
  }
  
  return (
    <View style={styles.container}>
      <View style={styles.container2}>
        <Text style={styles.title}>Portfolio</Text>
        <View style={styles.body}>
          {console.log("in portfolio",userEmail)}
          {portffolio}
        </View>
      </View>
    </View>
  );
};

export default Portfolio;

const styles = StyleSheet.create({
  container: {
    //flexDirection:'row',
    //paddingTop:30,
    backgroundColor: '#1A1A1A',
    flex: 1,
    //alignItems: 'center',
   // justifyContent: 'center',
   /*
    marginTop: 0,
    flex: 1,
    backgroundColor: '#1A1A1A'
    */
  },
  container2:{
    marginTop:30,
   // backgroundColor: '#1A1A1A',
   //backgroundColor:"white",
    flex: 1,
    //alignItems: 'center',
  },
  title:{
    color:'#fff',
    alignSelf:'center',
    fontSize:30,
    fontWeight:'bold',
    marginTop:"10%"
  },
  body:{
    flex:1,
    marginTop:"10%",
  }
});
