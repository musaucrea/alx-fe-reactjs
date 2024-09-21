// src/components/Search.jsx
import React, { useState } from 'react';
import { fetchUsersData } from '../services/githubService';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [usersData, setUsersData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setUsersData([]);

    try {
      const data = await fetchUsersData(searchTerm);
      setUsersData(data); // Set users data array from the API response
    } catch (error) {
      setError("Looks like we can't find any users");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Enter GitHub username or query"
          className="border p-2"
        />
        <button type="submit" className="p-2 bg-blue-500 text-white">Search</button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      <div>
        {usersData.length > 0 ? (
          usersData.map((user) => (
            <div key={user.id} className="flex items-center mb-4">
              <img src={user.avatar_url} alt={user.login} className="w-20 h-20 rounded-full" />
              <div className="ml-4">
                <p>Name: {user.login}</p>
                <a href={user.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-600">View Profile</a>
              </div>
            </div>
          ))
        ) : (
          <p>No users found.</p>
        )}
      </div>
    </div>
  );
};

export default Search;
