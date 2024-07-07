async function GetForecast(query){
    const API_KEY = '20249ac3d0268cc3b0c0465108c65f1a';
    const Base_URL = `https://api.openweathermap.org/data/2.5/forecast?q=${query}&appid=${API_KEY}`;
    let returnedData={}
    await fetch(Base_URL)
    .then((res)=>res.json())
    .then((res)=>res.list)
    .then((res)=> returnedData=res.slice(2,8).map((value)=>{
        return [
            value.dt_txt.slice(5,10),
            value.dt_txt.slice(11,16),
            value.main.temp,
            value.weather[0].icon
        ]
    }))
return returnedData;
    // .then((res)=>)
}
export default GetForecast