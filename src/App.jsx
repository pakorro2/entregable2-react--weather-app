import axios from 'axios'
import { useState, useEffect } from 'react'
import './App.css'
import Loading from './components/Loading'
import WeatherCard from './components/WeatherCard'

function App() {

  const [coords, setCoords] = useState()
  const [weather, setWeather] = useState()

  useEffect(() => {
    const success = pos => {
      const obj = {
        lat: pos.coords.latitude,
        lon: pos.coords.longitude,
      }
      setCoords(obj)
    }
    navigator.geolocation.getCurrentPosition(success)
  }, [])

  useEffect(() => {

    if (coords) {
      const APIKEY = 'c76a22f00357f3c0156847ee17c1b81d'
      const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=${APIKEY}&units=metric&lang=en`
      axios.get(URL)
        .then(res => setWeather(res.data))
        .catch(error => console.log(err))
    }

  }, [coords])

  return (
    <div className="App">
      {
        weather ?
          <WeatherCard
            weather={weather}
          />
          :
          <Loading />
      }
    </div>
  )
}

export default App
