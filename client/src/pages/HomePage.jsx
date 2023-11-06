import React, { useEffect, useState } from 'react'
import { Data } from '../components/Data'
import "../Styles/homepage.css"
import { Navbar } from '../components/Navbar'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

export const HomePage = () => {
  const navigate = useNavigate()
  const [secondsRemaining, setSecondsRemaining] = useState(10);
  const {isAuth} =  useSelector((store)=>store.RegisterReducer)

  useEffect(() => {
    const redirectTimer = setInterval(() => {
      setSecondsRemaining(prev => prev - 1);
    }, 1000);

    if (secondsRemaining === 0 && !isAuth) {
      clearInterval(redirectTimer);
      navigate("/users/login");
    }

    return () => clearInterval(redirectTimer);
  }, [secondsRemaining, isAuth]);
  return (
    <>
    <div className='redirecting'>
    {!isAuth && <p>You have to login in {secondsRemaining} seconds...</p>}
    </div>

    <div className='homepage_main'>
    <Navbar/>
      <Data/>
    
    </div>
    </>
  )
}
