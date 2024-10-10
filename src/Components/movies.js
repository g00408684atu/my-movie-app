import MovieItem from "./movieitem";

const Movies = (props)=>{
    // using map function to write over the array of movies in props.MyMovies
    return props.MyMovies.map(
        (movie)=>{
            return <MovieItem myMovie={movie}></MovieItem>
        }
    );
}

export default Movies;