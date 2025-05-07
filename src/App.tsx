import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Header from './components/Header';
import Overview from './components/Overview';
// import Objectives from './components/Objectives';
// import Deliverables from './components/Deliverables';
import Diagrams from './components/Diagrams';
// import FinalOutput from './components/FinalOutput';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white">
      <Header />
      <motion.main 
        className="container mx-auto px-4 py-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Overview />
        {/* <Objectives /> */}
        {/* <Deliverables /> */}
        <Diagrams />
        {/* <FinalOutput /> */}
      </motion.main>
      <Footer />
    </div>
  );
}

export default App;