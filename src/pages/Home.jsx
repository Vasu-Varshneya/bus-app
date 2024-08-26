import React, { useState } from 'react';
import './Home.css';

const Home = () => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-b from-purple-300 to-purple-500 text-center">
      <div className="flex-1 flex flex-col items-center justify-center space-y-6 p-4">
        <h1 className="text-white text-4xl sm:text-6xl font-bold opacity-0 animate-fadeIn delay-100">
          WELCOME TO
        </h1>

        <h1 className="text-white text-4xl sm:text-6xl font-bold opacity-0 animate-fadeIn delay-300">
          BusBuddyGo
        </h1>

        <p className="text-white text-lg sm:text-2xl max-w-2xl opacity-0 animate-fadeIn delay-500">
          Streamline your commute with our bus app offering live tracking, ticket booking, and more for a seamless travel experience.
        </p>

        <div className="relative flex items-center justify-center flex-wrap">
          <input
            type="text"
            placeholder="Where do you want to go?"
            value={inputValue}
            onChange={handleInputChange}
            className="w-72 sm:w-96 py-3 px-4 m-6 rounded-full shadow-md text-center border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all"
          />
          <button
            className="search-button"
            onClick={() => console.log('Search button clicked!')}
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
