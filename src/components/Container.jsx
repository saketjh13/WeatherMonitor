import React from 'react';
import Search from './Search';
import { useState } from 'react';
import GetWeatherData from '../services/GetWeatherData';
import { useEffect } from 'react';
import GetForecast from '../services/GetForecast';
import CurrentTemp from './CurrentTemp';
import Forecast from './Forecast';
function Container() {
  const [query, setQuery] = useState("Mumbai");
  const [data, setData] = useState('');
  const [icon, setIcon] = useState('');
  const [forecastData, setForecastData] = useState('');

  
  useEffect(() => {
    const fetchWeather = async () => {
      const currentWeather = await GetWeatherData(query)
      setData(currentWeather);
      const forecastWeather = await GetForecast(query)
      // console.log(forecastWeather)
      setForecastData(forecastWeather)
      const icondID = currentWeather.weather.icon;
      // console.log(icondID);
      setIcon(icondID);
    };
    fetchWeather();
  }, [query, Search])
  // console.log(icon);
  return (
    <div className='rounded-lg bg-gradient-to-r from-cyan-400 to-blue-400 w-full h-full'>
      <div className=''>
        <Search setQuery={setQuery} query={query} />
        <CurrentTemp setData={data} setIcon={icon} />
        <Forecast setForecastData={forecastData} />
      </div>
    </div>
  )
}

export default Container
