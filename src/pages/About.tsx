import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Coffee, Heart, Target, Lightbulb, Users, Code, Palette, Brain } from 'lucide-react';
import GlassCard from '../components/GlassCard';

const About: React.FC = () => {
  const interests = [
    { icon: <Code className="w-6 h-6" />, title: "Web Development", description: "Building interactive and responsive web applications" },
    { icon: <Palette className="w-6 h-6" />, title: "UI/UX Design", description: "Creating intuitive and beautiful user experiences" },
    { icon: <Brain className="w-6 h-6" />, title: "Problem Solving", description: "Breaking down complex challenges into manageable solutions" },
    { icon: <Users className="w-6 h-6" />, title: "Collaboration", description: "Working with teams to build amazing products" }
  ];

  const values = [
    { icon: <Lightbulb className="w-6 h-6" />, title: "Continuous Learning", description: "Always exploring new technologies and methodologies" },
    { icon: <Heart className="w-6 h-6" />, title: "Passion-Driven", description: "Genuinely excited about creating digital solutions" },
    { icon: <Target className="w-6 h-6" />, title: "Goal-Oriented", description: "Focused on delivering quality results and meeting objectives" }
  ];

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
            About Me
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </motion.div>

        {/* Main Story */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-20"
        >
          <GlassCard className="p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
                  Hey there! 👋
                </h2>
                <div className="space-y-4 text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  <p>
                    I'm Krish, a passionate computer science student who fell in love with coding during my first "Hello World" program. 
                    What started as curiosity has evolved into a genuine passion for creating digital solutions that make a difference.
                  </p>
                  <p>
                    Currently pursuing my degree while diving deep into web development, I spend my days (and quite a few nights) 
                    learning new technologies, building projects, and solving coding challenges. I believe great software comes from 
                    understanding both the technical details and the human experience.
                  </p>
                  <p>
                    When I'm not coding, you'll find me sketching UI designs, reading tech blogs, or collaborating with fellow 
                    developers on exciting projects. I'm always eager to learn, grow, and contribute to meaningful work.
                  </p>
                </div>
              </div>
              
              <div className="flex justify-center">
                <GlassCard className="p-6" hover>
                  <img 
                    src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=600" 
                    alt="Student coding workspace"
                    className="w-full h-64 object-cover rounded-lg"
                  />
                </GlassCard>
              </div>
            </div>
          </GlassCard>
        </motion.div>

        {/* What I Love */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">
            What I Love Doing
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {interests.map((interest, index) => (
              <motion.div
                key={interest.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              >
                <GlassCard className="p-6 text-center h-full" hover>
                  <div className="text-blue-500 mb-4 flex justify-center">
                    {interest.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
                    {interest.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    {interest.description}
                  </p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* My Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">
            My Values
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.2 }}
              >
                <GlassCard className="p-8 text-center h-full" hover>
                  <div className="text-purple-500 mb-6 flex justify-center">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {value.description}
                  </p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Fun Fact */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="mt-20 text-center"
        >
          <GlassCard className="p-8 max-w-2xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              <Coffee className="w-8 h-8 text-amber-500 mr-3" />
              <BookOpen className="w-8 h-8 text-green-500" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
              Fun Fact
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              I debug my code best with a hot cup of coffee at 2 AM, and I've probably googled 
              "how to center a div" more times than I'd like to admit! 😄
            </p>
          </GlassCard>
        </motion.div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-20 left-5 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-20 right-5 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl -z-10"></div>
    </div>
  );
};

export default About;