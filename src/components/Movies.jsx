import MovieDay from './MovieDay'
function Movies(props) {
    console.log(props.movies)
    return (
        <section>
            <ul>
                {
                    props.movies.map((movieDate, index) =>
                        <>
                            
    <MovieDay movieDate = {movieDate} key = {index}/>

                        </>
                    )
                }
            </ul>
        </section >
    );
}

export default Movies;
