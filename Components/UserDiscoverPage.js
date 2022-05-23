import { StyleSheet, Text, View } from 'react-native';
import React ,{useState,useEffect} from 'react'
import UserDiscoverBio from './Comps/UserDiscoverBio';
import Balance from './Comps/Balance';
import Assets from './Comps/Assets';
import Transactions from './Comps/Transactions';
import Underline from './Comps/Underline';
const User = ({route,navigation}) => {
  const [user,setUser] = useState();
  const [portffolio,setPortfolio]=useState((<View><Text>Loading...</Text></View>));
  const [isLoading,setIsLoading]=useState(true);
  //with route send the email when fetched
  //should do use state to render this page when another user is selected

  //let user;
  let userNameRoute = 'Erorr';
  
  console.log("USER discover Start", route.params.user)

  const setUpComps=()=>{
    if(route.params.user == undefined){
      console.log("User Discover Page",route.params.user)
      //user = route.params.user    
      return (<View><Text>Loading...</Text></View>);
    }
    userNameRoute = route.params.user.Username
    let comps =  <>
      <Text style={styles.title}>{userNameRoute}</Text>
      <Underline/>
      <View style={styles.body}>
        <UserDiscoverBio email={route.params.user.Email} searchedUser={userNameRoute}/>
        <Balance email={route.params.user.Email} balance={1000}/>
        <Assets email={route.params.user.Email}/>
        <Transactions email={route.params.user.Email}/>
      </View>
      </>
    setPortfolio(comps);
    setIsLoading(false);
  }
  


  useEffect(() => {    
    setUpComps()
  }, [route.params]);

  if(isLoading){
    return <View><Text>Loading...</Text></View>
  }
  return (
    <View style={styles.container}>
    <View style={styles.container2}>
       {portffolio}
    </View>
  </View>
  );
};

export default User;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1A1A1A',
    flex: 1,
},
container2:{
    marginTop:30,
    backgroundColor: '#1A1A1A',
    flex: 1,
    //alignItems: 'center',
  },
  title:{
    color:'#fff',
    alignSelf:'flex-start',
    marginLeft:20,
    fontSize:30,
    fontWeight:'bold',
  },
  body:{
    flex:1,
    marginTop:10,
  },
});
