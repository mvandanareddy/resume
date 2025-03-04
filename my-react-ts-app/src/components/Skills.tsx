import React, { useEffect, useState } from 'react';

interface Skill {
  name: string;
  level: number;
}

interface SkillsData {
  frontend: Skill[];
  backend: Skill[];
  databases: Skill[];
  tools: Skill[];
}

const Skills = () => {
  const [skills, setSkills] = useState<SkillsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/skills');
        console.log('Response status:', response.status); // Debug log
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        console.log('Skills data:', data); // Debug log
        setSkills(data);
      } catch (err) {
        console.error('Error fetching skills:', err);
        setError(err instanceof Error ? err.message : 'Failed to load skills');
      } finally {
        setLoading(false);
      }
    };

    fetchSkills();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white p-10 flex items-center justify-center">
        <div className="text-2xl">Loading skills...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white p-10 flex items-center justify-center">
        <div className="text-2xl text-red-400">Error: {error}</div>
      </div>
    );
  }

  if (!skills) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white p-10 flex items-center justify-center">
        <div className="text-2xl">No skills data available</div>
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white p-10">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl font-bold mb-12 relative inline-block">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
            Skills
          </span>
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500"></div>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {Object.entries(skills).map(([category, skillList]) => (
            <div key={category} className="glass-card p-8 rounded-xl transform hover:scale-105 transition-all">
              <h3 className="text-2xl font-semibold mb-6 text-blue-400 capitalize">{category}</h3>
              <ul className="space-y-6">
                {skillList.map((skill: Skill) => (
                  <li key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span>{skill.name}</span>
                    </div>
                    <div className="w-full bg-gray-700/50 rounded-full h-2.5">
                      <div 
                        className="skill-bar-fill bg-gradient-to-r from-blue-500 to-blue-300 h-2.5 rounded-full" 
                        style={{width: `${skill.level}%`}}
                      ></div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 