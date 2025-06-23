import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import ClassForm from './components/ClassForm';
import './App.css';
import FaqSection from './components/FaQSection';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/book-demo" element={<ClassForm />} />
          <Route path="/faq" element={<FaqSection />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
