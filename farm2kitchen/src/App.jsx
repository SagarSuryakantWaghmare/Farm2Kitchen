// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './Pages/Home'; 
import About from './Pages/About'; 
import Products from './Pages/Products'; 
import Login from './Pages/Login';
import Signup from './Pages/Signup'; 
import Footer from './components/Footer'; 
import Spacer from './components/Spacer'; 

function App() {
    return (
        <Router>
            <Navbar />
            <Spacer /> 
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/products" element={<Products />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
            </Routes>
            <Footer /> 
        </Router>
    );
}

export default App;
