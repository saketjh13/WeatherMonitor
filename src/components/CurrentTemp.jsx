import React from 'react'
import iconUrlFromCode from '../services/GetIcon';
import pressure from '../assets/atmospheric.png';
import sunrise from '../assets/horizon.png';
import sunset from '../assets/sunset.png';
import temp_feels from '../assets/temperature.png';
import humidity from '../assets/humidity.png';
import wind from '../assets/wind.png';
import formatToLocalTime from '../services/FormatTimezone';

function CurrentTemp(weatherData) {
  const finalData = weatherData.setData;
  const temp = (finalData.temp - 274.15);
  let id, main;
  if (finalData.weather) {
    id = finalData.weather.icon;
    main = finalData.weather.main;
  }

  return (
    <div>
      <div className='flex justify-center items-center h-1/2'>
        <div className='flex flex-row justify-center items-center h-10 w-full py-1 '>
          <p className='text-white text-1xl flex'> {finalData.name},{finalData.country} </p>
        </div>

      </div>
      <div className='flex flex-row justify-center items-center w-full h-10 '>
        <p className='text-5xl md:text-4xl text-white flex'> {temp.toFixed(2)}°C </p>
      </div>
      <div className='flex flex-wrap py-1 justify-center items-center text-center'>
        <img src={iconUrlFromCode(id)} alt="" className='flex w-10 h-10 '></img>
        <p className='text-white text-1xl flex'> {main} </p>
      </div>

      <div className="flex flex-row md:flex-col overflow-hidden justify-center items-center ">
        <div className='flex flex-col md:flex-row w-1/2 md:w-full justify-start items-start md:justify-center md:items-center'>
          <div className="flex font-light text-base my-1 md:text-sm justify-center items-center md:mx-5">
            <img src={temp_feels} className='w-7 h-7' />
            Feels Like
            <span className=" ml-1 text-white">{(finalData.feels_like - 274.15).toFixed(2)}°C </span>
          </div>
          <div className="flex font-light text-base my-1 md:text-sm justify-center items-center md:mx-5">
            <img src={humidity} className='w-7 h-7' />
            Humidity
            <span className=" ml-1 text-white">{finalData.humidity}%</span>
          </div>
          <div className="flex font-light text-base md:text-sm my-1 justify-center items-center md:mx-5">
            <img src={wind} className='w-7 h-7' />
            Wind
            <span className=" ml-1 text-white">{finalData.wind} m/s </span>
          </div>
        </div>
        <div className='flex flex-col md:mx-5 md:flex-row w-1/2 md:w-full justify-start items-start md:justify-center md:items-center'>
          <div className="flex font-light text-base my-1 md:text-sm justify-center items-center md:mx-5">
            <img src={sunrise} className='w-7 h-7' />
            Sunrise
            <span className=" ml-1 text-white">{formatToLocalTime(finalData.sunrise, finalData.timezone, "hh:mm")} AM</span>
          </div>
          <div className="flex font-light text-base my-1 md:text-sm justify-center items-center md:mx-5">
            <img src={sunset} className='w-7 h-7' />
            Sunset
            <span className=" ml-1 text-white">{formatToLocalTime(finalData.sunset, finalData.timezone, "hh:mm")} PM</span>
          </div>
          <div className="flex font-light text-base my-1 md:text-sm justify-center items-center md:mx-5">
            <img src={pressure} className='w-7 h-7' />
            Pressure
            <span className=" ml-1 text-white">{finalData.pressure} </span>
          </div>
        </div>


      </div>

    </div>



  )
}

export default CurrentTemp
