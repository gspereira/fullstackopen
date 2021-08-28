import React, { useState, useEffect } from "react";
import axios from "axios";

const CountryDetailed = ({ country }) => {
  const api_key = process.env.REACT_APP_API_KEY

  const [weatherData, setWeatherData] = useState({})

  const getWeatherData = () => {
    axios
    .get(`http://api.weatherstack.com/current?access_key=${api_key}&query=${country.capital}`)
    .then(response =>{
      console.log(response.data)
      setWeatherData(response.data)
    })
  }

  useEffect(getWeatherData, [])

  if (typeof weatherData.current !== 'undefined') {
    return (
      <div>
        <h2>{country.name}</h2>
        <p>Capital: {country.capital}</p>
        <h3>Languages</h3>
        <ul>
          {country.languages.map(lang => {
            return <li key={lang.name}>{lang.name}</li>
          })}
        </ul>
        <img className='flag' src={country.flag} />
        <h3>Weather in {country.capital}</h3>
        <p><b>temperature: </b>{weatherData.current.temperature}</p>
        <img src={weatherData.current.weather_icons[0]} />
        <p><b>wind: </b>{weatherData.current.wind_speed}</p>
      </div>
    );
  } else {
    return <p>Loading</p>
  }
  
}
 
export default CountryDetailed;