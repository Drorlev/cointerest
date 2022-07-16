import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const reformatDate = (dateStr) =>{

  dArr = dateStr.split("-");  // ex input "2010-01-18"
  return dArr[2]+ "/" +dArr[1]+ "/" +dArr[0].substring(2); //ex out: "18/01/10"
}

const FeedElement = (props) => {
    console.log(props)

    let op  = (props.coin_amount >=0) ?  "Bought": "Sold";
    let tranTime = (props.t_date).substring(0, 10);
    tranTime = reformatDate(tranTime);
    let image ={ uri: props.trns_profile_img};
    let imageCoin = { uri: props.coin_pic};
    //console.log(props.amount)
    //const tran = props.transaction;
   // console.log("Transaction",props.date1 )
    //let operation = props.transaction.Dollar_amount >= 0 ? "Buy" : "Sell"
  return (
    <View style={styles.container}>
        <View style={styles.row1}>
            <View style={styles.profile_imageCol}>
                <Image source={image} style={styles.profileIcon}/>
            </View>
            <View style={styles.name_col}>
                    <Text style={styles.userTxt}>{props.trns_user_name}</Text>
            </View>
            <View style={styles.ago_col}>
                    <Text style={styles.txtAgo}>{props?.timeAgo}</Text>
            </View>
        </View>
        <View style={styles.row}>
           
            {/*  */}
           
            <View style={styles.col1}>
                <View style={styles.row3}>
                    <View style={styles.usr_Comment}>
                        <Text style={styles.commentTxt}>{props.usr_Comment}</Text>
                    </View> 
                </View>
                <View style={styles.row2}>
                
                    <View style={styles.spaceCol}>
                        <Text style={styles.txt}>{tranTime}</Text>
                    </View>
                    <View style={styles.OpCol}>
                        <Text style={styles.txt}>{op}</Text>
                    </View>
                    <View style={styles.amountCol}>
                        <Text style={styles.txt}>{props.coin_amount}</Text>
                    </View>
                    <View style={styles.imageCol}>
                        <Image source={imageCoin} style={styles.img}/>
                    </View>
                    <View style={styles.spaceCol2}>
                    
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
        //backgroundColor: '#4F28AB',
        height:150,
       // backgroundColor: 'gray',
        flex: 1,
        width:"100%",
        alignSelf: 'center',
        marginTop:6,
        marginBottom:6,
        borderRadius:10,
        //marginBottom:10,
        //justifyContent:'center'
       // borderRadius:10,
    },
    name_col:{
       // flexDirection:'column',
        width:"40%",
       // backgroundColor:"green"
    },
    ago_col:{
        // flexDirection:'column',
         width:"60%",
        // backgroundColor:"green"
     },
    col1:{
        flex:1,
        width:"80%",
        flexDirection:'column',
       // backgroundColor:"black",
    },
    row:{
        height:"60%",
        // marginTop:2,
        flexDirection:'row',
        backgroundColor: '#4F28AB',
        //flex:1,
        //justifyContent:'center',
        borderRadius:10
       // backgroundColor:"salmon",
    },
    row2:{
        height:"25%",
        // marginTop:2,
        flexDirection:'row',
        //flex:0.4,
        //justifyContent:'center',
        //borderRadius:10,
       // backgroundColor:"white",
       
        width:"100%",
    },
    
    dateCol:{
        alignItems:"flex-end",
       // backgroundColor:"purple",
        width:"40%",
    },
    OpCol:{
       // flexDirection:"column",
       // backgroundColor:"lightgreen",
        width:"25%",
    },
    amountCol:{
        //flexDirection:"column",
        // backgroundColor:"yellow",
        width:"25%",
    },
    profile_imageCol:{
        width:"10%",
        height: "95%",
        //flexDirection:"row"
       //backgroundColor:"green",
    },
    imageCol:{
        width:"10%",
       // backgroundColor:"brown",
    },
    txt:{
        textAlign:'center',
        color:'white',
        fontSize:14,
        
    },
    txtAgo:{
        textAlign:'center',
        color:'#C0C0C0',
        fontSize:17, 
        paddingTop:"5%",
    },
    userTxt:{
        //textAlign:'center',
        color:'white',
        fontSize:20,
       // fontStyle:"italic",
        fontWeight: "bold",
        marginLeft:"10%"
        
    },
    timeAgo:{
        fontSize:20,
        textAlign:"center",
        color:"lightgrey"
    },
    img: {
        //backgroundColor:"blue",
        //marginTop:2,
       // alignSelf:'center',
        width: 26,
        height: 26,
        justifyContent:"center",
        marginTop:2,
        
    },
    profileIcon: {
        flexDirection: "column",
        //marginLeft: 5,
        width: "100%",
        height:"100%",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 100,
        //backgroundColor: "black",
        borderColor: "white",
        borderWidth: 1.5,
      },
      txtUser:{
        color:"white",
        alignSelf:"center",
      },
      usr_Comment:{
         // backgroundColor:"blue",
          flex:1,
         // color:"white"
      },
      row3:{
        flexDirection:'row',
        //flex:0.5,
        backgroundColor:"#504CF1",
        width:"100%",
        height:"60%",
        borderRadius:10
      },
      row1:{
        flexDirection:'row',
        height:"25%",
        //backgroundColor:"red",
        backgroundColor: '#1A1A1A',
        width:"100%",
      },
      spaceCol:{
          width:"30%"
      },
      spaceCol2:{
        width:"5%"
    },
      commentTxt:{
        textAlign:'center',
        color:'white',
        fontSize:17,
        paddingTop:"2%"
      }
      
})