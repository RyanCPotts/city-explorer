import { CardText } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
function MovieDay(props) {
    return (

        <>
            <Card>
                <Card.Title>{props.movieDate.title}</Card.Title>
                <Card.Img style = {{height: '200px', width: '150px'}}src = {`https://image.tmdb.org/t/p/w500${props.movieDate.poster_path}`} alt = 'movie poster'/>
                <Card.Text>
                    <li>{props.movieDate.overview}</li>
                    <li>{props.movieDate.release_date}</li>
                </Card.Text>
            </Card>


        </>

    );
}

export default MovieDay;