import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Brain } from 'lucide-react';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? 'bg-slate-900/90 backdrop-blur-sm shadow-lg shadow-neon-blue/10' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between">
        <motion.div 
          className="flex items-center mb-3 md:mb-0"
          whileHover={{ scale: 1.05 }}
        >
          <Brain className="h-8 w-8 text-neon-blue mr-3" />
          <div>
            <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-neon-blue to-neon-violet">
              University Hackathon 2025
            </h1>
            <p className="text-sm text-slate-400">Innovation Through Technology</p>
          </div>
        </motion.div>
        <nav>
          <ul className="flex space-x-6">
            {['Overview', 'Objectives', 'Deliverables', 'Diagrams', 'Final Output'].map((item) => (
              <motion.li key={item} whileHover={{ scale: 1.1 }}>
                <a 
                  href={`#${item.toLowerCase()}`} 
                  className="text-slate-300 hover:text-neon-blue transition-colors"
                >
                  {item}
                </a>
              </motion.li>
            ))}
          </ul>
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;