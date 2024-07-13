// api/userApi.ts

import axios from 'axios'; // Example: using Axios for HTTP requests

export const fetchUserProfile = async (userId: string) => {
  try {
    const response = await axios.get(`https://api.example.com/user/${userId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching user profile:', error);
    throw error; // Propagate the error upwards for handling in action
  }
};
