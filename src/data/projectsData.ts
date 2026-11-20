export interface ProjectLinks {
  github?: string;
  live?: string;
  video?: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  image?: string;
  technologies: string[];
  status: 'Live on GitHub' | 'Coming Soon' | 'Complete' | 'Live';
  date: string;
  links?: ProjectLinks;
  badge?: string;
  liveLink?: string;
  codeLink?: string;
  details?: string[];
}

export const PROJECT_SORT_ORDER: 'asc' | 'desc' = 'asc';

export const projectsData: Project[] = [
  {
    id: 1,
    title: 'Smart Inventory — AI-Powered Invoice & Inventory ERP',
    description:
      'A full-stack intelligent ERP system with automated invoice OCR using Gemini Vision API. Features include automated invoice processing, ledger/voucher system with full audit trail, and comprehensive inventory management.',
    image: `${import.meta.env.BASE_URL}Inventory_Project_image.png`,
    technologies: ['React', 'FastAPI', 'Supabase', 'Gemini Vision API', 'Tailwind CSS', 'shadcn/ui'],
    status: 'Live on GitHub',
    date: '',
    links: {
      github: 'https://github.com/Krish-sharma-2003/StockFLow.git',
    },
    codeLink: 'https://github.com/Krish-sharma-2003/StockFLow.git',
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
      'Facial recognition-based attendance system built from scratch. Selected at SIH 2025 (Smart India Hackathon) at college level — top 20 team out of 180. Full-stack development from facial detection to real-time attendance tracking.',
    image: `${import.meta.env.BASE_URL}generated-image.jpg`,
    technologies: ['Python', 'Computer Vision', 'React', 'Flask', 'OpenCV'],
    status: 'Complete',
    date: '',
    links: {
      github: 'https://drive.google.com/file/d/1wu4nrojfshufZLKwz93C7G05h2eFDNM9/view',
    },
    codeLink: 'https://drive.google.com/file/d/1wu4nrojfshufZLKwz93C7G05h2eFDNM9/view',
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
    image: `${import.meta.env.BASE_URL}Pasted image.png`,
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    status: 'Live',
    date: '',
    links: {
      live: 'https://krishsharma.vercel.app',
      github: 'https://github.com/Krish-sharma-2003/portfolio',
    },
    liveLink: 'https://krishsharma.vercel.app',
    codeLink: 'https://github.com/Krish-sharma-2003/portfolio',
    details: [
      'Personal portfolio website showcasing projects and skills',
      'Deployed live with modern design and smooth animations',
    ],
  },
  {
    id: 4,
    title: 'Card Mailer — Telegram Bot',
    description:
      'Card Mailer is a Telegram bot that turns a business card photo into a follow-up. Send it a card and it reads the details with AI, sends a greeting email from your Gmail, saves the record in Supabase and adds a row to a Google Sheet so the team can follow up later.',
    image: `${import.meta.env.BASE_URL}CARD_MAILER.png`,
    technologies: ['Telegram Bot API', 'Python', 'Gemini', 'Supabase', 'Google Sheets', 'Vercel'],
    status: 'Live on GitHub',
    date: '',
    badge: 'Telegram Bot',
    links: {
      github: 'https://github.com/Krish-sharma-2003/Card-Mailer-Vercel',
    },
    details: [
      'Reads the card with Gemini, sends the greeting email through Gmail SMTP, and stores everything in Supabase with duplicate protection.',
      'Adds each new contact to a Google Sheet via Apps Script, so the team can track follow-ups and export to Excel.',
    ],
  },
  {
    id: 5,
    title: 'Wind Forecast Decision Support (UK Day-Ahead)',
    description:
      'A web tool that helps an electricity buyer decide how much power to purchase a day in advance. It shows the UK\'s predicted wind power for tomorrow, and how wrong those predictions usually are, so the buyer can add a safety margin and avoid running short.',
    image: `${import.meta.env.BASE_URL}Wind_Forecast_Decision_Support.png`,
    technologies: ['React', 'TypeScript', 'FastAPI', 'Python', 'Pydantic', 'Vite', 'Docker', 'Vercel', 'pytest'],
    status: 'Live',
    date: '',
    badge: 'Built for an IIT Madras researcher',
    links: {
      github: 'https://github.com/Krish-sharma-2003/Wind-Maping-Detector',
      live: 'https://xqvtn.vercel.app',
      video: 'https://youtu.be/DLf7-DLIeuw',
    },
    liveLink: 'https://xqvtn.vercel.app',
    codeLink: 'https://github.com/Krish-sharma-2003/Wind-Maping-Detector',
    details: [
      'Compares past wind forecasts with what actually happened, using real UK grid data (Elexon), for every day in January 2026.',
      'Gives a \'safe forecast\' that is lower than the original when predictions tend to be too optimistic, plus accuracy charts by hour, by day and by how far ahead the forecast was made.',
    ],
  },
];
