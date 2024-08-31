// src/components/ProtectedRoute.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth'; // Import the useAuth hook

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = useAuth(); // Use the useAuth hook

  // If the user is not authenticated, redirect them to the login page
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  // If the user is authenticated, render the children components
  return children;
};

export default ProtectedRoute;

