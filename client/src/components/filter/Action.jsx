import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Crausel from './Crausel';
// const apiKey = '2f91df7c599cd01601b84f9f8b5c20e0'; 

export const Action = () => {
  const [movies, setMovies] = useState([]);

  
    useEffect(() => {
      const genreId = 28; 
  
      axios.get(`https://api.themoviedb.org/3/discover/movie`, {
        params: {
          api_key: process.env.apiKey,
          with_genres: genreId,
        }
      })
      .then(response => {
        setMovies(response.data.results);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
    }, []);

      // console.log(movies,"horror_movies")
  return (
    <div className='horror_main'>
    <h1 style={{ fontFamily: 'Poppins, sans-serif' }}>Action</h1>
      <Crausel key={movies.id} movies={movies}/>
  </div>
  )
}