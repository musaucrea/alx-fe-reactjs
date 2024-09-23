import axios from "axios";

const GITHUB_API_URL = "https://api.github.com/search/users";
const GITHUB_USER_URL = "https://api.github.com/users";  // URL for fetching individual user data

// Function to search GitHub users with advanced filters and pagination
export const searchUsers = async (username = "", location = "", repos = "", page = 1) => {
  try {
    let query = "";

    if (username) query += `user:${username} `;
    if (location) query += `location:${location} `;
    if (repos) query += `repos:>=${repos}`;
    query = query.trim();

    const response = await axios.get(
      `${GITHUB_API_URL}?q=${encodeURIComponent(query)}&page=${page}&per_page=10`,
      {
        headers: {
          Authorization: `token ${process.env.GITHUB_TOKEN}`, // Optional if you have a token
        }
      }
    );

    return response.data;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};

// Function to fetch data for a single GitHub user by username
export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`${GITHUB_USER_URL}/${username}`, {
      headers: {
        Authorization: `token ${process.env.GITHUB_TOKEN}`, // Optional if you have a token
      }
    });

    return response.data;
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error;
  }
};

export default searchUsers;
