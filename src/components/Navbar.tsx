import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // WhatsApp Link
  const WHATSAPP_LINK = "https://wa.me/962798885011?text=Hi,%20I%20want%20to%20enter%20the%20wild.";

  // Handle scroll effect for the glass background
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => setIsOpen(false), [location]);

  const navLinks = [
    { name: 'Territory', path: '/' },
    { name: 'About', path: '/about' }, // Fixed path
    { name: 'Services', path: '/services' },
    { name: 'Membership', path: '/membership' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-[100] transition-all duration-300 ${
      scrolled ? 'bg-wild-black/80 backdrop-blur-md py-4 border-b border-wild-dark' : 'bg-transparent py-6'
    }`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        
        {/* LOGO */}
        <Link to="/" className="group">
          <h1 className="text-2xl font-beast font-black text-wild-white tracking-tighter leading-none group-hover:text-wild-accent transition-colors">
            WILDS <br/> <span className="text-wild-accent group-hover:text-wild-white">GYM</span>
          </h1>
        </Link>

        {/* DESKTOP NAV */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`font-beast uppercase text-sm tracking-[0.2em] transition-all hover:text-wild-accent ${
                location.pathname === link.path ? 'text-wild-accent' : 'text-wild-gray'
              }`}
            >
              {link.name}
            </Link>
          ))}
          
          {/* CTA BUTTON (Fixed to External Link) */}
          <a 
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer" 
            className="bg-wild-accent text-wild-black px-6 py-3 font-beast font-bold uppercase text-xs tracking-widest flex items-center gap-2 hover:bg-wild-white transition-all shadow-lg shadow-wild-accent/10"
          >
            Enter Wilds <ArrowRight size={14} />
          </a>
        </div>

        {/* MOBILE TOGGLE */}
        <button className="lg:hidden text-wild-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 bg-wild-black z-[110] flex flex-col items-center justify-center gap-8"
          >
            <button className="absolute top-8 right-8 text-wild-white" onClick={() => setIsOpen(false)}>
              <X size={32} />
            </button>
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-4xl font-beast font-black uppercase text-wild-white hover:text-wild-accent tracking-tighter"
              >
                {link.name}
              </Link>
            ))}
            
            {/* MOBILE CTA */}
            <a 
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer" 
                className="text-xl font-beast font-black uppercase text-wild-accent hover:text-wild-white tracking-widest flex items-center gap-2 mt-4"
            >
                Enter Wilds <ArrowRight size={24} />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;