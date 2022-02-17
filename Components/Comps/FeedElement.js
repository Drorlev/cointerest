import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import pic from '../../assets/BTC.png'

const reformatDate = (dateStr) =>{

  dArr = dateStr.split("-");  // ex input "2010-01-18"
  return dArr[2]+ "/" +dArr[1]+ "/" +dArr[0].substring(2); //ex out: "18/01/10"
}

const FeedElement = (props) => {
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
            <View style={styles.profile_imageCol}>
                <Image source={props.trns_profile_img} style={styles.profileIcon}/>
            </View>
            {/* <View style={styles.dateCol}>
                <Text style={styles.txt}>{tranTime}</Text>
            </View> */}
            <View style={styles.col1}>
                <View style={styles.row2}>
                
                    <View style={styles.name_col}>
                        <Text style={styles.txt}>{props.trns_user_name}</Text>
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
                    <View style={styles.row2}>
                    <View style={styles.usr_Comment}>
                    <Text style={styles.txt}>{props.usr_Comment}</Text>
                    </View>
                </View>
                </View>
            </View>
            
        </View>
    </View>
  )
}

export default FeedElement

const styles = StyleSheet.create({


    container: {
       // flexDirection:'row',
        //paddingTop:30,
        //backgroundColor: '#1A1A1A',
        height:60,
        backgroundColor: 'gray',
        flex: 1,
        width:"100%",
        alignSelf: 'center',
        marginTop:4,
        marginBottom:3,
        borderRadius:10,
        //marginBottom:10,
        //justifyContent:'center'
       // borderRadius:10,
    },
    name_col:{
        flexDirection:'column',
        width:"25%",
    },
    col1:{
        flex:1,
        width:"80%",
        flexDirection:'column',
        backgroundColor:"black",
    },
    row:{
        //height:"50%",
    //    marginTop:2,
        flexDirection:'row',
        flex:1,
        //justifyContent:'center',
        //borderRadius:10,
        backgroundColor:"salmon",
    },
    row2:{
               //height:"50%",
    //    marginTop:2,
    flexDirection:'row',
    flex:0.5,
    //justifyContent:'center',
    //borderRadius:10,
    backgroundColor:"white",
    },
    
    dateCol:{
        flexDirection:"column",
        backgroundColor:"purple",
        width:"25%",
    },
    OpCol:{
       // flexDirection:"column",
        backgroundColor:"lightgreen",
        width:"33%",
    },
    amountCol:{
        //flexDirection:"column",
    //    backgroundColor:"yellow",
        width:"34%",
    },
    profile_imageCol:{
        width:"15%",
        height: "90%",
       backgroundColor:"green",
    },
    imageCol:{
        width:"10%",
        backgroundColor:"brown",
    },
    txt:{
        textAlign:'center',
        color:'white',
        fontSize:17,
        
    },
    
    img: {
        backgroundColor:"blue",
        //marginTop:2,
        alignSelf:'center',
        width: 26,
        height: 26,
        
    },
    usr_Comment:{
        backgroundColor:"blue",
        //height:"100%",
        flex:0.5,
        width: "85%",
        //marginLeft: 20,
        
    },
    profileIcon: {
        flexDirection: "column",
        //marginLeft: 5,
        width: "100%",
        height:"100%",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 100,
        backgroundColor: "black",
        borderColor: "white",
        borderWidth: 1.5,
      },
})