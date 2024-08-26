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
          SMART BUS APP
        </h1>

        <p className="text-white text-lg sm:text-2xl max-w-2xl opacity-0 animate-fadeIn delay-500">
          Streamline your commute with our bus app offering live tracking, ticket booking, and more for a seamless travel experience.
        </p>

        <div className="relative flex items-center justify-center flex-wrap">
        
          
          <div className="card">
    <img src="..." className="card-img-top" alt="..."/>
  
    <div className="card-body">
      <h5 className="card-title">      WELCOME TO BusBuddyGo</h5>
      <p className="card-text">  Streamline your commute with our bus app offering live tracking, ticket booking, and more for a seamless travel experience.</p>
      <button
            className="search-button"
            onClick={() => console.log('Search button clicked!')}
          >
            Go somewhere
          </button>
    </div>
  </div> 
        </div>
      </div>
    </div>
  );
};

export default Home;
