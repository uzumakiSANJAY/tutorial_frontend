import React from 'react';
import { Globe, BookOpen, Users, Video } from 'lucide-react';
import '../styles/OnlineCollegeStudent.css';
import { useNavigate } from 'react-router-dom';



export default function CollegeSubjects() {
    const navigate = useNavigate();
    const subjects = [
        {
            title: "Bengali",
            description: "Explore the beauty of Bengali literature and language.",
            icon: <Globe className="icon bengali" />,
        },
        {
            title: "English",
            description: "Master grammar, creative writing, and classic literature.",
            icon: <BookOpen className="icon english" />,
        },
        {
            title: "Mathematics",
            description: "Deep dive into algebra, calculus, and problem-solving.",
            icon: <Users className="icon math" />,
        },
        {
            title: "Sanskrit",
            description: "Learn ancient wisdom and language through Sanskrit texts.",
            icon: <Globe className="icon sanskrit" />,
        },
        {
            title: "Biology",
            description: "Understand life science, evolution, and genetics.",
            icon: <Video className="icon biology" />,
        },
        {
            title: "Other Subjects",
            description: "Explore history, geography, and general studies.",
            icon: <BookOpen className="icon others" />,
        },
    ];

    return (
        <div className="subjects-page">
            <div className="container">
                <h1 className="main-heading">Subjects We Offer</h1>
                <p className="subheading">
                    We provide expert-led classes in a wide range of subjects for college students.
                </p>

                <div className="subjects-grid">
                    {subjects.map((subj, index) => (
                        <div className="subject-card" key={index}>
                            <div className="icon-wrapper">{subj.icon}</div>
                            <h2>{subj.title}</h2>
                            <p>{subj.description}</p>
                        </div>
                    ))}
                </div>

                <div className="cta-button">
                    <button onClick={() => navigate('/book-demo')}>
                        Book a Demo Class
                    </button>
                </div>
            </div>
        </div>
    );
}