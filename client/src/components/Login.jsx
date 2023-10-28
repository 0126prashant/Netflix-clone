import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { login } from '../redux/Register/actions/userActions';
import { POST_LOGIN_SUCCESS } from '../redux/Register/actionTypes/actionTypes';
import "../Styles/login.css"

export const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const toast = useToast();

    const handleSubmit = async (e) => {
        e.preventDefault();
        login()
    };
    const login = async()=>{
        let obj = { email, password };
        try {
            const res = await fetch(`http://localhost:8080/users/login`,{
                method:"POST",
                headers:{
                    "Conetnt-Type": "application/json"
                },
                body:JSON.stringify(obj)
            })
            const data = await res.json();
            console.log(data)
            
        } catch (error) {
            console.log("Login failed",error)
        }
    }
    return (
        <><img src="https://assets.nflxext.com/ffe/siteui/vlv3/ab180a27-b661-44d7-a6d9-940cb32f2f4a/7fb62e44-31fd-4e1f-b6ad-0b5c8c2a20ef/IN-en-20231009-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="backImage"/>
        
        <div className='main-container'>
            <h2>Login</h2>
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
