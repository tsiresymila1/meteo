import React, { KeyboardEvent, useState } from 'react';
import { SpinnerCircular } from 'spinners-react';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
  getWeatherAsync,
} from './meteoSlice';
import styles from './Meteo.module.css';

export function Meteo() {
  const weather = useAppSelector(state => state.meteo.weather);
  const status = useAppSelector(state => state.meteo.status)
  const dispatch = useAppDispatch();
  const [city, setCity] = useState<string>('')

  const toCelcius = (value: any) => {
        return (value - 273.15).toFixed(2)
  }
  const getWeather = () => {
      dispatch(getWeatherAsync(city)).finally(()=>{
          setCity('')
      })
  }

  const handleKeyDown = (event:KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
        getWeather()
    }
  }

  

  return (
    <div>
      <div className={styles.row}>
          {status === 'loading' && (
              <SpinnerCircular />
          )}
        {status === 'failed' && (
            <div>
                <span className='error'>
                Erreur lors de chargement de méteo
                </span>
            </div>
        )}
        { status === 'idle' && weather && weather.weather && (
        <div>
            <ul className={styles.list}>
                <li>Lieu : {weather.name} </li>
                <li>Metéo : {weather.weather[0].main} : {weather.weather[0].description}</li>
                <li>Temperature : {toCelcius(weather.main.temp_min)}°C à {toCelcius(weather.main.temp_max)}°C</li>
                <li>Himidité : {weather.main.humidity}</li>
                <li>Pression : {weather.main.pressure}</li>
                <li>Visibilité : {weather.visibility}</li>
            </ul>
        </div>)}
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={city}
          onKeyDown={handleKeyDown}
          onChange={(e) => setCity(e.target.value)}
        />
        <button
          className={styles.button}
          onClick={getWeather}
        >
          Get Weather
        </button>
      </div>
    </div>
  );
}
