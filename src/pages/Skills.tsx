import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code, 
  Database, 
  Globe, 
  Palette, 
  Shield, 
  GitBranch,
  Server,
  Layers,
  Terminal,
  Smartphone,
  Lock,
  Brush
} from 'lucide-react';
import GlassCard from '../components/GlassCard';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "React", icon: <Code className="w-8 h-8" />, level: 85, color: "text-blue-500" },
        { name: "JavaScript", icon: <Terminal className="w-8 h-8" />, level: 80, color: "text-yellow-500" },
        { name: "HTML", icon: <Globe className="w-8 h-8" />, level: 90, color: "text-orange-500" },
        { name: "CSS", icon: <Brush className="w-8 h-8" />, level: 85, color: "text-pink-500" }
      ]
    },
    {
      title: "Backend Development", 
      skills: [
        { name: "Node.js", icon: <Server className="w-8 h-8" />, level: 75, color: "text-green-500" },
        { name: "Express", icon: <Layers className="w-8 h-8" />, level: 70, color: "text-gray-500" },
        { name: "REST APIs", icon: <Globe className="w-8 h-8" />, level: 75, color: "text-indigo-500" },
        { name: "MongoDB", icon: <Database className="w-8 h-8" />, level: 65, color: "text-green-600" }
      ]
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "Git/GitHub", icon: <GitBranch className="w-8 h-8" />, level: 80, color: "text-purple-500" },
        { name: "SQL", icon: <Database className="w-8 h-8" />, level: 70, color: "text-blue-600" },
        { name: "UI/UX Design", icon: <Palette className="w-8 h-8" />, level: 75, color: "text-pink-600" },
        { name: "Cybersecurity", icon: <Shield className="w-8 h-8" />, level: 60, color: "text-red-500" }
      ]
    }
  ];

  const certifications = [
    { name: "JavaScript Fundamentals", issuer: "FreeCodeCamp", year: "2024" },
    { name: "React Development", issuer: "Coursera", year: "2024" },
    { name: "Web Security Basics", issuer: "Cybrary", year: "2023" }
  ];

  return (
    <div className="min-h-screen px-4 py-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 dark:text-white mb-6">
            My Skills
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A growing collection of technologies and skills I've developed through my studies, 
            projects, and continuous learning journey.
          </p>
        </motion.div>

        {/* Skills Categories */}
        <div className="space-y-16 mb-20">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
            >
              <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8 text-center">
                {category.title}
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: categoryIndex * 0.2 + skillIndex * 0.1 }}
                  >
                    <GlassCard className="p-6 text-center h-full group" hover>
                      <div className={`${skill.color} mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300`}>
                        {skill.icon}
                      </div>
                      <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
                        {skill.name}
                      </h3>
                      
                      {/* Skill Level Bar */}
                      <div className="mb-2">
                        <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400 mb-1">
                          <span>Proficiency</span>
                          <span>{skill.level}%</span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.5 }}
                            className={`h-2 rounded-full bg-gradient-to-r ${
                              skill.color.includes('blue') ? 'from-blue-500 to-blue-600' :
                              skill.color.includes('green') ? 'from-green-500 to-green-600' :
                              skill.color.includes('yellow') ? 'from-yellow-500 to-yellow-600' :
                              skill.color.includes('purple') ? 'from-purple-500 to-purple-600' :
                              skill.color.includes('pink') ? 'from-pink-500 to-pink-600' :
                              skill.color.includes('red') ? 'from-red-500 to-red-600' :
                              'from-gray-500 to-gray-600'
                            }`}
                          />
                        </div>
                      </div>
                    </GlassCard>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Learning Journey */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">
            Certifications & Learning
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
              >
                <GlassCard className="p-6" hover>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Code className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                      {cert.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-1">
                      {cert.issuer}
                    </p>
                    <p className="text-blue-500 text-sm font-medium">
                      {cert.year}
                    </p>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Currently Learning */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="text-center"
        >
          <GlassCard className="p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
              Currently Learning
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              Always expanding my knowledge! Currently diving deeper into advanced React patterns, 
              exploring cloud technologies, and strengthening my cybersecurity fundamentals.
            </p>
            <div className="flex justify-center space-x-4">
              <span className="px-4 py-2 bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-full text-sm border border-blue-500/20">
                TypeScript
              </span>
              <span className="px-4 py-2 bg-green-500/10 text-green-600 dark:text-green-400 rounded-full text-sm border border-green-500/20">
                Docker
              </span>
              <span className="px-4 py-2 bg-purple-500/10 text-purple-600 dark:text-purple-400 rounded-full text-sm border border-purple-500/20">
                AWS
              </span>
            </div>
          </GlassCard>
        </motion.div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-32 left-5 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-32 right-5 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute top-2/3 left-1/3 w-64 h-64 bg-green-500/5 rounded-full blur-3xl -z-10"></div>
    </div>
  );
};

export default Skills;