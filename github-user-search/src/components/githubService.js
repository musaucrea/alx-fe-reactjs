import axios from 'axios';

const GITHUB_API_URL = 'https://api.github.com/search/users';

/**
 * Fetch users from the GitHub Search API.
 * @param {string} query - The search query (username or any other keyword).
 * @param {string} location - Optional. Location filter for the search.
 * @param {number} minRepos - Optional. Minimum number of repositories filter.
 * @returns {Promise} - Returns the search results from the GitHub API.
 */
export const fetchUsers = async (query, location = '', minRepos = 0) => {
  let searchQuery = `${query}`;

  // Add location filter if provided
  if (location) {
    searchQuery += `+location:${location}`;
  }

  // Add minimum repositories filter if provided
  if (minRepos > 0) {
    searchQuery += `+repos:>=${minRepos}`;
  }

  // Construct the full API URL
  const apiUrl = `${GITHUB_API_URL}?q=${searchQuery}`;

  try {
    const response = await axios.get(apiUrl);
    return response.data;
  } catch (error) {
    console.error('Error fetching data from GitHub API:', error);
    throw error;
  }
};
