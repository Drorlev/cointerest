import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React,{useEffect,useState} from 'react';
import { useIsFocused } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TextInput } from 'react-native-gesture-handler';
import CoinCardBuySell from './Comps/CoinCardBuySell';


let email="";
let flag;
let transDetails = 0;

const apiUrl="http://194.90.158.74/bgroup53/test2/tar4/api/assets/?user_comment=";
//Buy Sell Page
const BuySellPage = ({route,navigation}) => {

  const [amount, setAmount] = useState(0);
  const [comment, setComment] = useState(0);
  const isFocused = useIsFocused();
  const [userEmail,setUserEmail]=useState();

  let PostPrice =(amount * transDetails.coinPrice);

  //Check that there is data about would be transaction
  if(route.params != undefined){
    transDetails = route.params.transaction
  }

  //async call to get the user email
  AsyncStorage.getItem('loggedInUserEmail').then((token) => {
    console.log("use effect ",token)
    email=token
    setUserEmail(token)
  })

 

/*
  console.log("---------------------route params buy sell "+route.params);
  
  console.log("---------------------transDetails buy sell "+transDetails.op);
 */


  const afterSuccess = () =>{
    alert("Action succeeded")
    //navigation.navigate('Market')
    
  }

  //Post Function
  const PostAction = () => {
    let realAmount = (transDetails.op == "Buy") ? amount: (amount * (-1));
    //console.log("-------------BuySellPage Trans OPERATION " + transDetails.op);
    //console.log("-------------BuySellPage REAL amount " + realAmount);
    
    let action={
      Coin_name:transDetails.coinName,
      Email:email,
      Amount:realAmount,
    }

    console.log("-------------BuySellPage sent object " + action.Coin_name +" "+ action.email +" "+ action.realAmount +" " );

    fetch(apiUrl + comment, {
      method: 'POST',
      body: JSON.stringify(action),
      headers: new Headers({
        'Content-type': 'application/json; charset=UTF-8', //very important to add the 'charset=UTF-8'!!!!
        'Accept': 'application/json; charset=UTF-8'
      })
    })
      .then(res => {
        //console.log('res=', res.ok);
        console.log("---------------------"+res);
        flag=res.ok;
        
        return res.json()
      })
      .then(
        (result) => {
          console.log("fetch POST= ", result);
          (flag) ? alert("Action succeeded") : alert(result.Message)
        },
        (error) => {
          console.log("err post=", error);
        });

  }

  

  useEffect(() => {  
  
  }, [isFocused,amount]);

  return (
    <View style={styles.container}>
    <View style={styles.container2}>
      <View style={styles.body}>
        {console.log("in BuySell")}
     
      <View>
        <CoinCardBuySell name={transDetails.coinName} amount={transDetails.amount} img={transDetails.coinImg} value={transDetails.coinPrice} action={transDetails.op} />
      </View>
      <Text style={styles.smallHeader}>Coin amount</Text>

      <View style={styles.search}>
        <TextInput  style={styles.input}
                            placeholder="Coin amount "   
                            placeholderTextColor="#1A1A1A" 
                            onChangeText={setAmount}
                            keyboardType={"number-pad"}
                            />
      </View>

      <Text style={styles.title}>That would be {PostPrice}$</Text>

      <View style={styles.search}>
        <TextInput  style={styles.input}
                            placeholder="Comment"   
                            placeholderTextColor="#1A1A1A" 
                            onChangeText={setComment}
                            
                            />
      </View>
      
      <TouchableOpacity style={styles.button} details={transDetails} onPress={PostAction}>
        <Text style={styles.btnText}>{transDetails.op}</Text>
      </TouchableOpacity>
      </View>
    </View>
  </View>
  )
}

export default BuySellPage

const styles = StyleSheet.create({
  smallHeader:{
    color:"white",
    fontSize:40,
    fontWeight:"bold",
    textAlign:"center",
    marginTop:"5%"

  },
  btnText:{
    color:"white",
    textAlign:"center",
    fontSize:18,
    fontWeight:"bold"
  },
  container: {
    //flexDirection:'row',
    //paddingTop:30,
    backgroundColor: '#1A1A1A',
    flex: 1,
    //alignItems: 'center',
    //justifyContent: 'center',
   /*
    marginTop: 0,
    flex: 1,
    backgroundColor: '#1A1A1A'
    */
  },
  container2:{
    backgroundColor: '#1A1A1A',
   //backgroundColor:"white",
    flex: 1,
    //alignItems: 'center',
  },
  title:{
    marginTop:"5%",
    color:'#fff',
    alignSelf:'center',
    fontSize:30,
    fontWeight:'bold',
  },
  body:{
    flex:1,
    marginTop:40,
  },
  button:{
    backgroundColor:"#6136DA",
    width:"50%",
    height:"7%",
    alignSelf:"center",
    textAlign:"center",
    justifyContent:"center",
    marginTop:20,
    borderRadius:10,
    //alignItems:"center",
    //alignContent:"center"
    
  },
  input:{
    borderColor:'white',
   // backgroundColor:"red",
    borderRadius:10,
    color:'black',
    alignSelf:'center',
    borderWidth: 1,
    textAlign: 'center',
    flex:1,
    height:'100%',
    
},
search:{
  width: 300,
  height: 60,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#fff',
  alignSelf:"center",
  borderColor:'#fff',
  borderRadius:10,
  flexDirection:'row',
  //borderWidth: 1,
  marginTop:30,
},
})