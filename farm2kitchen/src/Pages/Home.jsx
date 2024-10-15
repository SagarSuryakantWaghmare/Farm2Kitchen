import React, { useState, useEffect } from 'react';
import Features from '../components/Features';
import Slider from '../components/Slider';
import HomeSlider from '../components/HomeSlider';
import Stats from '../components/States';
function HomePage() {
    return (
        <div className="container mx-auto  bg-gray-50 pt-16">
            <HomeSlider />
            <h1 className="text-center text-4xl font-bold text-green-700">Welcome to Our Platform</h1>
            <Stats />
            <Features className="mr-1"  />

            <Slider className="mr-1" /> 
            
        </div>
    );
}

  

export default HomePage;
