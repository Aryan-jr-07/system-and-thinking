

// import React from 'react';
// import { motion } from 'framer-motion';
// import { Network as CircleNetwork } from 'lucide-react';

// const Overview: React.FC = () => {
//   return (
//     <motion.section
//       id="overview"
//       className="py-16"
//       initial={{ opacity: 0, y: 50 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       transition={{ duration: 0.6 }}
//     >
//       <div className="max-w-4xl mx-auto">
//         <motion.div
//           className="flex items-center mb-6"
//           initial={{ x: -50 }}
//           whileInView={{ x: 0 }}
//           viewport={{ once: true }}
//         >
//           <CircleNetwork className="w-8 h-8 text-neon-blue mr-3" />
//           <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-neon-blue to-neon-violet">
//             Problem Domain: Informal Economy vs. Platform Economy
//           </h2>
//         </motion.div>
//         <motion.div
//           className="bg-slate-800/50 backdrop-blur-sm rounded-lg shadow-lg shadow-neon-blue/10 p-8 transform transition-all hover:shadow-neon-blue/20"
//           whileHover={{ scale: 1.02 }}
//         >
//           <p className="text-lg leading-relaxed text-slate-300">
//             <b>Problem Statement: </b>
//             Why do small and local sellers struggle to thrive on large e-commerce platforms in India, despite the promise of digital inclusion and reach?


//           </p>
//           <motion.div
//             className="mt-6 p-4 bg-slate-900/50 rounded-md border-l-4 border-neon-blue"
//             initial={{ x: -20, opacity: 0 }}
//             whileInView={{ x: 0, opacity: 1 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.3 }}
//           >
//             <p className="text-neon-blue">
//               <b>1. Introduction to the Problem</b> <br />
//               India’s informal economy contributes to nearly 50% of the nation's GDP and employs over 80% of the workforce. Despite rapid digitalisation and the rise of large e-commerce platforms like Amazon, Flipkart, Meesho, and Snapdeal, small and local sellers find it hard to sustain and scale their businesses online.
//               This issue has deeper systemic roots — from algorithmic inequalities to logistics bottlenecks, digital illiteracy, lack of access to affordable credit, and centralised platform control. While platforms promise inclusion, the underlying structure often reinforces digital monopolies. This has created a “Digital Divide 2.0” — where even digitally present sellers are excluded from benefits.
//               It’s not a failure of participation, but a failure of design, governance, and empowerment — making this a textbook systems problem that requires structural interventions rather than surface-level fixes.
//               <br />
//               <br />
//               <br />
//               <b>2. Process Followed</b><br />
//               • Identified and refined the problem using systems mapping techniques.
//               • Researched data from NITI Aayog, ONDC whitepapers, and academic journals.
//               • Conducted informal interviews with local shop owners in our community.
//               • Mapped out a Causal Loop Diagram (CLD) to identify feedback structures.
//               • Applied Donella Meadows’ Leverage Points to pinpoint actionable areas.
//               • Used the Iceberg Model and System Archetypes to deepen our understanding.
//               • Compared India’s platform economy with case studies from Kenya (Jumia), Indonesia (Tokopedia), and China (Taobao).
//               <br />
//               <br />
//               <br />
//               <b>3. Causal Loop Diagram (CLD)</b><br />
//               Key Variables and Definitions
//               Variable
//               Definition
//               Platform Algorithm Bias
//               Preference shown by algorithms to sellers with more transactions & ratings
//               Seller Digital Literacy
//               Awareness and skills to operate on digital platforms effectively
//               Platform Participation Costs
//               Commissions, packaging, delivery, ad charges
//               Visibility of Local Sellers
//               Likelihood of small sellers appearing on searches/ads
//               Consumer Trust in Local Sellers
//               Customer willingness to buy from lesser-known sellers
//               Access to Logistics
//               Availability and affordability of delivery and returns
//               Inclusion Policy Enforcement
//               Extent to which platform/govt policies reach grassroots sellers
//               Sales and Revenue of Local Sellers
//               Income from digital sales
//               Platform Dependency
//               Reliance on a few dominant e-commerce platforms
//               Feedback Loops (described visually in attached CLD):
//               • Reinforcing Loop (R1): “Visibility → Sales → Reviews → Visibility”
//               • Balancing Loop (B1): “High Costs → Lower Margins → Dropout → Lower Participation”
//               <br />
//               <br />
//               <br />

