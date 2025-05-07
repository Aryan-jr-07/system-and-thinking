// import React, { useEffect } from 'react';
// import { motion, useAnimation } from 'framer-motion';
// import { useInView } from 'framer-motion';
// import { ClipboardList, Lightbulb, AreaChart, Gauge, FileBarChart, Video, Award } from 'lucide-react';

// const DeliverableItem: React.FC<{
//   title: string;
//   icon: React.ReactNode;
//   description: string;
//   index: number;
// }> = ({ title, icon, description, index }) => {
//   const controls = useAnimation();
//   const ref = React.useRef(null);
//   const isInView = useInView(ref, { once: false, amount: 0.5 });

//   useEffect(() => {
//     if (isInView) {
//       controls.start({
//         opacity: 1,
//         y: 0,
//         transition: {
//           type: "spring",
//           duration: 0.8,
//           delay: index * 0.2
//         }
//       });
//     } else {
//       controls.start({
//         opacity: 0,
//         y: 50
//       });
//     }
//   }, [isInView, controls, index]);

//   return (
//     <motion.div 
//       ref={ref}
//       animate={controls}
//       initial={{ opacity: 0, y: 50 }}
//       className="bg-slate-800/50 backdrop-blur-sm rounded-lg shadow-lg shadow-neon-blue/10 p-6 transition-all duration-300 hover:shadow-neon-blue/20"
//       whileHover={{ 
//         scale: 1.02,
//         transition: { type: "spring", stiffness: 300 }
//       }}
//     >
//       <motion.div 
//         className="flex items-center mb-4"
//         initial={{ x: -20 }}
//         animate={{ x: 0 }}
//         transition={{ delay: index * 0.1 }}
//       >
//         <div className="w-10 h-10 rounded-full bg-slate-700/50 flex items-center justify-center mr-3">
//           <motion.div
//             whileHover={{ rotate: 360 }}
//             transition={{ duration: 0.5 }}
//           >
//             {icon}
//           </motion.div>
//         </div>
//         <h4 className="text-xl font-semibold text-slate-200">{title}</h4>
//       </motion.div>
//       <p className="text-slate-300">{description}</p>
//     </motion.div>
//   );
// };

// const Deliverables: React.FC = () => {
//   const controls = useAnimation();
//   const ref = React.useRef(null);
//   const isInView = useInView(ref, { once: false, amount: 0.2 });

//   useEffect(() => {
//     if (isInView) {
//       controls.start({
//         opacity: 1,
//         y: 0,
//         transition: { duration: 0.5 }
//       });
//     } else {
//       controls.start({
//         opacity: 0,
//         y: 50
//       });
//     }
//   }, [isInView, controls]);

//   const deliverables = [
//     {
//       title: "Causal Loop Diagram (CLD)",
//       icon: <ClipboardList className="w-5 h-5 text-neon-blue" />,
//       description: "Create a detailed CLD that visualizes the key variables and their relationships within your chosen system, including reinforcing and balancing feedback loops."
//     },
//     {
//       title: "Insights & System Analysis",
//       icon: <Lightbulb className="w-5 h-5 text-neon-blue" />,
//       description: "Document key insights derived from your system analysis, including emergent behaviors, delays, and non-linear relationships that shape system dynamics."
//     },
//     {
//       title: "EPS Analysis",
//       icon: <AreaChart className="w-5 h-5 text-neon-blue" />,
//       description: "Provide a comprehensive Elements, Purpose, Structure (EPS) analysis of your system, identifying core components and their functional relationships."
//     },
//     {
//       title: "Leverage Points",
//       icon: <Gauge className="w-5 h-5 text-neon-blue" />,
//       description: "Identify and analyze potential leverage points within the system where interventions could produce significant, positive systemic change."
//     },
//     {
//       title: "System Archetypes",
//       icon: <FileBarChart className="w-5 h-5 text-neon-blue" />,
//       description: "Identify any system archetypes present in your analysis, such as 'Limits to Growth,' 'Shifting the Burden,' or 'Tragedy of the Commons.'"
//     },
//     {
//       title: "Final Output",
//       icon: <Video className="w-5 h-5 text-neon-blue" />,
//       description: "Prepare a comprehensive presentation that communicates your system analysis, insights, and proposed interventions in a clear, compelling format."
//     },
//     {
//       title: "Bonus: SFD & BoT",
//       icon: <Award className="w-5 h-5 text-neon-blue" />,
//       description: "For additional credit, develop a Stock and Flow Diagram (SFD) and Behavior over Time (BoT) graphs to quantitatively model system dynamics."
//     }
//   ];

//   return (
//     <motion.section 
//       ref={ref}
//       id="deliverables" 
//       className="py-16"
//       animate={controls}
//       initial={{ opacity: 0, y: 50 }}
//     >
//       <div className="max-w-5xl mx-auto">
//         <motion.div 
//           className="flex items-center mb-8"
//           initial={{ x: -50 }}
//           whileInView={{ x: 0 }}
//           viewport={{ once: false }}
//         >
//           <ClipboardList className="w-8 h-8 text-neon-blue mr-3" />
//           <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-neon-blue to-neon-violet">
//             Deliverables
//           </h2>
//         </motion.div>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {deliverables.map((item, index) => (
//             <DeliverableItem 
//               key={index}
//               title={item.title}
//               icon={item.icon}
//               description={item.description}
//               index={index}
//             />
//           ))}
//         </div>
//       </div>
//     </motion.section>
//   );
// };

// export default Deliverables;