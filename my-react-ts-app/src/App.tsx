import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./index.css";
import Home from './components/Home';
import Resume from './components/Resume';
import About from './components/About';
import Contact from './components/Contact';
import Skills from './components/Skills';


const App = () => {
  return (
    <Router>
      <nav className="fixed w-full bg-gray-900 bg-opacity-90 backdrop-blur-sm text-white p-5 z-50">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <Link to="/" className="text-xl font-bold">VM</Link>
          <div className="space-x-6">
            <Link to="/" className="hover:text-blue-400 transition-colors duration-300">Home</Link>
            <Link to="/about" className="hover:text-blue-400 transition-colors duration-300">About</Link>
            <Link to="/skills" className="hover:text-blue-400 transition-colors duration-300">Skills</Link>
            <Link to="/resume" className="hover:text-blue-400 transition-colors duration-300">Resume</Link>
            <Link to="/contact" className="hover:text-blue-400 transition-colors duration-300">Contact</Link>
          </div>
        </div>
      </nav>
      <main className="pt-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
