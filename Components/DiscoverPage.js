import { StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import React ,{useState,useEffect} from 'react'
import Users from './Comps/Users';

const DiscoverPage = ({navigation}) => {
  const [search, setSearch] = useState("");

  /*
    const getDataFromChild=(data)=>{
        console.log("Discover page "+ data)
        
        navigation.navigate('InAppPages',{
          screen: 'UserPage',
          params: { user: data },
      })
    }
    */

  return (
    <View style={styles.container}>
      <View style={styles.container2}>
        <Text style={styles.title}>Discover</Text>
        <View style={styles.body}>
           <View style={styles.search}>
           <TextInput  style={styles.input}
                    placeholder="Enter Username"   
                    placeholderTextColor="#fff" 
                    onChangeText={setSearch}
                    />
            <TouchableOpacity
                //onPress={navigate_to_signUp}
                style={styles.signUp}>
                <MaterialCommunityIcons name="account-search-outline" color={"gray"} size={30}/>
            </TouchableOpacity>
           </View>
           <View style={styles.users}>
                <Users  search={search}/>
           </View>
        </View>
      </View>
    </View>
  );
};

export default DiscoverPage;

const styles = StyleSheet.create({
     container: {
        backgroundColor: '#1A1A1A',
        flex: 1,
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
        marginTop:"10%"
      },
      body:{
        flex:1,
        marginTop:"10%",
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
    users:{
        flex:0.85,
        width:"85%",
        alignSelf:'center',
    }
});
