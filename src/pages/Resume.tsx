import React from 'react';
import { motion } from 'framer-motion';
import {
  Download,
  User,
  GraduationCap,
  Briefcase,
  Award,
  Calendar,
  Mail,
  MapPin,
  ExternalLink,
} from 'lucide-react';

const Resume: React.FC = () => {
  const resumeData = {
    personalInfo: {
      name: 'Krish Sharma',
      title: 'Computer Science Student',
      email: 'krishsharma792003@gmail.com',
      phone: '+91 9759071153',
      location: 'India',
      linkedin: 'https://www.linkedin.com/in/krishsharma792003/',
      github: 'https://github.com/Krish-sharma-2003',
    },
    education: [
      {
        degree: 'Bachelor of Computer Science',
        institution: 'MIET Engineering College, Meerut',
        period: '2023 – 2027',
        details:
          'Focused on Data Structures, Algorithms, Web Development, and Database Systems.',
      },
    ],
    experience: [
      {
        title: 'Assistant Manager Intern',
        company: 'Drug Agency',
        period: '2024',
        description:
          'Worked on inventory management and billing systems using Tally ERP and Marg ERP.',
      },
    ],
    skills: {
      frontend: ['React', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS'],
      backend: ['Node.js', 'Express', 'MongoDB'],
      tools: ['Git', 'GitHub', 'VS Code'],
    },
  };

  return (
    <div className="min-h-screen px-4 py-20">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Resume
          </h1>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Download my resume or explore my background, experience, and skills
            below.
          </p>
        </motion.div>

        {/* Personal Info */}
        <section className="mb-12 border border-zinc-800 rounded-xl p-8 bg-zinc-900">
          <div className="flex items-center mb-4">
            <User className="w-5 h-5 mr-3 text-blue-500" />
            <h2 className="text-xl font-semibold text-white">
              Personal Information
            </h2>
          </div>

          <h3 className="text-2xl font-bold text-white">
            {resumeData.personalInfo.name}
          </h3>
          <p className="text-blue-400 mb-4">
            {resumeData.personalInfo.title}
          </p>

          <div className="space-y-2 text-zinc-400 text-sm">
            <div className="flex items-center gap-2">
              <Mail size={14} /> {resumeData.personalInfo.email}
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={14} /> {resumeData.personalInfo.location}
            </div>
            <a
              href={resumeData.personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 hover:text-white"
            >
              <ExternalLink size={14} /> LinkedIn
            </a>
            <a
              href={resumeData.personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 hover:text-white"
            >
              <ExternalLink size={14} /> GitHub
            </a>
          </div>
        </section>

        {/* Education */}
        <section className="mb-12 border border-zinc-800 rounded-xl p-8 bg-zinc-900">
          <div className="flex items-center mb-4">
            <GraduationCap className="w-5 h-5 mr-3 text-green-500" />
            <h2 className="text-xl font-semibold text-white">Education</h2>
          </div>

          {resumeData.education.map((edu, i) => (
            <div key={i}>
              <div className="flex items-center text-sm text-blue-400 mb-1">
                <Calendar size={14} className="mr-2" /> {edu.period}
              </div>
              <h3 className="text-lg font-bold text-white">{edu.degree}</h3>
              <p className="text-zinc-400">{edu.institution}</p>
              <p className="text-zinc-500 text-sm mt-1">{edu.details}</p>
            </div>
          ))}
        </section>

        {/* Experience */}
        <section className="mb-12 border border-zinc-800 rounded-xl p-8 bg-zinc-900">
          <div className="flex items-center mb-4">
            <Briefcase className="w-5 h-5 mr-3 text-purple-500" />
            <h2 className="text-xl font-semibold text-white">Experience</h2>
          </div>

          {resumeData.experience.map((exp, i) => (
            <div key={i}>
              <div className="flex items-center text-sm text-purple-400 mb-1">
                <Calendar size={14} className="mr-2" /> {exp.period}
              </div>
              <h3 className="text-lg font-bold text-white">{exp.title}</h3>
              <p className="text-zinc-400">{exp.company}</p>
              <p className="text-zinc-500 text-sm mt-1">
                {exp.description}
              </p>
            </div>
          ))}
        </section>

        {/* Skills */}
        <section className="border border-zinc-800 rounded-xl p-8 bg-zinc-900 mb-16">
          <div className="flex items-center mb-4">
            <Award className="w-5 h-5 mr-3 text-orange-500" />
            <h2 className="text-xl font-semibold text-white">
              Technical Skills
            </h2>
          </div>

          <div className="flex flex-wrap gap-2 text-sm">
            {[...resumeData.skills.frontend, ...resumeData.skills.backend, ...resumeData.skills.tools].map(
              (skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 border border-zinc-700 rounded-full text-zinc-300"
                >
                  {skill}
                </span>
              )
            )}
          </div>
        </section>

        {/* FINAL CTA */}
        <div className="text-center">
          <a
            href="/KRISH_RESUME.pdf"
            download
            className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium transition"
          >
            <Download size={18} />
            Download Resume (PDF)
          </a>
        </div>
      </div>
    </div>
  );
};

export default Resume;
