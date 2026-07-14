// import React from 'react';
// import { motion } from 'framer-motion';
// import BallpitBackground from '../components/BallpitBackground';
// import {
//   Download,
//   User,
//   GraduationCap,
//   Briefcase,
//   Award,
//   Calendar,
//   Mail,
//   MapPin,
//   ExternalLink,
// } from 'lucide-react';

// const Resume: React.FC = () => {
//   const resumeData = {
//     personalInfo: {
//       name: 'Krish Sharma',
//       title: 'Computer Science Student',
//       email: 'krishsharma792003@gmail.com',
//       phone: '+91 9759071153',
//       location: 'India',
//       linkedin: 'https://www.linkedin.com/in/krishsharma792003/',
//       github: 'https://github.com/Krish-sharma-2003',
//     },
//     education: [
//       {
//         degree: 'Bachelor of Computer Science',
//         institution: 'MIET Engineering College, Meerut',
//         period: '2023 – 2027',
//         details:
//           'Focused on Data Structures, Algorithms, Web Development, and Database Systems.',
//       },
//     ],
//     experience: [
//       {
//         title: 'Assistant Manager Intern',
//         company: 'Drug Agency',
//         period: '2024',
//         description:
//           'Worked on inventory management and billing systems using Tally ERP and Marg ERP.',
//       },
//     ],
//     skills: {
//       frontend: ['React', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS'],
//       backend: ['Node.js', 'Express', 'MongoDB'],
//       tools: ['Git', 'GitHub', 'VS Code'],
//     },
//   };

//   return (
//     <div className="min-h-screen px-4 py-20 relative">
//       <BallpitBackground />
//       <div className="max-w-5xl mx-auto relative z-10">
//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-16"
//         >
//           <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
//             Resume
//           </h1>
//           <p className="text-zinc-400 max-w-2xl mx-auto">
//             Download my resume or explore my background, experience, and skills
//             below.
//           </p>
//         </motion.div>

//         {/* Personal Info */}
//         <section className="mb-12 border border-zinc-800 rounded-xl p-8 bg-zinc-900">
//           <div className="flex items-center mb-4">
//             <User className="w-5 h-5 mr-3 text-blue-500" />
//             <h2 className="text-xl font-semibold text-white">
//               Personal Information
//             </h2>
//           </div>

//           <h3 className="text-2xl font-bold text-white">
//             {resumeData.personalInfo.name}
//           </h3>
//           <p className="text-blue-400 mb-4">
//             {resumeData.personalInfo.title}
//           </p>

//           <div className="space-y-2 text-zinc-400 text-sm">
//             <div className="flex items-center gap-2">
//               <Mail size={14} /> {resumeData.personalInfo.email}
//             </div>
//             <div className="flex items-center gap-2">
//               <MapPin size={14} /> {resumeData.personalInfo.location}
//             </div>
//             <a
//               href={resumeData.personalInfo.linkedin}
//               target="_blank"
//               rel="noreferrer"
//               className="flex items-center gap-2 hover:text-white"
//             >
//               <ExternalLink size={14} /> LinkedIn
//             </a>
//             <a
//               href={resumeData.personalInfo.github}
//               target="_blank"
//               rel="noreferrer"
//               className="flex items-center gap-2 hover:text-white"
//             >
//               <ExternalLink size={14} /> GitHub
//             </a>
//           </div>
//         </section>

//         {/* Education */}
//         <section className="mb-12 border border-zinc-800 rounded-xl p-8 bg-zinc-900">
//           <div className="flex items-center mb-4">
//             <GraduationCap className="w-5 h-5 mr-3 text-green-500" />
//             <h2 className="text-xl font-semibold text-white">Education</h2>
//           </div>

//           {resumeData.education.map((edu, i) => (
//             <div key={i}>
//               <div className="flex items-center text-sm text-blue-400 mb-1">
//                 <Calendar size={14} className="mr-2" /> {edu.period}
//               </div>
//               <h3 className="text-lg font-bold text-white">{edu.degree}</h3>
//               <p className="text-zinc-400">{edu.institution}</p>
//               <p className="text-zinc-500 text-sm mt-1">{edu.details}</p>
//             </div>
//           ))}
//         </section>

//         {/* Experience */}
//         <section className="mb-12 border border-zinc-800 rounded-xl p-8 bg-zinc-900">
//           <div className="flex items-center mb-4">
//             <Briefcase className="w-5 h-5 mr-3 text-purple-500" />
//             <h2 className="text-xl font-semibold text-white">Experience</h2>
//           </div>

//           {resumeData.experience.map((exp, i) => (
//             <div key={i}>
//               <div className="flex items-center text-sm text-purple-400 mb-1">
//                 <Calendar size={14} className="mr-2" /> {exp.period}
//               </div>
//               <h3 className="text-lg font-bold text-white">{exp.title}</h3>
//               <p className="text-zinc-400">{exp.company}</p>
//               <p className="text-zinc-500 text-sm mt-1">
//                 {exp.description}
//               </p>
//             </div>
//           ))}
//         </section>

