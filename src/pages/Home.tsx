import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Download, ArrowDown, Code, Palette, Brain } from 'lucide-react';
import TypewriterText from '../components/TypewriterText';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center px-4 py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-4xl mx-auto"
      >
        {/* Profile */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <img
            src="https://avatars.githubusercontent.com/u/192499147?v=4"
            alt="Krish Sharma"
            className="w-40 h-40 mx-auto rounded-xl object-cover border border-zinc-800"
          />
        </motion.div>

        {/* Name */}
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
          <TypewriterText text="Krish Sharma" delay={120} />
        </h1>

        {/* Tagline */}
        <p className="text-lg md:text-xl text-zinc-400 mb-12">
          I build practical software and real-world systems.
        </p>

        {/* Skill Icons */}
        <div className="flex justify-center gap-6 mb-12">
          {[Code, Palette, Brain].map((Icon, i) => (
            <div
              key={i}
              className="p-4 bg-zinc-900 border border-zinc-800 rounded-lg"
            >
              <Icon className="w-6 h-6 text-white" />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/resume">
            <button className="flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium transition">
              <Download className="w-5 h-5" />
              View Resume
            </button>
          </Link>

          <Link to="/projects">
            <button className="px-8 py-4 border border-zinc-700 hover:border-white text-white rounded-full font-medium transition">
              Explore Work
            </button>
          </Link>
        </div>

        {/* Scroll */}
        <div className="mt-16 text-zinc-500 flex flex-col items-center">
          <span className="text-sm">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ArrowDown className="w-5 h-5" />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;
