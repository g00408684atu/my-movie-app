import { useEffect, useState } from 'react';
import Movies from './movies';
import axios from 'axios';

const Read = ()=>{
    const [movies, setMovies] = useState([]);

useEffect(
  ()=>{
    axios.get('https://jsonblob.com/api/jsonblob/1287718524221775872')
    .then((response) => {
      console.log(response.data.movies);
      setMovies(response.data.movies);
    })
    .catch((error) => {
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