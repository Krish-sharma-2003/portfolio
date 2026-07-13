import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Download, Code, Palette, Brain } from 'lucide-react';
import TypewriterText from '../components/TypewriterText';
import BallpitBackground from '../components/BallpitBackground';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-20 md:py-0 relative">
      <BallpitBackground />

      <div className="max-w-6xl w-full mx-auto relative z-10 flex flex-col md:flex-row items-center justify-center gap-12">
        {/* Profile — LEFT */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: -30 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-shrink-0"
        >
          <div className="relative w-48 h-48">
            {/* Glow */}
            <div className="absolute -inset-4 rounded-3xl bg-blue-500/20 blur-2xl"></div>
            <img
              src="/krish_bhai.jpg"
              alt="Krish Sharma"
              className="relative w-full h-full rounded-2xl object-cover border-2 border-blue-500/40 shadow-2xl shadow-blue-500/30"
            />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-blue-500/10 to-transparent"></div>
          </div>
        </motion.div>

        {/* Text content — RIGHT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="flex-1 max-w-xl text-center md:text-left"
        >
          {/* Name */}
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            <TypewriterText text="Krish Sharma" delay={120} />
          </h1>

          {/* Tagline */}
          <p className="text-lg md:text-xl text-blue-200/80 mb-10">
            I build practical software and real-world systems.
          </p>

          {/* Skill Icons */}
          <div className="flex justify-center md:justify-start gap-6 mb-10">
            {[
              { Icon: Code, label: 'Development' },
              { Icon: Palette, label: 'Design' },
              { Icon: Brain, label: 'Problem Solving' },
            ].map(({ Icon, label }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
                className="p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg hover:border-blue-500/50 transition-all cursor-pointer group"
                title={label}
              >
                <Icon className="w-6 h-6 text-blue-400 group-hover:text-blue-300 transition-colors" />
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
          >
            <Link to="/resume">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium transition shadow-lg shadow-blue-500/30"
              >
                <Download className="w-5 h-5" />
                View Resume
              </motion.button>
            </Link>

            <Link to="/projects">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border border-blue-500/50 hover:border-blue-400 text-blue-200 hover:text-blue-100 rounded-full font-medium transition bg-blue-500/5 hover:bg-blue-500/10"
              >
                Explore Work
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
