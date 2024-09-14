import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Add styles for header

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src="/logo.png" alt="DoaFácil Logo" className="logo-img" />
        <h1>DoaFácil</h1>
      </div>
      <nav>
        <ul>
          <li><Link to="/donate-items">Donate Items</Link></li>
          <li><Link to="/request-items">Request Items</Link></li>
          
        </ul>
      </nav>
    </header>
  );
}

export default Header;
