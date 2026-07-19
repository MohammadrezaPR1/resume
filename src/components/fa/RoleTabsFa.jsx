import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Brain, Server, Layout, Code } from 'lucide-react';

const rolesData = [
  {
    id: 'ai',
    title: 'مهندس هوش مصنوعی و داده',
    icon: <Brain size={24} />,
    color: 'brand-blue',
    description: 'تخصص در مدل‌های زبانی بزرگ (LLMs)، بینایی ماشین و یادگیری ماشین پیش‌گویانه برای ساخت سیستم‌های هوشمند و آماده برای محیط عملیاتی.',
    skills: [
      'هوش مصنوعی مولد', 'LLMs (Llama 3)', 'LangChain', 'Hugging Face', 
      'جستجوی برداری', 'هوش مصنوعی مکالمه‌ای', 'PyTorch', 'TensorFlow', 
      'Keras', 'Scikit-Learn', 'Pandas', 'Numpy', 'بینایی ماشین (CNN)',
      'پیش‌پردازش داده', 'مدل‌سازی پیش‌گویانه'
    ],
    projects: [
      {
        name: 'چت‌بات هوشمند مبتنی بر LLM',
        desc: 'چت‌بات تعاملی و آگاه به متن، قدرت گرفته از مدل‌های زبانی بزرگ (LLMs)، جستجوی معنایی و مسیریابی مبتنی بر قصد کاربر.',
        tech: ['پایتون', 'LLMs', 'LangChain', 'PyTorch', 'Numpy']
      },
      {
        name: 'بینایی ماشین خودرو خودران',
        desc: 'پایپ‌لاین پردازش تصویر برای خودروی خودران جهت تشخیص خطوط، اشیاء و مسیریابی محیطی.',
        tech: ['پایتون', 'OpenCV', 'TensorFlow', 'CNNs', 'Keras']
      },
      {
        name: 'تحلیل ریزش مشتریان',
        desc: 'مدل یادگیری ماشین پیش‌گویانه برای تحلیل و پیش‌بینی ریزش مشتریان جهت کمک به استراتژی‌های حفظ مشتری.',
        tech: ['پایتون', 'Jupyter', 'Scikit-Learn', 'Pandas']
      },
      {
        name: 'پیش‌بینی قیمت مسکن',
        desc: 'پروژه مدل‌سازی رگرسیون برای تخمین قیمت املاک بر اساس ویژگی‌های خانه و داده‌های بازار.',
        tech: ['پایتون', 'Scikit-Learn', 'Pandas', 'Seaborn']
      },
      {
        name: 'پیش‌بینی و مدل‌سازی کووید',
        desc: 'تحلیل داده‌ها و مدل‌سازی پیش‌گویانه انتقال کووید-۱۹ با استفاده از الگوریتم‌های آماری.',
        tech: ['پایتون', 'Jupyter', 'Pandas', 'Data Viz']
      },
      {
        name: 'تحلیل‌های بیمه',
        desc: 'پروژه یادگیری ماشین برای تحلیل مجموعه‌داده‌های بیمه جهت پیش‌بینی حق‌بیمه و مدل‌سازی عوامل ریسک.',
        tech: ['پایتون', 'Scikit-Learn', 'Numpy', 'Pandas']
      }
    ]
  },
  {
    id: 'backend',
    title: 'توسعه‌دهنده بک‌اند',
    icon: <Server size={24} />,
    color: 'brand-green',
    description: 'معماری اپلیکیشن‌های سمت سرور مقیاس‌پذیر، امن و با عملکرد بالا، توسعه APIهای RESTful و پایگاه‌داده‌های قدرتمند.',
    skills: [
      'پایتون', 'FastAPI', 'Node.js', 'Express', 'RESTful APIs', 
      'MySQL', 'Sequelize', 'PostgreSQL', 'Redis', 'Cloudflare Workers', 
      'احراز هویت JWT', 'میکروسرویس‌ها'
    ],
    projects: [
      {
        name: 'فروشگاه آنلاین (کالااستور)',
        desc: 'بک‌اند فروشگاهی مجهز به احراز هویت JWT، مدل‌سازی پایگاه‌داده رابطه‌ای، عملیات CRUD محصولات و آپلود فایل.',
        tech: ['Node.js', 'Express', 'Sequelize', 'MySQL', 'Bcrypt']
      },
      {
        name: 'پلتفرم استریم فیلم',
        desc: 'بک‌اند برای پلتفرم پخش فیلم شامل احراز هویت امن، مدیریت فایل‌ها و ویدیوها و یکپارچه‌سازی با پایگاه‌داده.',
        tech: ['Node.js', 'Express', 'MySQL', 'JWT', 'Sequelize']
      },
      {
        name: 'سرویس بک‌اند چت‌بات',
        desc: 'سرویس FastAPI برای سرویس‌دهی مدل‌های پردازش زبان طبیعی (NLP)، مدیریت نشست‌ها و درخواست‌های در لحظه.',
        tech: ['FastAPI', 'پایتون', 'SQLAlchemy', 'Redis', 'Uvicorn']
      },
      {
        name: 'پورتال اخبار',
        desc: 'سیستم بک‌اند با پشتیبانی از چندین دیتابیس (MySQL، Postgres)، احراز هویت JWT و سرویس ایمیل خودکار برای مقالات خبری.',
        tech: ['Node.js', 'Express', 'Multi-DB', 'Nodemailer']
      }
    ]
  },
  {
    id: 'frontend',
    title: 'توسعه‌دهنده فرانت‌اند',
    icon: <Layout size={24} />,
    color: 'purple-400',
    description: 'طراحی رابط‌های کاربری مدرن، واکنش‌گرا و بسیار تعاملی با تمرکز شدید بر UI/UX، انیمیشن‌ها و بهینه‌سازی عملکرد.',
    skills: [
      'React.js', 'Vite', 'Tailwind CSS', 'جاوااسکریپت', 
      'HTML5/CSS3', 'Framer Motion', 'وب اپلیکیشن پیش‌رونده (PWA)', 
      'مدیریت استیت', 'طراحی مدرن UI/UX', 'طراحی واکنش‌گرا'
    ],
    projects: [
      {
        name: 'رابط کاربری کالااستور',
        desc: 'فرانت‌اند مدرن فروشگاهی با رندرینگ داینامیک محصولات، مدیریت سبد خرید و طراحی واکنش‌گرا.',
        tech: ['React', 'Vite', 'Tailwind CSS', 'React Router']
      },
      {
        name: 'پلتفرم استریم فیلم',
        desc: 'رابط کاربری تعاملی برای پخش فیلم با انیمیشن‌های روان، مدیریت پخش ویدیو و مدیریت استیت قوی.',
        tech: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion']
      },
      {
        name: 'وب‌سایت پورتال اخبار',
        desc: 'پورتال خبری داینامیک با ویرایشگر متن غنی (Rich Text)، اسکلت بارگذاری (Skeleton) و جابجایی نرم صفحات.',
        tech: ['React', 'Framer Motion', 'React Quill', 'Tailwind']
      },
      {
        name: 'برنامه‌ریز PWA فارسی',
        desc: 'یک وب اپلیکیشن پیش‌رونده جامع با قابلیت کار آفلاین برای مدیریت وظایف و برنامه‌ریزی.',
        tech: ['React', 'PWA', 'Tailwind CSS']
      }
    ]
  }
];

