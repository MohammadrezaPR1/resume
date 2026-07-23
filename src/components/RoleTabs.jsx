import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Brain, Server, Layout, Code, ChevronRight, ChevronLeft, X } from 'lucide-react';

const ProjectSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const nextSlide = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <>
      <div 
        className="relative w-full h-48 md:h-56 overflow-hidden rounded-t-xl group/slider border-b border-gray-800/60 shrink-0 cursor-pointer"
        onClick={() => setIsModalOpen(true)}
      >
        <AnimatePresence initial={false}>
          <motion.img
            key={currentIndex}
            src={images[currentIndex]}
            alt="Project View"
            loading="lazy"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 w-full h-full object-cover group-hover/slider:scale-105 transition-transform duration-500"
          />
        </AnimatePresence>
        
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-80" />
        
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/slider:opacity-100 transition-opacity duration-300 pointer-events-none">
          <div className="bg-black/50 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium border border-white/10">
            View Images
          </div>
        </div>

        {images.length > 1 && (
          <>
            <button 
              onClick={prevSlide}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 text-white p-1.5 rounded-full backdrop-blur-md opacity-0 group-hover/slider:opacity-100 transition-opacity hover:bg-brand-blue z-10"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              onClick={nextSlide}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 text-white p-1.5 rounded-full backdrop-blur-md opacity-0 group-hover/slider:opacity-100 transition-opacity hover:bg-brand-blue z-10"
            >
              <ChevronRight size={20} />
            </button>
            
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
              {images.map((_, idx) => (
                <div 
                  key={idx} 
                  className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentIndex ? 'w-4 bg-brand-blue' : 'w-1.5 bg-white/50'}`} 
                />
              ))}
            </div>
          </>
        )}
      </div>

      <AnimatePresence>
        {isModalOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 md:p-8 backdrop-blur-md"
            onClick={() => setIsModalOpen(false)}
          >
            <button 
              className="absolute top-4 right-4 md:top-8 md:right-8 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors z-[110]"
              onClick={() => setIsModalOpen(false)}
            >
              <X size={28} />
            </button>

            <div 
              className="relative w-full max-w-5xl aspect-[16/10] md:aspect-video rounded-xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <AnimatePresence initial={false}>
                <motion.img
                  key={currentIndex}
                  src={images[currentIndex]}
                  alt="Project Full View"
                  loading="lazy"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 w-full h-full object-contain"
                />
              </AnimatePresence>
              
              {images.length > 1 && (
                <>
                  <button 
                    onClick={prevSlide}
                    className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 md:p-3 rounded-full hover:bg-brand-blue transition-colors z-10 border border-white/10"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button 
                    onClick={nextSlide}
                    className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 md:p-3 rounded-full hover:bg-brand-blue transition-colors z-10 border border-white/10"
                  >
                    <ChevronRight size={24} />
                  </button>
                  
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10 bg-black/30 px-4 py-2 rounded-full backdrop-blur-sm border border-white/10">
                    {images.map((_, idx) => (
                      <button 
                        key={idx}
                        onClick={() => setCurrentIndex(idx)}
                        className={`h-2 rounded-full transition-all duration-300 ${idx === currentIndex ? 'w-6 bg-brand-blue' : 'w-2 bg-white/50 hover:bg-white/80'}`} 
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

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
        tech: ['Python', 'LLMs', 'LangChain', 'PyTorch', 'Numpy'],
        images: [
          '/چت بات/attatchment.fhkQf2.png.jpeg',
          '/چت بات/attatchment.flwnz8.png.jpeg',
          '/چت بات/attatchment.g68UIY.png.jpeg',
          '/چت بات/attatchment.9uppu5.png.jpeg',
          '/چت بات/attatchment.A0qQgT.png.jpeg',
          '/چت بات/attatchment.Ws6TAf.png.jpeg',
          '/چت بات/attatchment.ckdmHM.png.jpeg',
          '/چت بات/attatchment.wjKbYc.png.jpeg',
          '/چت بات/attatchment.yh2ZPR.png.jpeg'
        ]
      },
      {
        name: 'Autonomous Driving Vision',
        desc: 'Image processing pipeline for a self-driving car using Computer Vision to detect lanes, objects, and navigate environments.',
        tech: ['Python', 'OpenCV', 'TensorFlow', 'CNNs', 'Keras'],
        images: [
          '/خودروی خودران/2026-07-23_160448.png',
          '/خودروی خودران/2026-07-23_160533.png',
          '/خودروی خودران/2026-07-23_160549.png'
        ]
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
        tech: ['Node.js', 'Express', 'Sequelize', 'MySQL', 'Bcrypt'],
        images: [
          '/پروؤه فروشگاه/2026-07-23_153547.png',
          '/پروؤه فروشگاه/2026-07-23_153639.png',
          '/پروؤه فروشگاه/2026-07-23_153718.png',
          '/پروؤه فروشگاه/2026-07-23_153737.png',
          '/پروؤه فروشگاه/2026-07-23_153753.png',
          '/پروؤه فروشگاه/2026-07-23_153823.png',
          '/پروؤه فروشگاه/2026-07-23_153842.png',
          '/پروؤه فروشگاه/2026-07-23_153902.png',
          '/پروؤه فروشگاه/2026-07-23_153926.png'
        ]
      },
      {
        name: 'Movie Streaming Platform',
        desc: 'Backend for a movie streaming platform including secure authentication, file/video management, and database integration.',
        tech: ['Node.js', 'Express', 'MySQL', 'JWT', 'Sequelize'],
        images: [
          '/وب سایت  فیلم و  سریال/2026-07-23_123237.png',
          '/وب سایت  فیلم و  سریال/2026-07-23_123328.png',
          '/وب سایت  فیلم و  سریال/2026-07-23_123359.png',
          '/وب سایت  فیلم و  سریال/2026-07-23_123507.png',
          '/وب سایت  فیلم و  سریال/2026-07-23_123526.png',
          '/وب سایت  فیلم و  سریال/2026-07-23_123601.png'
        ]
      },
      {
        name: 'Chatbot Backend Service',
        desc: 'FastAPI service for serving NLP models, managing sessions, and handling real-time requests.',
        tech: ['FastAPI', 'Python', 'SQLAlchemy', 'Redis', 'Uvicorn']
      },
      {
        name: 'News Portal',
        desc: 'Backend system with multi-database support (MySQL, Postgres, SQLite), robust JWT auth, and automated email services for news articles.',
        tech: ['Node.js', 'Express', 'Multi-DB', 'Nodemailer'],
        images: [
          '/پروژه  وب سایت خبری/2026-07-23_114920.png',
          '/پروژه  وب سایت خبری/2026-07-23_114957.png',
          '/پروژه  وب سایت خبری/2026-07-23_115019.png',
          '/پروژه  وب سایت خبری/2026-07-23_115053.png',
          '/پروژه  وب سایت خبری/2026-07-23_115156.png',
          '/پروژه  وب سایت خبری/2026-07-23_115219.png',
          '/پروژه  وب سایت خبری/2026-07-23_115246.png',
          '/پروژه  وب سایت خبری/2026-07-23_115330.png',
          '/پروژه  وب سایت خبری/2026-07-23_115514.png',
          '/پروژه  وب سایت خبری/2026-07-23_115536.png',
          '/پروژه  وب سایت خبری/2026-07-23_115556.png'
        ]
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
        tech: ['React', 'Vite', 'Tailwind CSS', 'React Router'],
        images: [
          '/پروؤه فروشگاه/2026-07-23_153547.png',
          '/پروؤه فروشگاه/2026-07-23_153639.png',
          '/پروؤه فروشگاه/2026-07-23_153718.png',
          '/پروؤه فروشگاه/2026-07-23_153737.png',
          '/پروؤه فروشگاه/2026-07-23_153753.png',
          '/پروؤه فروشگاه/2026-07-23_153823.png',
          '/پروؤه فروشگاه/2026-07-23_153842.png',
          '/پروؤه فروشگاه/2026-07-23_153902.png',
          '/پروؤه فروشگاه/2026-07-23_153926.png'
        ]
      },
      {
        name: 'Movie Stream Platform',
        desc: 'Interactive movie streaming UI with smooth animations, video handling, and robust state management.',
        tech: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion', 'Swiper'],
        images: [
          '/وب سایت  فیلم و  سریال/2026-07-23_123237.png',
          '/وب سایت  فیلم و  سریال/2026-07-23_123328.png',
          '/وب سایت  فیلم و  سریال/2026-07-23_123359.png',
          '/وب سایت  فیلم و  سریال/2026-07-23_123507.png',
          '/وب سایت  فیلم و  سریال/2026-07-23_123526.png',
          '/وب سایت  فیلم و  سریال/2026-07-23_123601.png'
        ]
      },
      {
        name: 'News Website Frontend',
        desc: 'Dynamic news portal with rich text editing, skeleton loading, and smooth page transitions.',
        tech: ['React', 'Framer Motion', 'React Quill', 'Tailwind CSS'],
        images: [
          '/پروژه  وب سایت خبری/2026-07-23_114920.png',
          '/پروژه  وب سایت خبری/2026-07-23_114957.png',
          '/پروژه  وب سایت خبری/2026-07-23_115019.png',
          '/پروژه  وب سایت خبری/2026-07-23_115053.png',
          '/پروژه  وب سایت خبری/2026-07-23_115156.png',
          '/پروژه  وب سایت خبری/2026-07-23_115219.png',
          '/پروژه  وب سایت خبری/2026-07-23_115246.png',
          '/پروژه  وب سایت خبری/2026-07-23_115330.png',
          '/پروژه  وب سایت خبری/2026-07-23_115514.png',
          '/پروژه  وب سایت خبری/2026-07-23_115536.png',
          '/پروژه  وب سایت خبری/2026-07-23_115556.png'
        ]
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
              <img src="/avatar_pointing-removebg-preview.png" alt="Avatar Pointing Down" loading="lazy" className="w-full h-full object-contain drop-shadow-lg" />
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
                        className="bg-bg-dark border border-gray-800 rounded-xl hover:border-brand-blue/40 transition-colors group relative flex flex-col h-full shadow-lg hover:shadow-[0_0_30px_rgba(0,240,255,0.1)] clickable"
                      >
                        {project.images && project.images.length > 0 && (
                          <ProjectSlider images={project.images} />
                        )}
                        <div className="p-6 flex flex-col flex-grow">
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
