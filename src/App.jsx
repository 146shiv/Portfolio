import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ReviewBo from './pages/ReviewBo';
import AIChatbot from './pages/AIChatbot';
import ProfileX from './pages/ProfileX';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reviewbo" element={<ReviewBo />} />
        <Route path="/ai-chatbot" element={<AIChatbot />} />
        <Route path="/profilex" element={<ProfileX />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
