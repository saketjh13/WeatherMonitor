import React from 'react'
import iconUrlFromCode from '../services/GetIcon';
function Forecast(weatherData) {
    let data;

    data = [...weatherData.setForecastData];
    
    return (
        <div>
            <div>
                <div className="flex items-center justify-start mt-3 mx-5">
                    <p className="text-white font-medium uppercase">Forecast</p>
                </div>
                <hr className="my-1" />

                <div className="flex flex-wrap items-center justify-between text-white overflow-auto">
                    
                    
                    {data.map((item, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center justify-center m-3"
                        >
                            <p className="font-light text-sm">{item[0]}</p>
                            <p className="font-light text-sm">{item[1]}</p>
                            <img
                                src={iconUrlFromCode(item[3])}
                                className="w-12 my-1"
                                alt=""
                            />
                            <p className="font-medium">{(item[2]-274.15).toFixed(1)}°C</p>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}

export default Forecast
