
async function GetWeatherData(query) {
    const API_KEY = '20249ac3d0268cc3b0c0465108c65f1a';
    const Base_URL = `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${API_KEY}`;
    let FormattedData={};
    let returnedData=[];
    await fetch(Base_URL)
        .then((res) => res.json())
        // .then((res)=>console.log(res))
        .then((res) => 
            FormattedData={
                coord:res.coord,
                date: res.dt,
                temp: res.main.temp,
                humidity:res.main.humidity,
                pressure:res.main.pressure,
                feels_like:res.main.feels_like,
                name: res.name,
                wind: res.wind.speed,
                weather:res.weather,
                country: res.sys.country,
                sunrise: res.sys.sunrise,
                sunset: res.sys.sunset,
                timezone: res.timezone
            }
        )
        // .then((res) => setData(res))
        // .then((res) => console.log(res))
        .then((res)=>returnedData= formatData(res))
    return returnedData;
}
const formatData=(data)=>{
    // console.log(data);
    const lat=data.coord.lat;
    const lon=data.coord.lon;
    const temp=data.temp;
    const feels_like=data.feels_like;
    const humidity=data.humidity;
    const pressure=data.pressure;
    const date=data.date;
    const name=data.name;
    const wind=data.wind;
    const weather=data.weather[0];
    const country=data.country;
    const sunrise=data.sunrise;
    const sunset=data.sunset;
    const timezone=data.timezone;
    return {
        lat,
        lon,
        temp,
        feels_like,
        humidity,
        name,
        date,
        country,
        sunrise,
        sunset,
        weather,
        wind,
        pressure,
        timezone
      };
}
export default GetWeatherData;
// export {FormattedData};