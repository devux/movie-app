import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    axios.get('https://movie-api-pied-six.vercel.app/api/movies') // Replace with your movie API endpoint
      .then(response => {
        setMovies(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const onClickMovie = useCallback((orderDetails) => {
    axios.get(`https://movie-api-pied-six.vercel.app/api/movies/${orderDetails.id}`) // Replace with your movie API endpoint
      .then(response => {
        setMovieDetails(response.data)
      })
      .catch(error => {
        console.log(error);
      });
  }, []);


  return (
    <div>
      <button onClick={() => setMovieDetails(null)}>Reset</button>
      <div>
        <h1>
          {movieDetails && <p>{movieDetails.title}</p>}
        </h1>
      </div>      
      <h2>Movie List</h2>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <p onClick={() => onClickMovie(movie)}>{movie.title}</p>
          </li>
        ))}
      </ul>

    </div>
  );
}

export default App;
