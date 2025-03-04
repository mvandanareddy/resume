import React from 'react';

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
          Innovative Software Developer with expertise in Python, React, and database management, specializing in full-stack development. Passionate about building scalable web solutions 
          </p>
          <p className="text-lg text-blue-100 leading-relaxed mt-6">
            while continuously expanding knowledge in emerging technologies.
          </p>
        </div>
        <div className="glass-card p-8 rounded-xl">
          <h3 className="text-2xl font-semibold mb-6 text-blue-300">Quick Facts</h3>
          <ul className="space-y-4">
            <li className="flex items-center text-lg">
              <span className="text-2xl mr-4">🎓</span>
              <span className="text-blue-100">B.Tech </span>
            </li>
            <li className="flex items-center text-lg">
              <span className="text-2xl mr-4">💼</span>
              <span className="text-blue-100">8+ months of development experience</span>
            </li>
            <li className="flex items-center text-lg">
              <span className="text-2xl mr-4">🌟</span>
              <span className="text-blue-100">Specialized in React and Python</span>
            </li>
            <li className="flex items-center text-lg">
              <span className="text-2xl mr-4">☁️</span>
              <span className="text-blue-98">Web Developmwnt certification</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default About;
