import { useState } from 'react';
import { useEffect } from 'react';
import './App.css';
import Weather from './Weather';

function App() {
  const [lat, setLat] = useState(0);
  const [lng, setLng] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        setLat(position.coords.latitude);
        setLng(position.coords.longitude);
        setIsLoading(false)
      }, (error) => {
        alert(error);
      })
    }
    else {
      alert('Your browser does not support geolocation')
    }
    
      
    
  }, []) 
  
  if (isLoading) {
    return <p>Loading...</p>
  } 
  else {  
  return (
      <div style={{margin: '100px'}}>
        <h3> Sijaintisi on </h3> 
        <p>
          {lat.toFixed(3)},
          {lng.toFixed(3)}
        </p>
        <Weather lat={lat} lng={lng} />
      </div>
   );
  }
}

export default App;
