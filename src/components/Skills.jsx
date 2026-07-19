import { motion } from 'framer-motion';
import { Brain, Layout, Server, Database } from 'lucide-react';

const skillCategories = [
  {
    title: "AI & NLP",
    icon: <Brain className="text-brand-blue" size={28} />,
    color: "bg-brand-blue",
    skills: ["Generative AI", "LLMs (Llama 3)", "BERT", "Conversational AI", "Vector Search", "Persian NLP"]
  },
  {
    title: "Machine Learning & CV",
    icon: <Database className="text-brand-green" size={28} />,
    color: "bg-brand-green",
    skills: ["PyTorch", "TensorFlow", "Keras", "Scikit-Learn", "Pandas", "Computer Vision (CNN)", "Predictive Modeling"]
  },
  {
    title: "Backend & Infrastructure",
    icon: <Server className="text-purple-400" size={28} />,
    color: "bg-purple-500",
    skills: ["Python", "FastAPI", "Node.js", "Express", "REST APIs", "MySQL", "Sequelize", "Redis", "Cloudflare Workers"]
  },
  {
    title: "Frontend & UI/UX",
    icon: <Layout className="text-orange-400" size={28} />,
    color: "bg-orange-500",
    skills: ["React.js", "Vite", "Tailwind CSS", "JavaScript", "HTML5/CSS3", "Modern UI Design"]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-6 relative">
      <div className="absolute left-0 top-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
            Technical <span className="text-gradient">Arsenal</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            A comprehensive overview of the technologies, frameworks, and tools I use to build robust and intelligent solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-panel p-8"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={`p-3 rounded-xl bg-opacity-10 ${category.color.replace('bg-', 'bg-')}/20 border border-gray-800`}>
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold text-white">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, i) => (
                  <span 
                    key={i} 
                    className="px-4 py-2 bg-bg-darker border border-gray-700/50 rounded-lg text-sm font-medium text-gray-300 hover:border-brand-blue hover:text-white transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
