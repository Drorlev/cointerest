import { StyleSheet, Text, View, TouchableOpacity,Switch } from 'react-native'
import React ,{useState}from 'react'
import { TextInput } from 'react-native-gesture-handler'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

//search
const MarketHeader = () => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Market</Text>
            <Switch style={styles.switch}
            trackColor={{ false: "gray", true: "green" }}
            thumbColor={isEnabled ? "lightgreen" : "lightgray"}
            //ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
            />
            <View style={styles.search}>
            <TextInput  style={styles.input}
                        placeholder="Enter Username"   
                        placeholderTextColor="#fff" 
                        //onChangeText={setSearch}
                        />
                <TouchableOpacity
                    //onPress={navigate_to_signUp}
                    style={styles.signUp}>
                    <MaterialIcons name="search" color={"gray"} size={30}/>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default MarketHeader

const styles = StyleSheet.create({
    container: {
        //flexDirection:'row',
        //paddingTop:30,
        backgroundColor: 'lightblue',
        flex: 0.3,
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
        backgroundColor: '#1A1A1A',
        flex: 1,
        //alignItems: 'center',
      },
      title:{
        color:'#fff',
        alignSelf:'center',
        fontSize:30,
        fontWeight:'bold',
      },
      search:{
        width: 300,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        alignSelf:"center",
       // borderColor:'#fff',
        borderRadius:10,
        flexDirection:'row',
        //borderWidth: 1,
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
        height:'100%'
    },
    switch:{
       
    }
})