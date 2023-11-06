import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Crausel from './Crausel';


export const Trending = () => {
  const [movies, setMovies] = useState([]);

  
    useEffect(() => {  
      axios.get(`https://api.themoviedb.org/3/trending/movie/week`, {
        params: {
          api_key:"2f91df7c599cd01601b84f9f8b5c20e0",
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
    <h1 style={{ fontFamily: 'Poppins, sans-serif' }}>Tending Movies</h1>
      <Crausel key={movies.id} movies={movies}/>
  </div>
  )
}
