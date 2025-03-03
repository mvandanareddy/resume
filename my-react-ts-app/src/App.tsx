import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { FaLinkedin, FaGithub, FaEnvelope, FaDownload } from "react-icons/fa";
import "./index.css";
import Resume from './components/Resume';

const Home = () => (
  <section className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white p-10 relative overflow-hidden">
    <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
    <div className="absolute inset-0 pointer-events-none">
      <div className="animate-float absolute top-1/4 left-1/4 w-20 h-20 bg-blue-500 rounded-full opacity-20"></div>
      <div className="animate-float-delayed absolute top-1/2 right-1/3 w-16 h-16 bg-purple-500 rounded-full opacity-20"></div>
      <div className="animate-float-slow absolute bottom-1/4 right-1/4 w-24 h-24 bg-indigo-500 rounded-full opacity-20"></div>
    </div>
    <div className="mb-8 relative">
      <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-blue-400 shadow-lg mb-8">
        <img 
          src="/path/to/your-profile-photo.jpg" 
          alt="Vandana Madhireddy" 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="mb-8 relative inline-block">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
          <h1 className="text-7xl font-bold mb-4 animate-fade-in bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
            Vandana Madhireddy
          </h1>
        </div>
        <p className="text-2xl text-blue-200 mb-8 animate-fade-in-delay">Software Developer | Full Stack Engineer</p>
        <div className="flex justify-center space-x-8 mb-12">
          <a 
            href="https://linkedin.com/in/vandana-madhireddy-31661a241" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-icon-link"
          >
            <FaLinkedin className="text-4xl transform hover:scale-110 transition-all" />
          </a>
          <a 
            href="mailto:madhireddyvandana@gmail.com"
            className="social-icon-link"
          >
            <FaEnvelope className="text-4xl transform hover:scale-110 transition-all" />
          </a>
          <a 
            href="https://github.com/yourgithub" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-icon-link"
          >
            <FaGithub className="text-4xl transform hover:scale-110 transition-all" />
          </a>
        </div>
        <a 
          href="/resume.pdf" 
          className="group relative inline-flex items-center px-8 py-4 text-lg font-medium"
        >
          <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-blue-700 group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
          <span className="absolute inset-0 w-full h-full bg-blue-800 border-2 border-blue-700 group-hover:bg-blue-700"></span>
          <span className="relative text-white group-hover:text-white flex items-center">
            <FaDownload className="mr-2" /> Download Resume
          </span>
        </a>
      </div>
    </div>
  </section>
);

