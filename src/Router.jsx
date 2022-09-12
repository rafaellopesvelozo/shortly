import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './Components/Pages/Home/index'
import Features from './Components/Pages/Features/index'
import Pricing from './Components/Pages/Pricing/index'
import Resources from './Components/Pages/Resources/index'
import Login from './Components/Pages/Login/index'
import Signup from './Components/Pages/Signup/index'

const Router = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/features' element={<Features />} />
            <Route path='/pricing' element={<Pricing />} />
            <Route path='/resources' element={<Resources />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='*' element={<Home />}/*caso página ñ encontrado*/ />
        </Routes>
    );
}

export default Router;