import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Weather = () => {
  
  const[weather, setWeather] = useState();

  let city = "Gwangju";
  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
  const WEATHER_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
  
  const getWeatherData = async () => {
    try {
      let res = await axios.get(WEATHER_URL);
      setWeather(res.data);
    } catch (err) {
      console.error("날씨 데이터를 불러오는데 실패했습니다:", err);
    }
  }


  // const getWeatherData = async () => {
  //   try {
  //     const res = await axios.get(WEATHER_URL);
  //     setWeather(res.data);
  //   } catch (err) {
  //     console.error("날씨 데이터를 불러오는데 실패했습니다:", err);
  //   }
  // }

  useEffect(()=>{

    getWeatherData();

  },[])

  const today = new Date();
  const formattedDate = `${today.getFullYear()}.${today.getMonth() + 1}.${today.getDate()}`;

  return (
    <div>
        <h1>{formattedDate}</h1>
         {weather ? (
        <>
          <img
            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
            alt="날씨 이미지"
            style={{ width: '80px', height: '80px' }}
          />
          <p>현재 {city}은 {weather.main.temp.toFixed(2)}°C 입니다.</p>
        </>
      ) : (
        <p>날씨 정보를 불러오는 중...</p>
      )}
    </div>
  )
}

export default Weather