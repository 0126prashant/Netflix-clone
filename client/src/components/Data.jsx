import axios from 'axios';
import React, { useEffect } from 'react'

export const Data = () => {
const apiKey = 'f3bf97e36474e6b3f3dbd267ac45a672'; 



const fetch = ()=>{
    axios.get('https://api.themoviedb.org/3/movie/popular', {
        params: {
          api_key: apiKey
        }
      })
.then(response => {
  const popularMovies = response.data.results;
  console.log('Popular Movies:', popularMovies);
})
.catch(error => {
  console.error('Error fetching data:', error);
});
}
fetch()

  return (
    <div>
        <h1>data</h1>
        <h1>data</h1>
        <h1>data</h1>
        <h1>data</h1>
        <h1>data</h1>
    </div>
  )
}
