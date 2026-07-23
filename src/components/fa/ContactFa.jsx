import { motion } from 'framer-motion';
import { Mail, Phone } from 'lucide-react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const ContactFa = () => {
  return (
    <section id="contact" className="py-20 px-6 relative overflow-x-hidden">
      <div className="absolute left-0 top-0 w-72 h-72 bg-brand-blue/10 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
            ارتباط با <span className="text-gradient">من</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            من همواره آماده پذیرش موقعیت‌های شغلی جدید و همکاری در پروژه‌های نوآورانه هستم. اگر سوالی دارید یا ایده‌ای برای همکاری در ذهن دارید، با من در ارتباط باشید!
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
          
          {/* Avatar Area */}
          <motion.div 
            animate={{ y: [-8, 8, -8] }} 
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            className="relative w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 shrink-0 z-10 pointer-events-none mb-6 lg:mb-0"
          >
            <div className="w-full h-full drop-shadow-[0_15px_35px_rgba(0,255,102,0.35)] transform -scale-x-100">
              <img src="/avatar_contact-removebg-preview.png" alt="Avatar Contact" loading="lazy" className="w-full h-full object-contain drop-shadow-lg" />
            </div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="absolute -top-4 -left-8 glass-panel px-5 py-3 rounded-2xl rounded-br-none text-sm font-medium text-white shadow-[0_10px_25px_rgba(0,255,102,0.2)] whitespace-nowrap border-brand-green/20 pointer-events-auto"
            >
              در ارتباط باشیم 🤙
            </motion.div>
          </motion.div>

          {/* Contact Links */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 flex-1 w-full">
            <motion.a 
              href="tel:09912511138"
              whileHover={{ y: -5 }}
              className="glass-panel p-6 flex flex-col items-center justify-center gap-4 hover:border-brand-green/50 transition-colors group clickable"
            >
              <div className="w-12 h-12 rounded-full bg-brand-green/10 flex items-center justify-center text-brand-green group-hover:scale-110 transition-transform">
                <Phone size={24} />
              </div>
              <span className="text-gray-300 font-medium font-sans tracking-widest" dir="ltr">09912511138</span>
            </motion.a>

            <motion.a 
              href="mailto:bagheri.mb81@gmail.com"
              whileHover={{ y: -5 }}
              className="glass-panel p-6 flex flex-col items-center justify-center gap-4 hover:border-brand-blue/50 transition-colors group clickable"
            >
              <div className="w-12 h-12 rounded-full bg-brand-blue/10 flex items-center justify-center text-brand-blue group-hover:scale-110 transition-transform">
                <Mail size={24} />
              </div>
              <span className="text-gray-300 font-medium text-sm font-sans tracking-wider">bagheri.mb81@gmail.com</span>
            </motion.a>

            <motion.a 
              href="https://linkedin.com/in/mohammadreza-bagheri10"
              target="_blank"
              rel="noreferrer"
              whileHover={{ y: -5 }}
              className="glass-panel p-6 flex flex-col items-center justify-center gap-4 hover:border-blue-500/50 transition-colors group clickable"
            >
              <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500 group-hover:scale-110 transition-transform">
                <FaLinkedin size={24} />
              </div>
              <span className="text-gray-300 font-medium" dir="ltr">LinkedIn</span>
            </motion.a>

            <motion.a 
              href="https://github.com/MohammadrezaPR1"
              target="_blank"
              rel="noreferrer"
              whileHover={{ y: -5 }}
              className="glass-panel p-6 flex flex-col items-center justify-center gap-4 hover:border-gray-400/50 transition-colors group clickable"
            >
              <div className="w-12 h-12 rounded-full bg-gray-600/10 flex items-center justify-center text-gray-400 group-hover:scale-110 transition-transform">
                <FaGithub size={24} />
              </div>
              <span className="text-gray-300 font-medium" dir="ltr">GitHub</span>
            </motion.a>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default ContactFa;
