import Card from 'react-bootstrap/Card';
function Weather(props) {
    return (
        <section>
            <ul>
                {
                    props.weather.map((weatherDate, index) =>
                        <>
                            <Card>
                                <Card.Text>
                                    <li key={index}>{weatherDate.date} </li>

                                    <li key={index}>{weatherDate.description} </li>
                                </Card.Text>
                            </Card>


                        </>
                    )
                }
            </ul>
        </section >
    );
}

export default Weather;
