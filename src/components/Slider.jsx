import React, { useState, useEffect } from 'react';
import '../styles/Slider.css';
// import slide1 from '../assets/Slider_1.jpg';
import slide2 from '../assets/Slider_2.jpg';
import slide3 from '../assets/Slider_3.jpg';

const slides = [ slide2, slide3];

const Slider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="slider">
      {slides.map((image, index) => (
        <div
          className={`slide ${index === current ? 'active' : ''}`}
          key={index}
          style={{ backgroundImage: `url(${image})` }}
        >
          {index === current && (
            <div className="slide-content">
              <h1>1st - 12th grade online classes on</h1>
              <h2>Mathematics, Science, English etc.</h2>
              <p>One-to-one online tuition classes for ICSE and CBSE</p>
              <a href="/book-demo" className="button-link">Book Free Demo</a>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Slider;
