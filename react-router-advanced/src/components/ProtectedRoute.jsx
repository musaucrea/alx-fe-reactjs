// src/components/ProtectedRoute.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ children }) {
  const isAuthenticated = false; // Replace with your actual authentication check

  return isAuthenticated ? children : <Navigate to="/login" />;
}

export default ProtectedRoute;
