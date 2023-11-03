import React from 'react'
import { Data } from '../components/Data'
import "../Styles/homepage.css"
import { Trending } from '../components/filter/Trending'
import { Navbar } from '../components/Navbar'

export const HomePage = () => {
  return (
    <div className='homepage_main'>
    <Navbar/>
      <Data/>
    
    </div>
  )
}
