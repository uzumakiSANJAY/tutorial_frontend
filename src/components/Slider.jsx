import React, { useState } from "react";
import "../styles/Slider.css";
import slide2 from "../assets/Slider_2.jpg";
import slide3 from "../assets/Slider_3.jpg";

const slides = [
  {
    image: slide2,
    heading1: "1st - 12th grade online classes on",
    heading2: "Mathematics, Science, English etc.",
    text: "One-to-one online tuition classes for ICSE and CBSE",
    button: "Book Free Demo",
  },
  {
    image: slide3,
    heading1: "Personalized Coaching",
    heading2: "For Competitive Exams",
    text: "Prepare for JEE, NEET, and Olympiads with expert teachers",
    button: "Join Now",
  },
];

const Slider = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const { image, heading1, heading2, text, button } = slides[current];

  return (
    <div className="slider">
      <div
        className="slide active"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="slide-content">
          <h1>{heading1}</h1>
          <h2>{heading2}</h2>
          <p>{text}</p>
          <a href="/book-demo" className="button-link">
            {button}
          </a>
        </div>

        {/* Simple Arrows */}
        <button className="slider-arrow slider-arrow-left" onClick={prevSlide}>
          ‹
        </button>
        <button className="slider-arrow slider-arrow-right" onClick={nextSlide}>
          ›
        </button>
      </div>
    </div>
  );
};

export default Slider;