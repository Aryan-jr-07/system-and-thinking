import React from 'react';
import { Video, FileCode, Share2 } from 'lucide-react';

const FinalOutput: React.FC = () => {
  return (
    <section id="final-output" className="py-16">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center mb-8">
          <Video className="w-8 h-8 text-purple-600 mr-3" />
          <h2 className="text-3xl font-bold text-slate-800">Final Output</h2>
        </div>
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-8">
            <h3 className="text-2xl font-semibold text-slate-800 mb-4">Presentation & Demo</h3>
            
            <div className="aspect-w-16 aspect-h-9 bg-slate-100 rounded-md mb-6">
              <div className="flex flex-col items-center justify-center w-full h-full p-8">
                <Video className="w-16 h-16 text-slate-400 mb-4" />
                <p className="text-slate-500 text-center">
                  [Video presentation or screen recording will be embedded here]
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
                <div className="flex items-center mb-4">
                  <FileCode className="w-6 h-6 text-purple-600 mr-2" />
                  <h4 className="text-lg font-semibold text-slate-800">Data Integration</h4>
                </div>
                <p className="text-slate-600">
                  [Description of any API or data integration included in the project]
                </p>
              </div>
              
              <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
                <div className="flex items-center mb-4">
                  <Share2 className="w-6 h-6 text-purple-600 mr-2" />
                  <h4 className="text-lg font-semibold text-slate-800">Key Insights</h4>
                </div>
                <p className="text-slate-600">
                  [Summary of key insights and recommendations from the systems analysis]
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-purple-500 to-indigo-600 p-6">
            <blockquote className="text-white italic">
              "Systems thinking is a way of helping people understand complex, interdependent systems 
              and identify leverage points for effective change."
            </blockquote>
            <p className="text-white text-right mt-2">— Donella Meadows</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalOutput;