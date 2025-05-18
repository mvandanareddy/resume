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
  personal_projects: Array<{
    name: string;
    description: string;
    deployed_link: string;
  }>;
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
    // responsibilities: string[];
  }>;
  
  certifications: Array<{
    name: string;
    issuer: string;
    date: string;
  }>;
}

const Resume = () => {
  const [resumeData, setResumeData] = React.useState<ResumeData | null>(null);

  React.useEffect(() => {
    fetch('https://resume-rld3.onrender.com/api/resume')
      .then(res => res.json())
      .then(data => setResumeData(data))
      .catch(err => console.error('Error fetching resume:', err));
  }, []);

  if (!resumeData) return <div>Loading...</div>;

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white p-4 md:p-10">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 relative inline-block">
            {resumeData.personal_info.name}
          </h2>
          <div className="flex flex-wrap justify-center gap-4 mt-4 md:mt-6">
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <div className="glass-card rounded-xl p-6">
            <h3 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6 text-blue-300">
              Experience
            </h3>
            {resumeData.experience.map((exp, index) => (
              <div key={index} className="mb-6 glass-card p-6 rounded-xl">
                <h4 className="text-xl font-semibold">{exp.title}</h4>
                <p className="text-blue-300">{exp.company} | {exp.location}</p>
                <p className="text-gray-400 mb-4">{exp.period}</p>
                <ul className="list-disc list-inside space-y-2">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx}>{resp}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="glass-card rounded-xl p-6">
            <h3 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6 text-blue-300">
              Education
            </h3>
            {resumeData.education.map((edu, index) => (
              <div key={index} className="glass-card p-6 rounded-xl mb-6">
                <h4 className="text-xl font-semibold">{edu.degree}</h4>
                <p className="text-blue-300">{edu.school}</p>
                <p className="text-gray-400">{edu.year} | GPA: {edu.gpa}</p>
              </div>
            ))}
          </div>

          <div className="glass-card rounded-xl col-span-1 md:col-span-2 p-6 mb-6" >
            <h3 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6 text-blue-300">
              Skills
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {Object.entries(resumeData.skills).map(([category, skills]) => (
                <div key={category} className="glass-card p-6 rounded-xl">
                  <h4 className="text-xl font-semibold mb-4 capitalize">{category}</h4>
                  <ul className="space-y-2">
                    {skills.map((skill, idx) => (
                      <li key={idx}>{skill}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            
          </div>
        </div>
          
          {/* Projects */} 
          <div className='gap-6 space-6 space-y-6'>
            <section className=" glass-card rounded-xl p-6 m-b-6">
            <div className="  p-6">
              <h2 className="text-3xl font-bold mb-6 text-blue-300">Projects</h2>
              <div className="gap-6 ">
                {resumeData.projects.map((project, index) => (
                  <div key={index} className="glass-card p-6 rounded-xl m-6">
                    <h3 className="text-xl font-semibold">{project.name}</h3>
                    <p className="text-blue-300">{project.description}</p>
                    <p className="text-gray-400">Technologies: {project.technologies.join(', ')}</p>
                    {/* <p> Responsibilities:</p> */}
                    {/* <ul className="list-disc list-inside">
                      {project.responsibilities.map((resp, idx) => (
                        <li key={idx}>{resp}</li>
                      ))}
                    </ul> */}
                  </div>
                ))}
              </div>
            </div>
          </section>
                      {/* Personal Projects */}

          <section className="glass-card rounded-xl col-span-1 md:col-span-2 p-6">
  <h2 className="text-3xl font-bold mb-6 text-blue-300">Personal Projects</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    {resumeData.personal_projects.map((project, index) => (
      <div key={index} className="glass-card p-6 rounded-xl">
        <h3 className="text-xl font-semibold">{project.name}</h3>
        <p className="text-blue-300">{project.description}</p>
        <a href={project.deployed_link} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
          🔗 Deployed Link
        </a>
      </div>
    ))}
  </div>
</section>
        {/* Certifications */}

        <section className="glass-card rounded-xl col-span-1 md:col-span-2 p-6">
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
    </section>
  );
};

export default Resume; 