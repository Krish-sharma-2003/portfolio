export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  status: 'Live' | 'Coming Soon' | 'In Progress' | 'Complete';
  liveLink?: string;
  codeLink?: string;
  details?: string[];
}

export const projectsData: Project[] = [
  {
    id: 1,
    title: 'Smart Inventory — AI-Powered Invoice & Inventory ERP',
    description:
      'A full-stack intelligent ERP system with automated invoice OCR using Gemini Vision API. Features include automated invoice processing, ledger/voucher system with full audit trail, and comprehensive inventory management.',
    image:
      'https://images.unsplash.com/photo-1633356122544-f134324ef6db?auto=format&fit=crop&w=600&q=60',
    technologies: ['React', 'FastAPI', 'Supabase', 'Gemini Vision API', 'Tailwind CSS', 'shadcn/ui'],
    status: 'In Progress',
    codeLink: 'https://github.com/Krish-sharma-2003/StockFlow',
    details: [
      'Building intelligent ERP with automated invoice OCR using Gemini Vision API and GSTIN validation',
      'Designing ledger/voucher system with full audit trail; frontend in React + Tailwind + shadcn/ui',
      'Sole developer — managing architecture, database design, and UI end to end',
    ],
  },
  {
    id: 2,
    title: 'Automated Student Attendance System',
    description:
      'Facial recognition-based attendance system built from scratch. Selected at SIH 2026 (Smart India Hackathon) at college level — top 20 team out of 180. Full-stack development from facial detection to real-time attendance tracking.',
    image:
      'aa4992fc2?auto=https://images.unsplash.com/photo-1516534775068-bb4format&fit=crop&w=600&q=60',
    technologies: ['Python', 'Computer Vision', 'React', 'Flask', 'OpenCV'],
    status: 'Complete',
    details: [
      'Built facial-recognition attendance system — UI to backend processing — entirely from scratch',
      'Selected at SIH 2026 (Smart India Hackathon) at college level — Top 20 team out of 180, led full dev lifecycle and team',
    ],
  },
  {
    id: 3,
    title: 'Portfolio Website',
    description:
      'Personal portfolio showcasing projects, skills, and experience. Built with modern React, TypeScript, and design principles featuring smooth animations and glassmorphism effects.',
    image:
      'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=600&q=60',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    status: 'Live',
    liveLink: 'https://krishsharma.vercel.app',
    codeLink: 'https://github.com/Krish-sharma-2003/portfolio',
    details: [
      'Personal portfolio website showcasing projects and skills',
      'Deployed live with modern design and smooth animations',
    ],
  },
];
