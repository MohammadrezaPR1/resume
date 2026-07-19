import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const ExperienceFa = () => {
  return (
    <section id="experience" className="py-20 px-6 relative">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
            سوابق <span className="text-gradient">شغلی</span>
          </h2>
        </div>

        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute right-0 md:right-8 top-0 bottom-0 w-px bg-gray-800" />

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative pr-8 md:pr-24"
          >
            {/* Timeline Dot */}
            <div className="absolute right-[-5px] md:right-[27px] top-2 w-3 h-3 bg-brand-blue rounded-full shadow-[0_0_10px_#00f0ff]" />
            
            <div className="glass-panel p-8 rounded-2xl">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-4">
                <div>
                  <h3 className="text-2xl font-bold text-white">مهندس هوش مصنوعی</h3>
                  <p className="text-brand-green text-lg font-medium">گروه مهندسی صمیم</p>
                </div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-800/50 border border-gray-700 text-sm text-gray-300" dir="ltr">
                  <Briefcase size={16} />
                  <span>Oct 2025 – Present</span>
                </div>
              </div>

              <ul className="space-y-4 text-gray-400 mt-6 text-justify">
                <li className="flex items-start gap-3">
                  <div className="mt-2 w-1.5 h-1.5 bg-brand-blue rounded-full shrink-0" />
                  <p><strong className="text-gray-200 font-semibold">طراحی و توسعه:</strong> ساخت و بهینه‌سازی مدل‌های زبانی بزرگ (LLMs) و سیستم‌های هوش مصنوعی مکالمه‌محور.</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-2 w-1.5 h-1.5 bg-brand-blue rounded-full shrink-0" />
                  <p><strong className="text-gray-200 font-semibold">پیاده‌سازی چت‌بات:</strong> توسعه چت‌بات‌های هوشمند با تمرکز بر درک زبان طبیعی (NLU) و تعامل روان با کاربر.</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-2 w-1.5 h-1.5 bg-brand-blue rounded-full shrink-0" />
                  <p><strong className="text-gray-200 font-semibold">معماری سیستم:</strong> ایجاد پایپ‌لاین‌های (Pipelines) جامع هوش مصنوعی برای کاربردهای عملیاتی و خودکارسازی فرآیندها.</p>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceFa;
