import React, {useState,useEffect} from 'react'
import { StyleSheet,View, Text, TouchableOpacity} from 'react-native'
//import NoteLists from './NoteLists'
import { StatusBar } from 'expo-status-bar';
import NoteLists from './NoteLists'
//import { List } from 'react-native-paper';

export default function Home({ route,navigation }) {
    const [note,setNote]=useState();

    console.log("home",route.params)
    const goToCreateNote=()=>{
        navigation.navigate('AddNote')
    }

    
    
    useEffect(() => {
        setNote( <NoteLists newNote={route.params}/>);
    }, [route.params])

   

    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <View style={styles.titleBox}>
                    <Text style={styles.headText}>note title</Text>
                </View>
                <View style={styles.detailBox}>
                    <Text style={styles.headText}>note detail</Text>
                </View>
            </View>
            {note}
            <TouchableOpacity
                onPress={goToCreateNote}
                style={styles.roundButton1}>
                <Text>+</Text>
            </TouchableOpacity>
            <StatusBar style="auto" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        //flexDirection:'row',
        flex:1,
        backgroundColor: '#f0f',
        justifyContent: 'center',
    },
    titleBox:{ 
        minWidth: "35%",
        maxWidth:"35%",
        backgroundColor: '#f00',
    },
    detailBox:{ 
        minWidth: "65%",
        backgroundColor: '#0ff',
        
    },
    row:{
        flexDirection:'row'
    },
    headText:{
        alignSelf:"center"
    },
    roundButton1: {
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 100,
        backgroundColor: 'lightgrey',
        alignSelf:"flex-end",
        marginTop:"10%",
        marginRight:"5%"
      }
    
  });
