import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import CategoryPage from './components/CategoryPage';
import AudioDetailPage from './components/AudioDetailPage';
import FallingMusicNotes from './components/FallingMusicNotes';
import AllAudiosPage from './components/AllAudiosPage';
import SearchResultsPage from './components/SearchResultsPage';

import './App.css';

function App() {
  return (
    <Router>
      <div>
        {/* Falling music notes appear on every page */}
        <FallingMusicNotes />

        {/* Navigation bar */}
        <Navbar />

        {/* Page routes */}
        <Routes>
          <Route path="/" element={<CategoryPage />} />
          <Route path="/audios" element={<CategoryPage />} />
          <Route path="/audio/:category/:item" element={<AudioDetailPage />} />
          <Route path="/all-audios" element={<AllAudiosPage />} />
          <Route path="/search" element={<SearchResultsPage />} /> {/* 🚀 Added this line */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
