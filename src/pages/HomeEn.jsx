import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import RoleTabs from '../components/RoleTabs';
import Contact from '../components/Contact';

const HomeEn = () => {
  useEffect(() => {
    document.title = 'Mohammadreza Bagheri';
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <RoleTabs />
      </main>
      <Contact />
    </>
  );
};

export default HomeEn;
