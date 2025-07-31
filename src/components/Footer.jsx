import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-grid">

        <div className="footer-column">
          <h3>Online tuition by cities</h3>
          <ul>
            <li><a href="#">Online tuition in Kolkata</a></li>
            <li><a href="#">Online tuition in Delhi</a></li>
            <li><a href="#">Online tuition in Bengaluru</a></li>
            <li><a href="#">Online tuition in Chennai</a></li>
            <li><a href="#">Online tuition in Mumbai</a></li>
          </ul>
          <h3>Contact</h3>
          <p>+91-9876543210<br />skillcoachtutorial@gmail.com</p>
        </div>

        <div className="footer-column">
          <h3>Quick links</h3>
          <ul>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/book-demo">Demo Form</a></li>
            <li><a href="/school-students">Online Tuition for Class 1-4</a></li>
            <li><a href="/school-students">Online Tuition for Class 5-10</a></li>
            <li><a href="/school-students">Online Tuition for Class 11-12</a></li>
            <li><a href="/school-students">Online Chemistry Tuition for Class 9</a></li>
            <li><a href="/school-students">Maths Tuition for Class 9</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Online College Students</h3>
          <ul>
            <li><a href="/college-students">Bengali</a></li>
            <li><a href="/college-students">English</a></li>
            <li><a href="/college-students">Mathematics</a></li>
            <li><a href="/college-students">Sanskrit</a></li>
            <li><a href="/college-students">Biology</a></li>
            <li><a href="/college-students">Other Subjects</a></li>
            <li><a href="/faq">Faqs</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Tuition by boards</h3>
          <ul>
            <li><a href="/school-students">CBSE Class 12</a></li>
            <li><a href="/school-students">ICSE Class 10</a></li>
            <li><a href="/school-students">ISC Class 11</a></li>
            <li><a href="/school-students">Chemistry Class 10 ICSE</a></li>
            <li><a href="/school-students">Physics Class 10 ICSE</a></li>
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
