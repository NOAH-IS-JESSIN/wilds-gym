// src/components/Hero.tsx
import { motion } from 'framer-motion';
import { ArrowRight, MapPin, Clock, Phone, Zap, Skull, Dumbbell, Users, Flame, Leaf } from 'lucide-react';

// --- ASSETS ---
import logoImg from '../assets/logo.png'; 

const JUNGLE_BG_URL = "https://plus.unsplash.com/premium_photo-1686899171869-4d80f6f9d315?w=500&auto=format&fit=crop";
const WOOD_LOG_URL = "https://images.unsplash.com/photo-1546484396-fb3fc6f95f98?q=80&w=2070&auto=format&fit=crop";
const WHATSAPP_LINK = "https://wa.me/962798885011?text=Hi,%20I%20want%20to%20enter%20the%20wild.";

// --- VIBE CARD COMPONENT ---
const VibeCard = ({ icon: Icon, title, desc, delay, z, x, y }: any) => (
  <motion.div 
    initial={{ opacity: 0, x: x - 20, y: y + 20 }} // Slight motion on load
    animate={{ opacity: 1, x: x, y: y }}
    transition={{ delay: delay, duration: 0.8, type: "spring" }}
    className="absolute w-48 p-4 bg-wild-dark/80 backdrop-blur-md border border-wild-accent/30 rounded-xl shadow-2xl flex flex-col gap-2"
    style={{ zIndex: z, left: 0, top: 0 }} 
  >
    <div className="flex items-center gap-2 text-wild-accent mb-1">
      <Icon size={16} />
      <span className="font-beast uppercase tracking-wider text-sm">{title}</span>
    </div>
    <p className="text-wild-gray text-xs font-mono leading-relaxed uppercase">
      {desc}
    </p>
  </motion.div>
);

