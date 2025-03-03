import React, { useEffect, useState } from 'react';
import { fetchSkills, Skill, SkillsData } from '../services/api';

const Skills = () => {
  const [skills, setSkills] = useState<SkillsData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadSkills = async () => {
      try {
        const data = await fetchSkills();
        setSkills(data);
      } catch (error) {
        console.error('Failed to load skills:', error);
      } finally {
        setLoading(false);
      }
    };

    loadSkills();
  }, []);

  if (loading) {
    return <div>Loading skills...</div>;
  }

  if (!skills) {
    return <div>Failed to load skills</div>;
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, skillList]) => (
            <div key={category} className="glass-card p-8 rounded-xl transform hover:scale-105 transition-all">
              <h3 className="text-2xl font-semibold mb-6 text-blue-400 capitalize">{category}</h3>
              <ul className="space-y-6">
                {skillList.map((skill: Skill) => (
                  <li key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span>{skill.name}</span>
                      <span>{skill.level}%</span>
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