import { motion } from 'framer-motion';
import { GraduationCap, Code2, BrainCircuit, Database } from 'lucide-react';

const AboutFa = () => {
  const highlights = [
    {
      icon: <BrainCircuit className="text-purple-400" size={24} />,
      title: 'هوش مصنوعی مولد و LLMs',
      desc: 'طراحی راهکارهای مبتنی بر مدل‌های زبانی بزرگ، چت‌بات‌های هوشمند، مسیریابی بر اساس قصد کاربر و جستجوی معنایی.'
    },
    {
      icon: <Code2 className="text-brand-blue" size={24} />,
      title: 'بینایی ماشین و یادگیری ماشین',
      desc: 'توسعه سیستم‌های قوی برای خودروهای خودران و توسعه مدل‌های داده‌محور برای تصمیم‌گیری‌های کلان استراتژیک.'
    },
    {
      icon: <Database className="text-brand-green" size={24} />,
      title: 'توسعه یکپارچه فول‌استک',
      desc: 'ساخت اپلیکیشن‌های End-to-End با ادغام ابزارهای یادگیری ماشین در بک‌اند مقیاس‌پذیر Node.js و فرانت‌اند React.'
    }
  ];

  return (
    <section id="about" className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16 items-start">
        
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex-1"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
            درباره <span className="text-gradient">من</span>
          </h2>
          <div className="space-y-6 text-gray-400 text-lg leading-relaxed text-justify mb-8">
            <p>
              من یک مهندس هوش مصنوعی هستم که با چالش تبدیل تحقیقات نوآورانه به سیستم‌های هوشمند، قدرتمند و یکپارچه انگیزه می‌گیرم. تخصص من در نقطه تلاقی پردازش زبان طبیعی (NLP)، بینایی ماشین و مدل‌سازی پیش‌گویانه است و هدفم ارائه راه‌حل‌های اثرگذار برای مسائل دنیای واقعی است.
            </p>
            <p>
              فراتر از هوش مصنوعی، من پیشینه قدرتمندی در توسعه فول‌استک دارم. من اپلیکیشن‌های جامعی را با ادغام کامپوننت‌های یادگیری ماشین در منطق سمت سرور (Backend) و سمت کاربر (Frontend) ساخته‌ام. من در مرز نوآوری و عمل‌گرایی فعالیت می‌کنم و مشتاقم تا فاصله میان تحقیقات لبه‌تکنولوژی و راه‌حل‌های کاربردی و تولیدمحور را از بین ببرم.
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
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:w-[400px] shrink-0"
        >
          <div className="glass-panel p-8 relative overflow-hidden h-full rounded-2xl">
            <div className="absolute -left-10 -top-10 text-brand-blue/10 pointer-events-none transform -scale-x-100">
              <GraduationCap size={150} />
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3 relative z-10">
              <GraduationCap className="text-brand-green" /> سوابق تحصیلی
            </h3>
            
            <div className="relative z-10">
              <div className="mb-2">
                <span className="text-sm text-brand-blue font-semibold tracking-wider" dir="ltr">2021 — 2025</span>
              </div>
              <h4 className="text-xl font-bold text-white mb-2">لیسانس مهندسی کامپیوتر</h4>
              <p className="text-gray-400 mb-4">دانشگاه آزاد اسلامی، واحد علوم و تحقیقات</p>
              
              <ul className="space-y-3 text-sm text-gray-400">
                <li className="flex items-start gap-3">
                  <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-brand-green shrink-0" />
                  <span className="leading-relaxed text-justify">دروس اصلی: بینایی ماشین، یادگیری ماشین، توسعه وب</span>
                </li>
              </ul>
            </div>
            
            <div className="mt-8 relative z-10 border-t border-gray-800 pt-6">
              <h4 className="text-lg font-bold text-white mb-1">دیپلم ریاضی و فیزیک</h4>
              <p className="text-gray-400">دبیرستان سلام</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutFa;
