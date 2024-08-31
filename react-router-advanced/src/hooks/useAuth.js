// src/hooks/useAuth.js
import { useState, useEffect } from 'react';

// Simulate an authentication check (replace with real logic as needed)
const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Mock authentication status (could be replaced with real auth check)
    const authStatus = localStorage.getItem('isAuthenticated') === 'true';
    setIsAuthenticated(authStatus);
  }, []);

  return isAuthenticated;
};

export default useAuth;
