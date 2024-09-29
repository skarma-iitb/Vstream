import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4 flex justify-between items-center">
      <div className="text-white font-bold text-xl">Video Streaming App</div>
      <div>
        <Link to="/" className="text-white px-4">Home</Link>
        <Link to="/account" className="text-white px-4">Account</Link>
      </div>
    </nav>
  );
};

export default Navbar;