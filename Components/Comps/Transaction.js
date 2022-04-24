import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import pic from '../../assets/BTC.png'

const reformatDate = (dateStr) =>{

  dArr = dateStr.split("-");  // ex input "2010-01-18"
  return dArr[2]+ "/" +dArr[1]+ "/" +dArr[0].substring(2); //ex out: "18/01/10"
}

const Transaction = (props) => {
    console.log(props)

    let op  = (props.coin_amount >=0) ?  "Bought": "Sold";
    let tranTime = (props.t_date).substring(0, 10);
     tranTime = reformatDate(tranTime);
     let image ={ uri: props.coin_pic};
    //console.log(props.amount)
    //const tran = props.transaction;
   // console.log("Transaction",props.date1 )
    //let operation = props.transaction.Dollar_amount >= 0 ? "Buy" : "Sell"
  return (
    <View style={styles.container}>
        <View style={styles.row}>
            <View style={styles.dateCol}>
                <Text style={styles.txt}>{tranTime}</Text>
            </View>
            <View style={styles.OpCol}>
                <Text style={styles.txt}>{op}</Text>
            </View>
            <View style={styles.amountCol}>
                <Text style={styles.txt}>{props.coin_amount}</Text>
            </View>
            <View style={styles.imageCol}>
                <Image source={image} style={styles.img}/>
            </View> 
         </View>
    </View>
  )
}

export default Transaction

const styles = StyleSheet.create({
    container: {
       // flexDirection:'row',
        //paddingTop:30,
        //backgroundColor: '#1A1A1A',
        height:30,
        backgroundColor: 'gray',
        flex: 1,
        width:"90%",
        alignSelf: 'center',
        marginTop:4,
        marginBottom:1,
        borderRadius:10,
        //marginBottom:10,
        //justifyContent:'center'
       // borderRadius:10,
    },
    row:{
       // height:"30%",
       marginTop:2,
        flexDirection:'row',
        flex:1,
        //justifyContent:'center',
        //borderRadius:10,
    },
    dateCol:{
        flexDirection:"column",
        ////backgroundColor:"purple",
        width:"30%",
    },
    OpCol:{
       // flexDirection:"column",
        //backgroundColor:"lightgreen",
        width:"20%",
    },
    amountCol:{
        //flexDirection:"column",
       //backgroundColor:"yellow",
        width:"30%",
    },
    imageCol:{
        width:"20%",
       // backgroundColor:"blue",
    },
    txt:{
        textAlign:'center',
        color:'white',
        fontSize:17
    },
    
    img: {
        //marginTop:2,
        alignSelf:'center',
        width: 26,
        height: 26,
        
    },

})