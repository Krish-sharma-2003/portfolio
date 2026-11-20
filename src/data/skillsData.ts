export const SHOW_PROFICIENCY = false;

export interface SkillItem {
  name: string;
  iconKey: string;
  level?: number;
}

export interface SkillCategory {
  title: string;
  iconKey: string;
  skills: SkillItem[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend Development',
    iconKey: 'code',
    skills: [
      { name: 'React', iconKey: 'code' },
      { name: 'JavaScript', iconKey: 'terminal' },
      { name: 'HTML', iconKey: 'globe' },
      { name: 'CSS', iconKey: 'brush' },
    ],
  },
  {
    title: 'Backend Development',
    iconKey: 'server',
    skills: [
      { name: 'Node.js', iconKey: 'server' },
      { name: 'Express', iconKey: 'layers' },
      { name: 'REST APIs', iconKey: 'globe' },
      { name: 'MongoDB', iconKey: 'database' },
    ],
  },
  {
    title: 'Tools & Technologies',
    iconKey: 'gitBranch',
    skills: [
      { name: 'Git/GitHub', iconKey: 'gitBranch' },
      { name: 'SQL', iconKey: 'database' },
      { name: 'UI/UX Design', iconKey: 'palette' },
      { name: 'Cybersecurity', iconKey: 'shield' },
    ],
  },
  {
    title: 'Tools & Platforms',
    iconKey: 'terminal',
    skills: [
      { name: 'Git/GitHub', iconKey: 'gitBranch' },
      { name: 'Vercel', iconKey: 'globe' },
      { name: 'Docker', iconKey: 'layers' },
      { name: 'Supabase', iconKey: 'database' },
      { name: 'FastAPI', iconKey: 'server' },
      { name: 'Python', iconKey: 'terminal' },
      { name: 'Flask', iconKey: 'layers' },
      { name: 'OpenCV', iconKey: 'eye' },
      { name: 'Gemini API', iconKey: 'sparkles' },
      { name: 'pytest', iconKey: 'check' },
    ],
  },
];
