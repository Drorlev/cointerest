import { StyleSheet, Text, View , ScrollView, Image} from 'react-native';
import React,{useEffect,useState} from 'react';
import FeedElement from './FeedElement';




const apiUrl = "http://194.90.158.74/bgroup53/test2/tar4/api/transactions/?input_email="; 
let count=0;
const Feed = (props) => {
  const [transaction,setTransaction]=useState();
  //console.log("Transactions", props.email)
  //send email in props!!
  let flag;
  //fetch get based on props email
  const getTransactions=()=>{
    fetch(apiUrl + props.email, {
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
          
          flag=res.ok;
          if(!flag){
            setTransaction(<View><Text style={styles.headerTxt}>No Transaction Here</Text></View>)
            return;
          }
          
          return res.json()
        })
        .then(
          (result) => {
            console.log("fetch Transactions= ", result);

            if(result != undefined){
              var sorted_tweets = result.sort((a,b) => {
                return new Date(a.T_date).getTime() - 
                    new Date(b.T_date).getTime()
              }).reverse();
              let transactionsList =sorted_tweets.map(trn => 
                <FeedElement key={count++}  t_date={trn.T_date} trns_profile_img={trn.User_pic} trns_user_name={trn.Username} coin_amount={trn.Coin_amount} coin_pic={trn.Coin_pic} dollar_amount={trn.Dollar_amount} usr_Comment={trn.Comment} timeAgo={trn?.TimeAgo}/>
            );
            
            setTransaction(transactionsList)
            }
          },
          (error) => {
            console.log("err post=", error);
          });
  }

  useEffect(() => {
      getTransactions();
  }, [props]);

  return (
    <View style={styles.container}>
       
        <ScrollView style={styles.history}  fadingEdgeLength={50} >
          {transaction}
        </ScrollView>
    </View>
  );
};

export default Feed;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#1A1A1A',
        flex: 1,
        width:"90%",
        alignSelf: 'center',
        marginBottom:"10%",
        marginTop:"3%"
    },
    history: {
        flex: 1,
        width:"100%",
        alignSelf: 'center',
        borderRadius:10,
    },
    headerTxt:{
        color:'#fff',
        fontWeight:'bold',
        marginLeft:10,
        marginBottom:10,
        fontSize:20
    }
});
