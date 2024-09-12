// src/App.jsx

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Importing React Router components
import HomePage from './components/HomePage'; // Import HomePage component
import RecipeDetail from './components/RecipeDetail'; // Import RecipeDetail component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} /> {/* Route for the HomePage */}
        <Route path="/recipe/:id" element={<RecipeDetail />} /> {/* Route for RecipeDetail with dynamic ID */}
      </Routes>
    </Router>
  );
}

export default App;



