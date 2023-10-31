import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../../Styles/crausel.css"
import Modal from 'react-modal';
import { Add, Dislike, Down, Like, Play } from '../../utils/icons';



const Crausel = ({movies}) => {
  const [genres, setGenres] = useState({});
  const [selectedMovie, setSelectedMovie] = useState(null);

// Rendering ----------Gener---------------------------------------> 
useEffect(() => {
  const fetchGenres = async () => {
    try {
      const response = await axios.get('https://api.themoviedb.org/3/genre/movie/list', {
        params: {
          api_key: process.env.apiKey 
        }
      });
      const genreData = response.data.genres.reduce((acc, genre) => {
        acc[genre.id] = genre.name;
        return acc;
      }, {});
      setGenres(genreData);
    } catch (error) {
      console.error('Error fetching genres:', error);
    }
  };

  fetchGenres();
}, []);
// console.log(genres,"gener")
// Rendering ----------Gener---------------------------------------> 
// The model options for closing and opening -------------------------->
const closeModal = () => {
  setSelectedMovie(null);
}

const openModal = (movie) => {
  setSelectedMovie(movie);
}
// The model options for closing and opening -------------------------->

  return (
    <div className="carousel">
      {movies.map(movie => (
        <div key={movie.id} className="carousel-cell card">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            className='movie-poster'
          />
          <div className='hidden'>
          <div className='icons'>
          <Play className='icn brdr'/>
          <Add className='icn brdr'/>
          <Like className='icn brdr'/>
          <Dislike className='icn brdr'/>
          <Down className='icn brdr' onClick={() => openModal(movie)}/>
          </div>
          <h2>{movie.title}</h2>
          <span className='green'>{Math.round(movie.vote_average * 10)}% Match </span>
          <div className='gener'>
          <span>{movie.genre_ids.map(id => genres[id]).join(' • ')}</span>
          </div>
          </div>
        </div>
      ))}

      <Modal
        isOpen={selectedMovie !== null}
        onRequestClose={closeModal}
        contentLabel="Movie Details"
        className="modal"
      >
        {selectedMovie && (
          <div>
            <h2>{selectedMovie.original_title}</h2>
            <img
              src={`https://image.tmdb.org/t/p/original${selectedMovie.poster_path}`}
              alt={selectedMovie.original_title}
            />
            <p>{selectedMovie.overview}</p>
          </div>
        )}
        <button onClick={closeModal} style={{color:"red"}}>Close</button>
      </Modal>
    </div>
    
  );
};

export default Crausel;
