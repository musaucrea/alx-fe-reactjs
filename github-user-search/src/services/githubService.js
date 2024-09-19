import axios from 'axios';

// GitHub API endpoint for user search
const GITHUB_API_URL = 'https://api.github.com/users';

// Function to fetch user data from GitHub API
export const fetchUserData = async (username) => {
  try {
    // Make GET request to GitHub API with username
    const response = await axios.get(`${GITHUB_API_URL}/${username}`);
    // Return the user data from the response
    return response.data;
  } catch (error) {
    // Handle and rethrow the error for further handling
    console.error('Error fetching user data', error);
    throw error;
  }
};
