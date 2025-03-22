import React from 'react';
import { FaLinkedin, FaEnvelope, FaGithub, FaDownload } from 'react-icons/fa';

const Home = () => {
  const handleDownloadResume = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/download-resume');
      if (!response.ok) {
        throw new Error(`Failed to download resume: ${response.statusText}`);
      }
      
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'Vandana_Madhireddy_Resume.pdf';
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch (error) {
      console.error('Error downloading resume:', error);
    }
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white p-4 md:p-10 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
      <div className="absolute inset-0 pointer-events-none">
        <div className="animate-float absolute top-1/4 left-1/4 w-20 h-20 bg-blue-500 rounded-full opacity-20"></div>
        <div className="animate-float-delayed absolute top-1/2 right-1/3 w-16 h-16 bg-purple-500 rounded-full opacity-20"></div>
        <div className="animate-float-slow absolute bottom-1/4 right-1/4 w-24 h-24 bg-indigo-500 rounded-full opacity-20"></div>
      </div>
      <div className="mb-8 relative justify-center items-center">
        <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-blue-400 shadow-lg m-auto mb-8 justify-center items-center">
          <img 
            src="/Capture_photo.JPG"
            alt="Vandana Madhireddy" 
            className="w-full h-full object-cover justify-center items-center"
          />
        </div>
        <div className="max-w-4xl mx-auto text-center px-4 md:px-0">
          <div className="mb-8 relative inline-block">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">
              Vandana Madhireddy
            </h1>
          </div>
          <p className="text-lg md:text-xl mb-8 text-gray-300">Software Developer | Full Stack Engineer</p>
          <div className="flex justify-center space-x-8 mb-12">
            <a 
              href="https://www.linkedin.com/in/vandana-madhireddy-31661a241/" 
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
              href="https://github.com/mvandanareddy/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-icon-link"
            >
              <FaGithub className="text-4xl transform hover:scale-110 transition-all" />
            </a>
          </div>
          <button 
            onClick={handleDownloadResume}
            className="group relative inline-flex items-center px-8 py-4 text-lg font-medium"
          >
            <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-blue-700 group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
            <span className="absolute inset-0 w-full h-full bg-blue-800 border-2 border-blue-700 group-hover:bg-blue-700"></span>
            <span className="relative text-white group-hover:text-white flex items-center">
              <FaDownload className="mr-2" /> Download Resume
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;