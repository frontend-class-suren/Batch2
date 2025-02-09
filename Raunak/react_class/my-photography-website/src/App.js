import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Introduction from './components/Introduction';
import PhotoGallery from './components/PhotoGallery';

function App() {
  return (
    <Router>
    <div>
      <Navbar />
      <Routes>
      <Route path="/" element={<Introduction />} />
      <Route path="/gallery" element={<PhotoGallery />} />
  
      </Routes>
    </div>
    </Router>
  );
}

export default App;