//               <b>4. Leverage Points Analysis </b><br />
//               Leverage Point
//               Category (Meadows)
//               Why Important
//               Expected Impact
//               Algorithm Transparency & Fair Rankings
//               System Rules (#5)
//               Reduce bias and promote equity in seller visibility
//               Inclusion of diverse sellers
//               Seller Bootcamps in Tier 2/3 Cities
//               Structure (#4)
//               Build practical e-commerce skills where sellers are most vulnerable
//               Empower grassroots-level sellers
//               Zero Commission Zones for First 6 Months
//               Rules of the System (#5)
//               Reduces barriers for new sellers
//               Higher onboarding and experimentation
//               Integration with ONDC
//               System Design (#2)
//               Breaks dependency on centralised platforms
//               Decentralised digital marketplace access
//               Digital Nudges and Support Chatbots
//               Information Flow (#6)
//               Helps low-literacy sellers navigate the platform in local languages
//               Increases daily use and retention
//               Community-Led Warehousing/Delivery Models
//               Structure (#4)
//               Reduce last-mile cost through SHGs/cooperatives
//               Local logistics control, economic upliftment
//               <br />
//               <br />
//               <br />
//               <b>5. System Archetype Identified: Success to the Successful</b><br />
//               Description:
//               Large sellers dominate due to more sales, leading to more visibility, which again drives sales — a positive feedback loop that marginalises newcomers and small sellers. This causes entrenchment and platform centralisation.

//               <br />
//               <br />
//               <br />
//               <b>6. Iceberg Model: Event → Pattern → Structure → Mental Model</b><br />
//               Layer
//               Example / Insight
//               Event
//               Local artisans see zero orders despite uploading catalog to Flipkart/Meesho
//               Pattern
//               High churn rate among small sellers within 6–12 months of platform entry
//               Structure
//               High commissions, opaque search ranking, centralized warehouses, platform biases
//               Mental Model
//               “Online platforms are only for the big brands” – a self-defeating belief among sellers
//               <br />
//               <br />
//               <br />
//               <b>7. Additional Insights from Research</b>
//               • According to a 2022 report by CUTS International, over 65% of surveyed small sellers said that they never received orders despite being listed on platforms.
//               • NITI Aayog (2023) stated that digital monopolies could lead to exclusion unless public digital infrastructure like ONDC is promoted.
//               • ONDC pilot studies in Bangalore showed that local sellers could increase sales by 12–18% when platform control was decentralised.
//               • Global parallels:
//               o Jumia (Africa) adopted local vendor visibility scorecards to boost small seller confidence.
//               o Tokopedia (Indonesia) offers community-driven mentorship to train sellers in their native languages.
//               • Interviews with 5 local vendors in Patna revealed reluctance due to lack of digital understanding and fear of hidden charges.
//               <br />
//               <br />
//               <br />


//               <b>8. References </b>
//               1. NITI Aayog – Report on Digital Platforms and MSME Participation (2023)
//               2. ONDC Whitepaper (2022, 2023 Updates)
//               3. CUTS International – Survey on E-commerce Platforms and Small Sellers (2022)
//               4. Donella Meadows – Thinking in Systems
//               5. Ministry of Commerce – Data on MSMEs in India (2023)
//               6. World Economic Forum – Future of Platform Work in Developing Economies
//               7. Digital Empowerment Foundation – Case studies from rural India
//               8. The Hindu, ET Prime, The Ken – Articles on Meesho, Flipkart seller experience
//               9. Tokopedia (Indonesia) and Jumia (Africa) Reports on Inclusive E-Commerce

//             </p>
//           </motion.div>
//         </motion.div>
//       </div>
//     </motion.section>
//   );
// };

// export default Overview;











// <section id="hackathon-overview" className="section">
//   <div className="container">
//     <h2>Hackathon Overview</h2>
//     <p>Hackathon 2025 is an interdisciplinary event designed to encourage students to apply the principles of systems thinking to real-world problems. Organized by faculty and students alike, the hackathon challenges participants to identify complex systems, understand interdependencies, and devise innovative solutions. The event serves as a platform for collaborative learning, creative problem solving, and critical thinking, aligning with the educational goals of the Systems Thinking course.</p>

