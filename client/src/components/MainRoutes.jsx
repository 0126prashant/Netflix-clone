import React from 'react'
import { Route, Routes } from "react-router-dom";
import { Login } from './Login';
import { Register } from './Register';
import { HomePage } from '../pages/HomePage';

export const MainRoutes = () => {
  return (
    <>
    <Routes>
        <Route path="/users/login" element={<Login />} />
        <Route path="/users/register" element={<Register />} />
        <Route path="/" element={<HomePage />} />
    </Routes>
    </>
  )
}