const Hero = () => {
  return (
    <section className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden bg-wild-black">
      
      {/* ================= LAYER 1: JUNGLE BACKGROUND ================= */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center opacity-40 grayscale-[30%]"
        style={{ backgroundImage: `url('${JUNGLE_BG_URL}')` }}
      ></div>
      <div className="absolute inset-0 z-10 bg-wild-depth/60 mix-blend-multiply"></div>

      {/* ================= LAYER 2: THE BUSH VIGNETTE ================= */}
      <div 
        className="absolute inset-0 z-20 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at center, transparent 0%, #0B0F0C 100%)',
          boxShadow: 'inset 0 0 200px 100px #0B0F0C'
        }}
      ></div>

      {/* ================= LAYER 3: CONTENT CONTAINER ================= */}
      <div className="relative z-30 container mx-auto px-6 flex flex-col xl:flex-row items-center justify-between gap-8 mt-10">
        
        {/* --- LEFT WING: CARDS CLIMBING UP --- */}
        <div className="hidden xl:block relative w-[280px] h-[300px]">
          {/* Bottom Left */}
          <VibeCard 
            icon={Dumbbell} 
            title="Raw Iron" 
            desc="No machines doing the work for you. Free weights and gravity only."
            delay={1.0} z={10} x={0} y={120} 
          />
          {/* Middle */}
          <VibeCard 
            icon={Skull} 
            title="No Ego" 
            desc="Leave your pride at the door. Here, respect is earned by sweat."
            delay={1.2} z={20} x={40} y={60} 
          />
          {/* Top Right (Closest to Logo) */}
          <VibeCard 
            icon={Zap} 
            title="High Voltage" 
            desc="Loud music. Heavy atmosphere. A habitat for pure energy."
            delay={1.4} z={30} x={80} y={0} 
          />
        </div>


        {/* --- CENTER: MAIN LOGO & TEXT --- */}
        <div className="flex flex-col items-center text-center z-40">
          
          {/* FLIPPING LOGO */}
          <motion.img
            src={logoImg}
            alt="Wilds Gym Logo"
            initial={{ rotateY: -180, opacity: 0, scale: 0.8 }}
            animate={{ rotateY: 0, opacity: 1, scale: 1 }}
            transition={{ 
              duration: 1.5, type: "spring", stiffness: 60, damping: 15, delay: 0.2
            }}
            style={{ perspective: 1000 }}
            className="w-40 md:w-56 mb-8 drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]" 
          />
          
          {/* TEXT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="flex flex-col items-center"
          >
            <h1 className="text-6xl md:text-9xl font-beast font-black uppercase text-wild-white leading-[0.9] tracking-tighter mb-4 drop-shadow-lg">
              WILDS GYM
            </h1>

            <h2 className="text-xl md:text-3xl text-wild-white font-beast uppercase tracking-widest mb-2">
              Train Where the Wild Lives
            </h2>
            
            <div className="flex flex-col items-center gap-4 mb-10">
              <div className="h-[2px] w-20 bg-wild-accent"></div>
              <p className="text-wild-gray font-sans text-sm md:text-base tracking-[0.2em] uppercase font-bold">
                Strength. Discipline. Community.
              </p>
              <p className="text-wild-accent font-mono text-xs uppercase tracking-[0.3em]">
                Paris Street — Sweifieh
              </p>
            </div>

            <a href={WHATSAPP_LINK} className="inline-flex items-center gap-4 bg-[#00C853] text-[#0B0F0C] px-12 py-5 font-beast font-black text-xl uppercase tracking-widest hover:bg-[#1AFF64] hover:scale-105 transition-all shadow-lg shadow-wild-accent/20">
              Enter The Wild <ArrowRight size={24} />
            </a>
          </motion.div>
        </div>


        {/* --- RIGHT WING: CARDS CLIMBING DOWN (Mirror) --- */}
        <div className="hidden xl:block relative w-[280px] h-[300px]">
          {/* Top Left (Closest to Logo) */}
          <VibeCard 
            icon={Users} 
            title="The Pack" 
            desc="You don't hunt alone. Iron sharpens iron. We move as one."
            delay={1.4} z={30} x={0} y={0} 
          />
          {/* Middle */}
          <VibeCard 
            icon={Flame} 
            title="Forged" 
            desc="Heat and pressure. That is how diamonds—and beasts—are made."
            delay={1.2} z={20} x={40} y={60} 
          />
          {/* Bottom Right */}
          <VibeCard 
            icon={Leaf} 
            title="Primal" 
            desc="No AC. No neon. Just air, steel, and the will to survive."
            delay={1.0} z={10} x={80} y={120} 
          />
        </div>

      </div>

      {/* ================= TRUST STRIP ================= */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-32 md:bottom-24 z-30 w-full flex justify-center px-4"
      >
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 bg-wild-black/90 backdrop-blur-md px-8 py-4 border border-wild-dark/50 rounded-lg md:rounded-full text-wild-gray text-xs md:text-sm font-mono uppercase tracking-wider shadow-xl">
           <span className="flex items-center gap-2 text-wild-white"><MapPin size={14} className="text-wild-accent"/> Paris Street</span>
           <span className="hidden md:inline text-wild-dark">|</span>
           <span className="flex items-center gap-2 text-wild-white"><Clock size={14} className="text-wild-accent"/> 06:00–23:00</span>
           <span className="hidden md:inline text-wild-dark">|</span>
           <span className="flex items-center gap-2 text-wild-white"><Phone size={14} className="text-wild-accent"/> 079 888 5011</span>
        </div>
      </motion.div>

      {/* ================= LAYER 4: THE LOG DIVIDER ================= */}
      <div 
        className="absolute bottom-0 left-0 w-full h-16 md:h-24 z-40 bg-cover bg-center border-t-4 border-wild-black"
        style={{ 
          backgroundImage: `url('${WOOD_LOG_URL}')`,
          boxShadow: '0px -20px 50px 0px rgba(11, 15, 12, 1)'
        }}
      >
        <div className="absolute inset-0 bg-wild-black/60 mix-blend-multiply"></div>
      </div>

    </section>
  );
};

export default Hero;