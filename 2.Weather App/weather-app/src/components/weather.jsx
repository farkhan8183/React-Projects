import axios from 'axios';
import React, { useState } from 'react'

const Weather = () => {

    const[city,setcity]=useState();
    const[weather,setweather]=useState();

    const handlecitychange=(e)=>{
       setcity(e.target.value);
    }
    //install axios that ll be used to fetch api n will save the response.
    const fetchWeather=async()=>{   
try{
   let response=await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a1cc7449e75a3c31ff595e87e3fc08d1`)//this api from current weather data website>api for current weather>api by city name(updated city and apiid/api key)
   console.log(response);   //to check/show response on console
   setweather(response);   
    }
catch(error){
console.log("error fetching data",error);
}

    }

    const handleclick=()=>{
      fetchWeather();       //calls async function.
    }

  return (
    <>

{/* start: */}

<div className='city'>
<input type="text" className='input' placeholder='Enter city name' value={city} onChange={handlecitychange} /><br /><br />
<button className='button' onClick={handleclick}>Get Weather</button>

{/* finally, we ve to show details of weather on UI. */}

{
    weather&& (< >   {/* its logical and operator.weather &&: Checks if the weather state has data....<>): If weather has data, the weather details/jsx inside the fragment(<>) are rendered. */}
    
    <div className='weather-info'>
        
        <h2>{weather.data.name}</h2>
        <p>Temperature: {weather.data.main.temp}</p>
        <p>Description: {weather.data.weather[0].description}</p> {/* weather here was an array inside data n description was present on its 0th index */}

    </div>
    
    
    
    </>)
}

</div>
    </>
  )
}

export default Weather