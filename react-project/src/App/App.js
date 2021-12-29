import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Home from '../pages/Home';

export default () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </BrowserRouter>
    )
}