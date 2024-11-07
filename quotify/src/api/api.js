import axios from 'axios';

const API_URL = 'http://localhost:5000/api/auth'; // Ensure this matches your backend

export const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/register`, userData);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message || 'Registration failed');
  }
};

export const loginUser = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/login`, userData);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message || 'Login failed');
  }
};