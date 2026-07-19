import { motion } from 'framer-motion';
import { GraduationCap, Code2, BrainCircuit, Database } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <BrainCircuit className="text-purple-400" size={24} />,
      title: 'Generative AI & LLMs',
      desc: 'Designing Large Language Model (LLM) solutions, intelligent chatbots, intent-based routing, and vector search.'
    },
    {
      icon: <Code2 className="text-brand-blue" size={24} />,
      title: 'Computer Vision & ML',
      desc: 'Developing robust AI systems for autonomous driving and data-driven predictive models for strategic decision-making.'
    },
    {
      icon: <Database className="text-brand-green" size={24} />,
      title: 'Full-Stack Integration',
      desc: 'Building end-to-end applications by integrating ML components into scalable Node.js backends and modern React interfaces.'
    }
  ];

  return (
    <section id="about" className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16 items-start">
        
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex-1"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="space-y-6 text-gray-400 text-lg leading-relaxed text-justify mb-8">
            <p>
              I am an AI Engineer driven by the challenge of transforming innovative research into powerful, end-to-end intelligent systems. My expertise lies at the intersection of Natural Language Processing (NLP), Computer Vision, and Predictive Modeling, focused on delivering measurable impact for real-world problems.
            </p>
            <p>
              Beyond AI, I bring a solid background in full-stack development. I have built end-to-end applications by integrating ML components into both backend logic and frontend delivery. I thrive at the intersection of innovation and practicality, taking ownership of complex AI features to ensure they are scalable, reliable, and production-ready. I am passionate about bridging the gap between cutting-edge research and impactful product solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-4">
            {highlights.map((item, index) => (
              <div key={index} className="glass-panel p-5 rounded-2xl flex items-start gap-4 hover:border-gray-600 transition-colors">
                <div className="p-3 rounded-xl bg-bg-dark shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1 text-lg">{item.title}</h4>
                  <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Education Content */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:w-[400px] shrink-0"
        >
          <div className="glass-panel p-8 relative overflow-hidden h-full rounded-2xl">
            <div className="absolute -right-10 -top-10 text-brand-blue/10 pointer-events-none">
              <GraduationCap size={150} />
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3 relative z-10">
              <GraduationCap className="text-brand-green" /> Education
            </h3>
            
            <div className="relative z-10">
              <div className="mb-2">
                <span className="text-sm text-brand-blue font-semibold tracking-wider">2021 — 2025</span>
              </div>
              <h4 className="text-xl font-bold text-white mb-2">B.Sc. in Computer Engineering</h4>
              <p className="text-gray-400 mb-4">Islamic Azad University, Science and Research Branch</p>
              
              <ul className="space-y-3 text-sm text-gray-400">
                <li className="flex items-start gap-3">
                  <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-brand-green shrink-0" />
                  <span className="leading-relaxed">Key Coursework: Computer Vision, Machine Learning, Web Development</span>
                </li>
              </ul>
            </div>
            
            <div className="mt-8 relative z-10 border-t border-gray-800 pt-6">
              <h4 className="text-lg font-bold text-white mb-1">High School Diploma in Mathematics</h4>
              <p className="text-gray-400">Salam High School</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
