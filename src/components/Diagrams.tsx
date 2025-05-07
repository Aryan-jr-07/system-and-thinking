import React, { useState } from 'react';
import { LineChart, ArrowUpDown, BarChart4, Sparkles } from 'lucide-react';

interface DiagramCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const DiagramCard: React.FC<DiagramCardProps> = ({ title, icon, description }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="p-6">
        <div className="flex items-center mb-4">
          <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
            {icon}
          </div>
          <h4 className="text-xl font-semibold text-slate-800">{title}</h4>
        </div>
        <div className="aspect-w-16 aspect-h-9 bg-slate-100 rounded-md mb-4 overflow-hidden">
          <div className="flex items-center justify-center w-full h-full">
            <div className={`text-center transition-all duration-300 ${isHovered ? 'scale-105' : 'scale-100'}`}>
              <p className="text-slate-400">[Insert diagram image here]</p>
            </div>
          </div>
        </div>
        <p className="text-slate-600 italic text-sm">[Describe the diagram here]</p>
      </div>
      <div className={`bg-blue-50 p-4 border-t border-blue-100 transition-all duration-300 ${
        isHovered ? 'h-auto opacity-100' : 'h-0 opacity-0 overflow-hidden'
      }`}>
        <p className="text-blue-800 text-sm">{description}</p>
      </div>
    </div>
  );
};

const Diagrams: React.FC = () => {
  const diagrams = [
    {
      title: "Causal Loop Diagram",
      icon: <LineChart className="w-5 h-5 text-blue-600" />,
      description: "Shows the causal relationships between variables in the system, including reinforcing and balancing feedback loops."
    },
    {
      title: "Stock and Flow Diagram",
      icon: <ArrowUpDown className="w-5 h-5 text-blue-600" />,
      description: "Represents the system structure with stocks (accumulations), flows (rates of change), and the relationships between them."
    },
    {
      title: "Behavior over Time Graph",
      icon: <BarChart4 className="w-5 h-5 text-blue-600" />,
      description: "Illustrates how key variables in the system change over time, showing patterns, trends, and potential future states."
    },
    {
      title: "System Archetypes Visualization",
      icon: <Sparkles className="w-5 h-5 text-blue-600" />,
      description: "Identifies common patterns of system behavior that appear across different contexts and domains."
    }
  ];

  return (
    <section id="diagrams" className="py-16 bg-gradient-to-br from-slate-50 to-blue-50 rounded-xl">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center mb-8">
          <LineChart className="w-8 h-8 text-blue-600 mr-3" />
          <h2 className="text-3xl font-bold text-slate-800">Diagrams</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {diagrams.map((diagram, index) => (
            <DiagramCard 
              key={index}
              title={diagram.title}
              icon={diagram.icon}
              description={diagram.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Diagrams;