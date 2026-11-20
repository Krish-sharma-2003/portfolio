export const SHOW_PROFICIENCY = false;

export type SkillLevel = 1 | 2 | 3;

export interface SkillItem {
  name: string;
  iconKey: string;
  brandColor: string;
  level?: SkillLevel;
  featured?: boolean;
}

export interface SkillCategory {
  title: string;
  iconKey: string;
  glow?: boolean;
  skills: SkillItem[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: 'Languages',
    iconKey: 'code',
    skills: [
      { name: 'Python', iconKey: 'python', brandColor: '#3776AB' },
      { name: 'JavaScript', iconKey: 'javascript', brandColor: '#F7DF1E' },
      { name: 'TypeScript', iconKey: 'typescript', brandColor: '#3178C6' },
      { name: 'SQL', iconKey: 'sql', brandColor: '#336791' },
    ],
  },
  {
    title: 'AI & Computer Vision',
    iconKey: 'sparkles',
    glow: true,
    skills: [
      { name: 'OpenCV', iconKey: 'opencv', brandColor: '#5C3EE8' },
      { name: 'Gemini API', iconKey: 'gemini', brandColor: '#4285F4' },
    ],
  },
  {
    title: 'Frontend',
    iconKey: 'code',
    skills: [
      { name: 'React', iconKey: 'react', brandColor: '#61DAFB' },
      { name: 'HTML', iconKey: 'html', brandColor: '#E34F26' },
      { name: 'CSS', iconKey: 'css', brandColor: '#1572B6' },
      { name: 'Tailwind CSS', iconKey: 'tailwind', brandColor: '#06B6D4' },
      { name: 'Framer Motion', iconKey: 'framer', brandColor: '#0055FF' },
    ],
  },
  {
    title: 'Backend & APIs',
    iconKey: 'server',
    skills: [
      { name: 'Node.js', iconKey: 'node', brandColor: '#339933' },
      { name: 'Express', iconKey: 'express', brandColor: '#FFFFFF' },
      { name: 'FastAPI', iconKey: 'fastapi', brandColor: '#009688' },
      { name: 'Flask', iconKey: 'flask', brandColor: '#FFFFFF' },
      { name: 'REST APIs', iconKey: 'rest', brandColor: '#c8ff2e' },
    ],
  },
  {
    title: 'Databases & Cloud',
    iconKey: 'database',
    skills: [
      { name: 'MongoDB', iconKey: 'mongodb', brandColor: '#47A248' },
      { name: 'Supabase', iconKey: 'supabase', brandColor: '#3ECF8E' },
      { name: 'Vercel', iconKey: 'vercel', brandColor: '#FFFFFF' },
    ],
  },
  {
    title: 'DevOps & Tooling',
    iconKey: 'gitBranch',
    skills: [
      { name: 'Git', iconKey: 'git', brandColor: '#F05032' },
      { name: 'GitHub', iconKey: 'github', brandColor: '#FFFFFF' },
      { name: 'Docker', iconKey: 'docker', brandColor: '#2496ED' },
      { name: 'pytest', iconKey: 'pytest', brandColor: '#0A9EDC' },
    ],
  },
  {
    title: 'Design & Security',
    iconKey: 'palette',
    skills: [
      { name: 'UI/UX Design', iconKey: 'design', brandColor: '#c8ff2e' },
      { name: 'Cybersecurity', iconKey: 'security', brandColor: '#c8ff2e' },
    ],
  },
];
