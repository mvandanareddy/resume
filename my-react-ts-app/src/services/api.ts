const API_BASE_URL = 'http://localhost:5000/api';

export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image_url: string;
  github_url: string;
}

export interface Skill {
  name: string;
  level: number;
}

export interface SkillsData {
  frontend: Skill[];
  backend: Skill[];
  tools: Skill[];
}

export interface ContactForm {
  name: string;
  email: string;
  message: string;
}

export const fetchProjects = async (): Promise<Project[]> => {
  const response = await fetch(`${API_BASE_URL}/projects`);
  if (!response.ok) {
    throw new Error('Failed to fetch projects');
  }
  return response.json();
};

export const fetchSkills = async (): Promise<SkillsData> => {
  const response = await fetch(`${API_BASE_URL}/skills`);
  if (!response.ok) {
    throw new Error('Failed to fetch skills');
  }
  return response.json();
};

export const submitContact = async (data: ContactForm): Promise<{ message: string }> => {
  const response = await fetch(`${API_BASE_URL}/contact`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    throw new Error('Failed to submit contact form');
  }
  return response.json();
}; 