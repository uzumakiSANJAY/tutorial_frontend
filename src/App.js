import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import ClassForm from './components/ClassForm';
import './App.css';
import FaqSection from './components/FaQSection';
import Blog from './components/Blog';
import Contact from './components/Contact';
import OnlineCollegeStudents from './components/OnlineCollegeStudents';
import OnlineSchoolStudents from './components/OnlineSchoolStudents';
import TeacherForm from './components/TeacherForm';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/book-demo" element={<ClassForm />} />
          <Route path="/teacher-register" element={<TeacherForm />} />
          <Route path="/faq" element={<FaqSection />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/college-students" element={<OnlineCollegeStudents />} />
          <Route path="/school-students" element={<OnlineSchoolStudents />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;