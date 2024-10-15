import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import affordableImage from '../assets/Veg3.jpg'; 

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add validation and API call here to register the user
    console.log('Registering user:', formData);
    navigate('/login'); // Redirect to login page after successful registration
  };

  return (
    <div
      className="bg-cover bg-center min-h-screen flex items-center justify-center"
      style={{
        backgroundImage: `url(${affordableImage})`, // Use the imported image
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        filter: 'brightness(90%)', // Reduce brightness of the background image
      }}
    >
      <div className="bg-white p-8 rounded-lg shadow-2xl max-w-sm w-full text-center">
        <h2 className="text-3xl font-bold text-green-500 mb-6">TradeConnect</h2>
        <h3 className="text-xl font-bold mb-4">Create Your Account</h3>
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
          <div className="mb-4">
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm Password"
              className="w-full px-4 py-2 border rounded-md focus:outline-none"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600"
          >
            Sign Up
          </button>
        </form>
        <p className="text-gray-600 text-sm mt-4">
          Already have an account?{' '}
          <a href="/login" className="text-green-500">Log In</a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
