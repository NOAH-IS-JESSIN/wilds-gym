import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight, ArrowLeft, Instagram, Phone } from 'lucide-react'; // Removed Globe
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next'; 

const Navbar = () => {
  const { t, i18n } = useTranslation(); 
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // --- SOCIAL & CONTACT LINKS ---
  const WHATSAPP_LINK = "https://wa.me/962798885011?text=Hi,%20I%20want%20to%20enter%20the%20wild.";
  const INSTAGRAM_LINK = "https://www.instagram.com/wildgym.jo"; 
  const CALL_LINK = "tel:+962798885011"; 

  // --- LOCALIZATION LOGIC ---
  const isArabic = i18n.language === 'ar';
  const fontBase = isArabic ? 'font-cairo font-bold' : 'font-beast tracking-[0.2em]';

  const toggleLang = () => {
    const newLang = isArabic ? 'en' : 'ar';
    i18n.changeLanguage(newLang);
    document.documentElement.dir = newLang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = newLang;
  };

  // --- HANDLERS ---
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => setIsOpen(false), [location]);

  useEffect(() => {
    if (isOpen) { document.body.style.overflow = 'hidden'; } 
    else { document.body.style.overflow = 'unset'; }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  const navLinks = [
    { name: t('nav.territory'), path: '/' },
    { name: t('nav.about'), path: '/about' },
    { name: t('nav.services'), path: '/services' },
    { name: t('nav.membership'), path: '/membership' },
    { name: t('nav.contact'), path: '/contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-[100] transition-all duration-300 ${
      scrolled ? 'bg-wild-black/80 backdrop-blur-md py-3 border-b border-wild-dark' : 'bg-transparent py-4' 
    }`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        
        {/* LOGO */}
        <Link to="/" className="group z-[120]">
          <h1 className={`text-xl md:text-2xl font-black text-wild-white leading-none group-hover:text-wild-accent transition-colors ${isArabic ? 'font-cairo' : 'font-beast tracking-tighter'}`}>
            {isArabic ? 'وايلدز' : 'WILDS'} <br/> 
            <span className="text-wild-accent group-hover:text-wild-white">
              {isArabic ? 'جيم' : 'GYM'}
            </span>
          </h1>
        </Link>

        {/* DESKTOP NAV */}
        <div className="hidden lg:flex items-center gap-6"> 
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`uppercase text-xs transition-all hover:text-wild-accent ${fontBase} ${ 
                location.pathname === link.path ? 'text-wild-accent' : 'text-wild-gray'
              }`}
            >
              {link.name}
            </Link>
          ))}

          {/* ICONS & LANG SWITCHER */}
          <div className="flex items-center gap-4 border-s border-wild-gray/20 ps-6 h-8">
              
              {/* SIMPLE LANGUAGE TOGGLE (Text Only) */}
              <button 
                onClick={toggleLang}
                className="text-wild-accent hover:text-wild-white transition-colors font-black text-sm uppercase tracking-widest"
              >
                {isArabic ? 'EN' : 'AR'}
              </button>

              {/* INSTAGRAM */}
              <a 
                href={INSTAGRAM_LINK} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-wild-white hover:text-wild-accent transition-colors duration-300"
              >
                <Instagram size={18} /> 
              </a>

              {/* CALL ICON */}
              <a 
                href={CALL_LINK} 
                className="text-wild-white hover:text-wild-accent transition-colors duration-300"
              >
                <Phone size={18} />
              </a>
          </div>
          
          {/* CTA BUTTON */}
          <a 
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer" 
            className={`bg-wild-accent text-wild-black px-5 py-2.5 font-bold uppercase text-[10px] flex items-center gap-2 hover:bg-wild-white transition-all shadow-lg shadow-wild-accent/10 ${isArabic ? 'font-cairo tracking-normal' : 'font-beast tracking-widest'}`}
          >
            {t('nav.enter')} {isArabic ? <ArrowLeft size={14} /> : <ArrowRight size={14} />}
          </a>
        </div>

        {/* MOBILE TOGGLE */}
        <button className="lg:hidden text-wild-white z-[120]" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />} 
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: isArabic ? '-100%' : '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: isArabic ? '-100%' : '100%' }}
            className="fixed inset-0 bg-wild-black z-[110] flex flex-col items-center justify-center gap-8"
          >
            <button className="absolute top-6 right-6 text-wild-white z-[130]" onClick={() => setIsOpen(false)}>
               {/* Close button handled by toggle above, but good for redundancy */}
            </button>

            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`text-3xl font-black uppercase text-wild-white hover:text-wild-accent ${isArabic ? 'font-cairo' : 'font-beast tracking-tighter'}`}
              >
                {link.name}
              </Link>
            ))}
            
            <div className="flex flex-col items-center gap-6 mt-4">
                {/* MOBILE LANG TOGGLE (Simple) */}
                <button onClick={toggleLang} className="text-wild-black bg-wild-accent px-6 py-2 font-black uppercase text-lg tracking-widest hover:bg-wild-white transition-colors">
                    {isArabic ? 'SWITCH TO ENGLISH' : 'النسخة العربية'}
                </button>

                <div className="flex gap-8">
                    <a href={INSTAGRAM_LINK} target="_blank" rel="noopener noreferrer" className="text-wild-white hover:text-wild-accent transition-colors">
                        <Instagram size={28} />
                    </a>
                    <a href={CALL_LINK} className="text-wild-white hover:text-wild-accent transition-colors">
                        <Phone size={28} />
                    </a>
                </div>

                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className={`text-lg font-black uppercase text-wild-accent hover:text-wild-white flex items-center gap-2 ${isArabic ? 'font-cairo' : 'font-beast tracking-widest'}`}>
                    {t('nav.enter')} {isArabic ? <ArrowLeft size={20} /> : <ArrowRight size={20} />}
                </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;