//         {/* Skills */}
//         <section className="border border-zinc-800 rounded-xl p-8 bg-zinc-900 mb-16">
//           <div className="flex items-center mb-4">
//             <Award className="w-5 h-5 mr-3 text-orange-500" />
//             <h2 className="text-xl font-semibold text-white">
//               Technical Skills
//             </h2>
//           </div>

//           <div className="flex flex-wrap gap-2 text-sm">
//             {[...resumeData.skills.frontend, ...resumeData.skills.backend, ...resumeData.skills.tools].map(
//               (skill) => (
//                 <span
//                   key={skill}
//                   className="px-3 py-1 border border-zinc-700 rounded-full text-zinc-300"
//                 >
//                   {skill}
//                 </span>
//               )
//             )}
//           </div>
//         </section>

//         {/* FINAL CTA */}
//         <div className="text-center">
//           <a
//             href="/Krish_Sharma_Resume.pdf"
//             download
//             className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium transition"
//           >
//             <Download size={18} />
//             Download Resume (PDF)
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Resume;



// import React from 'react';
// import { motion } from 'framer-motion';
// import BallpitBackground from '../components/BallpitBackground';
// import {
//   Download,
//   User,
//   GraduationCap,
//   Briefcase,
//   Award,
//   Calendar,
//   Mail,
//   MapPin,
//   ExternalLink,
// } from 'lucide-react';

// const Resume: React.FC = () => {
//   const resumeData = {
//     personalInfo: {
//       name: 'Krish Sharma',
//       title: 'Computer Science Student',
//       email: 'krishsharma792003@gmail.com',
//       phone: '+91 9759071153',
//       location: 'India',
//       linkedin: 'https://www.linkedin.com/in/krishsharma792003/',
//       github: 'https://github.com/Krish-sharma-2003',
//     },
//     education: [
//       {
//         degree: 'Bachelor of Computer Science',
//         institution: 'MIET Engineering College, Meerut',
//         period: '2023 – 2027',
//         details:
//           'Focused on Data Structures, Algorithms, Web Development, and Database Systems.',
//       },
//     ],
//     experience: [
//       {
//         title: 'Research Intern — On Campus   ·   IIT Roorkee  ·  AMSC Lab',
//         Institute: 'IIT Roorkee',
//         period: '2026',
//         description:
//           'Worked under faculty supervision on real-world technical problems in a structured research environment',
//       },
//     ],
//     skills: {
//       frontend: ['React', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS'],
//       backend: ['Node.js', 'Express', 'MongoDB'],
//       tools: ['Git', 'GitHub', 'VS Code'],
//     },
//   };

//   return (
//     <div className="min-h-screen px-4 py-20 relative overflow-hidden">
//       <BallpitBackground />
//       <div className="max-w-5xl mx-auto relative z-10">
//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-16"
//         >
//           <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent mb-4">
//             Resume
//           </h1>
//           <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
//             Download my resume or explore my background, experience, and skills below.
//           </p>
//         </motion.div>

//         <div className="space-y-8">
//           {/* Personal Info */}
//           <motion.section
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.1 }}
//             className="bg-zinc-950/70 border border-zinc-800/80 rounded-3xl p-8 md:p-10 backdrop-blur-sm"
//           >
//             <div className="flex items-center gap-3 mb-6">
//               <div className="w-10 h-10 rounded-2xl bg-blue-500/10 flex items-center justify-center">
//                 <User className="w-6 h-6 text-blue-400" />
//               </div>
//               <h2 className="text-2xl font-semibold text-white">Personal Information</h2>
//             </div>

//             <h3 className="text-3xl font-bold text-white mb-1">{resumeData.personalInfo.name}</h3>
//             <p className="text-blue-400 text-xl mb-6">{resumeData.personalInfo.title}</p>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-zinc-400">
//               <div className="flex items-center gap-3">
//                 <Mail className="w-5 h-5 text-zinc-500" />
//                 {resumeData.personalInfo.email}
//               </div>
//               <div className="flex items-center gap-3">
//                 <MapPin className="w-5 h-5 text-zinc-500" />
//                 {resumeData.personalInfo.location}
//               </div>
//               <a
//                 href={resumeData.personalInfo.linkedin}
//                 target="_blank"
//                 rel="noreferrer"
//                 className="flex items-center gap-3 hover:text-white transition-colors"
//               >
//                 <ExternalLink className="w-5 h-5 text-zinc-500" />
//                 LinkedIn
//               </a>
//               <a
//                 href={resumeData.personalInfo.github}
//                 target="_blank"
//                 rel="noreferrer"
//                 className="flex items-center gap-3 hover:text-white transition-colors"
//               >
//                 <ExternalLink className="w-5 h-5 text-zinc-500" />
//                 GitHub
//               </a>
//             </div>
//           </motion.section>

