import axios from 'axios';

const BASE_URL = 'https://api.github.com/search/users?q=';

export const fetchUserData = async (query, minRepos) => {
  try {
    // Construct the full API URL with query parameters for minRepos
    const url = `${BASE_URL}${query}+repos:>${minRepos}`;
    const response = await axios.get(url);
    
    return response.data;
  } catch (error) {
    console.error('Error fetching user data:', error);
    throw error;
  }
};
