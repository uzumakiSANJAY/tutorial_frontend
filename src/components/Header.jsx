import React, { useState } from 'react';
import '../styles/Header.css';
import logo from '../assets/logo.png'; // place your image here
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="header-container">
        <img src={logo} alt="Logo" className="logo" />
        
        {/* Desktop Navigation */}
        <nav className="nav-links desktop-hidden">
          <a href="/">Home</a>
          <a href="/blog">Blog</a>
          <a href="/contact">Contact</a>
          <a href="/faq">FaQ</a>
        </nav>
        
        {/* Desktop Buttons */}
        <div className="header-buttons desktop-hidden">
          <a href="/book-demo" className="header-button">Book Free Demo</a>
          <a href="/teacher-register" className="header-button">Teacher Registration</a>
        </div>

        {/* Mobile Menu Button */}
        <button className="mobile-menu-btn mobile-hidden" onClick={toggleMenu}>
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile Navigation Overlay */}
      <div className={`mobile-nav ${isMenuOpen ? 'open' : ''}`}>
        <div className="mobile-nav-header">
          <img src={logo} alt="Logo" className="mobile-logo" />
          <button className="close-menu-btn" onClick={closeMenu}>
            <X size={24} />
          </button>
        </div>
        
        <nav className="mobile-nav-links">
          <a href="/" onClick={closeMenu}>Home</a>
          <a href="/blog" onClick={closeMenu}>Blog</a>
          <a href="/contact" onClick={closeMenu}>Contact</a>
          <a href="/faq" onClick={closeMenu}>FaQ</a>
        </nav>
        
        <div className="mobile-header-buttons">
          <a href="/book-demo" className="header-button" onClick={closeMenu}>Book Free Demo</a>
          <a href="/teacher-register" className="header-button" onClick={closeMenu}>Teacher Registration</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
