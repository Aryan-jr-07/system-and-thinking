import React from 'react';
import { Brain, Github, Twitter, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-800 text-slate-200 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Brain className="h-6 w-6 text-teal-400 mr-2" />
              <h3 className="text-xl font-bold">Systems Thinking Hackathon</h3>
            </div>
            <p className="text-slate-400 mb-4">
              Modeling Real-World Challenges Through Systems Thinking
            </p>
            <p className="text-slate-400">
              [Team Name] © 2025
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-slate-100">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#overview" className="text-slate-400 hover:text-teal-400 transition-colors">Overview</a>
              </li>
              <li>
                <a href="#objectives" className="text-slate-400 hover:text-teal-400 transition-colors">Objectives</a>
              </li>
              <li>
                <a href="#deliverables" className="text-slate-400 hover:text-teal-400 transition-colors">Deliverables</a>
              </li>
              <li>
                <a href="#diagrams" className="text-slate-400 hover:text-teal-400 transition-colors">Diagrams</a>
              </li>
              <li>
                <a href="#final-output" className="text-slate-400 hover:text-teal-400 transition-colors">Final Output</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-slate-100">Connect</h3>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center hover:bg-teal-600 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center hover:bg-teal-600 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center hover:bg-teal-600 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
            <div className="mt-4">
              <p className="text-slate-400">Contact us at:</p>
              <a href="mailto:info@systemshackathon.com" className="text-teal-400 hover:underline">
                info@systemshackathon.com
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-slate-700 mt-8 pt-8 text-center text-slate-500">
          <p>Designed with ❤️ for systems thinkers everywhere</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;