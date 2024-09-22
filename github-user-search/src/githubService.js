import axios from 'axios';

// Function to fetch user data by username
export const fetchUserData = async (username) => {
    try {
        const response = await axios.get(`https://api.github.com/users/${username}`);
        return response.data;
    } catch (error) {
        throw new Error("User not found");
    }
};

// Function to fetch users with advanced search criteria
export const fetchAdvancedUserData = async (query, minRepos = 0) => {
    try {
        const response = await axios.get(`https://api.github.com/search/users`, {
            params: {
                q: `${query} repos:>${minRepos}`
            }
        });
        return response.data.items;
    } catch (error) {
        throw new Error("Error fetching advanced user data");
    }
};
