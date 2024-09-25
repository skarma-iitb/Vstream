// src/api/user/userService.js
import axios from 'axios';

const API_URL = 'http://localhost:5000/api/user'; // Replace with your actual User Service URL

// Function to log in the user
export const login = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/login`, { email, password });
    return response.data; // Return the user data (e.g., token)
  } catch (error) {
    console.error('Error logging in:', error);
    throw error;
  }
};

// Function to log out the user
export const logout = () => {
  // Perform logout (clear tokens or session data)
  console.log('Logging out...');
};