import { StyleSheet, Text, View , ScrollView, Image} from 'react-native';
import React,{useEffect,useState} from 'react';
import Transaction from './Transaction';

const apiUrl = "http://194.90.158.74/bgroup53/test2/tar4/api/transactions/?email="; 

const Transactions = (props) => {
  const [transaction,setTransaction]=useState();
  //console.log("Transactions", props.email)
  //send email in props!!

  //fetch get based on props email
  const getTransactions=()=>{
    console.log("Transactions", props.email)
    console.log("bEFROE rENDER ",apiUrl + props.email +"&n="+1)
    fetch(apiUrl + props.email +"&n="+1, {
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
            console.log("fetch Transactions= ", result);

            result.map(trn =>console.log(trn))
            /*
            let transactionsList =result.map(asset => 
              <Asset key={asset.Coin_name} img={asset.Coin_info.Coin_picture} amount={asset.Amount}/>
            );
            
            setTransaction(transactionsList)
            */
          },
          (error) => {
            console.log("err post=", error);
          });
  }

  useEffect(() => {
    //setUserEmail(props.email)
    //();
    //console.log("Assets ", props.email)
   // getTransactions();
    
  }, []);

  return (
    <View style={styles.container}>
       <Text style={styles.headerTxt}>Transactions History</Text>
        <ScrollView style={styles.history}>
          <Transaction/>
          <Transaction/>
          <Transaction/>
          <Transaction/>
          <Transaction/>
          <Transaction/>
          <Transaction/>
          <Transaction/>
          <Transaction/>
          <Transaction/>
          <Transaction/>

        </ScrollView>
    </View>
  );
};

export default Transactions;

const styles = StyleSheet.create({
    container: {
        //flexDirection:'row',
        //paddingTop:30,
        //backgroundColor: '#1A1A1A',
        backgroundColor: '#1A1A1A',
        flex: 0.4,
        width:"90%",
        alignSelf: 'center',
        marginBottom:60,
    },
    history: {
        //flexDirection:'row',
        //paddingTop:30,
        //backgroundColor: '#1A1A1A',
        //backgroundColor: 'lightblue',
        flex: 1,
        width:"100%",
        //color:'#fff'
        alignSelf: 'center',
        borderRadius:10,
       // justifyContent: 'center',
    },
    headerTxt:{
        color:'#fff',
        fontWeight:'bold',
        marginLeft:10,
        marginBottom:10,
        fontSize:20
    }
});
