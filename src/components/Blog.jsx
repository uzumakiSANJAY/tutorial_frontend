import React from 'react';
import '../styles/Blog.css';

const Blog = () => {
    return (
        <div className="page-container">
            <h1>Our Blog</h1>
            <article>
                <h2>Why Choose Online Tuition?</h2>
                <p>Online tuition offers flexibility, personalized learning, and access to expert teachers from anywhere in the country.</p>
            </article>
            <article>
                <h2>Tips to Succeed in Online Classes</h2>
                <p>Stay organized, participate actively, revise regularly, and make the most of doubt-clearing sessions.</p>
            </article>
        </div>
    );
};

export default Blog;