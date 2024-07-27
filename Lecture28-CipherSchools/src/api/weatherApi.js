import axios, { Axios } from "axios"


const WEATHER_API_URL="https://api.open-meteo.com/v1/forecast";

const convertDate=(date)=>{
  const year=date.getFullYear();
  const month=date.getMonth()+1<=9 ? `0${date.getMonth()+1}` : date.getMonth()+1;
  const day=date.getDate()<=9 ? `0${date.getDate()}` :date.getDate();
  return `${year}-${month}-${day}`;
}

const getWeather = async ({latitude,longititude})=>{
  const startDate=new Date();
  const weatherInfo=await Axios.get(WEATHER_API_URL,{
    latitude,
    longititude,
    current_weather:true,
    timezone:true,
    start_date:convertDate(startDate),
    end_date:convertDate(new Date(startDate.setDate(startDate.getDate()+7)))
  })
}

export default getWeather 