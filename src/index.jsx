import React, { useState } from "react";
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Profile from './profile';
import Apps from "./App";
export default function index() {
    return (    
        <BrowserRouter>
           
            <Routes>   
                
                <Route path="/" element={<Apps />} />
                <Route path="/profile" element={<Profile />} />
            </Routes>
        </BrowserRouter>
    )
}