const About = () => (
  <section className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white p-10">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-5xl font-bold mb-12 relative inline-block">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
          About Me
        </span>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500"></div>
      </h2>
      <div className="grid md:grid-cols-2 gap-12">
        <div className="glass-card p-8 rounded-xl relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <img 
              src="/path/to/code-background.jpg" 
              alt="" 
              className="w-full h-full object-cover"
            />
          </div>
          <p className="text-lg text-blue-100 leading-relaxed">
            Innovative Software Developer with a passion for creating efficient and scalable solutions. 
            Specialized in full-stack development with expertise in modern web technologies and cloud platforms.
          </p>
          <p className="text-lg text-blue-100 leading-relaxed mt-6">
            Currently focused on cloud-native applications and microservices architecture, 
            while continuously expanding knowledge in emerging technologies.
          </p>
        </div>
        <div className="glass-card p-8 rounded-xl">
          <h3 className="text-2xl font-semibold mb-6 text-blue-300">Quick Facts</h3>
          <ul className="space-y-4">
            <li className="flex items-center text-lg">
              <span className="text-2xl mr-4">🎓</span>
              <span className="text-blue-100">B.Tech in Computer Science</span>
            </li>
            <li className="flex items-center text-lg">
              <span className="text-2xl mr-4">💼</span>
              <span className="text-blue-100">2+ years of development experience</span>
            </li>
            <li className="flex items-center text-lg">
              <span className="text-2xl mr-4">🌟</span>
              <span className="text-blue-100">Specialized in React and Python</span>
            </li>
            <li className="flex items-center text-lg">
              <span className="text-2xl mr-4">☁️</span>
              <span className="text-blue-98">AWS Certified Cloud Practitioner</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

const Skills = () => (
  <section className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white p-10">
    <div className="absolute inset-0 opacity-5">
      <div className="grid grid-cols-4 gap-8 p-8">
        <img src="/path/to/react-logo.png" alt="" className="w-20 h-20 object-contain" />
        <img src="/path/to/python-logo.png" alt="" className="w-20 h-20 object-contain" />
      </div>
    </div>
    <div className="max-w-4xl mx-auto">
      <h2 className="text-5xl font-bold mb-12 relative inline-block">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
          Skills
        </span>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500"></div>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="glass-card p-8 rounded-xl transform hover:scale-105 transition-all">
          <h3 className="text-2xl font-semibold mb-6 text-blue-400">Frontend</h3>
          <ul className="space-y-6">
            <li>
              <div className="flex justify-between mb-2">
                <span>React</span>
                <span>90%</span>
              </div>
              <div className="w-full bg-gray-700/50 rounded-full h-2.5">
                <div className="skill-bar-fill bg-gradient-to-r from-blue-500 to-blue-300 h-2.5 rounded-full" style={{width: "90%"}}></div>
              </div>
            </li>
            <li>
              <div className="flex justify-between mb-2">
                <span>TypeScript</span>
                <span>85%</span>
              </div>
              <div className="w-full bg-gray-700/50 rounded-full h-2.5">
                <div className="skill-bar-fill bg-gradient-to-r from-blue-500 to-blue-300 h-2.5 rounded-full" style={{width: "85%"}}></div>
              </div>
            </li>
          </ul>
        </div>
        <div className="glass-card p-8 rounded-xl transform hover:scale-105 transition-all">
          <h3 className="text-2xl font-semibold mb-6 text-green-400">Backend</h3>
          <ul className="space-y-6">
            <li>
              <div className="flex justify-between mb-2">
                <span>Python</span>
                <span>95%</span>
              </div>
              <div className="w-full bg-gray-700/50 rounded-full h-2.5">
                <div className="skill-bar-fill bg-gradient-to-r from-green-500 to-green-300 h-2.5 rounded-full" style={{width: "95%"}}></div>
              </div>
            </li>
            <li>
              <div className="flex justify-between mb-2">
                <span>Flask</span>
                <span>80%</span>
              </div>
              <div className="w-full bg-gray-700/50 rounded-full h-2.5">
                <div className="skill-bar-fill bg-gradient-to-r from-green-500 to-green-300 h-2.5 rounded-full" style={{width: "80%"}}></div>
              </div>
            </li>
          </ul>
        </div>
        <div className="glass-card p-8 rounded-xl transform hover:scale-105 transition-all">
          <h3 className="text-2xl font-semibold mb-6 text-purple-400">Tools & Cloud</h3>
          <ul className="space-y-6">
            <li>
              <div className="flex justify-between mb-2">
                <span>AWS</span>
                <span>85%</span>
              </div>
              <div className="w-full bg-gray-700/50 rounded-full h-2.5">
                <div className="skill-bar-fill bg-gradient-to-r from-purple-500 to-purple-300 h-2.5 rounded-full" style={{width: "85%"}}></div>
              </div>
            </li>
            <li>
              <div className="flex justify-between mb-2">
                <span>Git</span>
                <span>90%</span>
              </div>
              <div className="w-full bg-gray-700/50 rounded-full h-2.5">
                <div className="skill-bar-fill bg-gradient-to-r from-purple-500 to-purple-300 h-2.5 rounded-full" style={{width: "90%"}}></div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

const Contact = () => (
  <section className="min-h-screen bg-gray-900 text-white p-10">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold mb-8 border-b-2 border-blue-500 pb-2">Contact</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-gray-800 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
          <div className="space-y-4">
            <p className="flex items-center">
              <FaEnvelope className="mr-2" /> madhireddyvandana@gmail.com
            </p>
            <p className="flex items-center">
              <FaLinkedin className="mr-2" /> LinkedIn Profile
            </p>
            <p>📱 +91 9573925314</p>
          </div>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Location</h3>
          <p>Hyderabad, India</p>
          <p className="mt-4">Available for remote work worldwide</p>
        </div>
      </div>
    </div>
  </section>
);

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
