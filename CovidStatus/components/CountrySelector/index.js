import { StatusBar } from 'expo-status-bar';
import React, {useState, useRef} from 'react';
import { StyleSheet, Text, View, } from 'react-native';
import {Picker} from '@react-native-picker/picker';

export default function CountrySelector({value, handleOnChange, countries}) {
    //const [country, setCountry] = useState("");
    //const pickerRef = useRef();
//console.log(value)
// function open() {
//   pickerRef.current.focus();
// }

// function close() {
//   pickerRef.current.blur();
// }
  return (
    <View style={styles.container}>
      <Text style={{alignItems: 'flex-start', fontWeight: 'bold', fontSize: 20}}>Quốc gia</Text>
        <View style={styles.picker}>
            <Picker
            //ref={pickerRef}
            style={{ color: 'black', width: '100%', height: 50}}
            selectedValue={value}
            onValueChange={handleOnChange}
            >
                {
                    countries.map((country)=>{
                        return <Picker.Item label={country.Country} value={country.ISO2.toLowerCase()}/>
                    })
                }
            </Picker>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  picker:{
      width: '85%',
      height: '40%',
      position: 'absolute',
      bottom: 0,
  }
});
