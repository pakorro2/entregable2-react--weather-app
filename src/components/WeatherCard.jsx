import React from 'react'
import { useState } from 'react'



const WeatherCard = ({ weather }) => {

  let icon = `https://openweathermap.org/img/wn/${weather?.weather[0].icon}@4x.png`
  let unitTempC = Math.trunc(weather?.main.temp)
  let unitTempF = Math.trunc(unitTempC * 1.8 + 32)
  const changeTemperature = () => setChangeTemp(!changeTemp)
  const [changeTemp, setChangeTemp] = useState(true)


  return (
    <article className='card'>
      <h1>Weather App</h1>
      <section className='card__city' >
        <h2 className='card__city-title' >
          {`${weather?.name}, ${weather?.sys.country}`}
        </h2>
        <img src={icon} alt="icon-weather" className='card__weather-icon' />
        <h2 className='card__state-weather'>{weather?.weather[0].description}</h2>
        <ul className='card__list-description'>
          <li>
            <span>Wind Speed:</span> {weather?.wind.speed} m/s
          </li>
          <li><span>Clouds:</span> {weather?.clouds.all} %</li>
          <li><span>Pressure:</span> {weather?.main.pressure} hPa</li>
        </ul>
      </section>
      <h2 className='card__city-temperature'>
        {changeTemp ? `${unitTempC} °C` : `${unitTempF} °F`}
      </h2>
      <button className='card__btn' onClick={changeTemperature}>
        {changeTemp ? `Show in °F` : `Show in °C`}
      </button>
    </article>
  )
}

export default WeatherCard