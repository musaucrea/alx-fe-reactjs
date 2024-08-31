// src/components/PostsComponent.jsx
import React from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';
import { Link } from 'react-router-dom';

// Define the function to fetch posts from the API
const fetchPosts = async () => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
  return response.data;
};

const PostsComponent = () => {
  // Use `useQuery` to fetch and manage data
  const { data, error, isLoading, isError, isSuccess, refetch } = useQuery('posts', fetchPosts, {
    staleTime: 60000, // Data is considered fresh for 60 seconds
    cacheTime: 300000, // Cache data for 5 minutes
    refetchOnWindowFocus: true, // Refetch data when the window is focused
  });

  // Handle loading state
  if (isLoading) return <div>Loading...</div>;

  // Handle error state
  if (isError) return <div>Error: {error.message}</div>;

  // Handle successful data fetching
  if (isSuccess) {
    return (
      <div>
        <button onClick={() => refetch()}>Refetch Data</button>
        <ul>
          {data.map(post => (
            <li key={post.id}>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </li>
          ))}
        </ul>
        <div>
          <Link to="/another-page">Go to another page</Link>
        </div>
      </div>
    );
  }

  return null;
};

export default PostsComponent;


