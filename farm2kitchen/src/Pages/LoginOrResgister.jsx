import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for programmatic navigation

const LoginOrRegister = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  const handleSignUp = () => {
    navigate('/signup'); // Navigate to the SignUp page
  };

  const handleLogIn = () => {
    navigate('/login'); // Navigate to the LogIn page
  };

  return (
    <div className="bg-cover bg-center min-h-screen flex items-center justify-center"
      style={{ backgroundImage: `url('/path-to-your-background-image.jpg')` }}>
      
      {/* Main Card */}
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full text-center">
        
        {/* Title */}
        <h2 className="text-3xl font-bold text-green-500 mb-6">Farm2Kitchen</h2>
        
        {/* Sign Up Button */}
        <button
          className="w-full bg-green-500 text-white py-2 rounded-md mb-4 hover:bg-green-600"
          onClick={handleSignUp} // Trigger the SignUp navigation
        >
          Sign Up
        </button>
        
        {/* Log In Button */}
        <button
          className="w-full bg-gray-900 text-white py-2 rounded-md hover:bg-gray-800"
          onClick={handleLogIn} // Trigger the LogIn navigation
        >
          Log In
        </button>

        {/* Terms and Privacy Policy Links */}
        <p className="text-gray-600 text-sm mt-4">
          By signing up, you agree to our
          <a href="/terms" className="text-green-500 ml-1">Terms of Use</a> and 
          <a href="/privacy" className="text-green-500 ml-1">Privacy Policy</a>.
        </p>
      </div>
    </div>
  );
};

export default LoginOrRegister;
