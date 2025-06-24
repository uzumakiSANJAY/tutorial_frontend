import React from 'react';
import '../styles/Contact.css';

const Contact = () => {
    return (
        <div className="page-container">
            <h1>Contact Us</h1>
            <p><strong>Phone:</strong> +91-9876543210</p>
            <p><strong>Email:</strong> tutorial4you@gmail.com</p>

            <form className="contact-form">
                <label>Name</label>
                <input type="text" placeholder="Your Name" required />

                <label>Email</label>
                <input type="email" placeholder="Your Email" required />

                <label>Message</label>
                <textarea placeholder="Your Message" rows="5" required></textarea>

                <button type="submit">Send Message</button>
            </form>
        </div>
    );
};

export default Contact;