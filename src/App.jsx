import { useEffect } from 'react'
import './App.css'

import { externalConfig } from "../externalConfig";


function App() {
  const currentzip = "23860";
  const byZip = `https://api.openweathermap.org/data/2.5/weather?zip=${currentzip}&units=metric&appid=${externalConfig.API_key}`;

  useEffect(() => {
    getWeather()
  })

  const getWeather = async () => {
    await fetch(byZip)
      .then(res => res.json())
      .then(data => {
        console.log('fetching promise');
        console.log(data);
      })
  }
  return (
    <div>
      <h1>Weather App</h1>
    </div>
  )
}

export default App
