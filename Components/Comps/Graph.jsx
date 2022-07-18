import { StyleSheet, Text, View, TouchableOpacity, Modal, Pressable, Alert, ScrollView } from "react-native";
import React, { useState, useEffect } from "react";
import FeedElement from './FeedElement';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from "react-native-chart-kit";



const apiUrl = "http://194.90.158.74/bgroup53/test2/tar4/api/Coins/?coin_name="
const predUrl ="http://194.90.158.74/bgroup53/test2/tar4/api/Predictions/?coin_name=Bitcoin" 
const apiUrlTrans = "http://194.90.158.74/bgroup53/test2/tar4/api/transactions/?email=" 


const cutDate = (date) =>{
  let date1="";
  cnt=0;
  for (let index = 0; index < date.length; index++) {
    let element = date[index];
    console.log(element)
    console.log(date1)
    if(cnt == 2){
      return date1;
    }
      cnt += 1 
      date1 +=element
  }
}

const preferDate = (days) => {
  var dateObj = new Date();
  dateObj.setDate(dateObj.getDate() - days);

  let month = dateObj.getUTCMonth() + 1; //months from 1-12
  let day = dateObj.getUTCDate();
  let year = dateObj.getUTCFullYear();
  let hours = dateObj.getHours();
  let min = dateObj.getMinutes();
  let sec = dateObj.getSeconds();
  if (sec < 10) {
    sec = "0" + sec
  }
  if (min < 10) {
    min = "0" + min
  }
  if (hours < 10) {
    hours = "0" + hours
  }

  let newdate = year + "-" + month + "-" + day + "T" + hours + ":" + min + ":" + sec;

  return newdate
}



let labels = [];
let dataS = [];

const Graph = (props) => {
  
  let now = preferDate(0);
  const [selectedDate, setSelectedDate] = useState(preferDate(7));
  const [intervals, setIntervals] = useState("D");
  const [graph, setGraph] = useState();
  const [pred, setPred] = useState();

  const selectPrevDate_1 = () => {

    let day = preferDate(1)
    setSelectedDate(day)
    setIntervals("H")
  }

  const selectPrevDate_7 = () => {

    //let datetime = "Last Sync: " + currentdate.getDay() + "/" + currentdate.getMonth()
    //let temp = this.value
    //alert(temp)
    let day = preferDate(7)
    setSelectedDate(day)
    setIntervals("D")
  }




  const getCoinsPricePerPeriod = () => {
    console.log("now " + now)
    console.log("coin name " + props.name)
    console.log(selectedDate)

    //fetch the data (get)
    //http://194.90.158.74/bgroup53/test2/tar4/api/Coins/?coin_name=Bitcoin&start=2022-04-19T18:00:00&finish=2022-04-20T18:00:00
    console.log(apiUrl + props.name + "&start=" + selectedDate + "&finish=" + now);
    fetch(apiUrl + props.name +"&interval_type=" + intervals + "&start=" + selectedDate + "&finish=" + now, {
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json; charset=UTF-8",
        Accept: "application/json; charset=UTF-8",
      }),
    })
      .then((res) => {
        //console.log('res=', res);
        console.log("res.status", res.status);
        console.log("res.ok", res.ok);
        return res.json();
      })
      .then(
        (result) => {
          console.log("fetch Coins history= ", result);
          if (result != undefined) {
            //get
            
            labels = [];
            dataS = [];
            let cnt = 0;
            
            for (const key in result) {
                console.log(result[key].Name);
                console.log("--------------------------")
                if(cnt % 2 ==0){
                  
                  labels = [...labels, result[key].Name.slice(0, 5)]
                }else{
                  labels = [...labels, ""]
                }
                cnt = cnt+1;
            }


            for (const key in result) {
              console.log("--------------------------")
              dataS = [...dataS, result[key].Value]
          }
            
            
            console.log(labels)
            if (props.name == "Bitcoin") {
              //Do here fetch to bitcoin_pred
              fetch(predUrl, {
                method: 'GET',
                headers: new Headers({
                  'Content-Type': 'application/json; charset=UTF-8',
                  'Accept': 'application/json; charset=UTF-8'
                })
              })
                .then(res => {
                 
                  return res.json()
                })
                .then(
                  (result) => {
                    console.log("fetch Pred ", result);
                    //result.map(st => console.log(st.Name));
                    /*
                    for (let index = 0; index < result.length; index++) {
                      let element = result[index];
                      if(index == result.length - 1 ){
                        setPred(result[index].Predicted_price)
                      }
                      
                    }
                    */
                    setPred(result[0].Predicted_price)
                  },
                  (error) => {
                    console.log("err post=", error);
                  });
            }

            let graph1 =
              <LineChart style={styles.txt}
                data={{
                  labels: labels,//Dates
                  datasets: [
                    {
                      data: dataS,//Coins values
                    },
                  ],
                }}
                width={400} // from react-native
                height={165}
                //yAxisLabel="$"
                propsForLabels={
                  fontSize = 3
                }
                yAxisInterval={1} // optional, defaults to 1
                chartConfig={{
                  backgroundGradientFrom: "#1A1A1A",
                  backgroundGradientFromOpacity: 0,
                  backgroundGradientTo: "#1A1A1A",
                  backgroundGradientToOpacity: 0.5,
                  color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                  strokeWidth: 3, // optional, default 3
                  useShadowColorFromDataset: true, // optional
                }}
              />

            setGraph(graph1)
          }
        },
        (error) => {
          console.log("err post=", error);
        }
      );

    //eNDS

  }

  useEffect(() => {
    getCoinsPricePerPeriod()
    
  }, [selectedDate, props.name]);

  return (
    <View >
      <View style={styles.filterDate}>
        <TouchableOpacity value={7} style={styles.button} onPress={selectPrevDate_7}>
          <Text style={styles.btnText}>7D</Text>
        </TouchableOpacity>
        <TouchableOpacity value={1} style={styles.button} onPress={selectPrevDate_1}>
          <Text style={styles.btnText}>24H</Text>
        </TouchableOpacity>
      </View>
      
      <View style={styles.graph}>
        {graph}
      </View>
      {(props.name == "Bitcoin")?<>
       <Text style={styles.predict}>Prediction for 23:00 - ${pred}</Text> 
        {(pred  - props.price) >= 0 ? <Text style={styles.predictUP}>{Number.parseFloat(((pred /props.price) - 1)*100).toFixed(3).replace(/[.,]000$/, "")  }% </Text>
        :
        <Text style={styles.predictDown}>-{Number.parseFloat((1-(pred /props.price))*100).toFixed(3).replace(/[.,]000$/, "")}% </Text>
        }
       </>:<></>}
    </View>
  );
};

export default Graph;

const styles = StyleSheet.create({
  filterDate: {
    flexDirection: 'row',
    marginLeft: 20,
  },
  button: {
    backgroundColor: "#6136DA",
    justifyContent: "center",
    borderRadius: 5,
    width: 55,
    marginLeft:"1%"
    //alignItems:"center",
    //alignContent:"center"

  },
  button2: {
    backgroundColor: "#6136DA",
    justifyContent: "center",
    borderRadius: 5,
    width: 90
    //alignItems:"center",
    //alignContent:"center"

  },
  btnText: { textAlign: "center" },
  graph:{
   
    
  }
  ,
  txt:{
    fontSize: 10,
  },
  predict:{
    fontSize:15,
    color:"white",
    textAlign:"center",
    fontWeight: "bold",

  },
  predictUP:{
    fontSize:15,
    color:"green",
    textAlign:"center"
  },
  predictDown:{
    fontSize:15,
    color:"red",
    textAlign:"center"
  },

});
