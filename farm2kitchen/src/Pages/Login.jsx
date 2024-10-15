// src/Pages/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import affordableImage from '../assets/Veg3.jpg'; 

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add validation and API call here to log the user in
    console.log('Logging in user:', formData);
    navigate('/dashboard'); // Redirect to dashboard after successful login
  };

  return (
    <>
      <div 
        className="relative min-h-screen flex items-center justify-center" 
        style={{
          backgroundImage: `url(${affordableImage})`, // Use the imported image
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundColor: '#f0f0f0', // Fallback background color
          filter: 'brightness(90%)', // Reduce brightness of the background image
        }}
      >
        <div className="relative bg-white p-8 rounded-lg shadow-2xl max-w-sm w-full text-center z-10"> {/* Ensure content appears above the background */}
          <h2 className="text-3xl font-bold text-green-500 mb-6">TradeConnect</h2>
          <h3 className="text-xl font-bold mb-4">Welcome Back!</h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="w-full px-4 py-2 border rounded-md focus:outline-none"
                required
              />
            </div>
            <div className="mb-4">
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
                className="w-full px-4 py-2 border rounded-md focus:outline-none"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600"
            >
              Login
            </button>
          </form>
          <p className="text-gray-600 text-sm mt-4">
            Don't have an account?{' '}
            <a href="/signup" className="text-green-500">Sign Up</a>
          </p>
          <div className="my-4">
            <span className="text-gray-500">OR</span>
          </div>
          <button
            className="w-full bg-white border border-gray-300 text-gray-700 py-2 rounded-md hover:bg-gray-100 mb-2"
          >
            Login with Google
          </button>
          <button
            className="w-full bg-white border border-gray-300 text-gray-700 py-2 rounded-md hover:bg-gray-100"
          >
            Login with Apple
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;
