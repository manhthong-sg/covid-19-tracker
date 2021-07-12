import axios from "axios";
export const getCounntry=()=> axios.get('https://api.covid19api.com/countries');

export const getReportByCountry=(country)=> axios.get(`https://api.covid19api.com/dayone/country/${country}`)