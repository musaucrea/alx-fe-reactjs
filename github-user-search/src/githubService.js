import axios from 'axios';

// GitHub API base URL for searching users
const BASE_URL = 'https://api.github.com/search/users?q=';

// Function to fetch user data based on search query and minimum repositories
export const fetchUserData = async (query, minRepos) => {
  try {
    // Construct the API URL with query and minRepos parameter
    const url = `${BASE_URL}${query}+repos:>${minRepos}`;
    
    // Fetch data from GitHub API
    const response = await axios.get(url);
    
    // Return the data received from the API
    return response.data;
  } catch (error) {
    // Log and throw error if the request fails
    console.error('Error fetching user data:', error);
    throw error;
  }
};
