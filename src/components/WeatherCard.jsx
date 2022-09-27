import React from 'react'
import { useState } from 'react'


const WeatherCard = ({ weather }) => {

  let icon = `https://openweathermap.org/img/wn/${weather?.weather[0].icon}@2x.png`
  let unitTempC = Math.trunc(weather?.main.temp)
  let unitTempF = Math.trunc(unitTempC * 1.8 + 32)
  const changeTemperature = () => setChangeTemp(!changeTemp)
  const [changeTemp, setChangeTemp] = useState(true)

  return (
    <article className='card'>
      <h1>Weather App</h1>
      <section className='card__city' >
        <h2 className='card__city-title' >{`${weather?.name}, ${weather?.sys.country}`}</h2>
        <h2 className='card__city-temperature'>Temperature {changeTemp ? `${unitTempC} °C` : `${unitTempF} °F`}</h2>
      </section>
      <section className='card__weather-time'>
        <img src={icon} alt="icon-weather" className='card__weather-icon' />
        <ul className='card__list-description'>
          <h2>{weather?.weather[0].description}</h2>
          <li>Wind Speed: {weather?.wind.speed} m/s</li>
          <li>Clouds: {weather?.clouds.all} %</li>
          <li>Pressure: {weather?.main.pressure} hPa</li>
        </ul>
      </section>
      <button className='card__btn' onClick={changeTemperature}>
        {changeTemp ? `Show in °F` : `Show in °C`}
      </button>
    </article>
  )
}

export default WeatherCard