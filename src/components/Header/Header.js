import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">Risk Hawk</div>
      <div className="user-actions">
        <span>Process Owner</span>
        <button className="logout">Logout</button>
      </div>
    </header>
  );
};

export default Header;
