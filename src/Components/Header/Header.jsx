// src/components/Header/Header.js
import React from 'react';
import './Header.css';

const Header = ({ user, onLogin, onLogout }) => {
  return (
    <header className="header">
      <h1>Video Streaming</h1>
      <div className="user-info">
        {user ? (
          <>
            <span>Welcome, {user.email}</span>
            <button onClick={onLogout}>Logout</button>
          </>
        ) : (
          <button onClick={onLogin}>Login</button>
        )}
      </div>
    </header>
  );
};

export default Header;