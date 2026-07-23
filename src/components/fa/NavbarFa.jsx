import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const NavbarFa = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'درباره من', href: '#about' },
    { name: 'مهارت‌ها', href: '#roles' },
    { name: 'تجربیات', href: '#experience' },
    { name: 'پروژه‌ها', href: '#projects' },
  ];

  const handleScrollToSection = (e, href) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (!element) return;

    setIsMobileMenuOpen(false);

    const targetPosition = element.getBoundingClientRect().top + window.scrollY;
    const startPosition = window.scrollY;
    const distance = targetPosition - startPosition;
    const duration = 1200; // 1.2 seconds for extra smoothness
    let start = null;

    // Cubic easing out function for premium feel
    const easeOutQuart = (t) => 1 - Math.pow(1 - t, 4);

    const animation = (currentTime) => {
      if (start === null) start = currentTime;
      const timeElapsed = currentTime - start;
      const progress = Math.min(timeElapsed / duration, 1);
      
      window.scrollTo(0, startPosition + distance * easeOutQuart(progress));
      
      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      }
    };

    requestAnimationFrame(animation);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled || isMobileMenuOpen ? 'bg-bg-darker/95 backdrop-blur-2xl border-b border-gray-800 py-4 shadow-lg' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#home" onClick={(e) => handleScrollToSection(e, '#home')} className="text-2xl font-bold text-white tracking-tighter">
          محمدرضا <span className="text-brand-blue">باقری</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex gap-6 text-sm font-medium text-gray-300">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href} 
                  onClick={(e) => handleScrollToSection(e, link.href)}
                  className="hover:text-brand-blue transition-colors relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 right-0 w-0 h-0.5 bg-brand-blue transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            ))}
          </ul>
          
          <div className="flex items-center gap-4 border-r border-gray-700 pr-4">
            <Link to="/" className="px-3 py-1.5 rounded-lg border border-gray-600 text-gray-300 hover:border-brand-blue hover:text-brand-blue transition-colors font-medium text-sm">
              EN
            </Link>
            <a 
              href="#contact" 
              onClick={(e) => handleScrollToSection(e, '#contact')}
              className="px-5 py-2.5 rounded-lg bg-brand-blue/10 border border-brand-blue/50 text-brand-blue font-medium hover:bg-brand-blue hover:text-bg-dark transition-all duration-300 shadow-[0_0_15px_rgba(0,240,255,0.2)] hover:shadow-[0_0_25px_rgba(0,240,255,0.4)] clickable"
            >
              ارتباط با من
            </a>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-gray-300 hover:text-white transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden absolute top-full left-0 w-full bg-bg-darker/98 backdrop-blur-3xl px-6 flex flex-col border-b border-gray-800 shadow-2xl overflow-hidden"
          >
            <div className="py-6 flex flex-col gap-2">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="text-lg font-medium text-gray-300 hover:text-white hover:bg-white/5 p-3 rounded-xl transition-all duration-300 flex items-center gap-3 group"
                  onClick={(e) => handleScrollToSection(e, link.href)}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-blue/40 group-hover:bg-brand-blue group-hover:scale-150 transition-all duration-300"></span>
                  {link.name}
                </a>
              ))}
              <div 
                className="flex flex-col gap-4 mt-4 pt-6 border-t border-gray-800/50"
              >
                <Link to="/" className="text-center px-5 py-3.5 rounded-xl border border-gray-600/50 text-gray-300 hover:border-brand-blue hover:text-brand-blue hover:bg-brand-blue/5 transition-all duration-300 font-medium">
                  تغییر زبان (EN)
                </Link>
                <a href="#contact" onClick={(e) => handleScrollToSection(e, '#contact')} className="text-center px-5 py-3.5 rounded-xl bg-gradient-to-r from-brand-blue/10 to-brand-green/10 border border-brand-blue/30 text-brand-blue font-bold hover:from-brand-blue hover:to-brand-green hover:text-bg-dark transition-all duration-500 shadow-lg hover:shadow-[0_0_20px_rgba(0,240,255,0.3)]">
                  ارتباط با من
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default NavbarFa;
