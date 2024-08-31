// src/components/PostsComponent.jsx
import React from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';

const fetchPosts = async () => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
  return response.data;
};

const PostsComponent = () => {
  const { data, error, isLoading, isError, isFetching, refetch } = useQuery(
    'posts',
    fetchPosts,
    {
      keepPreviousData: true, // Keep previous data while fetching new data
      cacheTime: 1000 * 60 * 5, // Cache data for 5 minutes (300,000 ms)
      refetchOnWindowFocus: true, // Refetch data when window regains focus
      staleTime: 1000 * 60, // Optional: Data is fresh for 1 minute (60,000 ms)
    }
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <button onClick={() => refetch()}>Refetch Data</button>
      {isFetching && <div>Fetching new data...</div>}
      <ul>
        {data.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default PostsComponent;

