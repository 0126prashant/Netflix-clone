import React, { useEffect, useState } from 'react'
import "../Styles/navbar.css"
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@chakra-ui/react';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const {userName,isAuth,Login} =  useSelector((store)=>store.RegisterReducer)
  // console.log(isAuth ? "true":"false" ,"is auth in nav")
  // console.log(userName,"userName  in nav") 
  // console.log(Login,"Login  in nav") 
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

 

  return (
    <nav className={`nav ${scrolled ? 'black' : ''}`}>
    <div className='navbar-main'>
      <img src='https://nextflix-azure.vercel.app/_next/image?url=%2Fassets%2Flogo.png&w=96&q=75' alt='logo'/>
      <h2>TV Shows</h2>
      <h2>Movies</h2>
      <h2>News & Popular</h2>
      <h2><Link to="/list/">My List</Link> </h2>
    <div className='nav_icons'>
      <div>search</div>
      {/* <div>notification</div> */}
      <div>{isAuth? `Hey ${userName}` : <Link to="/users/login"><button >Login</button></Link>} </div>
    </div>
    </div>

      
    </nav>
  )
}
 