import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-grid">

        <div className="footer-column">
          <h3>online tuition by cities</h3>
          <ul>
            <li><a href="#">Online tuition in Kolkata</a></li>
            <li><a href="#">Online tuition in Delhi</a></li>
            <li><a href="#">Online tuition in Bengaluru</a></li>
            <li><a href="#">Online tuition in Chennai</a></li>
            <li><a href="#">Online tuition in Mumbai</a></li>
          </ul>
          <h3>contact</h3>
          <p>+91-9876543210<br />tutorial4you@gmail.com</p>
        </div>

        <div className="footer-column">
          <h3>quick links</h3>
          <ul>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Demo Form</a></li>
            <li><a href="#">Online Science Tuition for Class 10</a></li>
            <li><a href="#">Class 10 Maths Tuition</a></li>
            <li><a href="#">Computer Science Tuition for Class 12</a></li>
            <li><a href="#">Online Chemistry Tuition for Class 9</a></li>
            <li><a href="#">Maths Tuition for Class 9</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>online tuition by grade</h3>
          <ul>
            <li><a href="#">Class 12</a></li>
            <li><a href="#">Class 11</a></li>
            <li><a href="#">Class 10</a></li>
            <li><a href="#">Class 9</a></li>
            <li><a href="#">Class 8</a></li>
            <li><a href="#">Class 7</a></li>
            <li><a href="#">Spoken English for Grade 5</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>tuition by boards</h3>
          <ul>
            <li><a href="#">CBSE Class 12</a></li>
            <li><a href="#">ICSE Class 10</a></li>
            <li><a href="#">ISC Class 11</a></li>
            <li><a href="#">Chemistry Class 10 ICSE</a></li>
            <li><a href="#">Physics Class 10 ICSE</a></li>
          </ul>
        </div>

      </div>

      <div className="footer-search">
        <h3>search</h3>
        <form>
          <input type="text" placeholder="Search..." />
          <button type="submit">🔍</button>
        </form>
      </div>
    </footer>
  );
};

export default Footer;
