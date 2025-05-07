import React from 'react';
import { motion } from 'framer-motion';
import { Target } from 'lucide-react';

const Objectives: React.FC = () => {
  const objectives = [
    "Develop systems thinking skills by identifying elements, interconnections, and functions of complex systems",
    "Create Causal Loop Diagrams (CLDs) to visualize system interconnections and feedback loops",
    "Apply systems archetypes to recognize common patterns of behavior in complex systems",
    "Identify leverage points for effective intervention within systems",
    "Analyze system behavior using Element, Purpose, Structure (EPS) framework",
    "Communicate insights effectively through visual diagrams and structured analysis",
    "Develop practical solutions that address root causes rather than symptoms"
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0 }
  };

  return (
    <motion.section 
      id="objectives" 
      className="py-16 bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <div className="max-w-4xl mx-auto">
        <motion.div 
          className="flex items-center mb-6"
          initial={{ x: -50 }}
          whileInView={{ x: 0 }}
          viewport={{ once: true }}
        >
          <Target className="w-8 h-8 text-neon-yellow mr-3" />
          <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-neon-yellow to-neon-blue">
            Hackathon Objectives
          </h2>
        </motion.div>
        <motion.div 
          className="bg-slate-800/50 backdrop-blur-sm rounded-lg shadow-lg shadow-neon-yellow/10 p-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <ul className="space-y-4">
            {objectives.map((objective, index) => (
              <motion.li 
                key={index} 
                className="flex items-start"
                variants={item}
              >
                <span className="flex-shrink-0 w-6 h-6 bg-neon-yellow text-slate-900 rounded-full flex items-center justify-center mr-3 mt-0.5 font-bold">
                  {index + 1}
                </span>
                <p className="text-slate-300">{objective}</p>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Objectives;