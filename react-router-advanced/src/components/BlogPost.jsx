// src/components/BlogPost.jsx
import React from 'react';
import { useParams } from 'react-router-dom';

const BlogPost = () => {
  const { id } = useParams(); // Extract the dynamic 'id' from the URL

  // Mock data fetch (replace with real API fetch if needed)
  const post = {
    id,
    title: `Blog Post ${id}`,
    content: `This is the content of blog post ${id}.`,
  };

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
    </div>
  );
};

export default BlogPost;
