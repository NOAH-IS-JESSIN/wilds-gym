import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  Dumbbell, Users, Crown, Utensils, Droplets, 
  MapPin, Clock, Phone, ArrowRight 
} from 'lucide-react';

// --- ASSETS ---
const IMG_HERO = "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=2074"; 
const IMG_OPEN_GYM = "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070"; 
const IMG_GROUP = "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070"; 
const IMG_PT = "https://images.unsplash.com/photo-1507398941214-572c25f4b1dc?q=80&w=2073"; 
const IMG_NUTRITION = "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=1887"; 
const IMG_RECOVERY = "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=2070"; 
const VINE_TEXTURE = "https://imagparent"; 

const Services = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  
  // Reduced parallax intensity for smoother scrolling
  const yParallax = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const yVines = useTransform(scrollYProgress, [0, 1], [0, -100]);

  const fadeInUp: any = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <div ref={containerRef} className="bg-[#0d1f0d] text-[#e8f5e8] pt-20 overflow-x-hidden relative font-sans selection:bg-[#76ff03] selection:text-black">
      
      {/* --- OPTIMIZED CSS ANIMATIONS --- */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translate(0, 0); opacity: 0.5; }
          50% { transform: translate(10px, -20px); opacity: 1; }
        }
        @keyframes fog-drift {
          0% { transform: translateX(-10%); }
          50% { transform: translateX(10%); }
          100% { transform: translateX(-10%); }
        }
        .firefly {
          position: absolute;
          width: 4px;
          height: 4px;
          background-color: #76ff03;
          border-radius: 50%;
          opacity: 0;
          animation: float 6s infinite ease-in-out;
          will-change: transform, opacity;
          box-shadow: 0 0 10px #76ff03;
        }
        .fog-layer {
          background: radial-gradient(circle, rgba(46,125,50,0.15) 0%, rgba(0,0,0,0) 70%);
          animation: fog-drift 20s infinite linear;
          will-change: transform;
        }
      `}</style>

      {/* --- LIGHTWEIGHT AMBIENT BACKGROUND --- */}
      <div className="fixed inset-0 pointer-events-none z-0">
         <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
         
         {/* Green Fog */}
         <div className="absolute inset-0 fog-layer opacity-40 mix-blend-screen"></div>

         {/* CSS Powered Fireflies */}
         <div className="firefly" style={{ top: '20%', left: '10%', animationDelay: '0s' }}></div>
         <div className="firefly" style={{ top: '50%', left: '80%', animationDelay: '2s' }}></div>
         <div className="firefly" style={{ top: '80%', left: '30%', animationDelay: '4s' }}></div>
         
         <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[#76ff03] blur-[250px] opacity-5"></div>
      </div>

      {/* --- HERO --- */}
      <section className="relative h-[90vh] flex flex-col justify-center items-center text-center px-6 overflow-hidden border-b border-[#1b5e20]">
        <motion.div style={{ y: yParallax }} className="absolute inset-0 z-0 will-change-transform">
             <div className="absolute inset-0 bg-black/50 z-10"></div>
             <img src={IMG_HERO} className="w-full h-full object-cover grayscale-[0.3]" alt="Jungle Canopy" />
        </motion.div>

        {/* Static Vines */}
        <img src={VINE_TEXTURE} className="absolute top-0 left-10 w-32 md:w-64 opacity-60 z-20 pointer-events-none drop-shadow-lg" />
        
        <motion.img 
            style={{ y: yVines }}
            src={VINE_TEXTURE} 
            className="absolute top-0 right-10 w-40 md:w-80 opacity-60 z-20 pointer-events-none scale-x-[-1] drop-shadow-lg will-change-transform" 
        />

        <div className="relative z-30 max-w-5xl">
          <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
            <h2 className="text-[#76ff03] font-beast text-lg md:text-xl uppercase tracking-[0.5em] mb-6">
              Welcome to the Wilds
            </h2>
            <h1 className="text-5xl md:text-[7rem] font-beast font-black uppercase leading-[0.9] tracking-tighter mb-8 text-[#f1f8e9]">
              Unleash Your <br/> <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#4caf50] to-[#1b5e20]">Primal Strength</span> <br/> in Sweifieh, Amman
            </h1>
            <div className="bg-black/60 p-6 border-l-4 border-[#76ff03] max-w-3xl mx-auto backdrop-blur-sm">
                <p className="text-lg md:text-xl font-mono uppercase leading-relaxed text-[#a5d6a7] mb-4">
                  From strength training to recovery and nutrition, Wilds Gym on Paris Street in Sweifieh offers everything you need to train better, feel stronger, and build real results.
                </p>
                <p className="text-sm font-mono text-[#76ff03] uppercase">
                  Wilds Gym is a modern fitness center in Amman designed for people who want more than machines — they want progress.
                </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- SERVICE 1: OPEN GYM --- */}
      <section className="py-24 px-6 relative z-10">
        <div className="container mx-auto grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="relative group">
                <div className="aspect-[4/5] overflow-hidden border-2 border-[#2e7d32] rounded-sm relative z-10 bg-[#0d1f0d]">
                    <img loading="lazy" src={IMG_OPEN_GYM} className="w-full h-full object-cover grayscale brightness-75 group-hover:scale-105 transition-transform duration-700" alt="Open Gym" />
                </div>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
                <div className="flex items-center gap-4 mb-4">
                    <Dumbbell className="text-[#76ff03]" size={32} />
                    <span className="text-[#76ff03] font-mono text-xs uppercase tracking-widest">The Free Roam Territory</span>
                </div>
                <h2 className="text-4xl md:text-6xl font-beast font-black uppercase mb-6 text-[#e8f5e8]">Open Gym Access <br/> in Sweifieh</h2>
                <div className="space-y-6 text-[#a5d6a7] font-mono text-sm uppercase leading-relaxed">
                    <p>Wilds Gym provides full open-gym access for members who prefer to train independently.</p>
                    <p>Our gym in Sweifieh, Amman includes:</p>
                    <ul className="grid grid-cols-1 gap-2 border-l-2 border-[#2e7d32] pl-6 py-2">
                        {["Strength & free-weight zones", "Cardio machines", "Clean, organized workout areas", "Long opening hours (06:00–23:00)"].map((item, i) => (
                            <li key={i} className="text-[#f1f8e9]">• {item}</li>
                        ))}
                    </ul>
                    <p className="text-[#76ff03] text-lg font-beast tracking-wide">"You train at your own pace. We provide the wilderness."</p>
                    <p className="text-xs text-[#a5d6a7] opacity-80 mt-4">
                        This service is ideal for experienced lifters and anyone who wants flexible training in a high-quality gym environment in Amman.
                    </p>
                </div>
            </motion.div>
        </div>
      </section>

      {/* --- SERVICE 2: GROUP TRAINING --- */}
      <section className="py-24 px-6 relative z-10 bg-[#1b5e20]/10 border-y border-[#2e7d32]/30">
        <div className="container mx-auto grid lg:grid-cols-2 gap-16 items-center">
            <motion.div className="order-2 lg:order-1" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
                <div className="flex items-center gap-4 mb-4">
                    <Users className="text-[#76ff03]" size={32} />
                    <span className="text-[#76ff03] font-mono text-xs uppercase tracking-widest">The Pack Territory</span>
                </div>
                <h2 className="text-4xl md:text-6xl font-beast font-black uppercase mb-6 text-[#e8f5e8]">Group Classes & <br/> Coached Sessions</h2>
                <div className="space-y-6 text-[#a5d6a7] font-mono text-sm uppercase leading-relaxed">
                    <p>For those who thrive in a tribe, Wilds Gym offers group training sessions led by professional coaches. Group classes help you:</p>
                    <ul className="space-y-2 mb-4">
                        {["Stay consistent", "Train with energy", "Learn proper technique", "Feel part of a community"].map((item, i) => (
                            <li key={i} className="flex gap-2 items-center"><span className="w-1 h-1 bg-[#76ff03] rounded-full"></span> {item}</li>
                        ))}
                    </ul>
                    <div className="grid grid-cols-2 gap-4">
                         <div className="bg-[#0d1f0d] p-4 border border-[#76ff03]/30 text-center hover:border-[#76ff03] transition-colors">
                             <h4 className="text-[#76ff03] font-beast uppercase mb-1">Consistency</h4>
                             <p className="text-[10px]">Stay with the pack</p>
                         </div>
                         <div className="bg-[#0d1f0d] p-4 border border-[#76ff03]/30 text-center hover:border-[#76ff03] transition-colors">
                             <h4 className="text-[#76ff03] font-beast uppercase mb-1">Energy</h4>
                             <p className="text-[10px]">Wild Atmosphere</p>
                         </div>
                    </div>
                    <p className="text-[#76ff03] text-lg font-beast tracking-wide">"The pack makes you stronger. The jungle makes you wild."</p>
                    <p className="text-xs italic text-[#a5d6a7]">Group training is perfect for anyone in Amman who wants structure, motivation, and guidance without full personal training.</p>
                </div>
            </motion.div>

            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="relative group order-1 lg:order-2">
                <div className="aspect-[16/9] overflow-hidden border-2 border-[#76ff03]/50 rounded-sm relative z-10 bg-[#0d1f0d]">
                    <img loading="lazy" src={IMG_GROUP} className="w-full h-full object-cover grayscale brightness-50 contrast-125 group-hover:scale-105 transition-transform duration-700" alt="Group Training" />
                </div>
            </motion.div>
        </div>
      </section>

      {/* --- SERVICE 3: PERSONAL TRAINING --- */}
      <section className="py-24 px-6 relative z-10">
        <div className="container mx-auto max-w-6xl">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-center mb-16">
                <div className="inline-flex items-center gap-2 border border-[#76ff03] px-4 py-2 rounded-full mb-6 bg-[#76ff03]/5">
                    <Crown size={16} className="text-[#76ff03]" />
                    <span className="text-[#76ff03] font-beast text-xs uppercase tracking-widest">The Alpha Path</span>
                </div>
                <h2 className="text-5xl md:text-8xl font-beast font-black uppercase mb-6 text-[#f1f8e9]">
                    Personal Training <span className="text-[#76ff03]">in Amman</span>
                </h2>
                <p className="text-[#a5d6a7] font-mono text-lg uppercase tracking-widest max-w-2xl mx-auto">
                    "For those who demand real change, our personal training service offers focused, one-on-one coaching."
                </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12">
                <div className="bg-[#0d1f0d] border border-[#76ff03]/30 p-10 relative group">
                    <h3 className="text-3xl font-beast uppercase text-[#f1f8e9] mb-8">With a Wilds personal trainer:</h3>
                    <ul className="space-y-4 mb-8">
                        {["One-on-one Guidance", "A custom training plan", "Technique Mastery", "Motivation and accountability"].map((item, i) => (
                             <li key={i} className="flex items-center gap-4 text-[#a5d6a7] font-mono text-sm uppercase">
                                 <div className="w-2 h-2 bg-[#76ff03] rotate-45"></div> {item}
                             </li>
                        ))}
                    </ul>
                    <h4 className="text-[#76ff03] font-bold text-xs uppercase mb-2">Ideal for:</h4>
                    <p className="text-[#a5d6a7] text-xs uppercase leading-relaxed">Beginners • Fat loss goals • Muscle building • Returning after injury • Performance improvement</p>
                </div>
                
                <div className="relative aspect-video border-2 border-[#76ff03]/20 bg-[#0d1f0d]">
                    <img loading="lazy" src={IMG_PT} className="w-full h-full object-cover grayscale brightness-50" alt="Personal Training" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                    <div className="absolute bottom-6 left-6">
                        <p className="text-[#76ff03] font-beast text-2xl uppercase">"Become the Apex."</p>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* --- SERVICE 4 & 5: NUTRITION & RECOVERY --- */}
      <section className="py-24 px-6 relative z-10 border-t border-[#2e7d32]/30">
         <div className="container mx-auto grid lg:grid-cols-2 gap-8">
             
             {/* NUTRITION */}
             <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="relative h-[500px] border border-[#4caf50]/30 group overflow-hidden bg-[#0d1f0d]">
                 <img loading="lazy" src={IMG_NUTRITION} className="absolute inset-0 w-full h-full object-cover grayscale brightness-[0.4] group-hover:scale-105 transition-transform duration-700" alt="Nutrition" />
                 <div className="absolute inset-0 bg-gradient-to-t from-black via-[#0d1f0d]/80 to-transparent"></div>
                 
                 <div className="absolute bottom-0 left-0 p-10 z-10">
                     <div className="flex items-center gap-3 mb-4 text-[#4caf50]">
                         <Utensils size={24} /> <span className="font-mono text-xs uppercase tracking-widest">The Fuel of the Wild</span>
                     </div>
                     <h3 className="text-4xl font-beast font-black uppercase text-[#e8f5e8] mb-4">Nutritionist Services</h3>
                     <p className="text-[#a5d6a7] text-sm mb-4 font-mono uppercase">"Training alone is not enough. Your results depend on how you eat and recover."</p>
                     <ul className="text-xs font-mono uppercase text-[#4caf50] space-y-2 mb-4">
                         <li>+ Weight Loss Strategies</li>
                         <li>+ Muscle Gain Meal Plans</li>
                         <li>+ Healthy Lifestyle Guidance</li>
                         <li>+ Sustainable Habits</li>
                     </ul>
                     <p className="text-[#f1f8e9] text-xs font-bold uppercase">This connects your workouts to real, visible results.</p>
                 </div>
             </motion.div>

             {/* RECOVERY */}
             <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="relative h-[500px] border border-[#00bcd4]/30 group overflow-hidden bg-[#0d1f0d]">
                 <img loading="lazy" src={IMG_RECOVERY} className="absolute inset-0 w-full h-full object-cover grayscale brightness-[0.4] group-hover:scale-105 transition-transform duration-700" alt="Recovery" />
                 <div className="absolute inset-0 bg-gradient-to-t from-black via-[#0d1f0d]/80 to-transparent"></div>
                 
                 <div className="absolute bottom-0 left-0 p-10 z-10">
                     <div className="flex items-center gap-3 mb-4 text-[#00bcd4]">
                         <Droplets size={24} /> <span className="font-mono text-xs uppercase tracking-widest">The Sacred Springs</span>
                     </div>
                     <h3 className="text-4xl font-beast font-black uppercase text-[#e8f5e8] mb-4">Sauna & Jacuzzi</h3>
                     <p className="text-[#a5d6a7] text-sm mb-4 font-mono uppercase">"Recovery is part of progress. Reduce soreness and improve circulation."</p>
                     <div className="flex gap-4 mb-4">
                         <div className="border border-[#00bcd4] px-4 py-2 text-[#00bcd4] font-beast text-xs uppercase">Sauna: Relaxation</div>
                         <div className="border border-[#00bcd4] px-4 py-2 text-[#00bcd4] font-beast text-xs uppercase">Jacuzzi: Recovery</div>
                     </div>
                     <p className="text-[#f1f8e9] font-beast text-lg uppercase">Train hard. Recover well.</p>
                 </div>
             </motion.div>
         </div>
      </section>

      {/* --- GUIDE: CHOOSE YOUR PATH --- */}
      <section className="py-24 px-6 bg-[#0d1f0d]">
        <div className="container mx-auto text-center mb-12">
            <h2 className="text-4xl md:text-6xl font-beast font-black uppercase mb-4 text-[#f1f8e9]">Choose Your Path</h2>
            <div className="w-24 h-1 bg-[#76ff03] mx-auto mb-8"></div>
            <p className="text-[#a5d6a7] font-mono text-sm uppercase max-w-2xl mx-auto">
                "You don’t need to decide everything online. Our team in Sweifieh will help you choose what fits your goals."
            </p>
        </div>

        <div className="container mx-auto grid md:grid-cols-4 gap-4">
             {[
                 { title: "Newcomers", desc: "Personal Training or Group Classes", color: "text-[#76ff03]" },
                 { title: "Explorers", desc: "Open Gym + Classes", color: "text-[#f1f8e9]" },
                 { title: "Apex Hunters", desc: "Open Gym (Free Roam)", color: "text-[#ffd700]" },
                 { title: "All Tribe", desc: "Nutrition & Sacred Springs", color: "text-[#00bcd4]" },
             ].map((path, i) => (
                 <div key={i} className="bg-[#1b5e20]/20 border border-[#2e7d32] p-8 hover:bg-[#1b5e20]/40 transition-colors">
                     <h4 className={`font-beast text-xl uppercase mb-2 ${path.color}`}>{path.title}</h4>
                     <p className="text-[#a5d6a7] font-mono text-xs uppercase">{path.desc}</p>
                 </div>
             ))}
        </div>
      </section>

      {/* --- CTA: STEP INTO THE WILDS --- */}
      <section className="py-32 relative z-10 border-t border-[#2e7d32] text-center overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
            <h2 className="text-5xl md:text-8xl font-beast font-black uppercase text-[#f1f8e9] mb-8 tracking-tighter drop-shadow-xl">
                Step Into <span className="text-[#76ff03]">The Wilds</span>
            </h2>
            <p className="text-[#a5d6a7] font-mono text-lg uppercase tracking-widest max-w-2xl mx-auto mb-12">
                Visit Wilds Gym on Paris Street in Sweifieh, meet your tribe, and see where progress is forged.
            </p>
            
            <a href="https://wa.me/962798885011" className="group relative inline-flex items-center gap-6 bg-[#0d1f0d] border-2 border-[#76ff03] text-[#76ff03] px-16 py-8 font-beast font-black text-3xl uppercase tracking-widest overflow-hidden hover:bg-[#76ff03] hover:text-[#0d1f0d] transition-all duration-300 shadow-lg">
                <span className="relative z-10 flex items-center gap-4">Enter The Wilds <ArrowRight size={32} /></span>
            </a>
            
            <div className="mt-16 flex flex-wrap justify-center gap-12 text-[#4caf50] font-mono text-xs uppercase tracking-[0.2em] bg-black/50 inline-block px-12 py-6 rounded-sm border border-[#2e7d32]">
               <span className="flex items-center gap-3"><MapPin size={16}/> Paris Street, Sweifieh – Amman</span>
               <span className="flex items-center gap-3"><Clock size={16}/> Open Daily 06:00–23:00</span>
               <span className="flex items-center gap-3"><Phone size={16}/> 079 888 5011</span>
            </div>
        </div>
      </section>

    </div>
  );
};

export default Services;