import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Projects from '../pages/Projects';
import Regist from '../pages/Regist';

export default () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/login" element={<Login />}/>
                <Route path="/regist" element={<Regist />} />
            </Routes>
        </BrowserRouter>
    )
}