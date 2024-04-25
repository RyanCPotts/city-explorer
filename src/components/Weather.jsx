import Card from 'react-bootstrap/Card';
import WeatherDay from './WeatherDay'
function Weather(props) {
    console.log(props.weather)
    return (
        <section>
            <ul>
                {
                    props.weather.map((weatherDate, index) =>
                        <>
                            {/* <Card>
                                <Card.Text>
                                    <li key={index}>{weatherDate.date} </li>

                                    <li key={index}>{weatherDate.forecast} </li>
                                </Card.Text>
                            </Card> */}
    <WeatherDay weatherDate = {weatherDate} key = {index}/>

                        </>
                    )
                }
            </ul>
        </section >
    );
}

export default Weather;
