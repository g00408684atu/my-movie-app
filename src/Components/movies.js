import MovieItem from "./movieitem";

const Movies = (props)=>{
    return props.MyMovies.map(
        (movie)=>{
            return <MovieItem myMovie={movie}></MovieItem>
        }
    );
}

export default Movies;