import { StyleSheet, Text, View, TouchableOpacity,Switch } from 'react-native'
import React ,{useState}from 'react'
import { TextInput } from 'react-native-gesture-handler'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const dict ={false:"Buy", true:"Sell"}
//search
const MarketHeader = (props) => {
    const [isEnabled, setIsEnabled] = useState(false);
    const [search, setSearch] = useState("");
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    
    const sendtToMarket = () =>{
       
        let oper = dict[isEnabled]
        console.log(oper)
        console.log(search);

        let action = {
            op: oper,
            txt: search,
        }
        props.send2Papa(action);
    }

    sendtToMarket();
    //console.log(dict[isEnabled]);
    return (
        <View style={styles.header}>
            <Text style={styles.title}>Market</Text>
            <View style={styles.switch}>
                <Text style={styles.txt}>Buy</Text>
                <Switch style={styles.switch}
                
                trackColor={{ false: "white", true: "white" }}
                thumbColor={isEnabled ? "#504CF1" : "#504CF1"}
                //ios_backgroundColor="#3e3e3e"
                onValueChange={ toggleSwitch}
                value={isEnabled}
                />
                <Text style={styles.txt}>Sell</Text>
            </View>
            <View style={styles.search}>
            <TextInput  style={styles.input}
                        placeholder="search a Coin"   
                        placeholderTextColor="#1A1A1A" 
                        onChangeText={setSearch}
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
    header: {
        //flexDirection:'row',
        //paddingTop:30,
        flex: 0.3,
        //alignItems: 'center',
       // justifyContent: 'center',
       /*
        marginTop: 0,
        flex: 1,
        backgroundColor: '#1A1A1A'
        */
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
       flexDirection:"row",
       justifyContent:"center",
       alignItems:"center",
       transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }]
    },
    txt:{
        fontSize:20,
        color:"white"
    }

})