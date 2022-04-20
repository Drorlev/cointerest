import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from "react-native-chart-kit";

const apiUrl = "http://194.90.158.74/bgroup53/test2/tar4/api/Coins/?coin_name="

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

const Graph = (props) => {
  let now = preferDate(0);
  const [selectedDate, setSelectedDate] = useState(preferDate(7));
  const [graph, setGraph] = useState();




  const selectPrevDate_1 = () => {

    let day = preferDate(1)
    setSelectedDate(day)
  }

  const selectPrevDate_7 = () => {

    //let datetime = "Last Sync: " + currentdate.getDay() + "/" + currentdate.getMonth()
    //let temp = this.value
    //alert(temp)
    let day = preferDate(7)
    setSelectedDate(day)
  }

  const selectPrevDate_30 = () => {

    let day = preferDate(30)
    setSelectedDate(day)

  }


  const getCoinsPricePerPeriod = () => {
    console.log("now " + now)
    console.log("coin name " + props.name)
    console.log(selectedDate)

    //fetch the data (get)
    //http://194.90.158.74/bgroup53/test2/tar4/api/Coins/?coin_name=Bitcoin&start=2022-04-19T18:00:00&finish=2022-04-20T18:00:00
    console.log(apiUrl + props.name + "&start=" + selectedDate + "&finish=" + now);
    fetch(apiUrl + props.name + "&start=" + selectedDate + "&finish=" + now, {
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
            
            let label = ["January", "February", "March", "April", "May", "June"]
            let dataset = [1, 2, 2, 4, 4, 1, 15]

            if (props.name == "Bitcoin") {
              //Do here fetch to bitcoin_pred
            }

            let graph1 =
              <LineChart
                data={{
                  labels: label,//Dates
                  datasets: [
                    {
                      data: dataset,//Coins values
                    },
                  ],
                }}
                width={370} // from react-native
                height={165}
                yAxisLabel="$"
                yAxisSuffix="k"
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
  }, [selectedDate]);

  return (
    <View>
      <View style={styles.filterDate}>
        <TouchableOpacity value={7} style={styles.button} onPress={selectPrevDate_7}>
          <Text style={styles.btnText}>7D</Text>
        </TouchableOpacity>
        <TouchableOpacity value={30} style={styles.button} onPress={selectPrevDate_30}>
          <Text style={styles.btnText}>30D</Text>
        </TouchableOpacity>
        <TouchableOpacity value={1} style={styles.button} onPress={selectPrevDate_1}>
          <Text style={styles.btnText}>24H</Text>
        </TouchableOpacity>
      </View>
      {graph}
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
    width: 55
    //alignItems:"center",
    //alignContent:"center"

  },
  btnText: { textAlign: "center" },
});
