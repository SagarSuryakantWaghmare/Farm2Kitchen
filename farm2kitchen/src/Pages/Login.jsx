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
  const [error, setError] = useState(''); // State for error messages

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setError(''); // Clear error message on input change
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Sample validation logic (replace this with your actual validation/API call)
    const validEmail = 'user@example.com'; // Correct email
    const validPassword = 'password123'; // Correct password

    if (formData.email === validEmail && formData.password === validPassword) {
      // Successful login
      navigate('/dashboard'); // Redirect to dashboard after successful login
    } else if (formData.email === validEmail) {
      // Correct email but incorrect password
      setError('Invalid credentials'); // Set error message
    } else {
      // Incorrect email and password
      navigate('/signup'); // Redirect to signup page
    }
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
        <div className="relative bg-white p-8 rounded-lg shadow-2xl max-w-sm w-full text-center z-10">
          <h2 className="text-3xl font-bold text-green-500 mb-6">TradeConnect</h2>
          <h3 className="text-xl font-bold mb-4">Welcome Back!</h3>
          {error && <div className="mb-4 text-red-500">{error}</div>} {/* Show error message */}
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
