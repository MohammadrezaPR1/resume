import { motion } from 'framer-motion';
import { Terminal, Database, BrainCircuit, ChevronDown } from 'lucide-react';

const HeroFa = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 pb-10 px-6 overflow-x-hidden">
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-brand-blue/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-brand-green/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        
        {/* Text Area */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-green/30 bg-brand-green/10 text-brand-green font-medium text-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-green opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-green"></span>
            </span>
            آماده برای پروژه‌های جدید
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-tight">
            سلام، من <br />
            <span className="text-gradient">محمدرضا</span> هستم
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-light text-gray-400">
            مهندس هوش مصنوعی <span className="text-white font-medium">و توسعه‌دهنده فول‌استک</span>
          </h2>
          
          <p className="text-lg text-gray-400 max-w-xl leading-relaxed text-justify">
            متخصص در مدل‌های زبانی بزرگ (LLMs)، بینایی ماشین و سیستم‌های مقیاس‌پذیر بک‌اند و فرانت‌اند. من سیستم‌های هوشمند و آماده برای محیط عملیاتی می‌سازم که تأثیر واقعی در دنیای واقعی می‌گذارند.
          </p>

          <div className="flex gap-4 pt-4">
            <a href="#projects" className="px-8 py-3 rounded-full bg-brand-blue text-bg-darker font-semibold hover:bg-brand-blue/90 transition-colors shadow-[0_0_20px_rgba(0,240,255,0.4)]">
              مشاهده پروژه‌ها
            </a>
            <a href="#contact" className="px-8 py-3 rounded-full border border-gray-600 text-white hover:border-brand-blue hover:text-brand-blue transition-colors">
              تماس با من
            </a>
          </div>
        </motion.div>

        {/* Avatar Area */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1 relative"
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96 mx-auto">
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-blue to-brand-green rounded-full blur-2xl opacity-40 animate-pulse" />
            <div className="absolute inset-2 bg-bg-darker rounded-full border border-gray-800 flex items-center justify-center overflow-hidden z-10 p-2">
               <img src="/avatar.png" alt="Avatar" className="w-full h-full object-cover rounded-full" />
            </div>
            
            {/* Floating Badges */}
            <motion.div 
              animate={{ y: [-10, 10, -10] }} 
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 glass-panel p-3 rounded-2xl flex items-center gap-3 z-20"
            >
              <div className="p-2 bg-brand-blue/20 rounded-lg text-brand-blue"><BrainCircuit size={24} /></div>
              <span className="font-semibold text-sm text-white" dir="ltr">AI / NLP</span>
            </motion.div>

            <motion.div 
              animate={{ y: [10, -10, 10] }} 
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              className="absolute top-1/2 -left-8 glass-panel p-3 rounded-2xl flex items-center gap-3 z-20"
            >
              <div className="p-2 bg-brand-green/20 rounded-lg text-brand-green"><Database size={24} /></div>
              <span className="font-semibold text-sm text-white" dir="ltr">Backend</span>
            </motion.div>

            <motion.div 
              animate={{ y: [-8, 8, -8] }} 
              transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
              className="absolute -bottom-4 right-10 glass-panel p-3 rounded-2xl flex items-center gap-3 z-20"
            >
              <div className="p-2 bg-purple-500/20 rounded-lg text-purple-400"><Terminal size={24} /></div>
              <span className="font-semibold text-sm text-white" dir="ltr">Frontend</span>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-500"
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
};

export default HeroFa;
