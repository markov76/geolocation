import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios'

const API_URL = 'https://api.openweathermap.org/data/2.5/weather?';
const ICON_URL = 'http://openweathermap.org/img/wn/';
const API_KEY = 'b24540c571be092ad4c1f1154de8daed'

export default function Weather({lat,lng}) {
  const [temp, setTemp] = useState(0);
  const [speed, setSpeed] = useState(0);
  const [direction, setDirection] = useState(0);
  const [description, setDescription] = useState('');
  const [icon, setIcon] = useState('');

  useEffect(() => {
    const address = API_URL +
    'lat=' + lat +
    '&lon=' + lng +
    '&units=metric' +
    '&appid=' + API_KEY

    axios.get(address)
      .then((response) => {
        setTemp(response.data.main.temp);
        setSpeed(response.data.wind.speed);
        setDirection(response.data.wind.deg);
        setDescription(response.data.weather[0].description);
        setIcon(ICON_URL + response.data.weather[0].icon + '@2x.png');
      }).catch(error => {
        console.log(error)
        alert('Ei onnistu')
      })
  }, [])
  

  return (
    <>
      <h3>Sää sinun paikkakunnalta</h3>
      <p>{temp} C&#176;</p>
      <p>{speed} m/s {direction} degrees</p>
      <p>{description}</p>
      <img src={icon} alt="" />
    </>
  )
}
