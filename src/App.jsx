
import { useState } from 'react'
import {If, Then, Else} from 'react-if';
import Weather from './components/Weather.jsx';
import Image from 'react-bootstrap/Image'
import Card from 'react-bootstrap/Card'
import ErrorMessage from './components/ErrorMessage.jsx';
import Movies from './components/Movies.jsx';

const VITE_LOCATION_API_KEY = import.meta.env.VITE_LOCATION_API_KEY

const VITE_API_SERVER = import.meta.env.VITE_SERVER_URL;
// console.log(VITE_API_SERVER)
function App() {

  const [weather, setWeather] = useState([]);
  const [location, setLocation] = useState({});
  const [city, setCity] = useState('');
  const [error, setError] = useState('')
  const [movies, setMovies] = useState([])


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
    if(data.error){
      setError('location not found');
      setLocation({})
    }
    let locationData = data[0];
    setLocation(locationData);

  getWeather(locationData.lat, locationData.lon);
  getMovies();
  }

  async function getWeather(lat, lon) {
    try {

    let url = `${VITE_API_SERVER}/weather?lat=${lat}&lon=${lon}`;
    const response = await fetch(url);
    console.log(response)
    const data = await response.json();
    setWeather (data);
    console.log(weather)
  } catch(e){
    console.error('error retreiving data')
    setWeather([])
  }

}


async function getMovies(){
  try {
    let url = `${VITE_API_SERVER}/movies?city=${city}`;
    const response = await fetch(url);
    const data = await response.json();
    setMovies(data);
  } catch(e){
    console.error('error retreiving data');
    setMovies([]);
  }
}

  return (
    <div style = {{backgroundColor: '#646cffaa'}}>
      <section>
        <form onSubmit={handleSubmit}>
         <input onChange={handleChangeCity} />
        </form>
      </section>
        {error&&<ErrorMessage error={error}/>}
      <Card style = {{marginBottom: '50px'}}>
        <If condition={location.display_name}>
          <Then>
            <Card.Text>
              <section>
            <h2>{location.display_name}</h2>
            <p>Latitude: {location.lat}, Longitude: {location.lon}</p>
            </section>
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
      <Movies movies={movies}/>
    </div>
  )
}



export default App
