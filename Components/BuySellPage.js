import { StyleSheet, Text, View, TouchableOpacity, Alert, Modal, Pressable, } from 'react-native'
import React,{useEffect,useState,} from 'react';
import { useIsFocused } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TextInput } from 'react-native-gesture-handler';
import CoinCardBuySell from './Comps/CoinCardBuySell';
import Graph from './Comps/Graph';
import FeedPerCoin from './Comps/FeedPerCoinComp';


let email="";
let flag;
let transDetails = 0;

const apiUrl="http://194.90.158.74/bgroup53/test2/tar4/api/assets/?user_comment=";
//Buy Sell Page
const BuySellPage = ({route,navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [amount, setAmount] = useState(0);
  const [comment, setComment] = useState("");
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
  const checkOP = () =>{
    Alert.alert("Hold on!", "Are you sure you want " + transDetails.op, [
      {
        text: "Cancel",
        onPress: () => {Alert.alert("Status","Action Canceled")
          return
        },
        style: "cancel"
      },
      { text: "YES", onPress: () => PostAction()}
    ]);
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
          (flag) ? Alert.alert("Status!","Action succeeded") : Alert.alert("Status!",result.Message)
          setAmount("");
          setComment("");
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
          <View style={styles.x1}>
            <CoinCardBuySell name={transDetails.coinName} amount={transDetails.amount} img={transDetails.coinImg} value={transDetails.coinPrice} action={transDetails.op} change={transDetails.change} precentage={(transDetails.change >= 0) ? styles.green : styles.red} vol={transDetails.vol}/>
          </View >

          <View style={styles.x2}>
            <Graph name={transDetails.coinName} price={transDetails.coinPrice}/>
          </View>
          <View style={styles.x3}>
            <TouchableOpacity style={styles.button2} details={transDetails} onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.btnText}>Transactions</Text>
            </TouchableOpacity>
            <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => {
                Alert.alert("closed.");
                setModalVisible(!modalVisible);
              }}
            >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text style={styles.smallHeader}>{transDetails.coinName}'s Transactions</Text>
                <FeedPerCoin coinName={transDetails.coinName}/>
                <Pressable
                  style={[styles.button3, styles.buttonClose]}
                  onPress={() => setModalVisible(!modalVisible)}
                >
                  <Text style={styles.textStyle}>Close</Text>
                </Pressable>
              </View>
            </View>
          </Modal>
            <Text style={styles.smallHeader}>Amount</Text>
            <View style={styles.search}>
              <TextInput  style={styles.input} value={amount} placeholder="Coin amount" placeholderTextColor="#1A1A1A"  onChangeText={setAmount}  keyboardType={"number-pad"}/>
            </View>

            <Text style={styles.title}>{Number.parseFloat(PostPrice).toFixed(3).replace(/[.,]000$/, "")}$</Text>

            <View style={styles.search}>
              <TextInput  style={styles.input} value={comment} placeholder="Comment" placeholderTextColor="#1A1A1A"  onChangeText={setComment}/>
            </View>
          
            <TouchableOpacity style={styles.button} details={transDetails} onPress={checkOP}>
              <Text style={styles.btnText}>{transDetails.op}</Text>
            </TouchableOpacity>
          </View>
          
        </View>
      </View>
  </View>
  )
}

export default BuySellPage

const styles = StyleSheet.create({
  smallHeader:{
    color:"white",
    fontSize:20,
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
    marginTop:"3%",
    color:'gray',
    alignSelf:'center',
    fontSize:25,
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
    //#2196F3
    
  },
  button2:{
    backgroundColor:"gray",
    width:"50%",
    height:"7%",
    alignSelf:"center",
    textAlign:"center",
    justifyContent:"center",
    marginTop:20,
    borderRadius:10,
    //alignItems:"center",
    //alignContent:"center"
    //#2196F3
    
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
  height: 40,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#fff',
  alignSelf:"center",
  borderColor:'#fff',
  borderRadius:10,
  flexDirection:'row',
  //borderWidth: 1,
  marginTop:10,
},
green: {
  color: '#00ff00',
  fontWeight: "bold",
  fontSize: 14,
},
red: {
  color: '#ff0000',
  fontWeight: "bold",
  fontSize: 14,
},
x1:{
  //backgroundColor: "yellow",
  flex:0.18
},
x2:{
  // backgroundColor: "yellow",
   flex:0.3,
  
},
x3:{
  // backgroundColor: "yellow",
   flex:0.52
},
centeredView: {
  flex: 1,
  width:"100%",
  justifyContent: "center",
  alignItems: "center",
  marginTop: 22,
  backgroundColor:'#1A1A1A'
},
modalView: {
  margin: 20,
  width:"100%",
  flex:0.8,
 
  borderRadius: 20,
  padding: 35,
  alignItems: "center",
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 2
  },
  shadowOpacity: 0.25,
  shadowRadius: 4,
  elevation: 5
},
button3: {
  borderRadius: 20,
  padding: 10,
  elevation: 2
},
buttonOpen: {
  backgroundColor: "#F194FF",
},
buttonClose: {
  backgroundColor: "#6136DA",
},
textStyle: {
  color: "white",
  fontWeight: "bold",
  textAlign: "center"
},
modalText: {
  marginBottom: 15,
  textAlign: "center"
}


})