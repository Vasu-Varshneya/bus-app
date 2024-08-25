import  { useState } from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-100 p-2">
      <div className="bg-gray-200 p-6 rounded-lg shadow-lg w-full max-w-md flex flex-col justify-center ">
        <h2 className="text-lg font-semibold mb-4 text-center">Sign Up</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Submit
          </button>
        </form>
        <div className="flex justify-between mt-4">
          <button className="w-1/2 bg-gray-500 text-white py-2 rounded-lg hover:bg-gray-600 transition duration-300 mr-2">G</button>
          <button className="w-1/2 bg-gray-500 text-white py-2 rounded-lg hover:bg-gray-600 transition duration-300 ml-2">F</button>
        </div>
        <div className=' flex flex-col justify-center items-center mt-5'>
          <h4>already have an account?</h4>
          <Link to='/login' className='w-1/2'><button className="w-full bg-gray-500 text-white py-2 rounded-lg hover:bg-gray-600 transition duration-300 ml-2">Login</button></Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
