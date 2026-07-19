import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-6 relative">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
            Professional <span className="text-gradient">Experience</span>
          </h2>
        </div>

        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-gray-800" />

          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative pl-8 md:pl-24"
          >
            {/* Timeline Dot */}
            <div className="absolute left-[-5px] md:left-[27px] top-2 w-3 h-3 bg-brand-blue rounded-full shadow-[0_0_10px_#00f0ff]" />
            
            <div className="glass-panel p-8">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-4">
                <div>
                  <h3 className="text-2xl font-bold text-white">AI Engineer</h3>
                  <p className="text-brand-green text-lg font-medium">Samim Engineering Group</p>
                </div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-800/50 border border-gray-700 text-sm text-gray-300">
                  <Briefcase size={16} />
                  Oct 2025 – Present
                </div>
              </div>

              <ul className="space-y-4 text-gray-400 mt-6">
                <li className="flex items-start gap-3">
                  <div className="mt-2 w-1.5 h-1.5 bg-brand-blue rounded-full shrink-0" />
                  <p><strong className="text-gray-200 font-semibold">Design and Development:</strong> Building and optimizing Large Language Models (LLMs) and conversational AI systems.</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-2 w-1.5 h-1.5 bg-brand-blue rounded-full shrink-0" />
                  <p><strong className="text-gray-200 font-semibold">Chatbot Implementation:</strong> Developing intelligent chatbots with a focus on natural language understanding and seamless user interaction.</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-2 w-1.5 h-1.5 bg-brand-blue rounded-full shrink-0" />
                  <p><strong className="text-gray-200 font-semibold">Solution Architecting:</strong> Creating end-to-end AI pipelines for real-world applications and automated workflows.</p>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
