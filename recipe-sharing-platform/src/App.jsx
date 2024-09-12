// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import necessary components
import HomePage from './components/HomePage'; // Import HomePage component
import RecipeDetail from './components/RecipeDetail'; // Keep as is if your file system recognizes extensions automatically
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/recipe/:id" element={<RecipeDetail />} />
      </Routes>
    </Router>
  );
}

export default App;

