
import { useState } from 'react'
import {If, Then, Else} from 'react-if';
// import Trinkets from './components/Trinkets.jsx';
const VITE_LOCATION_API_KEY = import.meta.env.VITE_LOCATION_API_KEY

const VITE_API_SERVER = import.meta.env.VITE_API_SERVER;
// console.log(VITE_API_SERVER)
function App() {

  // const [trinkets, setTrinkets] = useState([]);
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
    setLocation(data);

    // getTrinkets();
  }

  // async function getTrinkets() {
  //   let url = `${VITE_API_SERVER}/trinkets?city=${city}`;
  //   const response = await fetch(url);
  //   const data = await response.json();
  //   setTrinkets(data);
  // }

  return (
    <>
      <section>
        <form onSubmit={handleSubmit}>
         <input onChange={handleChangeCity} />
        </form>
      </section>

      <section>
        <If condition={location[0].display_name}>
          <Then>
            <h2>{location[0].display_name}</h2>
            <p>Latitude: {location[0].lat}, Longitude: {location[0].lon}</p>
          </Then>
          <Else>
            <p>Search for a city using the form above</p>
          </Else>
        </If>
      </section>

      <section>
        <img src={`https://maps.locationiq.com/v3/staticmap?key=${VITE_LOCATION_API_KEY}&center=${location[0].lat},${location[0].lon}&zoom=10`} alt="Map" />
      </section>

      {/* <Trinkets trinkets={trinkets} /> */}

    </>
  )
}

export default App
