import { motion } from 'framer-motion';
import { ExternalLink, Code, Server, Brain } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const projects = [
  {
    title: "AI Intent Detection Chatbot",
    category: "Full-Stack AI",
    icon: <Brain className="text-brand-blue" size={24} />,
    description: "Intelligent chatbot with natural language understanding, built for seamless user interaction and automated workflows. Features NLP preprocessing and text generation.",
    tech: ["FastAPI", "Python", "React", "Sentence-Transformers", "PyTorch", "SQLAlchemy", "Redis"],
    color: "from-brand-blue to-purple-600"
  },
  {
    title: "KalaStore (Online Shop)",
    category: "Full-Stack Web",
    icon: <Code className="text-brand-green" size={24} />,
    description: "Modern e-commerce platform with a fully functional frontend and a robust backend. Features JWT authentication, secure payment workflows, and a responsive UI.",
    tech: ["React", "Vite", "Tailwind CSS", "Node.js", "Express", "Sequelize", "MySQL"],
    color: "from-brand-green to-emerald-600"
  },
  {
    title: "Movie Stream & News Portal",
    category: "Frontend & Backend",
    icon: <Server className="text-purple-400" size={24} />,
    description: "Content platforms with dynamic data fetching, user authentication, and responsive streaming interfaces. Built with modern React tools and robust backend APIs.",
    tech: ["React", "Framer Motion", "Node.js", "Express", "MySQL", "JWT"],
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "Persian PWA Planner",
    category: "Full-Stack PWA",
    icon: <Code className="text-orange-400" size={24} />,
    description: "A comprehensive Persian planner application built as a Progressive Web App (PWA) with dual frontend and backend architecture.",
    tech: ["React", "Node.js", "PWA", "Tailwind CSS"],
    color: "from-orange-400 to-red-500"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            A selection of my recent work across Artificial Intelligence, robust backends, and modern frontends.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-panel p-8 group relative overflow-hidden flex flex-col h-full"
            >
              {/* Background gradient on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
              
              <div className="flex items-center justify-between mb-6 z-10">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-bg-dark rounded-xl border border-gray-800">
                    {project.icon}
                  </div>
                  <span className="text-sm font-semibold tracking-wider text-gray-400 uppercase">
                    {project.category}
                  </span>
                </div>
                <div className="flex gap-2 text-gray-400">
                  <button className="p-2 hover:text-white transition-colors"><FaGithub size={20} /></button>
                  <button className="p-2 hover:text-white transition-colors"><ExternalLink size={20} /></button>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-white mb-3 z-10">{project.title}</h3>
              <p className="text-gray-400 mb-6 flex-grow z-10">{project.description}</p>

              <div className="flex flex-wrap gap-2 z-10 mt-auto">
                {project.tech.map((tech, i) => (
                  <span key={i} className="px-3 py-1 text-xs font-medium bg-bg-dark border border-gray-800 rounded-full text-gray-300">
                    {tech}
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

export default Projects;
