import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

interface ResumeData {
  personal_info: {
    name: string;
    title: string;
    email: string;
    phone: string;
    location: string;
    linkedin: string;
    github: string;
  };
  education: Array<{
    degree: string;
    school: string;
    year: string;
    gpa: string;
  }>;
  experience: Array<{
    title: string;
    company: string;
    location: string;
    period: string;
    responsibilities: string[];
  }>;
  skills: {
    programming: string[];
    frameworks: string[];
    databases: string[];
    tools: string[];
  };
  projects: Array<{
    name: string;
    description: string;
    technologies: string[];
    github: string;
  }>;
  certifications: Array<{
    name: string;
    issuer: string;
    date: string;
  }>;
}

const Resume: React.FC = () => {
  const [resumeData, setResumeData] = React.useState<ResumeData | null>(null);

  React.useEffect(() => {
    fetch('http://localhost:5000/api/resume')
      .then(res => res.json())
      .then(data => setResumeData(data))
      .catch(err => console.error('Error fetching resume:', err));
  }, []);

  if (!resumeData) return <div>Loading...</div>;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">{resumeData.personal_info.name}</h1>
          <p className="text-2xl text-blue-300 mb-6">{resumeData.personal_info.title}</p>
          <div className="flex justify-center space-x-6">
            <a href={`mailto:${resumeData.personal_info.email}`} className="flex items-center">
              <FaEnvelope className="mr-2" /> {resumeData.personal_info.email}
            </a>
            <a href={`tel:${resumeData.personal_info.phone}`} className="flex items-center">
              <FaPhone className="mr-2" /> {resumeData.personal_info.phone}
            </a>
            <span className="flex items-center">
              <FaMapMarkerAlt className="mr-2" /> {resumeData.personal_info.location}
            </span>
          </div>
          <div className="flex justify-center space-x-6 mt-4">
            <a href={resumeData.personal_info.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center">
              <FaLinkedin className="mr-2" /> LinkedIn
            </a>
            <a href={resumeData.personal_info.github} target="_blank" rel="noopener noreferrer" className="flex items-center">
              <FaGithub className="mr-2" /> GitHub
            </a>
          </div>
        </header>

        {/* Experience */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-blue-300">Experience</h2>
          {resumeData.experience.map((exp, index) => (
            <div key={index} className="mb-6 glass-card p-6 rounded-xl">
              <h3 className="text-xl font-semibold">{exp.title}</h3>
              <p className="text-blue-300">{exp.company} | {exp.location}</p>
              <p className="text-gray-400 mb-4">{exp.period}</p>
              <ul className="list-disc list-inside space-y-2">
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx}>{resp}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        {/* Skills */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-blue-300">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {Object.entries(resumeData.skills).map(([category, skills]) => (
              <div key={category} className="glass-card p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-4 capitalize">{category}</h3>
                <ul className="space-y-2">
                  {skills.map((skill, idx) => (
                    <li key={idx}>{skill}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-blue-300">Education</h2>
          {resumeData.education.map((edu, index) => (
            <div key={index} className="glass-card p-6 rounded-xl">
              <h3 className="text-xl font-semibold">{edu.degree}</h3>
              <p className="text-blue-300">{edu.school}</p>
              <p className="text-gray-400">{edu.year} | GPA: {edu.gpa}</p>
            </div>
          ))}
        </section>

        {/* Certifications */}
        <section>
          <h2 className="text-3xl font-bold mb-6 text-blue-300">Certifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {resumeData.certifications.map((cert, index) => (
              <div key={index} className="glass-card p-6 rounded-xl">
                <h3 className="text-xl font-semibold">{cert.name}</h3>
                <p className="text-blue-300">{cert.issuer}</p>
                <p className="text-gray-400">{cert.date}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Resume; 