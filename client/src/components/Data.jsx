import axios from 'axios';
import React, { useEffect, useState } from 'react'
import "../Styles/data.css"
import Popular from './filter/Popular';
import { Horror } from './filter/Horror';
import Netflix from './filter/Netflix';
import { Trending } from './filter/Trending';
import { Action } from './filter/Action';
import { Comedies } from './filter/Comedies';
import { Animation } from './filter/Animation';
import { Info, Play } from '../utils/icons';

export const Data = () => {

  return (
    <div>
    <div className='poster'>
    {/* <img src={`https://image.tmdb.org/t/p/original${movies[5].poster_path}`} alt="poster" /> */}

    <img src={`https://image.tmdb.org/t/p/original/zwKaPkkLizCg1onpHQq89LWugkS.jpg`} alt="poster" />
    <div className='poster_data'>
      <h2>Nowhere</h2>
      <p>A young pregnant woman named Mia escapes <br/>from a country at war by hiding in a maritime container aboard<br/> a cargo ship. After a violent storm, Mia gives birth to the child while<br/> lost at sea, where she must fight to survive...</p>
      <button className='btn-1'><Play/> Play</button>
      <button className='btn-2'><Info/> More Info</button>
    </div>
    </div>
    <div className='main_data imp'>
      <Popular/>
      <Horror />
      <Netflix/>
      <Trending/>
      <Comedies/>
      <Action/>
      <Animation/>


        
    </div> 
    </div>
  )
}
