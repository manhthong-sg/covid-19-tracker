import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
//import LineGraph from '@chartiful/react-native-line-graph'
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from 'react-native-chart-kit'
export default function Summary({report}) {
  const [labels, setLabels]=useState([]);
  const [dataCaNhiem, setDataCaNhiem]=useState([0,0]);
  const [dataRecovered, setDataRecovered]=useState([0,0]);
  const [dataDeaths, setDataDeaths]=useState([0,0]);

  //console.log('Report: ', report.map((item)=> console.log(item.Confirmed)))
  useEffect(()=>{
    report.map((item)=> {setLabels(oldDate=>[...oldDate,item.Date]); 
      setDataCaNhiem(oldData=>[...oldData,item.Confirmed]); 
      setDataRecovered(oldData=>[...oldData,item.Recovered]);
      setDataDeaths(oldData=>[...oldData,item.Deaths])
    });
    dataCaNhiem.length=0;
    dataRecovered.length=0;
    dataDeaths.length=0;
    labels.length=0;
  }, [report])
  //console.log(data)
  //report.map((item)=> {console.log(item.Confirmed)});
  //console.log('Report', {data})
  const line1 = {
    //labels: labels,
    datasets: [
      {
        data: dataCaNhiem,
        strokeWidth: 2, // optional
      },
    ],
  };
  const line2 = {
    //labels: labels,
    datasets: [
      {
        data: dataRecovered,
        strokeWidth: 2, // optional
      },
    ],
  };
  const line3 = {
    //labels: labels,
    datasets: [
      {
        data: dataDeaths,
        strokeWidth: 2, // optional
      },
    ],
  };
  return (
    <View style={styles.container}> 
      <Text>Summary</Text>
      
      {/* //chart so ca nhiễm */}
      <LineChart
        data={line1}
        //width={Dimensions.get('window').width} // from react-native
        width={350}
        height={220}
        //yAxisLabel={'$'}
        chartConfig={{
          backgroundColor: 'black',
          backgroundGradientFrom: '#fb8c00',
          backgroundGradientTo: '#ffa726',
          decimalPlaces: 0, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 12
          }
        }}
        bezier
        style={{
          marginVertical: 4,
          borderRadius: 12
        }}
      />

      <Text style={{color: 'black'}}>Số ca nhiễm</Text>
      
      {/* //chart so ca hồi phục */}
      <LineChart
        data={line2}
        //width={Dimensions.get('window').width} // from react-native
        width={350}
        height={220}
        //yAxisLabel={'$'}
        chartConfig={{
          backgroundColor: 'black',
          backgroundGradientFrom: '#fb8c00',
          backgroundGradientTo: '#ffa726',
          decimalPlaces: 0, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 12
          }
        }}
        bezier
        style={{
          marginVertical: 4,
          borderRadius: 12
        }}
      />

      <Text style={{color: 'black'}}>Số ca hồi phục</Text>

      {/* //chart so ca chết */}
      <LineChart
        data={line3}
        //width={Dimensions.get('window').width} // from react-native
        width={350}
        height={220}
        //yAxisLabel={'$'}
        chartConfig={{
          backgroundColor: 'red',
          backgroundGradientFrom: '#fb8c00',
          backgroundGradientTo: '#ffa726',
          decimalPlaces: 0, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 12
          }
        }}
        bezier
        style={{
          marginVertical: 4,
          borderRadius: 12
        }}
      />

      <Text style={{color: 'black'}}>Số ca chết</Text>
    </View>


    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 'auto',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 30,
  },
});
