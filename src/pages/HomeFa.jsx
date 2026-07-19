import { useEffect } from 'react';
import NavbarFa from '../components/fa/NavbarFa';
import HeroFa from '../components/fa/HeroFa';
import AboutFa from '../components/fa/AboutFa';
import ExperienceFa from '../components/fa/ExperienceFa';
import RoleTabsFa from '../components/fa/RoleTabsFa';
import ContactFa from '../components/fa/ContactFa';

const HomeFa = () => {
  useEffect(() => {
    document.title = 'محمدرضا باقری';
  }, []);

  return (
    <div dir="rtl" className="font-vazir text-right overflow-x-hidden">
      <NavbarFa />
      <main>
        <HeroFa />
        <AboutFa />
        <ExperienceFa />
        <RoleTabsFa />
      </main>
      <ContactFa />
    </div>
  );
};

export default HomeFa;
