// src/services/githubService.js
import axios from 'axios';

// Fetch users data based on query and optional minimum repositories
export const fetchUsersData = async (query, minRepos = 0) => {
  try {
    // Construct the query for GitHub API search
    const apiUrl = `https://api.github.com/search/users?q=${query}`;
    const response = await axios.get(apiUrl);
    
    // Filter users based on the minimum repositories if specified
    const filteredUsers = response.data.items.filter(user => user.public_repos >= minRepos);
    
    return filteredUsers; // Return the filtered array of users
  } catch (error) {
    console.error('Error fetching data from GitHub API:', error);
    throw error;
  }
};
