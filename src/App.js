import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Account from './pages/Account';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/account" element={<Account />} />
          {/* Fallback route */}
          <Route path="*" element={<h1>404 - Not Found</h1>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;