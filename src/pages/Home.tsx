import { motion } from 'framer-motion';
import { 
  ArrowRight, MapPin, Clock, Zap, Skull, Dumbbell, 
  Users, Flame, Leaf, Brain, Moon, Swords, Check 
} from 'lucide-react';

// --- IMPORTS ---
import { ThreeDPhotoCarousel } from '../components/ui/3d-carousel';

// --- ASSETS ---
import logoImg from '../assets/logo.png'; 

const JUNGLE_BG_URL = "https://plus.unsplash.com/premium_photo-1686899171869-4d80f6f9d315?w=500&auto=format&fit=crop";
const WOOD_LOG_URL = "https://images.unsplash.com/photo-1546484396-fb3fc6f95f98?q=80&w=2070&auto=format&fit=crop";
const IMG_FACILITY = "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070";
const WHATSAPP_LINK = "https://wa.me/962798885011?text=Hi,%20I%20want%20to%20enter%20the%20wild.";

// --- VIBE CARD COMPONENT (Internal) ---
const VibeCard = ({ icon: Icon, title, desc, delay, z, x, y }: any) => (
  <motion.div 
    initial={{ opacity: 0, x: x - 20, y: y + 20 }} 
    animate={{ opacity: 1, x: x, y: y }}
    transition={{ delay: delay, duration: 0.8, type: "spring" }}
    className="absolute w-48 p-4 bg-[#0d1f0d]/80 backdrop-blur-md border border-[#76ff03]/30 rounded-xl shadow-2xl flex flex-col gap-2"
    style={{ zIndex: z, left: 0, top: 0 }} 
  >
    <div className="flex items-center gap-2 text-[#76ff03] mb-1">
      <Icon size={16} />
      <span className="font-beast uppercase tracking-wider text-sm">{title}</span>
    </div>
    <p className="text-[#a5d6a7] text-xs font-mono leading-relaxed uppercase">
      {desc}
    </p>
  </motion.div>
);

