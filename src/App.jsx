
import { useState } from 'react'
import {If, Then, Else} from 'react-if';
import Weather from './components/Weather.jsx';
import Image from 'react-bootstrap/Image'
import Card from 'react-bootstrap/Card'

const VITE_LOCATION_API_KEY = import.meta.env.VITE_LOCATION_API_KEY

const VITE_API_SERVER = import.meta.env.VITE_SERVER_URL;
// console.log(VITE_API_SERVER)
function App() {

  const [weather, setWeather] = useState([]);
  const [location, setLocation] = useState({});
  const [city, setCity] = useState('');

  function handleChangeCity(event) {
    setCity(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    getLocation();
  }

  async function getLocation() {
    let url = `https://us1.locationiq.com/v1/search?key=${VITE_LOCATION_API_KEY}&q=${city}&format=json`;
    const response = await fetch(url);
    const data = await response.json();
    let locationData = data[0];
    setLocation(locationData);

  getWeather(locationData.lat, locationData.lon);
  }

  async function getWeather(lat, lon) {
    let url = `${VITE_API_SERVER}/weather?city=${city}&lat=${lat}&lon=${lon}}`;
    console.log(url)
    const response = await fetch(url);
    const data = await response.json();
    setWeather(data);
  }
console.log(location)

  return (
    <div style = {{backgroundColor: '#646cffaa'}}>
      <section>
        <form onSubmit={handleSubmit}>
         <input onChange={handleChangeCity} />
        </form>
      </section>

      <Card style = {{marginBottom: '50px'}}>
        <If condition={location.display_name}>
          <Then>
            <Card.Text>
            <h2>{location.display_name}</h2>
            <p>Latitude: {location.lat}, Longitude: {location.lon}</p>
            </Card.Text>
            
          </Then>
          <Else>
            <p>Search for a city using the form above</p>
          </Else>
        </If>
      </Card>

      <section>
        <Image src={`https://maps.locationiq.com/v3/staticmap?key=${VITE_LOCATION_API_KEY}&center=${location.lat},${location.lon}&zoom=10`} alt="Map" />
      </section>

      <Weather weather={weather} />

    </div>
  )
}

export default App
