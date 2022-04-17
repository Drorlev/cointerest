import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from "react-native-chart-kit";

const Graph = () => {
    const changeDate = (date) =>{
        alert(date)
        
      }
  return (
    <View>
      <View style={styles.filterDate}>
      <TouchableOpacity style={styles.button} onPress={changeDate(7)}>
        <Text style={styles.btnText}>7D</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={changeDate(30)}>
        <Text style={styles.btnText}>30D</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={changeDate(24)}>
        <Text style={styles.btnText}>24H</Text>
      </TouchableOpacity>
      </View>
      <LineChart
        data={{
          labels: ["January", "February", "March", "April", "May", "June"],
          datasets: [
            {
              data: [1, 2, 2, 4, 4, 1, 1],
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
    </View>
  );
};

export default Graph;

const styles = StyleSheet.create({
  filterDate: {
    flexDirection:'row',
    marginLeft:20,
  },
  button:{
    backgroundColor:"#6136DA",
    justifyContent:"center",
    borderRadius:5,
    width:55
    //alignItems:"center",
    //alignContent:"center"
    
  },
  btnText:{textAlign:"center"},
});
