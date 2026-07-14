import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Code2 } from 'lucide-react';
import GlassCard from '../components/GlassCard';
import { projectsData } from '../data/projectsData';
import BallpitBackground from '../components/BallpitBackground';

const Projects: React.FC = () => {
  return (
    <div className="min-h-screen px-4 py-20 relative">
      <BallpitBackground />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            My Projects
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-blue-200/70 max-w-3xl mx-auto leading-relaxed">
            Here's a collection of projects I've been working on. Each one represents a step in my
            journey as a developer, showcasing different skills and technologies.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <GlassCard className="group overflow-hidden h-full flex flex-col" hover>
                {/* Project Image */}
                <div className="relative overflow-hidden h-48">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Status Badge */}
                  <div
                    className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold ${
                      project.status === 'Live'
                        ? 'bg-green-500/20 text-green-300 border border-green-500/30'
                        : project.status === 'Complete'
                          ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                          : project.status === 'In Progress'
                            ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30'
                            : 'bg-orange-500/20 text-orange-300 border border-orange-500/30'
                    }`}
                  >
                    {project.status}
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                    {project.title}
                  </h3>

                  <p className="text-blue-200/70 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Details if available */}
                  {project.details && project.details.length > 0 && (
                    <ul className="text-sm text-blue-200/60 mb-4 space-y-1">
                      {project.details.slice(0, 2).map((detail, idx) => (
                        <li key={idx} className="flex gap-2">
                          <span className="text-blue-400">•</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-medium bg-blue-500/15 text-blue-300 rounded-full border border-blue-500/25 hover:border-blue-500/50 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 mt-auto">
                    {project.status === 'Live' && project.liveLink ? (
                      <>
                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-300 font-medium"
                        >
                          <ExternalLink className="w-4 h-4" />
                          <span>Live Demo</span>
                        </a>
                        {project.codeLink && (
                          <a
                            href="https://github.com/Krish-sharma-2003/portfolio"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 px-4 py-2 backdrop-blur-md bg-white/10 border border-white/20 text-white rounded-lg hover:bg-white/20 transition-all duration-300"
                          >
                            <Github className="w-4 h-4" />
                          </a>
                        )}
                      </>
                    ) : project.codeLink ? (
                      <a
                        href={project.codeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-blue-600/30 hover:bg-blue-600/50 text-blue-300 rounded-lg transition-colors duration-300 font-medium border border-blue-500/30"
                      >
                        <Code2 className="w-4 h-4" />
                        <span>In Progress</span>
                      </a>
                    ) : (
                      <div className="flex-1 flex items-center justify-center px-4 py-2 bg-blue-500/10 text-white-400/50 rounded-lg cursor-not-allowed border border-blue-500/20">
                        Click to View
                      </div>
                    )}
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <GlassCard className="p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              More Exciting Projects Ahead 🚀
            </h3>
            <p className="text-blue-200/70 mb-6 leading-relaxed">
              I'm constantly working on new projects and learning new technologies. Currently
              exploring advanced AI integration, system design, and building production-grade
              applications.
            </p>
            <motion.a
              href="mailto:krish@example.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-full font-semibold shadow-lg hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300"
            >
              Let's Collaborate
            </motion.a>
          </GlassCard>
        </motion.div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-40 left-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-40 right-10 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl -z-10"></div>
    </div>
  );
};

export default Projects;
