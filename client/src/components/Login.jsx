import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import "../Styles/login.css"
import { loginuser } from '../redux/Register/actions/userActions';

export const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const toast = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();

      const dataObj = { email, password };
    try {
      await dispatch(loginuser(dataObj));
      const token = localStorage.getItem('token');
      if (token) {
        navigate("/");
      }
    } catch (error) {
      console.error(error, "error");
    }


    
    // const response = await fetch('http://localhost:8080/users/login', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({ email, password }),
    //   });
    
    //   const data = await response.json();
    // console.log(data,"login data")
    //   if (data.token) {
    //     localStorage.setItem('token', data.token);
    //     alert("Login sucess")
    //    navigate("/")
    //   }
    //   else {
    //     alert("Login failed")
    //     console.error(data.msg);
    //   }

    
  };

    return (
        <><img src="https://assets.nflxext.com/ffe/siteui/vlv3/ab180a27-b661-44d7-a6d9-940cb32f2f4a/7fb62e44-31fd-4e1f-b6ad-0b5c8c2a20ef/IN-en-20231009-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="backImage"/>
        
        <div className='main-container'>
            <h2 className='loginh2'>Login</h2>
            <br/>
            <form onSubmit={handleSubmit}>
            <label>Email  </label>
            <br/>
            <br/>
                <input
                    type="email"
                    name="email"
                    placeholder="Enter Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <label>Password  </label>
            <br/>
            <br/>
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button className='btn' type="submit">Login</button>
            </form>
        </div>
        </>
    );
};
