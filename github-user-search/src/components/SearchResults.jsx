import React from 'react';

const SearchResults = ({ users, onLoadMore, hasMore }) => {
  return (
    <div className="mt-8">
      {users.length > 0 ? (
        <div>
          {users.map((user) => (
            <div key={user.id} className="p-4 mb-4 border rounded-lg shadow-md bg-white flex items-center">
              <img
                src={user.avatar_url}
                alt={user.login}
                className="w-16 h-16 rounded-full mr-4"
              />
              <div>
                <h3 className="text-lg font-semibold">{user.login}</h3>
                {user.location && <p className="text-sm text-gray-500">Location: {user.location}</p>}
                {user.public_repos !== undefined && (
                  <p className="text-sm text-gray-500">Repositories: {user.public_repos}</p>
                )}
                <a
                  href={user.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  View Profile
                </a>
              </div>
            </div>
          ))}

          {/* Pagination/Load More button */}
          {hasMore && (
            <button
              onClick={onLoadMore}
              className="mt-4 p-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Load More
            </button>
          )}
        </div>
      ) : (
        <p>No users found.</p>
      )}
    </div>
  );
};

export default SearchResults;