const RoleTabsFa = () => {
  const [activeTab, setActiveTab] = useState(rolesData[0].id);

  const activeData = rolesData.find(r => r.id === activeTab);

  return (
    <section id="roles" className="py-20 px-6 relative overflow-x-hidden">
      <div className="absolute right-0 top-1/2 w-96 h-96 bg-brand-blue/5 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
            مجموعه <span className="text-gradient">مهارت‌های تخصصی من</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            نگاهی جامع به مهارت‌ها، ابزارها و پروژه‌های من به تفکیک حوزه‌های تخصصی.
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
            className="absolute -top-24 left-0 md:-left-8 hidden lg:block z-20 pointer-events-none"
          >
            <div className="w-48 h-48 md:w-64 md:h-64 drop-shadow-[0_15px_35px_rgba(0,240,255,0.35)] transform -scale-x-100">
              <img src="/avatar_pointing-removebg-preview.png" alt="Avatar Pointing Down" className="w-full h-full object-contain drop-shadow-lg" />
            </div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="absolute -top-6 right-8 glass-panel px-5 py-3 rounded-2xl rounded-br-none text-sm font-medium text-white shadow-[0_10px_25px_rgba(0,240,255,0.2)] whitespace-nowrap border-brand-blue/20 hidden md:block"
            >
              حتماً این بخش رو ببینید! 👇
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
                  <p className="text-gray-400 text-lg max-w-3xl leading-relaxed text-justify">
                    {activeData.description}
                  </p>
                </div>

                <div className="mb-12">
                  <h4 className="text-xl font-bold text-white mb-6 border-b border-gray-800 pb-2">تکنولوژی‌ها و مهارت‌ها</h4>
                  <div className="flex flex-wrap gap-3">
                    {activeData.skills.map((skill, i) => (
                      <span 
                        key={i} 
                        className="px-4 py-2 bg-bg-darker border border-gray-700/50 rounded-lg text-sm font-medium text-gray-300 hover:border-brand-blue hover:text-white transition-colors cursor-default"
                        dir="ltr"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-white mb-6 border-b border-gray-800 pb-2">پروژه‌های کلیدی</h4>
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
                        <p className="text-gray-400 text-sm mb-6 flex-grow leading-relaxed text-justify">{project.desc}</p>
                        <div className="flex flex-wrap gap-2 mt-auto justify-end">
                          {project.tech.map((tech, j) => (
                            <span key={j} className="text-xs font-semibold text-gray-500 bg-bg-darker px-2 py-1 rounded" dir="ltr">
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

export default RoleTabsFa;