//           {/* Education */}
//           <motion.section
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.2 }}
//             className="bg-zinc-950/70 border border-zinc-800/80 rounded-3xl p-8 md:p-10 backdrop-blur-sm"
//           >
//             <div className="flex items-center gap-3 mb-6">
//               <div className="w-10 h-10 rounded-2xl bg-green-500/10 flex items-center justify-center">
//                 <GraduationCap className="w-6 h-6 text-green-400" />
//               </div>
//               <h2 className="text-2xl font-semibold text-white">Education</h2>
//             </div>

//             {resumeData.education.map((edu, i) => (
//               <div key={i}>
//                 <div className="flex items-center gap-2 text-blue-400 mb-3">
//                   <Calendar className="w-4 h-4" /> {edu.period}
//                 </div>
//                 <h3 className="text-2xl font-bold text-white mb-1">{edu.degree}</h3>
//                 <p className="text-zinc-400 mb-4">{edu.institution}</p>
//                 <p className="text-zinc-500 leading-relaxed">{edu.details}</p>
//               </div>
//             ))}
//           </motion.section>

//           {/* Experience */}
//           <motion.section
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.3 }}
//             className="bg-zinc-950/70 border border-zinc-800/80 rounded-3xl p-8 md:p-10 backdrop-blur-sm"
//           >
//             <div className="flex items-center gap-3 mb-6">
//               <div className="w-10 h-10 rounded-2xl bg-purple-500/10 flex items-center justify-center">
//                 <Briefcase className="w-6 h-6 text-purple-400" />
//               </div>
//               <h2 className="text-2xl font-semibold text-white">Experience</h2>
//             </div>

//             {resumeData.experience.map((exp, i) => (
//               <div key={i}>
//                 <div className="flex items-center gap-2 text-purple-400 mb-3">
//                   <Calendar className="w-4 h-4" /> {exp.period}
//                 </div>
//                 <h3 className="text-2xl font-bold text-white mb-1">{exp.title}</h3>
//                 <p className="text-zinc-400 mb-4">{exp.company}</p>
//                 <p className="text-zinc-500 leading-relaxed">{exp.description}</p>
//               </div>
//             ))}
//           </motion.section>

//           {/* Skills */}
//           <motion.section
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.4 }}
//             className="bg-zinc-950/70 border border-zinc-800/80 rounded-3xl p-8 md:p-10 backdrop-blur-sm"
//           >
//             <div className="flex items-center gap-3 mb-6">
//               <div className="w-10 h-10 rounded-2xl bg-amber-500/10 flex items-center justify-center">
//                 <Award className="w-6 h-6 text-amber-400" />
//               </div>
//               <h2 className="text-2xl font-semibold text-white">Technical Skills</h2>
//             </div>

//             <div className="flex flex-wrap gap-3">
//               {[...resumeData.skills.frontend, ...resumeData.skills.backend, ...resumeData.skills.tools].map(
//                 (skill) => (
//                   <span
//                     key={skill}
//                     className="px-5 py-2.5 bg-zinc-900 border border-zinc-700 hover:border-purple-500/30 rounded-2xl text-sm text-zinc-300 hover:text-white transition-all"
//                   >
//                     {skill}
//                   </span>
//                 )
//               )}
//             </div>
//           </motion.section>
//         </div>

//         {/* Download Button */}
//         <div className="text-center mt-16">
//           <a
//             href="/Krish_Sharma_Resume.pdf"
//             download
//             className="inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white rounded-2xl font-medium text-lg transition-all duration-300 shadow-xl shadow-purple-500/20"
//           >
//             <Download size={22} />
//             Download Resume (PDF)
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Resume;



