import { useEffect, useState } from 'react';
import Movies from './movies';
// Importing axios for making HTTP requests
import axios from 'axios';

const Read = ()=>{
    const [movies, setMovies] = useState([]);
// useEffect  to run side effects after the render
useEffect(
  ()=>{
    // Making a GET request to fetch data from the provided URL using axios
    axios.get('https://jsonblob.com/api/jsonblob/1287718524221775872')
    .then((response) => {
      console.log(response.data.movies);
      setMovies(response.data.movies);
    })
    .catch((error) => {
      // Logging any errors encountered
      console.log(error);
    });
}, []);

    return(
        <div className="text-center">
            <h1>This is my read component!</h1>
            <Movies MyMovies={movies}/>
        </div>
    );
}

export default Read;