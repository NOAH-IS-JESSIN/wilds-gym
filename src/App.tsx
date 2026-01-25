import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

// --- IMPORTS ---
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Membership from './pages/Membership';
import Contact from './pages/Contact'; // Import the new page

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-[#050505] text-[#e5e5e5] selection:bg-[#ff4d00] selection:text-black font-sans relative">
        
        {/* GLOBAL NOISE TEXTURE */}
        <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.03] mix-blend-overlay" 
             style={{ backgroundImage: "url('https://grainy-gradients.vercel.app/noise.svg')" }}>
        </div>

        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/membership" element={<Membership />} /> {/* Connected! */}
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;