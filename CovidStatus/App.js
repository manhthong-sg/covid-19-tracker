import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { getCounntry, getReportByCountry } from './api';
import CountrySelector from './components/CountrySelector';
import Hignlight from './components/Hignlight';
import Summary from './components/Summary';


export default function App() {

  const [selectedCountryId, setSelectedCountryId]=useState((prevState)=>{
    return prevState;
  });
  const [report, setReport]=useState([]);
  const [countries, setCountries]=useState([]);
  useEffect(()=>{
    getCounntry()
    .then((result) => {
      setCountries(result.data)
    }).catch((err) => {
      console.log({err})
    });
  }, [])



  const handleOnChange=(e)=>{
    setSelectedCountryId(e);

  }
  
  useEffect(()=>{
    if(selectedCountryId){
      const {Slug}= countries.find(country=> country.ISO2.toLowerCase() === selectedCountryId)
      getReportByCountry(Slug)
      .then((res)=>{ 
          //xoa di item cua cua data la ngay hom nay chua update  
          //res.data.pop();
          setReport(res.data)
          //console.log({res}) 
      })
    }
  }, [countries, selectedCountryId])
  return (
    
      <View style={styles.container}>
        <CountrySelector style={styles.CountrySelector} value ={selectedCountryId} handleOnChange={handleOnChange} countries={countries}/>
        <Hignlight report={report} />
        <Summary/>
      </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#fff',
  },
  
  CountrySelector:{
    
  }
});
