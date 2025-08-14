import React from 'react';
import '../styles/Header.css';
import logo from '../assets/logo.png'; // place your image here

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <img src={logo} alt="Logo" className="logo" />
        <nav className="nav-links">
          <a href="/">Home</a>
          <a href="/blog">Blog</a>
          <a href="/contact">Contact</a>
          <a href="/faq">FaQ</a>
        </nav>
        <div className="header-buttons">
          <a href="/book-demo" className="header-button">Book Free Demo</a>
          <a href="/teacher-register" className="header-button">Teacher Registration</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
