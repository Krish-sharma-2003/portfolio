import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Download, 
  Upload, 
  FileText, 
  User, 
  GraduationCap, 
  Briefcase, 
  Award, 
  Calendar,
  Mail,
  Phone,
  MapPin,
  ExternalLink
} from 'lucide-react';
import GlassCard from '../components/GlassCard';

const Resume: React.FC = () => {
  const [isDragOver, setIsDragOver] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);

  const resumeData = {
    personalInfo: {
      name: "Krish Sharma",
      title: "Computer Science Student",
      email: "krishsharma792003@gmail.com",
      phone: "+91 XXXXX XXXXX",
      location: "India",
      linkedin: "https://www.linkedin.com/in/krish-sharma-43b625302/",
      github: "https://github.com/Krish-sharma-2003"
    },
    education: [
      {
        degree: "Bachelor of Computer Science",
        institution: "University Name",
        period: "2021 - 2024",
        details: "Relevant coursework: Data Structures, Algorithms, Web Development, Database Systems"
      }
    ],
    experience: [
      {
        title: "Frontend Developer Intern",
        company: "Tech Company",
        period: "Summer 2023",
        description: "Developed responsive web applications using React and modern JavaScript"
      }
    ],
    skills: {
      frontend: ["React", "JavaScript", "TypeScript", "HTML5", "CSS3", "Tailwind CSS"],
      backend: ["Node.js", "Express", "MongoDB", "REST APIs"],
      tools: ["Git/GitHub", "VS Code", "Figma", "SQL"]
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    
    const files = e.dataTransfer.files;
    if (files.length > 0 && files[0].type === 'application/pdf') {
      setUploadedFile(files[0]);
    } else {
      alert('Please upload a PDF file');
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type === 'application/pdf') {
      setUploadedFile(file);
    } else {
      alert('Please upload a PDF file');
    }
  };

  const downloadSampleResume = () => {
    // This would trigger a download of the current resume
    alert('Resume download would start here! (Upload your resume first)');
  };

  return (
    <div className="min-h-screen px-4 py-20">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 dark:text-white mb-6">
            Resume
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Download my resume or view my experience and qualifications below.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Resume Upload/Download Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-1"
          >
            <GlassCard className="p-6 mb-8">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 flex items-center">
                <FileText className="w-6 h-6 mr-3 text-blue-500" />
                Resume Document
              </h2>
              
              {/* Download Current Resume */}
             <a
  href="/Krish-Resume.pdf"
  download
  className="w-full flex items-center justify-center space-x-3 px-6 py-4 bg-blue-600 text-white rounded-lg font-semibold shadow-lg hover:bg-blue-700 transition mb-6"
>
  <Download className="w-5 h-5" />
  <span>Download Resume (PDF)</span>
</a>

              {/* Upload New Resume */}
              <div className="border-2 border-dashed border-white/20 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
                  Update Resume
                </h3>
                
                <div
                  className={`border-2 border-dashed rounded-lg p-6 text-center transition-all duration-300 ${
                    isDragOver 
                      ? 'border-blue-500 bg-blue-500/10' 
                      : 'border-white/20 hover:border-white/30'
                  }`}
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                >
                  <Upload className="w-12 h-12 text-gray-500 mx-auto mb-4" />
                  <p className="text-gray-600 dark:text-gray-300 mb-2">
                    Drag & drop your resume here
                  </p>
                  <p className="text-sm text-gray-500 mb-4">or</p>
                  
                  <label className="cursor-pointer">
                    <span className="px-4 py-2 bg-white/10 text-gray-800 dark:text-white rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300">
                      Choose PDF file
                    </span>
                    <input
                      type="file"
                      className="hidden"
                      accept=".pdf"
                      onChange={handleFileUpload}
                    />
                  </label>
                  
                  {uploadedFile && (
                    <p className="mt-4 text-sm text-green-400">
                      ✓ {uploadedFile.name} uploaded successfully
                    </p>
                  )}
                </div>
              </div>
            </GlassCard>

            {/* Quick Contact */}
            <GlassCard className="p-6">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
                Quick Contact
              </h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-600 dark:text-gray-300">
                  <Mail className="w-4 h-4 text-blue-500" />
                  <span className="text-sm">krishsharma792003@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-600 dark:text-gray-300">
                  <MapPin className="w-4 h-4 text-green-500" />
                  <span className="text-sm">India</span>
                </div>
              </div>
            </GlassCard>
          </motion.div>

          {/* Resume Preview/Details Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-2"
          >
            {/* Personal Information */}
            <GlassCard className="p-8 mb-8">
              <div className="flex items-center mb-6">
                <User className="w-6 h-6 mr-3 text-blue-500" />
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
                  Personal Information
                </h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
                    {resumeData.personalInfo.name}
                  </h3>
                  <p className="text-lg text-blue-500 mb-4">{resumeData.personalInfo.title}</p>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    Passionate computer science student with a strong foundation in web development 
                    and a keen interest in creating innovative digital solutions. Eager to apply 
                    academic knowledge in real-world projects and contribute to meaningful software development.
                  </p>
                </div>
                
                <div className="space-y-3">
                  <a 
                    href={`mailto:${resumeData.personalInfo.email}`}
                    className="flex items-center space-x-3 text-gray-600 dark:text-gray-300 hover:text-blue-500 transition-colors duration-300"
                  >
                    <Mail className="w-4 h-4" />
                    <span className="text-sm">{resumeData.personalInfo.email}</span>
                  </a>
                  <a 
                    href={resumeData.personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 text-gray-600 dark:text-gray-300 hover:text-blue-500 transition-colors duration-300"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span className="text-sm">LinkedIn Profile</span>
                  </a>
                  <a 
                    href={resumeData.personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 text-gray-600 dark:text-gray-300 hover:text-blue-500 transition-colors duration-300"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span className="text-sm">GitHub Profile</span>
                  </a>
                </div>
              </div>
            </GlassCard>

            {/* Education */}
            <GlassCard className="p-8 mb-8">
              <div className="flex items-center mb-6">
                <GraduationCap className="w-6 h-6 mr-3 text-green-500" />
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Education</h2>
              </div>
              
              {resumeData.education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="border-l-2 border-blue-500 pl-6 pb-6 last:pb-0"
                >
                  <div className="flex items-center space-x-2 mb-2">
                    <Calendar className="w-4 h-4 text-blue-500" />
                    <span className="text-sm text-blue-500 font-medium">{edu.period}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-1">
                    {edu.degree}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 font-medium mb-2">
                    {edu.institution}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    {edu.details}
                  </p>
                </motion.div>
              ))}
            </GlassCard>

            {/* Experience */}
            <GlassCard className="p-8 mb-8">
              <div className="flex items-center mb-6">
                <Briefcase className="w-6 h-6 mr-3 text-purple-500" />
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Experience</h2>
              </div>
              
              {resumeData.experience.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  className="border-l-2 border-purple-500 pl-6 pb-6 last:pb-0"
                >
                  <div className="flex items-center space-x-2 mb-2">
                    <Calendar className="w-4 h-4 text-purple-500" />
                    <span className="text-sm text-purple-500 font-medium">{exp.period}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-1">
                    {exp.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 font-medium mb-2">
                    {exp.company}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    {exp.description}
                  </p>
                </motion.div>
              ))}
            </GlassCard>

            {/* Skills Summary */}
            <GlassCard className="p-8">
              <div className="flex items-center mb-6">
                <Award className="w-6 h-6 mr-3 text-orange-500" />
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Technical Skills</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">Frontend</h3>
                  <div className="flex flex-wrap gap-2">
                    {resumeData.skills.frontend.map((skill) => (
                      <span 
                        key={skill}
                        className="px-3 py-1 text-xs font-medium bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-full border border-blue-500/20"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">Backend & Tools</h3>
                  <div className="flex flex-wrap gap-2">
                    {[...resumeData.skills.backend, ...resumeData.skills.tools].map((skill) => (
                      <span 
                        key={skill}
                        className="px-3 py-1 text-xs font-medium bg-green-500/10 text-green-600 dark:text-green-400 rounded-full border border-green-500/20"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="mt-16 text-center"
        >
          <GlassCard className="p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
              Ready to Collaborate?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              I'm always excited about new opportunities to learn, grow, and contribute to meaningful projects. 
              Whether it's an internship, freelance work, or collaboration, let's create something amazing together!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                onClick={downloadSampleResume}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Download className="w-5 h-5" />
                <span>Download Full Resume</span>
              </motion.button>
              
              <a href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center space-x-2 px-6 py-3 backdrop-blur-md bg-white/10 border border-white/20 text-gray-800 dark:text-white rounded-full font-semibold hover:bg-white/20 transition-all duration-300"
                >
                  <Mail className="w-5 h-5" />
                  <span>Get In Touch</span>
                </motion.button>
              </a>
            </div>
          </GlassCard>
        </motion.div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-40 left-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-40 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute top-2/3 left-1/4 w-64 h-64 bg-green-500/5 rounded-full blur-3xl -z-10"></div>
    </div>
  );
};

export default Resume;