import React from 'react';
import { motion } from 'framer-motion';
import BallpitBackground from '../components/BallpitBackground';
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
        title: 'Research Intern',
        company: 'IIT Roorkee • AMSC Lab',
        period: '2026',
        description:
          'Worked under faculty supervision on real-world technical problems in a structured research environment.',
        link: 'https://lnkd.in/p/gx6qmu9P',
        linkText: 'View Certificate',
      },
      {
        title: 'Project / Research Intern — AI Agent for Pharma',
        company: 'EKLabs',
        period: '2026',
        description: [
          'Built a production-grade full-stack AI-assisted ERP using React (frontend), FastAPI (backend), and Supabase (PostgreSQL)',
          'Designed and tested 40+ REST API endpoints from scratch',
          'Fixed a critical JWT auth bug (HS256 vs ES256 mismatch) that was breaking all secure routes',
        ],
        link: 'https://www.eklabs.in/',
        linkText: 'Visit EKLabs',
      },
    ],
    skills: {
      frontend: ['React', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS'],
      backend: ['Node.js', 'Express', 'MongoDB'],
      tools: ['Git', 'GitHub', 'VS Code'],
    },
  };

  return (
    <div className="min-h-screen px-4 py-20 relative overflow-hidden">
      <BallpitBackground />
      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent mb-4">
            Resume
          </h1>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
            Download my resume or explore my background, experience, and skills below.
          </p>
        </motion.div>

        <div className="space-y-8">
          {/* Personal Info */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-zinc-950/70 border border-zinc-800/80 rounded-3xl p-8 md:p-10 backdrop-blur-sm"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-2xl bg-blue-500/10 flex items-center justify-center">
                <User className="w-6 h-6 text-blue-400" />
              </div>
              <h2 className="text-2xl font-semibold text-white">Personal Information</h2>
            </div>

            <h3 className="text-3xl font-bold text-white mb-1">{resumeData.personalInfo.name}</h3>
            <p className="text-blue-400 text-xl mb-6">{resumeData.personalInfo.title}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-zinc-400">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-zinc-500" />
                {resumeData.personalInfo.email}
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-zinc-500" />
                {resumeData.personalInfo.location}
              </div>
              <a href={resumeData.personalInfo.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-white transition-colors">
                <ExternalLink className="w-5 h-5 text-zinc-500" /> LinkedIn
              </a>
              <a href={resumeData.personalInfo.github} target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-white transition-colors">
                <ExternalLink className="w-5 h-5 text-zinc-500" /> GitHub
              </a>
            </div>
          </motion.section>

          {/* Education */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-zinc-950/70 border border-zinc-800/80 rounded-3xl p-8 md:p-10 backdrop-blur-sm"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-2xl bg-green-500/10 flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-green-400" />
              </div>
              <h2 className="text-2xl font-semibold text-white">Education</h2>
            </div>

            {resumeData.education.map((edu, i) => (
              <div key={i}>
                <div className="flex items-center gap-2 text-blue-400 mb-3">
                  <Calendar className="w-4 h-4" /> {edu.period}
                </div>
                <h3 className="text-2xl font-bold text-white mb-1">{edu.degree}</h3>
                <p className="text-zinc-400 mb-4">{edu.institution}</p>
                <p className="text-zinc-500 leading-relaxed">{edu.details}</p>
              </div>
            ))}
          </motion.section>

          {/* Experience */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-zinc-950/70 border border-zinc-800/80 rounded-3xl p-8 md:p-10 backdrop-blur-sm"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-2xl bg-purple-500/10 flex items-center justify-center">
                <Briefcase className="w-6 h-6 text-purple-400" />
              </div>
              <h2 className="text-2xl font-semibold text-white">Experience</h2>
            </div>

            {resumeData.experience.map((exp, i) => (
              <div key={i} className="mb-10 last:mb-0">
                <div className="flex items-center gap-2 text-purple-400 mb-3">
                  <Calendar className="w-4 h-4" /> {exp.period}
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-1">{exp.title}</h3>
                <p className="text-zinc-400 mb-5">{exp.company}</p>

                {Array.isArray(exp.description) ? (
                  <ul className="space-y-3 text-zinc-400 mb-6 list-disc list-inside">
                    {exp.description.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-zinc-500 leading-relaxed mb-6">{exp.description}</p>
                )}

                {exp.link && (
                  <a
                    href={exp.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 hover:border-purple-500 text-sm rounded-2xl text-zinc-300 hover:text-white transition-all"
                  >
                    <ExternalLink size={16} />
                    {exp.linkText}
                  </a>
                )}
              </div>
            ))}
          </motion.section>

          {/* Skills */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-zinc-950/70 border border-zinc-800/80 rounded-3xl p-8 md:p-10 backdrop-blur-sm"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-2xl bg-amber-500/10 flex items-center justify-center">
                <Award className="w-6 h-6 text-amber-400" />
              </div>
              <h2 className="text-2xl font-semibold text-white">Technical Skills</h2>
            </div>

            <div className="flex flex-wrap gap-3">
              {[...resumeData.skills.frontend, ...resumeData.skills.backend, ...resumeData.skills.tools].map((skill) => (
                <span
                  key={skill}
                  className="px-5 py-2.5 bg-zinc-900 border border-zinc-700 hover:border-purple-500/30 rounded-2xl text-sm text-zinc-300 hover:text-white transition-all"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.section>
        </div>

        {/* Download Button */}
        <div className="text-center mt-16">
          <a
            href="/Krish_Sharma_Resume.pdf"
            download
            className="inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white rounded-2xl font-medium text-lg transition-all duration-300 shadow-xl shadow-purple-500/20"
          >
            <Download size={22} />
            Download Resume (PDF)
          </a>
        </div>
      </div>
    </div>
  );
};

export default Resume;