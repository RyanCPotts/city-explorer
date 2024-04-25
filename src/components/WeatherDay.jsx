import Card from 'react-bootstrap/Card';
function WeatherDay(props) {
    return (

        <>
            <Card>
                <Card.Text>
                    <li>Low of {props.weatherDate.low}, high of {props.weatherDate.high} with {props.weatherDate.forecast} </li>

                    <li>{props.weatherDate.date} </li>
                </Card.Text>
            </Card>


        </>

    );
}

export default WeatherDay;