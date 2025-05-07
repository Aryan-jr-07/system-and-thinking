import React from 'react';
import { motion } from 'framer-motion';
import { Network as CircleNetwork } from 'lucide-react';

const Overview: React.FC = () => {
  return (
    <motion.section 
      id="overview" 
      className="py-16"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-4xl mx-auto">
        <motion.div 
          className="flex items-center mb-6"
          initial={{ x: -50 }}
          whileInView={{ x: 0 }}
          viewport={{ once: true }}
        >
          <CircleNetwork className="w-8 h-8 text-neon-blue mr-3" />
          <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-neon-blue to-neon-violet">
            Hackathon Overview
          </h2>
        </motion.div>
        <motion.div 
          className="bg-slate-800/50 backdrop-blur-sm rounded-lg shadow-lg shadow-neon-blue/10 p-8 transform transition-all hover:shadow-neon-blue/20"
          whileHover={{ scale: 1.02 }}
        >
          <p className="text-lg leading-relaxed text-slate-300">
            The Systems Thinking Hackathon challenges participants to address complex real-world problems 
            through the lens of systems thinking. Teams will collaborate to identify system components, 
            model relationships, analyze feedback loops, and propose innovative interventions that 
            leverage system dynamics.
          </p>
          <motion.div 
            className="mt-6 p-4 bg-slate-900/50 rounded-md border-l-4 border-neon-blue"
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <p className="text-neon-blue">
              <strong>Systems thinking</strong> is an approach to understanding how things work in relation 
              to each other within a whole. It's about seeing patterns of behavior over time, rather than 
              focusing on isolated events.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Overview;