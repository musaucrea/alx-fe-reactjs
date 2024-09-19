const apiKey = process.env.REACT_APP_GITHUB_API_KEY;

export const searchUser = async (username) => {
  try {
    const response = await axios.get(`https://api.github.com/users/${username}`, {
      headers: {
        Authorization: `token ${apiKey}` // Add the API key in the request header
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching user data', error);
    throw error;
  }
};
