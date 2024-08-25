// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import './Home.css'; // Import custom CSS file for ripple effect
const Home = () => {
  // State for input value
  const [inputValue, setInputValue] = useState('');

  // Handle input changes
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className=" w-full h-screen flex flex-col items-center justify-center bg-gradient-to-b from-purple-300 to-purple-500 text-center">
      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center space-y-6 p-4">
        {/* First Heading with Fade-In Animation */}
        <h1 className="text-white text-4xl sm:text-6xl font-bold opacity-1 animate-fadeIn">
          WELCOME TO
        </h1>
      
        {/* Second Heading with Typing Animation */}
        <h1 className="text-white text-4xl sm:text-6xl font-bold typing-animation">
          SMART BUS APP
        </h1>

        <p className="text-white text-lg sm:text-2xl max-w-2xl">
          Streamline your commute with our bus app offering live tracking, ticket booking, and more for a seamless travel experience.
        </p>

        {/* Search Box with Two-Way Binding */}
        <div className="relative flex items-center justify-center flex-wrap">
          <input
            type="text"
            placeholder="Where do you want to go?"
            value={inputValue}
            onChange={handleInputChange}
            className="w-72 sm:w-96 py-3 px-4 m-6 rounded-full shadow-md text-center border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all"
          />
          <button className="relative items-center justify-center px-6 py-3 text-white font-semibold bg-cyan-500 border-2 border-cyan-500 rounded-full overflow-hidden group ripple transition-all duration-300 ease-in-out hover:bg-cyan-400">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
