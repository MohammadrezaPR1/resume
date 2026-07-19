import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Brain, Server, Layout, Code } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const rolesData = [
  {
    id: 'ai',
    title: 'AI & Data Engineer',
    icon: <Brain size={24} />,
    color: 'brand-blue',
    description: 'Specializing in Large Language Models (LLMs), Computer Vision, and Predictive Machine Learning to build intelligent, production-ready systems.',
    skills: [
      'Generative AI', 'LLMs (Llama 3)', 'LangChain', 'Hugging Face', 
      'Vector Search', 'Conversational AI', 'PyTorch', 'TensorFlow', 
      'Keras', 'Scikit-Learn', 'Pandas', 'Numpy', 'Computer Vision (CNN)',
      'Data Preprocessing', 'Predictive Modeling'
    ],
    projects: [
      {
        name: 'LLM & Intent Detection Chatbot',
        desc: 'Intelligent, context-aware chatbot powered by Large Language Models (LLMs), semantic search, and intent-based routing for intuitive interactions.',
        tech: ['Python', 'LLMs', 'LangChain', 'PyTorch', 'Numpy']
      },
      {
        name: 'Autonomous Driving Vision',
        desc: 'Image processing pipeline for a self-driving car using Computer Vision to detect lanes, objects, and navigate environments.',
        tech: ['Python', 'OpenCV', 'TensorFlow', 'CNNs', 'Keras']
      },
      {
        name: 'Customer Churn Analysis',
        desc: 'Predictive machine learning model to analyze and predict customer attrition, helping in retention strategies.',
        tech: ['Python', 'Jupyter', 'Scikit-Learn', 'Pandas', 'Matplotlib']
      },
      {
        name: 'House Price Prediction',
        desc: 'Regression modeling project to estimate property prices based on housing features and market data.',
        tech: ['Python', 'Scikit-Learn', 'Pandas', 'Seaborn']
      },
      {
        name: 'Covid Prediction & Modeling',
        desc: 'Data analysis and predictive modeling of COVID-19 transmission and trends using statistical algorithms.',
        tech: ['Python', 'Jupyter', 'Pandas', 'Data Visualization']
      },
      {
        name: 'Insurance Analytics',
        desc: 'Machine learning project analyzing insurance datasets to predict premiums and model risk factors.',
        tech: ['Python', 'Scikit-Learn', 'Numpy', 'Pandas']
      }
    ]
  },
  {
    id: 'backend',
    title: 'Backend Developer',
    icon: <Server size={24} />,
    color: 'brand-green',
    description: 'Architecting scalable, secure, and high-performance server-side applications, RESTful APIs, and robust databases.',
    skills: [
      'Python', 'FastAPI', 'Node.js', 'Express', 'RESTful APIs', 
      'MySQL', 'Sequelize', 'PostgreSQL', 'Redis Caching', 'Cloudflare Workers', 
      'JWT Authentication', 'Microservices'
    ],
    projects: [
      {
        name: 'Online Shop (Kalastore)',
        desc: 'E-commerce backend featuring JWT authentication, relational database modeling, product CRUD operations, and file uploads.',
        tech: ['Node.js', 'Express', 'Sequelize', 'MySQL', 'Bcrypt']
      },
      {
        name: 'Movie Streaming Platform',
        desc: 'Backend for a movie streaming platform including secure authentication, file/video management, and database integration.',
        tech: ['Node.js', 'Express', 'MySQL', 'JWT', 'Sequelize']
      },
      {
        name: 'Chatbot Backend Service',
        desc: 'FastAPI service for serving NLP models, managing sessions, and handling real-time requests.',
        tech: ['FastAPI', 'Python', 'SQLAlchemy', 'Redis', 'Uvicorn']
      },
      {
        name: 'News Portal',
        desc: 'Backend system with multi-database support (MySQL, Postgres, SQLite), robust JWT auth, and automated email services for news articles.',
        tech: ['Node.js', 'Express', 'Multi-DB', 'Nodemailer']
      }
    ]
  },
  {
    id: 'frontend',
    title: 'Frontend Developer',
    icon: <Layout size={24} />,
    color: 'purple-400',
    description: 'Crafting modern, responsive, and highly interactive user interfaces with a strong focus on UI/UX, animations, and performance.',
    skills: [
      'React.js', 'Vite', 'Tailwind CSS', 'JavaScript', 
      'HTML5/CSS3', 'Framer Motion', 'Progressive Web Apps (PWA)', 
      'State Management', 'Modern UI/UX Design', 'Responsive Layouts'
    ],
    projects: [
      {
        name: 'Online Shop Web (KalaStore)',
        desc: 'Modern e-commerce frontend featuring dynamic product rendering, cart management, and responsive design.',
        tech: ['React', 'Vite', 'Tailwind CSS', 'React Router']
      },
      {
        name: 'Movie Stream Platform',
        desc: 'Interactive movie streaming UI with smooth animations, video handling, and robust state management.',
        tech: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion', 'Swiper']
      },
      {
        name: 'News Website Frontend',
        desc: 'Dynamic news portal with rich text editing, skeleton loading, and smooth page transitions.',
        tech: ['React', 'Framer Motion', 'React Quill', 'Tailwind CSS']
      },
      {
        name: 'Persian PWA Planner',
        desc: 'A comprehensive, offline-capable Progressive Web App for task management and planning.',
        tech: ['React', 'PWA', 'Tailwind CSS']
      }
    ]
  }
];

