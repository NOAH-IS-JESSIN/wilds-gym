import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight, ArrowLeft, Instagram, Phone } from 'lucide-react';
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

  // Close menu when route changes
  useEffect(() => setIsOpen(false), [location]);

  // Lock scroll when menu is open
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
    <>
      {/* MAIN NAVBAR */}
      <nav className={`fixed top-0 w-full z-[100] transition-all duration-300 ${
        scrolled || isOpen ? 'bg-wild-black/90 backdrop-blur-md py-3 border-b border-wild-dark' : 'bg-transparent py-4' 
      }`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          
          {/* LOGO (Stays on top of everything) */}
          <Link to="/" className="group z-[120] relative">
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

            <div className="flex items-center gap-4 border-s border-wild-gray/20 ps-6 h-8">
                <button 
                  onClick={toggleLang}
                  className="text-wild-accent hover:text-wild-white transition-colors font-black text-sm uppercase tracking-widest"
                >
                  {isArabic ? 'EN' : 'AR'}
                </button>

                <a href={INSTAGRAM_LINK} target="_blank" rel="noopener noreferrer" className="text-wild-white hover:text-wild-accent transition-colors">
                  <Instagram size={18} /> 
                </a>

                <a href={CALL_LINK} className="text-wild-white hover:text-wild-accent transition-colors">
                  <Phone size={18} />
                </a>
            </div>
            
            <a 
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer" 
              className={`bg-wild-accent text-wild-black px-5 py-2.5 font-bold uppercase text-[10px] flex items-center gap-2 hover:bg-wild-white transition-all shadow-lg shadow-wild-accent/10 ${isArabic ? 'font-cairo tracking-normal' : 'font-beast tracking-widest'}`}
            >
              {t('nav.enter')} {isArabic ? <ArrowLeft size={14} /> : <ArrowRight size={14} />}
            </a>
          </div>

          {/* MOBILE TOGGLE (Z-Index 120 ensures it stays above the menu overlay) */}
          <button 
            className="lg:hidden text-wild-white z-[120] relative p-2" 
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} className="text-wild-accent" /> : <Menu size={28} />} 
          </button>
        </div>
      </nav>

      {/* MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: isArabic ? '-100%' : '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: isArabic ? '-100%' : '100%' }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            // Fixed inset-0 covers the whole screen. 
            // pt-24 pushes content down so it doesn't overlap the Logo/Close button.
            className="fixed inset-0 bg-wild-black z-[110] flex flex-col items-center justify-start pt-32 gap-8 h-screen overflow-y-auto"
          >
            {navLinks.map((link, i) => (
              <motion.div
                key={link.path}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + (i * 0.1) }}
              >
                <Link
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-4xl font-black uppercase text-wild-white hover:text-wild-accent transition-colors ${isArabic ? 'font-cairo' : 'font-beast tracking-tighter'}`}
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
            
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              transition={{ delay: 0.5 }}
              className="flex flex-col items-center gap-8 mt-8 pb-10"
            >
                <button onClick={() => { toggleLang(); setIsOpen(false); }} className="text-wild-black bg-wild-accent px-8 py-3 font-black uppercase text-xl tracking-widest hover:bg-wild-white transition-colors">
                    {isArabic ? 'English Version' : 'النسخة العربية'}
                </button>

                <div className="flex gap-10">
                    <a href={INSTAGRAM_LINK} target="_blank" rel="noopener noreferrer" className="text-wild-white hover:text-wild-accent transition-colors">
                        <Instagram size={32} />
                    </a>
                    <a href={CALL_LINK} className="text-wild-white hover:text-wild-accent transition-colors">
                        <Phone size={32} />
                    </a>
                </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;