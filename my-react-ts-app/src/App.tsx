import  { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { FaBars, FaTimes } from 'react-icons/fa';
import "./index.css";
import Home from './components/Home';
import Resume from './components/Resume';
import About from './components/About';
import Contact from './components/Contact';
import Skills from './components/Skills';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <Router>
      <nav className="fixed w-full bg-gray-900 bg-opacity-90 backdrop-blur-sm text-white p-4 md:p-5 z-50">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <Link to="/" className="text-xl font-bold">VM</Link>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white p-2"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="hover:text-blue-400 transition-colors duration-300">Home</Link>
            <Link to="/about" className="hover:text-blue-400 transition-colors duration-300">About</Link>
            <Link to="/skills" className="hover:text-blue-400 transition-colors duration-300">Skills</Link>
            <Link to="/resume" className="hover:text-blue-400 transition-colors duration-300">Resume</Link>
            <Link to="/contact" className="hover:text-blue-400 transition-colors duration-300">Contact</Link>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div 
          className={`md:hidden fixed right-0 w-64 bg-gray-900 bg-opacity-95 backdrop-blur-sm z-40 transition-transform duration-300 ease-in-out h-screen ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          style={{ top: '60px' }} // Height of the nav bar
        >
          <div className="flex flex-col items-center space-y-6 pt-8 px-2">
            <Link 
              to="/" 
              className="text-lg w-full text-center py-2 hover:text-blue-400 transition-colors duration-300 border-b border-gray-800"
              onClick={closeMenu}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="text-lg w-full text-center py-2 hover:text-blue-400 transition-colors duration-300 border-b border-gray-800"
              onClick={closeMenu}
            >
              About
            </Link>
            <Link 
              to="/skills" 
              className="text-lg w-full text-center py-2 hover:text-blue-400 transition-colors duration-300 border-b border-gray-800"
              onClick={closeMenu}
            >
              Skills
            </Link>
            <Link 
              to="/resume" 
              className="text-lg w-full text-center py-2 hover:text-blue-400 transition-colors duration-300 border-b border-gray-800"
              onClick={closeMenu}
            >
              Resume
            </Link>
            <Link 
              to="/contact" 
              className="text-lg w-full text-center py-2 hover:text-blue-400 transition-colors duration-300 border-b border-gray-800"
              onClick={closeMenu}
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>

      <main className="pt-16 md:pt-20">
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
