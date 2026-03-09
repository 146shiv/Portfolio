import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ProjectDetails from './pages/ProjectDetails';
import ProfileX from './pages/ProfileX';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project-details" element={<ProjectDetails />} />
        <Route path="/profilex" element={<ProfileX />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