//     <h3>Objectives</h3>
//     <ul>
//       <li>To apply systems thinking methodologies in practical scenarios.</li>
//       <li>To promote collaboration among students from various disciplines.</li>
//       <li>To develop innovative solutions to real-world problems using a systemic lens.</li>
//     </ul>

//     <h3>Theme</h3>
//     <p>The central theme for Hackathon 2025 is "Designing Resilient Systems for Sustainable Futures." Participants are encouraged to explore sustainability challenges across sectors such as healthcare, education, environment, urban development, and technology, and apply systems thinking to propose solutions that address root causes, not just symptoms.</p>

//     <h3>Format</h3>
//     <ul>
//       <li>Duration: 24-hour hackathon event</li>
//       <li>Team Composition: 3-5 students from at least two different disciplines</li>
//       <li>Deliverables: System maps, problem definitions, proposed interventions, and a final presentation</li>
//     </ul>

//     <h3>Evaluation Criteria</h3>
//     <ul>
//       <li>Application of systems thinking tools and methods</li>
//       <li>Depth of understanding of the chosen problem</li>
//       <li>Creativity and innovation in solution design</li>
//       <li>Feasibility and impact of the proposed intervention</li>
//       <li>Clarity and effectiveness of the presentation</li>
//     </ul>
//   </div>
// </section>





















// const Diagrams: React.FC = () => {
//   return (
//     <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', padding: '20px', gap: '20px' }}>
//       <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
//         <p style={{ fontWeight: 'bold', width: '200px', textAlign: 'right' }}>Causal Loop Diagram</p>
//         <img
//         src={cldImg}
//         alt="Causal Loop Diagram"
//           style={{
//             width: '480px',
//             height: '250px',
//             objectFit: 'cover',
//             transition: 'transform 0.3s ease, box-shadow 0.3s ease',
//           }}
//           onMouseEnter={(e) => {
//             e.currentTarget.style.transform = 'scale(1.4)'; // Scale the image slightly
//             e.currentTarget.style.boxShadow = '0 8px 20px rgba(255, 0, 0, 0.5)'; // Red shadow
//           }}
//           onMouseLeave={(e) => {
//             e.currentTarget.style.transform = 'scale(1)'; // Reset the scale
//             e.currentTarget.style.boxShadow = 'none'; // Remove shadow
//           }}
//         />
//       </div>
//       <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
//         <p style={{ fontWeight: 'bold', width: '200px', textAlign: 'right' }}>Stock and Flow Diagram</p>
//         <img
//           src={stockImg}
//           alt="Stock and Flow Diagram"
//           style={{
//             width: '400px',
//             height: '250px',
//             objectFit: 'cover',
//             transition: 'transform 0.3s ease, box-shadow 0.3s ease',
//           }}
//           onMouseEnter={(e) => {
//             e.currentTarget.style.transform = 'scale(1.4)'; // Scale the image slightly
//             e.currentTarget.style.boxShadow = '0 8px 20px rgba(0, 255, 0, 0.5)'; // Green shadow
//           }}
//           onMouseLeave={(e) => {
//             e.currentTarget.style.transform = 'scale(1)'; // Reset the scale
//             e.currentTarget.style.boxShadow = 'none'; // Remove shadow
//           }}
//         />
//       </div>
//       <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
//         <p style={{ fontWeight: 'bold', width: '200px', textAlign: 'right' }}>Behavior over Time Graph</p>
//         <img
//           src={botImg}
//           alt="Behavior over Time Graph"
//           style={{
//             width: '400px',
//             height: '250px',
//             objectFit: 'cover',
//             transition: 'transform 0.3s ease, box-shadow 0.3s ease',
//           }}
//           onMouseEnter={(e) => {
//             e.currentTarget.style.transform = 'scale(1.4)'; // Scale the image slightly
//             e.currentTarget.style.boxShadow = '0 8px 20px rgba(0, 0, 255, 0.5)'; // Blue shadow
//           }}
//           onMouseLeave={(e) => {
//             e.currentTarget.style.transform = 'scale(1)'; // Reset the scale
//             e.currentTarget.style.boxShadow = 'none'; // Remove shadow
//           }}
//         />
//       </div>
//     </div>
//   );
// };

// export default Diagrams;