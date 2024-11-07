import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { registerUser } from '../api/api'; // Adjust the import path as needed

export const Register = () => {
  const navigate = useNavigate(); // Initialize useNavigate
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await registerUser({ username, email, password });
      // Handle successful registration (e.g., show message, save token, etc.)
      console.log(response);
      // Redirect to login or another page after successful registration
      navigate('/login'); // Adjust the path as needed
    } catch (err) {
      setError(err.message || 'Registration failed');
    } finally {
      setLoading(false);
      // Clear inputs after registration attempt
      setUsername('');
      setEmail('');
      setPassword('');
    }
  };

  return (
    <div className='flex justify-center items-center h-screen bg-gray-100'>
      <div className='h-[500px] w-[900px] rounded-md border-2 border-yellow-200 bg-white shadow-lg p-8'>
        <div className='text-center italic text-[50px] mb-5'>
          Register
        </div>
        {error && <div className='text-red-500 mb-4'>{error}</div>} {/* Display error */}
        <form onSubmit={handleRegister} className='flex flex-col items-center'>
          <div className='mb-5 w-[80%]'>
            <input
              type='text'
              placeholder='Username'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className='w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-yellow-500'
              required
            />
          </div>
          <div className='mb-5 w-[80%]'>
            <input
              type='email'
              placeholder='Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
            {loading ? 'Registering...' : 'Register'} {/* Show loading text */}
          </button>
        </form>
      </div>
    </div>
  );
};