const Home = () => {
  const fadeInUp: any = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <div className="bg-[#0d1f0d] text-[#e8f5e8] min-h-screen relative font-sans selection:bg-[#76ff03] selection:text-black overflow-x-hidden">
      
      {/* --- GLOBAL STYLES & ANIMATIONS --- */}
      <style>{`
        @keyframes float { 0%, 100% { transform: translate(0, 0); opacity: 0.5; } 50% { transform: translate(10px, -20px); opacity: 1; } }
        @keyframes fog-drift { 0% { transform: translateX(-10%); } 50% { transform: translateX(10%); } 100% { transform: translateX(-10%); } }
        .firefly {
          position: absolute; width: 4px; height: 4px; background-color: #76ff03; border-radius: 50%;
          opacity: 0; animation: float 6s infinite ease-in-out; will-change: transform, opacity; box-shadow: 0 0 10px #76ff03;
        }
        .fog-layer {
          background: radial-gradient(circle, rgba(46,125,50,0.15) 0%, rgba(0,0,0,0) 70%);
          animation: fog-drift 20s infinite linear; will-change: transform;
        }
      `}</style>

      {/* --- ATMOSPHERE LAYERS --- */}
      <div className="fixed inset-0 pointer-events-none z-0">
         <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
         <div className="absolute inset-0 fog-layer opacity-40 mix-blend-screen"></div>
         <div className="firefly" style={{ top: '20%', left: '10%', animationDelay: '0s' }}></div>
         <div className="firefly" style={{ top: '50%', left: '80%', animationDelay: '2s' }}></div>
         <div className="firefly" style={{ top: '80%', left: '30%', animationDelay: '4s' }}></div>
      </div>

      <div className="relative z-10">
        
        {/* ================= HERO SECTION ================= */}
        <section className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden bg-[#0d1f0d]">
          <div className="absolute inset-0 z-0 bg-cover bg-center opacity-40 grayscale-[30%]" style={{ backgroundImage: `url('${JUNGLE_BG_URL}')` }}></div>
          <div className="absolute inset-0 z-10 bg-[#050a05]/60 mix-blend-multiply"></div>
          <div className="absolute inset-0 z-20 pointer-events-none" style={{ background: 'radial-gradient(circle at center, transparent 0%, #0d1f0d 100%)', boxShadow: 'inset 0 0 200px 100px #0d1f0d' }}></div>

          <div className="relative z-30 container mx-auto px-6 flex flex-col xl:flex-row items-center justify-between gap-8 mt-10">
            {/* LEFT CARDS */}
            <div className="hidden xl:block relative w-[280px] h-[300px]">
              <VibeCard icon={Dumbbell} title="Raw Arsenal" desc="No machines doing the work for you. Free weights and gravity only." delay={1.0} z={10} x={0} y={120} />
              <VibeCard icon={Skull} title="No Ego" desc="Leave your pride at the door. Here, respect is earned by sweat." delay={1.2} z={20} x={40} y={60} />
              <VibeCard icon={Zap} title="High Voltage" desc="Loud music. Heavy atmosphere. A habitat for pure energy." delay={1.4} z={30} x={80} y={0} />
            </div>

            {/* CENTER CONTENT */}
            <div className="flex flex-col items-center text-center z-40">
              
              {/* LOGO */}
              <motion.img
                src={logoImg} 
                alt="Wilds Gym Logo"
                initial={{ rotateY: -180, opacity: 0, scale: 0.8 }}
                animate={{ rotateY: 0, opacity: 1, scale: 1 }}
                transition={{ duration: 1.5, type: "spring", stiffness: 60, delay: 0.2 }}
                style={{ perspective: 1000 }}
                className="w-40 md:w-56 mb-8 drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
              />
              
              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1.5 }} className="flex flex-col items-center">
                <h1 className="text-6xl md:text-9xl font-beast font-black uppercase text-[#e8f5e8] leading-[0.9] tracking-tighter mb-4 drop-shadow-lg">WILDS GYM</h1>
                <h2 className="text-xl md:text-3xl text-[#e8f5e8] font-beast uppercase tracking-widest mb-2">Train Where the Wild Lives</h2>
                
                <div className="flex flex-col items-center gap-4 mb-12">
                  <div className="h-[2px] w-20 bg-[#76ff03]"></div>
                  <p className="text-[#a5d6a7] font-sans text-sm md:text-base tracking-[0.2em] uppercase font-bold">Strength. Discipline. Community.</p>
                  <p className="text-[#76ff03] font-mono text-xs uppercase tracking-[0.3em]">Paris Street — Sweifieh</p>
                </div>

                {/* BUTTON */}
                <div className="mb-24">
                    <a href={WHATSAPP_LINK} className="inline-flex items-center gap-4 bg-[#76ff03] text-[#0d1f0d] px-12 py-5 font-beast font-black text-xl uppercase tracking-widest hover:bg-[#1AFF64] hover:scale-105 transition-all shadow-lg shadow-[#76ff03]/20 relative z-50">
                        Enter The Wild <ArrowRight size={24} />
                    </a>
                </div>
              </motion.div>
            </div>

            {/* RIGHT CARDS */}
            <div className="hidden xl:block relative w-[280px] h-[300px]">
              <VibeCard icon={Users} title="The Pack" desc="You don't hunt alone. Iron sharpens iron. We move as one." delay={1.4} z={30} x={0} y={0} />
              <VibeCard icon={Flame} title="Forged" desc="Heat and pressure. That is how diamonds—and beasts—are made." delay={1.2} z={20} x={40} y={60} />
              <VibeCard icon={Leaf} title="Primal" desc="No AC. No neon. Just air, steel, and the will to survive." delay={1.0} z={10} x={80} y={120} />
            </div>
          </div>

          {/* Wooden Log at bottom */}
          <div className="absolute bottom-0 left-0 w-full h-16 md:h-24 z-40 bg-cover bg-center border-t-4 border-[#0d1f0d]" style={{ backgroundImage: `url('${WOOD_LOG_URL}')`, boxShadow: '0px -20px 50px 0px rgba(13, 31, 13, 1)' }}>
            <div className="absolute inset-0 bg-[#0d1f0d]/60 mix-blend-multiply"></div>
          </div>
        </section>

        {/* ================= INTRO: NOT A GYM. A HABITAT. ================= */}
        <section className="py-24 px-6 relative z-10 bg-[#0a140a] border-b border-[#2e7d32]/30">
            <div className="container mx-auto grid lg:grid-cols-2 gap-16 items-center">
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
                    <h2 className="text-5xl md:text-7xl font-beast font-black uppercase text-[#e8f5e8] mb-8 leading-[0.9]">
                        Not a Gym. <br/> <span className="text-[#76ff03]">A Habitat.</span>
                    </h2>
                    <div className="space-y-6 text-[#a5d6a7] font-mono text-sm md:text-base uppercase leading-relaxed">
                        <p>Most gyms are showrooms for egos. They are bright, sterile, and safe. Wilds Gym in Sweifieh, Amman is different.</p>
                        <p className="border-l-2 border-[#76ff03] pl-4 text-white">We don’t train for the mirror. We train for real strength.</p>
                        <p>When you step inside our gym on Paris Street, you leave noise behind. This is a place of iron, sweat, and focus. You come here to immerse yourself in the process — not just to count reps.</p>
                        <p className="text-[#76ff03] font-bold">Wilds is a modern fitness center in Amman for people who want more than machines. It’s for those who want progress.</p>
                    </div>
                </motion.div>
                
                {/* Decorative Element */}
                <div className="relative h-[400px] border border-[#2e7d32] p-4 rotate-3">
                    <div className="w-full h-full bg-[#0d1f0d] relative overflow-hidden">
                        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
                        <img src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070" className="w-full h-full object-cover grayscale contrast-125 opacity-60" alt="Habitat Atmosphere" />
                        <div className="absolute bottom-4 right-4 text-[#76ff03] font-beast text-6xl opacity-20">HABITAT</div>
                    </div>
                </div>
            </div>
        </section>

        {/* ================= WHAT MAKES WILDS DIFFERENT ================= */}
        <section className="py-24 px-6 relative z-10">
            <div className="container mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-6xl font-beast font-black uppercase text-[#e8f5e8] mb-4">What Makes Wilds <br/> Gym Different</h2>
                    <div className="w-24 h-1 bg-[#76ff03] mx-auto"></div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                        { icon: Dumbbell, title: "Raw Arsenal", desc: "Heavy dumbbells. Calibrated plates. Monolifts. No plastic shortcuts. Just real steel. A strength-focused gym in Amman built for serious training.", color: "text-[#76ff03]" },
                        { icon: Flame, title: "Recovery Zone", desc: "Post-training rituals. High-heat sauna and jacuzzi to repair the body and reset the mind. Train hard. Recover properly.", color: "text-[#ff4d00]" },
                        { icon: Users, title: "The Tribe", desc: "You are shaped by the people around you. At Wilds Gym, you train with a community that respects effort and progress. This is not a lonely gym.", color: "text-[#ffd700]" },
                        { icon: Brain, title: "Mental Warfare", desc: "We coach more than muscles. Discipline beats motivation. Structure beats guessing. Our trainers guide both body and mindset.", color: "text-[#00bcd4]" },
                        { icon: Moon, title: "Atmosphere", desc: "Dark lighting. Heavy bass. A focused environment that removes distraction. A gym in Sweifieh designed for presence and performance.", color: "text-[#d946ef]" },
                        { icon: Swords, title: "No Comfort", desc: "Comfort is the enemy of growth. We removed it. You’re welcome.", color: "text-[#ef4444]" }
                    ].map((item, i) => (
                        <motion.div 
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-[#050a05] border border-[#2e7d32] p-8 hover:border-[#76ff03] transition-all group hover:-translate-y-2"
                        >
                            <item.icon className={`${item.color} mb-6`} size={40} />
                            <h3 className="text-2xl font-beast uppercase text-[#f1f8e9] mb-3">{item.title}</h3>
                            <p className="text-[#a5d6a7] font-mono text-xs uppercase leading-relaxed border-l border-[#2e7d32] pl-4 group-hover:border-[#76ff03]">
                                {item.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>

        {/* ================= FACILITIES (THE ARSENAL) ================= */}
        <section className="py-24 px-6 bg-[#0a140a] border-y border-[#2e7d32]/50">
            <div className="container mx-auto grid lg:grid-cols-2 gap-16 items-center">
                <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                    <h2 className="text-4xl md:text-6xl font-beast font-black uppercase text-[#e8f5e8] mb-8">Our Facilities <br/> <span className="text-[#76ff03]">The Arsenal</span></h2>
                    <p className="text-[#a5d6a7] font-mono text-sm uppercase mb-6">Wilds Gym in Amman includes:</p>
                    <div className="space-y-4">
                        {[
                            "Free-weight and strength zones", 
                            "Powerlifting equipment", 
                            "Cardio machines", 
                            "Group training areas", 
                            "Locker rooms & showers", 
                            "Sauna", 
                            "Jacuzzi", 
                            "Nutrition consultation space"
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-4 group">
                                <div className="w-8 h-[1px] bg-[#2e7d32] group-hover:bg-[#76ff03] transition-colors"></div>
                                <span className="font-beast uppercase text-sm tracking-widest text-[#a5d6a7] group-hover:text-white transition-colors">{item}</span>
                            </div>
                        ))}
                    </div>
                    <div className="mt-8">
                        <p className="text-[#76ff03] font-beast text-xl uppercase">"Everything you need."</p>
                        <p className="text-[#76ff03] font-beast text-xl uppercase">"Nothing you don’t."</p>
                    </div>
                </motion.div>
                
                <div className="relative h-[500px] border-2 border-[#2e7d32] p-2">
                    <div className="w-full h-full bg-[#0d1f0d] relative overflow-hidden">
                        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
                        <img src={IMG_FACILITY} className="w-full h-full object-cover grayscale brightness-50" alt="Gym Interior" />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <Dumbbell className="text-[#2e7d32] opacity-40" size={200} />
                        </div>
                        <div className="absolute bottom-8 left-8">
                            <p className="font-mono text-xs text-[#76ff03] uppercase tracking-widest">Location: Paris Street</p>
                            <p className="font-mono text-xs text-[#76ff03] uppercase tracking-widest">Status: Ready for War</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* ================= 3D CAROUSEL SECTION ================= */}
        <section className="py-24 relative z-10 border-b border-[#2e7d32]/30 bg-[#050a05]">
            <div className="container mx-auto px-6 mb-12 text-center">
                <h2 className="text-4xl md:text-5xl font-beast font-black uppercase text-[#e8f5e8] mb-4">
                    Witness <span className="text-[#76ff03]">The Habitat</span>
                </h2>
                <div className="w-16 h-1 bg-[#76ff03] mx-auto"></div>
            </div>
            
            {/* The 3D Component */}
            <ThreeDPhotoCarousel />
        </section>

        {/* ================= MEMBERSHIPS ================= */}
        <section className="py-24 px-6 relative z-10">
            <div className="container mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-6xl font-beast font-black uppercase text-[#e8f5e8] mb-4">Duration Equals Results</h2>
                    <p className="text-[#76ff03] font-mono text-sm uppercase tracking-widest">Choose Your Commitment</p>
                    <p className="text-[#a5d6a7] font-mono text-xs uppercase mt-2">All memberships give access to Wilds Gym on Paris Street, Sweifieh.</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {[
                        { 
                            name: "Trial", 
                            price: "50", 
                            sub: "No long-term commitment", 
                            features: ["Full gym access", "Locker & shower", "Standard induction"], 
                            color: "border-[#2e7d32]" 
                        },
                        { 
                            name: "The Pack", 
                            price: "135", 
                            sub: "Save 15 JOD", 
                            features: ["Full gym access", "Access to classes", "Community events"], 
                            color: "border-[#2e7d32]" 
                        },
                        { 
                            name: "The Predator", 
                            price: "240", 
                            sub: "Save 60 JOD", 
                            features: ["All Pack features", "1 guest pass per month", "Sauna & Jacuzzi", "Progress tracking"], 
                            color: "border-[#76ff03]", 
                            glow: true 
                        },
                        { 
                            name: "Apex Tribe", 
                            price: "420", 
                            sub: "Best Value (35/mo)", 
                            features: ["All Predator features", "Priority equipment access", "Complimentary gym wear", "Apex training strategy"], 
                            color: "border-[#ef4444]" 
                        }
                    ].map((tier, i) => (
                        <motion.div 
                            key={i}
                            whileHover={{ y: -10 }}
                            className={`bg-[#050a05] border-t-4 ${tier.color} p-8 flex flex-col relative group`}
                        >
                            {tier.glow && <div className="absolute inset-0 bg-[#76ff03]/5 pointer-events-none"></div>}
                            
                            <h3 className="text-2xl font-beast uppercase text-white mb-2">{tier.name}</h3>
                            <div className="mb-6">
                                <span className="text-3xl font-beast text-[#f1f8e9]">{tier.price}</span>
                                <span className="text-xs font-mono text-[#666] ml-1">JOD</span>
                                <p className="text-[#76ff03] font-mono text-[10px] uppercase mt-1">{tier.sub}</p>
                            </div>
                            
                            <ul className="space-y-3 mb-8 flex-grow">
                                {tier.features.map((feat, j) => (
                                    <li key={j} className="flex items-start gap-2 text-xs font-mono uppercase text-[#a5d6a7]">
                                        <Check size={12} className="mt-0.5 text-[#76ff03] shrink-0" /> {feat}
                                    </li>
                                ))}
                            </ul>
                            
                            <button className="w-full border border-[#333] py-3 font-beast uppercase text-sm tracking-widest text-[#666] group-hover:bg-[#76ff03] group-hover:text-black group-hover:border-[#76ff03] transition-all">
                                Begin The Hunt
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>

        {/* ================= FOOTER ================= */}
        <div className="py-12 bg-[#050a05] border-t border-[#2e7d32] text-center">
            <div className="container mx-auto flex flex-wrap justify-center gap-8 text-[#4caf50] font-mono text-xs uppercase tracking-[0.2em]">
               <span className="flex items-center gap-2"><MapPin size={14}/> Paris Street, Sweifieh</span>
               <span className="flex items-center gap-2"><Clock size={14}/> 06:00–23:00 Daily</span>
            </div>
        </div>

      </div>
    </div>
  );
};

export default Home;