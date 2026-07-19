import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHoveringBtn, setIsHoveringBtn] = useState(false);
  const [isHoveringText, setIsHoveringText] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      const tagName = e.target.tagName.toLowerCase();
      
      // Check if hovering over a clickable element
      if (
        tagName === 'a' ||
        tagName === 'button' ||
        e.target.closest('a') ||
        e.target.closest('button') ||
        e.target.classList.contains('clickable')
      ) {
        setIsHoveringBtn(true);
        setIsHoveringText(false);
      } 
      // Check if hovering over text
      else if (
        tagName === 'p' ||
        tagName === 'h1' ||
        tagName === 'h2' ||
        tagName === 'h3' ||
        tagName === 'h4' ||
        tagName === 'h5' ||
        tagName === 'span' ||
        tagName === 'strong' ||
        tagName === 'li' ||
        e.target.closest('p')
      ) {
        setIsHoveringText(true);
        setIsHoveringBtn(false);
      } else {
        setIsHoveringBtn(false);
        setIsHoveringText(false);
      }
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  const isHoveringAny = isHoveringBtn || isHoveringText;

  return (
    <>
      {/* Outer ring / Hover blob */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[100] mix-blend-difference hidden md:block"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          scale: isHoveringBtn ? 2.5 : isHoveringText ? 2 : 1,
          backgroundColor: isHoveringAny ? '#ffffff' : 'transparent',
          border: isHoveringAny ? '0px solid transparent' : '1.5px solid rgba(0, 240, 255, 0.8)',
        }}
        transition={{ type: "spring", stiffness: 400, damping: 25, mass: 0.4 }}
      />
      
      {/* Tiny inner dot */}
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-white pointer-events-none z-[100] mix-blend-difference hidden md:block"
        animate={{
          x: mousePosition.x - 3,
          y: mousePosition.y - 3,
          opacity: isHoveringAny ? 0 : 1,
          scale: isHoveringAny ? 0 : 1
        }}
        transition={{ type: "spring", stiffness: 1000, damping: 40, mass: 0.1 }}
      />

      {/* Large background spotlight glow */}
      <motion.div
        className="fixed top-0 left-0 w-[500px] h-[500px] rounded-full pointer-events-none z-0 hidden md:block transition-colors duration-500"
        style={{
          background: isHoveringBtn 
            ? 'radial-gradient(circle, rgba(0, 255, 102, 0.08) 0%, rgba(0, 0, 0, 0) 70%)'
            : isHoveringText
            ? 'radial-gradient(circle, rgba(0, 240, 255, 0.08) 0%, rgba(0, 0, 0, 0) 70%)'
            : 'radial-gradient(circle, rgba(0, 240, 255, 0.05) 0%, rgba(0, 0, 0, 0) 70%)',
        }}
        animate={{
          x: mousePosition.x - 250,
          y: mousePosition.y - 250,
        }}
        transition={{ type: "tween", ease: "linear", duration: 0 }}
      />
    </>
  );
};

export default CustomCursor;
