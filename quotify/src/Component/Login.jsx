import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { loginUser } from '../api/api'; // Adjust import path as needed

export const Login = () => {
  const navigate = useNavigate(); // Initialize useNavigate
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await loginUser({ username, password });
      // Handle successful login (e.g., save token, etc.)
      console.log(response);
      // Redirect to a different page after successful login
      navigate('/generate'); // Adjust the path as needed
    } catch (err) {
      setError(err.message || 'Login failed');
    } finally {
      setLoading(false);
      // Clear inputs
      setUsername('');
      setPassword('');
    }
  };

  return (
    <div className='flex justify-center items-center h-screen '>
      <div className='h-[500px] w-[900px] rounded-md border-2 border-yellow-200 bg-white shadow-lg'>
        <div className='relative top-[10px] text-center italic text-[50px]'>
          Login
        </div>
        <form onSubmit={handleLogin} className='flex flex-col items-center mt-10'>
          {error && <div className='text-red-500 mb-4'>{error}</div>} {/* Display error */}
          <div className='mb-5 w-[80%]'>
            <input
              type='text'
              placeholder='Username or Email'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className='w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-yellow-500'
              required
            />
          </div>
          <div className='mb-5 w-[80%]'>
            <input
              type='password'
              placeholder='Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className='w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-yellow-500'
              required
            />
          </div>
          <button
            type='submit'
            className={`border-2 px-10 border-yellow-500 rounded-md py-2 bg-yellow-200 hover:bg-yellow-300 transition duration-200 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={loading} // Disable button during loading
          >
            {loading ? 'Logging in...' : 'Login'} {/* Show loading text */}
          </button>
        </form>
      </div>
    </div>
  );
};
