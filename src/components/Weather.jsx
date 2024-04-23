
function Weather(props) {
    return (
        <section>
            <ul>
                {
                    props.weather.map((weatherDate, index) =>
                        <>
                            <li key={index}>{weatherDate.date} </li>

                            <li key={index}>{weatherDate.description} </li>
                            </>
                                )
         }
                            </ul>
                        </section >
    );
}

                export default Weather;
