import React from 'react';
import '../styles/OnlineSchoolStudents.css';

export default function OnlineSchoolStudents() {
    const services = [
        "Online Tuition for Class 1–4",
        "Online Tuition for Class 5–10",
        "Online Tuition for Class 11–12",
        "Online Chemistry Tuition for Class 9",
        "Maths Tuition for Class 9",
    ];

    return (
        <div className="tuition-page">
            <div className="container">
                <h1 className="main-heading">Our Online Tuition Services</h1>
                <p className="subheading">
                    High-quality, personalized education delivered online by expert tutors.
                </p>

                <ul className="service-list">
                    {services.map((item, index) => (
                        <li key={index} className="service-item">
                            {item}
                        </li>
                    ))}
                </ul>

                <div className="cta-button">
                    <a href="/book-demo" className="demo-link">Book a Free Demo Class</a>
                </div>
            </div>
        </div>
    );
}