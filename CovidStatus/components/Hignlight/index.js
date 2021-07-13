import { StatusBar } from 'expo-status-bar';
import React, { useEffect , useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Hignlight({report}) {
    const data=report && report.length ? report[report.length-1]: [];
    //console.log(data)
    const [soCaNhiem, setSoCaNhiem]=useState((presState)=>{
        return presState;
    });
    const [khoi, setKhoi]=useState((presState)=>{
        return presState;
    });
    const [tuVong, setTuVong]=useState((presState)=>{
        return presState;
    });

    useEffect(()=>{
        setSoCaNhiem(data.Confirmed);
        setKhoi(data.Recovered);
        setTuVong(data.Deaths);
        data.length=0;
    }, [data])
  return (
    <View style={styles.container}>
        <View style={styles.SoCaNhiemContainer}>
            <View style={styles.SoCaNhiemFlag}>

            </View>
            <View style={styles.SoCaNhiem}>
                <Text style={{fontSize: 16}}>
                    Số ca nhiễm:
                </Text>
                <Text style={{fontWeight: 'bold'}}>
                    {soCaNhiem}
                </Text>
            </View>
        </View>
        <View style={styles.KhoiContainer}>
            <View style={styles.KhoiFlag}>

            </View>
            <View style={styles.Khoi}>
                <Text style={{fontSize: 16}}>
                    Số ca đã khỏi:
                </Text>
                <Text style={{fontWeight: 'bold'}}>
                    {khoi}
                </Text>
            </View>
        </View>
        <View style={styles.TuVongContainer}>
            <View style={styles.TuVongFlag}>

            </View>
            <View style={styles.TuVong}>
                <Text style={{fontSize: 16}}>
                    Số ca tử vong:
                </Text>
                <Text style={{fontWeight: 'bold'}}>
                    {tuVong}
                </Text>
            </View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 30,
  },

  //So ca nhiem
  SoCaNhiemContainer:{
    flexDirection: 'row',
    width: '80%',
    height: 60,
    //borderColor: 'orange',
    alignItems: 'center',
    borderBottomColor: 'black',
    borderBottomWidth: 0.7,
    marginTop: 50,
  },
  SoCaNhiemFlag:{
    width: 10,
    height: '100%',
    backgroundColor: 'red',
    
  },
  SoCaNhiem:{
      paddingLeft: 20,
  },

  //So ca Khoi
  KhoiContainer:{
    flexDirection: 'row',
    width: '80%',
    height: 60,
    //borderColor: 'orange',
    alignItems: 'center',
    borderBottomColor: 'black',
    borderBottomWidth: 0.7,
    marginTop: 50,

  },
  KhoiFlag:{
    width: 10,
    height: '100%',
    backgroundColor: 'green',
    
  },
  Khoi:{
      paddingLeft: 20,
  },

  //So ca Tu vong
  TuVongContainer:{
    flexDirection: 'row',
    width: '80%',
    height: 60,
    //borderColor: 'orange',
    alignItems: 'center',
    borderBottomColor: 'black',
    borderBottomWidth: 0.7,
    marginTop: 50,
  },
  TuVongFlag:{
    width: 10,
    height: '100%',
    backgroundColor: 'grey',
    
  },
  TuVong:{
      paddingLeft: 20,
  },
  
  
});
