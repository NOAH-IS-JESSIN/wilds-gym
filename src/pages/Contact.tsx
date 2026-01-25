// 1. Removed 'React' from imports
import { useState, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { 
  Flame, MapPin, Phone, Mail, Share2, ArrowRight, 
  CheckCircle2, ChevronDown, ChevronUp, Shield 
} from 'lucide-react';

// --- ASSETS ---
const IMG_TREE = "https://images.unsplash.com/photo-1470058869958-2a77ade41c02?w=500&auto=format&fit=crop";
// 2. Deleted the unused 'const TEXTURE' line entirely

const Contact = () => {
  const containerRef = useRef(null);
  const formRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const yParallax = useTransform(scrollYProgress, [0, 1], [0, 150]);

  // --- FORM STATE ---
  const [formData, setFormData] = useState({ name: '', signal: '', type: 'Join Wilds Gym (Membership)', message: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  
  const filledFields = Object.values(formData).filter(val => val.length > 0).length;
  const fireIntensity = (filledFields / 4); 

  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setTimeout(() => setStatus('success'), 2000); 
  };

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div ref={containerRef} className="bg-[#0d1f0d] text-[#e8f5e8] pt-20 overflow-x-hidden relative font-sans selection:bg-[#76ff03] selection:text-black">
      
      {/* --- CSS ANIMATIONS --- */}
      <style>{`
        @keyframes torch-flicker {
          0%, 100% { opacity: 1; transform: scale(1); filter: drop-shadow(0 0 10px #76ff03); }
          50% { opacity: 0.8; transform: scale(1.05); filter: drop-shadow(0 0 20px #76ff03); }
        }
        @keyframes float {
          0%, 100% { transform: translate(0, 0); opacity: 0.5; }
          50% { transform: translate(10px, -20px); opacity: 1; }
        }
        .signal-fire {
          animation: torch-flicker 3s infinite ease-in-out;
        }
        .map-filter {
            filter: grayscale(1) invert(1) brightness(0.8) contrast(1.2) sepia(0.5) hue-rotate(70deg);
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
      `}</style>

      {/* --- ATMOSPHERE --- */}
      <div className="fixed inset-0 pointer-events-none z-0">
         <div className="absolute inset-0 opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
         
         {/* Fireflies */}
         <div className="firefly" style={{ top: '15%', left: '10%', animationDelay: '0s' }}></div>
         <div className="firefly" style={{ top: '45%', left: '85%', animationDelay: '2s' }}></div>
         <div className="firefly" style={{ top: '75%', left: '20%', animationDelay: '4s' }}></div>
         <div className="firefly" style={{ top: '30%', left: '60%', animationDelay: '1s' }}></div>

         <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[#76ff03] blur-[250px] opacity-10"></div>
      </div>

      {/* --- HERO: THE TRIBE AWAITS --- */}
      <section className="relative h-[80vh] flex flex-col justify-center items-center text-center px-6 overflow-hidden border-b border-[#2e7d32]">
        <motion.div style={{ y: yParallax }} className="absolute inset-0 z-0">
             <div className="absolute inset-0 bg-gradient-to-t from-[#0d1f0d] via-[#0d1f0d]/80 to-transparent z-10"></div>
             <img src={IMG_TREE} className="w-full h-full object-cover grayscale brightness-[0.4]" alt="Communication Tree" />
        </motion.div>

        <div className="relative z-20 max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="flex justify-center mb-6">
                <Flame className="text-[#76ff03] signal-fire" size={64} />
            </div>
            <h1 className="text-5xl md:text-8xl font-beast font-black uppercase text-[#e5e5e5] mb-6 tracking-tighter">
              The Tribe Awaits. <br/> <span className="text-[#76ff03]">Your Signal.</span>
            </h1>
            <p className="text-lg md:text-xl font-mono uppercase leading-relaxed text-[#a5d6a7] max-w-2xl mx-auto border-l-4 border-[#76ff03] pl-6 bg-black/50 py-4 backdrop-blur-sm">
              "In the wild, communication is survival. Choose your method. Send your signal. The team at Wilds Gym in Sweifieh, Amman will answer."
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- SECTION 1: TOTEMS (METHODS) --- */}
      <section className="py-24 px-6 relative z-10 -mt-20">
        <div className="container mx-auto grid md:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
                { title: "Signal Fire", icon: Flame, color: "text-[#76ff03]", border: "group-hover:border-[#76ff03]", action: scrollToForm },
                { title: "Tribal Drum", icon: Phone, color: "text-[#4caf50]", border: "group-hover:border-[#4caf50]", link: "tel:0798885011" },
                { title: "Sacred Territory", icon: MapPin, color: "text-[#ffd700]", border: "group-hover:border-[#ffd700]", link: "https://maps.app.goo.gl/cwcFScdnaMHdCiz97" },
                { title: "Messenger Bird", icon: Mail, color: "text-[#00bcd4]", border: "group-hover:border-[#00bcd4]", link: "mailto:info@wildsgym.jo" },
                { title: "Tribal Network", icon: Share2, color: "text-[#d946ef]", border: "group-hover:border-[#d946ef]", link: "https://www.instagram.com/wildgym.jo" },
            ].map((totem, i) => (
                <motion.a 
                    key={i}
                    href={totem.link}
                    onClick={totem.action}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className={`bg-[#050a05] border border-[#2e7d32] p-6 flex flex-col items-center justify-center gap-4 cursor-pointer group transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_20px_rgba(46,125,50,0.5)] ${totem.border} backdrop-blur-sm bg-opacity-80`}
                >
                    <totem.icon className={`${totem.color} transition-transform group-hover:scale-110`} size={32} />
                    <span className="font-beast uppercase text-sm tracking-widest text-[#f1f8e9]">{totem.title}</span>
                </motion.a>
            ))}
        </div>
      </section>

      {/* --- SECTION 2: LIGHT THE SIGNAL FIRE (FORM) --- */}
      <section ref={formRef} className="py-32 px-6 relative z-10">
        <div className="container mx-auto grid lg:grid-cols-2 gap-20 items-center">
            
            {/* VISUAL FIRE FEEDBACK */}
            <div className="order-2 lg:order-1 relative h-[600px] flex items-center justify-center bg-[#050a05] border border-[#2e7d32] overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
                
                <div className="relative z-10 text-center">
                    <motion.div 
                        animate={{ 
                            scale: 1 + fireIntensity, 
                            opacity: 0.5 + (fireIntensity * 0.5),
                            filter: `drop-shadow(0 0 ${fireIntensity * 50}px #76ff03)`
                        }}
                        className="mb-8 inline-block"
                    >
                        <Flame className="text-[#76ff03]" size={64 + (fireIntensity * 64)} />
                    </motion.div>
                    
                    <h3 className="text-3xl font-beast uppercase text-[#e5e5e5] mb-2">Signal Strength</h3>
                    <div className="w-64 h-2 bg-[#1b5e20] rounded-full mx-auto overflow-hidden">
                        <motion.div 
                            className="h-full bg-[#76ff03]" 
                            animate={{ width: `${fireIntensity * 100}%` }}
                        />
                    </div>
                    <p className="text-[#a5d6a7] font-mono text-xs uppercase mt-4">
                        {fireIntensity < 1 ? "Fill the stones to build the fire" : "The fire is roaring. Send the signal."}
                    </p>
                </div>
            </div>

            {/* FORM */}
            <div className="order-1 lg:order-2">
                <div className="mb-12">
                    <h2 className="text-4xl md:text-5xl font-beast font-black uppercase text-[#e5e5e5] mb-4">Light Your Signal Fire</h2>
                    <p className="text-[#a5d6a7] font-mono text-sm uppercase">"Send a message to Wilds Gym – Sweifieh, Amman."</p>
                </div>

                {status === 'success' ? (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-[#1b5e20]/20 border border-[#76ff03] p-8 text-center">
                        <CheckCircle2 className="text-[#76ff03] mx-auto mb-4" size={48} />
                        <h3 className="text-2xl font-beast uppercase text-white mb-2">Signal Received!</h3>
                        <p className="text-[#a5d6a7] font-mono text-xs uppercase">A pack elder will respond within 24 hours.</p>
                        <button onClick={() => setStatus('idle')} className="mt-6 text-[#76ff03] font-bold text-xs uppercase underline">Send another signal</button>
                    </motion.div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="group">
                            <label className="block text-[#666] font-mono text-[10px] uppercase mb-2 group-focus-within:text-[#76ff03] transition-colors">Your Name</label>
                            <input 
                                type="text" 
                                required
                                value={formData.name}
                                onChange={(e) => setFormData({...formData, name: e.target.value})}
                                className="w-full bg-[#050a05] border border-[#2e7d32] p-4 text-[#e5e5e5] font-beast focus:border-[#76ff03] outline-none transition-all"
                                placeholder="WHAT DO THEY CALL YOU?"
                            />
                        </div>

                        <div className="group">
                            <label className="block text-[#666] font-mono text-[10px] uppercase mb-2 group-focus-within:text-[#76ff03] transition-colors">Your Signal (Email or Phone)</label>
                            <input 
                                type="text" 
                                required
                                value={formData.signal}
                                onChange={(e) => setFormData({...formData, signal: e.target.value})}
                                className="w-full bg-[#050a05] border border-[#2e7d32] p-4 text-[#e5e5e5] font-beast focus:border-[#76ff03] outline-none transition-all"
                                placeholder="WHERE SHALL WE REPLY?"
                            />
                        </div>

                        <div className="group">
                            <label className="block text-[#666] font-mono text-[10px] uppercase mb-2 group-focus-within:text-[#76ff03] transition-colors">Purpose of Signal</label>
                            <select 
                                value={formData.type}
                                onChange={(e) => setFormData({...formData, type: e.target.value})}
                                className="w-full bg-[#050a05] border border-[#2e7d32] p-4 text-[#e5e5e5] font-beast focus:border-[#76ff03] outline-none transition-all uppercase appearance-none"
                            >
                                <option>Join Wilds Gym (Membership)</option>
                                <option>Personal Training</option>
                                <option>Classes & Programs</option>
                                <option>Nutritionist Services</option>
                                <option>Sauna & Jacuzzi</option>
                                <option>General Question</option>
                            </select>
                        </div>

                        <div className="group">
                            <label className="block text-[#666] font-mono text-[10px] uppercase mb-2 group-focus-within:text-[#76ff03] transition-colors">Your Message</label>
                            <textarea 
                                rows={4}
                                required
                                value={formData.message}
                                onChange={(e) => setFormData({...formData, message: e.target.value})}
                                className="w-full bg-[#050a05] border border-[#2e7d32] p-4 text-[#e5e5e5] font-mono text-sm focus:border-[#76ff03] outline-none transition-all"
                                placeholder="SPEAK YOUR TRUTH..."
                            />
                        </div>

                        <button 
                            type="submit" 
                            disabled={status === 'submitting'}
                            className="w-full bg-[#76ff03] text-black py-6 font-beast text-xl uppercase tracking-widest hover:bg-[#f1f8e9] transition-colors duration-300 flex items-center justify-center gap-4 group hover:shadow-[0_0_20px_rgba(118,255,3,0.4)]"
                        >
                            {status === 'submitting' ? 'Sending Signal...' : (
                                <>
                                    Light The Fire <Flame className="group-hover:scale-110 transition-transform" />
                                </>
                            )}
                        </button>
                    </form>
                )}
            </div>
        </div>
      </section>

      {/* --- SECTION 3: THE SACRED TERRITORY (MAP) --- */}
      <section className="py-24 px-6 bg-[#050a05] border-y border-[#2e7d32]">
          <div className="container mx-auto">
              <div className="grid lg:grid-cols-12 gap-12">
                  <div className="lg:col-span-4 space-y-8">
                      <h2 className="text-3xl md:text-5xl font-beast font-black uppercase text-[#e5e5e5]">Journey To <br/> Our Grounds</h2>
                      <div className="space-y-6">
                          <div className="flex gap-4">
                              <div className="bg-[#0d1f0d] p-3 h-fit border border-[#2e7d32]"><MapPin className="text-[#76ff03]"/></div>
                              <div>
                                  <h4 className="font-beast uppercase text-lg text-white">Wilds Gym Location</h4>
                                  <p className="text-[#a5d6a7] font-mono text-xs uppercase">Paris Street, Sweifieh<br/>Amman, Jordan</p>
                              </div>
                          </div>
                          <div className="flex gap-4">
                              <div className="bg-[#0d1f0d] p-3 h-fit border border-[#2e7d32]"><ArrowRight className="text-[#76ff03]"/></div>
                              <div>
                                  <h4 className="font-beast uppercase text-lg text-white">Arrival Tip</h4>
                                  <p className="text-[#a5d6a7] font-mono text-xs uppercase">Look for the Wilds Totem.<br/>Entrance via Main Gate.</p>
                              </div>
                          </div>
                      </div>
                      <a href="https://maps.app.goo.gl/cwcFScdnaMHdCiz97" target="_blank" rel="noreferrer" className="inline-block border border-[#76ff03] text-[#76ff03] px-8 py-4 font-beast uppercase text-sm tracking-widest hover:bg-[#76ff03] hover:text-black transition-colors">
                          Navigate To Wilds Gym
                      </a>
                  </div>

                  <div className="lg:col-span-8 h-[500px] border border-[#2e7d32] relative group overflow-hidden">
                      {/* Dark Mode Map Filter */}
                      <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3384.662589574542!2d35.8675!3d31.9565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzHCsDU3JzIzLjQiTiAzNcKwNTInMDMuMCJF!5e0!3m2!1sen!2sjo!4v1625680000000!5m2!1sen!2sjo" 
                        width="100%" 
                        height="100%" 
                        style={{ border: 0 }} 
                        allowFullScreen 
                        loading="lazy"
                        className="map-filter w-full h-full"
                        title="Wilds Gym Location"
                      ></iframe>
                      <div className="absolute inset-0 pointer-events-none border-[20px] border-[#0d1f0d]/50"></div>
                  </div>
              </div>
          </div>
      </section>

      {/* --- SECTION 4: TRIBAL COUNCIL FAQ --- */}
      <section className="py-24 px-6 bg-[#0d1f0d]">
          <div className="container mx-auto max-w-3xl">
              <h2 className="text-3xl font-beast font-black uppercase text-[#e5e5e5] mb-12 text-center">Wisdom From The Elders</h2>
              
              <div className="space-y-4">
                  {[
                      { q: "How do I join Wilds Gym in Amman?", a: "Visit us on Paris Street in Sweifieh or contact us using the form above. Our team will guide you through membership options." },
                      { q: "Can I bring a guest to the gym?", a: "Yes, guests are welcome. Contact us for details." },
                      { q: "What are Wilds Gym opening hours?", a: "Saturday–Thursday: 06:00 – 23:00. Friday: 14:00 – 21:00." },
                      { q: "Is parking available near Wilds Gym?", a: "Yes, parking is available near the gym." },
                      { q: "Do you offer personal training in Amman?", a: "Yes. Wilds Gym offers professional personal training for all fitness levels." }
                  ].map((item, i) => (
                      <div key={i} className="border border-[#2e7d32] bg-[#050a05]">
                          <button 
                            onClick={() => setActiveAccordion(activeAccordion === i ? null : i)}
                            className="w-full flex justify-between items-center p-6 text-left group"
                          >
                              <span className="font-beast uppercase text-[#a5d6a7] group-hover:text-[#76ff03] transition-colors">{item.q}</span>
                              {activeAccordion === i ? <ChevronUp size={20} className="text-[#76ff03]"/> : <ChevronDown size={20} className="text-[#666]"/>}
                          </button>
                          <AnimatePresence>
                              {activeAccordion === i && (
                                  <motion.div 
                                    initial={{ height: 0, opacity: 0 }} 
                                    animate={{ height: "auto", opacity: 1 }} 
                                    exit={{ height: 0, opacity: 0 }}
                                    className="px-6 pb-6 text-[#666] font-mono text-xs uppercase leading-relaxed border-t border-[#2e7d32]/30"
                                  >
                                      {item.a}
                                  </motion.div>
                              )}
                          </AnimatePresence>
                      </div>
                  ))}
              </div>
          </div>
      </section>

      {/* --- SECTION 5: TEAM CONTACT --- */}
      <section className="py-24 px-6 border-t border-[#2e7d32] bg-[#050a05]">
         <div className="container mx-auto max-w-6xl">
             <div className="text-center mb-16">
                 <h2 className="text-3xl md:text-5xl font-beast font-black uppercase text-[#e5e5e5]">Pack Leaders</h2>
                 <p className="text-[#666] font-mono text-xs uppercase">Contact The Team</p>
             </div>

             <div className="grid md:grid-cols-3 gap-8">
                 {[
                     { role: "General Manager", email: "management@wildsgym.jo", icon: Shield },
                     { role: "Head Trainer", email: "training@wildsgym.jo", icon: Flame },
                     { role: "Membership Team", email: "join@wildsgym.jo", icon: CheckCircle2 },
                 ].map((elder, i) => (
                     <div key={i} className="bg-[#0d1f0d] p-8 border border-[#2e7d32] text-center hover:border-[#76ff03] transition-colors group">
                         <elder.icon className="mx-auto text-[#2e7d32] group-hover:text-[#76ff03] transition-colors mb-6" size={40} />
                         <h4 className="font-beast text-xl uppercase text-white mb-2">{elder.role}</h4>
                         <a href={`mailto:${elder.email}`} className="text-[#666] font-mono text-xs uppercase hover:text-white transition-colors">
                             {elder.email}
                         </a>
                     </div>
                 ))}
             </div>
         </div>
      </section>

      {/* --- BOTTOM SUMMARY --- */}
      <section className="py-20 px-6 bg-[#0d1f0d] text-center border-t border-[#2e7d32]/50">
          <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl font-beast font-black uppercase text-[#e5e5e5] mb-6">Wilds Gym — Sweifieh, Amman</h2>
              <p className="text-[#a5d6a7] font-mono text-xs uppercase leading-relaxed mb-8">
                  Wilds Gym is a modern fitness center in Amman built for people who want real results.
                  We offer: Open gym training, Group classes, Personal training, Nutritionist services, Sauna & Jacuzzi.
              </p>
              <p className="text-[#76ff03] font-beast text-xl uppercase mb-8">"You bring the will. We provide the space."</p>
              
              <div className="grid md:grid-cols-2 gap-8 text-[#666] font-mono text-xs uppercase">
                  <div>
                      <h4 className="text-white mb-2 font-bold">Contact Details</h4>
                      <p>Paris Street, Sweifieh – Amman</p>
                      <p>📞 079 888 5011</p>
                      <p>📧 info@wildsgym.com</p>
                  </div>
                  <div>
                      <h4 className="text-white mb-2 font-bold">Hours</h4>
                      <p>Saturday – Thursday: 06:00 – 23:00</p>
                      <p>Friday: 14:00 – 21:00</p>
                  </div>
              </div>
          </div>
      </section>

    </div>
  );
};

export default Contact;