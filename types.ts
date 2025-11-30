export interface Job {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
  highlights: string[];
}

export interface Education {
  id: string;
  degree: string;
  school: string;
  year: string;
  details?: string;
}

export interface Skill {
  name: string;
  level: number; // 0-100
  category: 'frontend' | 'backend' | 'tools' | 'specialized';
  icon?: string;
}

export enum SectionId {
  HERO = 'hero',
  EXPERIENCE = 'experience',
  EDUCATION = 'education',
  SKILLS = 'skills',
  CONTACT = 'contact'
}