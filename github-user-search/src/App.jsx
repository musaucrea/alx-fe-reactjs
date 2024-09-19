import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SearchPage from './components/SearchPage';
import HomePage from './components/HomePage';
import NotFoundPage from './components/NotFoundPage';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/search">Search GitHub User</a></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="*" element={<NotFoundPage />} />  {/* 404 route */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
