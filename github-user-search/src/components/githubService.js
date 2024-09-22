import axios from 'axios';

// Base URL for GitHub API
const GITHUB_API_URL = 'https://api.github.com';

/**
 * Fetch users from GitHub with an optional filter for minimum repositories and location.
 * @param {string} query - The search query (e.g., username).
 * @param {string} location - (Optional) Filter by location.
 * @param {number} minRepos - (Optional) Filter by minimum number of repositories.
 */
export const fetchUsers = async (query, location = '', minRepos = 0) => {
  try {
    // Construct query with additional filters for location and repositories
    let searchQuery = `${query}+repos:>=${minRepos}`;
    if (location) {
      searchQuery += `+location:${location}`;
    }

    // GitHub API endpoint for user search with filters
    const response = await axios.get(`${GITHUB_API_URL}/search/users?q=${searchQuery}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching users from GitHub API:', error);
    throw error;
  }
};

