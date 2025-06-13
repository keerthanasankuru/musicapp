import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import CategoryPage from './components/CategoryPage';
import AudioDetailPage from './components/AudioDetailPage';
import AllAudiosPage from './components/AllAudiosPage';
import SearchResultsPage from './components/SearchResultsPage';



import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<CategoryPage />} />
        <Route path="/audio/:category/:item" element={<AudioDetailPage />} />
        <Route path="/all-audios" element={<AllAudiosPage />} />
        <Route path="/search" element={<SearchResultsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