const RoleTabs = () => {
  const [activeTab, setActiveTab] = useState(rolesData[0].id);

  const activeData = rolesData.find(r => r.id === activeTab);

  return (
    <section id="roles" className="py-20 px-6 relative overflow-x-hidden">
      <div className="absolute left-0 top-1/2 w-96 h-96 bg-brand-blue/5 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
            My <span className="text-gradient">Capabilities</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            A deep dive into my skill set, technologies, and projects, categorized by professional domains.
          </p>
        </div>

        {/* Tab Headers */}
        <div className="flex flex-col md:flex-row gap-4 justify-center mb-12 relative z-20">
          {rolesData.map((role) => {
            const isActive = activeTab === role.id;
            return (
              <button
                key={role.id}
                onClick={() => setActiveTab(role.id)}
                className={`flex items-center justify-center gap-3 px-6 py-4 rounded-xl font-semibold transition-all duration-300 ${
                  isActive 
                    ? `bg-bg-dark border border-${role.color}/50 shadow-[0_0_20px_rgba(0,240,255,0.15)] text-white scale-105` 
                    : `bg-transparent border border-gray-800 text-gray-400 hover:border-gray-600 hover:text-gray-200`
                }`}
              >
                <span className={isActive ? `text-${role.color}` : ''}>
                  {role.icon}
                </span>
                {role.title}
              </button>
            );
          })}
        </div>

        {/* Tab Content Wrapper */}
        <div className="relative mt-16">
          
          <motion.div 
            animate={{ y: [-8, 8, -8] }} 
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            className="absolute -top-20 -right-2 md:-top-24 md:-right-8 z-20 pointer-events-none w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64"
          >
            <div className="w-full h-full drop-shadow-[0_15px_35px_rgba(0,240,255,0.35)]">
              <img src="/avatar_pointing-removebg-preview.png" alt="Avatar Pointing Down" className="w-full h-full object-contain drop-shadow-lg" />
            </div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="absolute -top-6 left-8 glass-panel px-5 py-3 rounded-2xl rounded-bl-none text-sm font-medium text-white shadow-[0_10px_25px_rgba(0,240,255,0.2)] whitespace-nowrap border-brand-blue/20 hidden md:block"
            >
              Check these out! 👇
            </motion.div>
          </motion.div>

          <div className="glass-panel p-8 md:p-12 min-h-[500px] relative z-10 backdrop-blur-xl bg-bg-darker/60">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeData.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="mb-10">
                  <h3 className="text-3xl font-bold text-white mb-4 flex items-center gap-4">
                    <span className={`p-3 rounded-xl bg-${activeData.color}/10 text-${activeData.color}`}>
                      {activeData.icon}
                    </span>
                    {activeData.title}
                  </h3>
                  <p className="text-gray-400 text-lg max-w-3xl">
                    {activeData.description}
                  </p>
                </div>

                <div className="mb-12">
                  <h4 className="text-xl font-bold text-white mb-6 border-b border-gray-800 pb-2">Technologies & Skills</h4>
                  <div className="flex flex-wrap gap-3">
                    {activeData.skills.map((skill, i) => (
                      <span 
                        key={i} 
                        className="px-4 py-2 bg-bg-darker border border-gray-700/50 rounded-lg text-sm font-medium text-gray-300 hover:border-brand-blue hover:text-white transition-colors cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-white mb-6 border-b border-gray-800 pb-2">Domain Projects</h4>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {activeData.projects.map((project, i) => (
                      <motion.div 
                        whileHover={{ y: -5, scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        key={i} 
                        className="bg-bg-dark border border-gray-800 rounded-xl p-6 hover:border-brand-blue/40 transition-colors group relative flex flex-col h-full shadow-lg hover:shadow-[0_0_30px_rgba(0,240,255,0.1)] clickable"
                      >
                        <div className="flex justify-between items-start mb-3">
                          <h5 className="text-xl font-bold text-white flex items-center gap-2">
                             <Code size={18} className={`text-${activeData.color}`} />
                             {project.name}
                          </h5>
                        </div>
                        <p className="text-gray-400 text-sm mb-6 flex-grow">{project.desc}</p>
                        <div className="flex flex-wrap gap-2 mt-auto">
                          {project.tech.map((tech, j) => (
                            <span key={j} className="text-xs font-semibold text-gray-500 bg-bg-darker px-2 py-1 rounded">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoleTabs;
