import { useState, useRef, useEffect } from 'react';
import { motion, useScroll, AnimatePresence } from 'framer-motion';
import { 
  Flame, MapPin, Phone, MessageSquare, Share2, ArrowRight, ArrowLeft,
  CheckCircle2, ChevronDown, ChevronUp, Shield 
} from 'lucide-react';
import { useTranslation } from 'react-i18next'; // <--- HOOK

// --- SEO ---
import Head from '../components/seo/Head';

// --- ASSETS ---
import HERO_VIDEO from '../assets/Cinematic_Jungle_Mist.mp4'; 

const Contact = () => {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === 'ar';

  const containerRef = useRef(null);
  const formRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  
  useScroll({ target: containerRef });

  useEffect(() => {
    if (videoRef.current) {
        videoRef.current.playbackRate = 0.8; 
    }
  }, []);

  // --- TYPOGRAPHY & LAYOUT ---
  const fontDisplay = isArabic ? 'font-cairo font-black' : 'font-beast font-black';
  const fontText = isArabic ? 'font-cairo font-bold' : 'font-mono uppercase';
  const textAlign = isArabic ? 'text-right' : 'text-left';
  const borderStart = isArabic ? 'border-r-4 pr-6' : 'border-l-4 pl-6';

  // --- CONFIG ---
  const WHATSAPP_NUM = "962798885011";

  // --- FORM STATE ---
  const [formData, setFormData] = useState({ name: '', signal: '', type: 'Join Wilds Gym (Membership)', message: '' });
  
  const filledFields = Object.values(formData).filter(val => val.length > 0).length;
  const fireIntensity = (filledFields / 4); 

  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);

  // --- HANDLERS ---
  const handleWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    if(!formData.name || !formData.signal) return;

    const text = `*New Signal Fire from Website* 🔥\n\n` +
                 `*Name:* ${formData.name}\n` +
                 `*Contact:* ${formData.signal}\n` +
                 `*Purpose:* ${formData.type}\n` +
                 `*Message:* ${formData.message}`;
    
    window.open(`https://wa.me/${WHATSAPP_NUM}?text=${encodeURIComponent(text)}`, '_blank');
  };

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div ref={containerRef} className="bg-[#0d1f0d] text-[#e8f5e8] pt-20 overflow-x-hidden relative font-sans selection:bg-[#76ff03] selection:text-black" dir={isArabic ? 'rtl' : 'ltr'}>
      
      {/* --- SEO --- */}
      <Head 
        title={isArabic ? "تواصل مع وايلدز جيم | الموقع وساعات الدوام" : "Contact Wilds Gym | Location & Hours in Sweifieh, Amman"}
        description={t('contact.heroDesc')}
      />

      {/* --- CSS ANIMATIONS --- */}
      <style>{`
        @keyframes torch-flicker {
          0%, 100% { opacity: 1; transform: scale(1); filter: drop-shadow(0 0 10px #76ff03); }
          50% { opacity: 0.8; transform: scale(1.05); filter: drop-shadow(0 0 20px #76ff03); }
        }
        .signal-fire {
          animation: torch-flicker 3s infinite ease-in-out;
        }
        .map-filter {
            filter: grayscale(1) invert(1) brightness(0.8) contrast(1.2) sepia(0.5) hue-rotate(70deg);
        }
        .firefly {
          position: absolute; width: 4px; height: 4px; background-color: #76ff03; border-radius: 50%;
          opacity: 0; animation: float 6s infinite ease-in-out; will-change: transform, opacity; box-shadow: 0 0 10px #76ff03;
        }
      `}</style>

      {/* --- ATMOSPHERE --- */}
      <div className="fixed inset-0 pointer-events-none z-0">
         <div className="absolute inset-0 opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
         <div className="firefly" style={{ top: '15%', left: '10%', animationDelay: '0s' }}></div>
         <div className="firefly" style={{ top: '45%', left: '85%', animationDelay: '2s' }}></div>
         <div className="firefly" style={{ top: '75%', left: '20%', animationDelay: '4s' }}></div>
         <div className="firefly" style={{ top: '30%', left: '60%', animationDelay: '1s' }}></div>
         <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[#76ff03] blur-[250px] opacity-10"></div>
      </div>

      {/* --- HERO: THE TRIBE AWAITS --- */}
      <section className="relative h-[80vh] flex flex-col justify-center items-center text-center px-6 overflow-hidden border-b border-[#2e7d32]">
        <div className="absolute inset-0 z-0">
            <video
                ref={videoRef}
                autoPlay
                loop
                muted
                playsInline
                preload="auto" 
                className="w-full h-full object-cover opacity-60 grayscale-[40%] brightness-75"
            >
                <source src={HERO_VIDEO} type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-[#0d1f0d]/70 mix-blend-multiply"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-[#0d1f0d] via-transparent to-[#0d1f0d]"></div>
        </div>

        <div className="relative z-20 max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="flex justify-center mb-6">
                <Flame className="text-[#76ff03] signal-fire" size={64} />
            </div>
            <h1 className={`text-5xl md:text-8xl uppercase text-[#e5e5e5] mb-6 tracking-tighter drop-shadow-2xl ${fontDisplay}`}>
              {t('contact.heroTitle')} <br/> <span className="text-[#76ff03]">{t('contact.heroSub')}</span>
            </h1>
            <p className={`text-lg md:text-xl uppercase leading-relaxed text-[#a5d6a7] max-w-2xl mx-auto bg-black/50 py-4 backdrop-blur-sm shadow-xl ${fontText} ${borderStart}`}>
              "{t('contact.heroDesc')}"
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- SECTION 1: TOTEMS (METHODS) --- */}
      <section className="py-24 px-6 relative z-10 -mt-20">
        <div className="container mx-auto grid md:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
                { title: t('contact.methods.fire'), icon: Flame, color: "text-[#76ff03]", border: "group-hover:border-[#76ff03]", action: scrollToForm },
                { title: t('contact.methods.call'), icon: Phone, color: "text-[#4caf50]", border: "group-hover:border-[#4caf50]", link: "tel:+962798885011" },
                { title: t('contact.methods.map'), icon: MapPin, color: "text-[#ffd700]", border: "group-hover:border-[#ffd700]", link: "https://maps.app.goo.gl/cwcFScdnaMHdCiz97" },
                { title: t('contact.methods.chat'), icon: MessageSquare, color: "text-[#00bcd4]", border: "group-hover:border-[#00bcd4]", link: `https://wa.me/${WHATSAPP_NUM}?text=Hi,%20I%20have%20a%20question.` },
                { title: t('contact.methods.social'), icon: Share2, color: "text-[#d946ef]", border: "group-hover:border-[#d946ef]", link: "https://www.instagram.com/wildgym.jo" },
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
                    <span className={`uppercase text-sm tracking-widest text-[#f1f8e9] ${isArabic ? 'font-cairo font-bold' : 'font-beast'}`}>{totem.title}</span>
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
                            scale: 1 + (fireIntensity * 0.5), 
                            opacity: 0.5 + (fireIntensity * 0.5),
                            filter: `drop-shadow(0 0 ${10 + (fireIntensity * 20)}px #76ff03)`
                        }}
                        transition={{ type: "spring", stiffness: 100 }}
                        className="mb-8 inline-block origin-bottom"
                    >
                        <Flame className="text-[#76ff03]" size={100} />
                    </motion.div>
                    
                    <h3 className={`text-3xl uppercase text-[#e5e5e5] mb-2 ${fontDisplay}`}>{t('contact.strength.title')}</h3>
                    <div className="w-64 h-2 bg-[#1b5e20] rounded-full mx-auto overflow-hidden">
                        <motion.div 
                            className="h-full bg-[#76ff03]" 
                            animate={{ width: `${fireIntensity * 100}%` }}
                        />
                    </div>
                    <p className={`text-[#a5d6a7] text-xs uppercase mt-4 ${fontText}`}>
                        {fireIntensity < 1 ? t('contact.strength.weak') : t('contact.strength.strong')}
                    </p>
                </div>
            </div>

            {/* FORM */}
            <div className="order-1 lg:order-2">
                <div className="mb-12">
                    <h2 className={`text-4xl md:text-5xl uppercase text-[#e5e5e5] mb-4 ${fontDisplay}`}>{t('contact.form.title')}</h2>
                    <p className={`text-[#a5d6a7] text-sm uppercase ${fontText}`}>"{t('contact.form.sub')}"</p>
                </div>

                <form className="space-y-6">
                    <div className="group">
                        <label className={`block text-[#666] text-[10px] uppercase mb-2 group-focus-within:text-[#76ff03] transition-colors ${fontText}`}>{t('contact.form.name')}</label>
                        <input 
                            type="text" 
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({...formData, name: e.target.value})}
                            className={`w-full bg-[#050a05] border border-[#2e7d32] p-4 text-[#e5e5e5] focus:border-[#76ff03] outline-none transition-all ${isArabic ? 'font-cairo' : 'font-beast'}`}
                            placeholder={t('contact.form.namePh')}
                        />
                    </div>

                    <div className="group">
                        <label className={`block text-[#666] text-[10px] uppercase mb-2 group-focus-within:text-[#76ff03] transition-colors ${fontText}`}>{t('contact.form.signal')}</label>
                        <input 
                            type="text" 
                            required
                            value={formData.signal}
                            onChange={(e) => setFormData({...formData, signal: e.target.value})}
                            className={`w-full bg-[#050a05] border border-[#2e7d32] p-4 text-[#e5e5e5] focus:border-[#76ff03] outline-none transition-all ${isArabic ? 'font-cairo' : 'font-beast'}`}
                            placeholder={t('contact.form.signalPh')}
                        />
                    </div>

                    <div className="group">
                        <label className={`block text-[#666] text-[10px] uppercase mb-2 group-focus-within:text-[#76ff03] transition-colors ${fontText}`}>{t('contact.form.purpose')}</label>
                        <select 
                            value={formData.type}
                            onChange={(e) => setFormData({...formData, type: e.target.value})}
                            className={`w-full bg-[#050a05] border border-[#2e7d32] p-4 text-[#e5e5e5] focus:border-[#76ff03] outline-none transition-all uppercase appearance-none ${isArabic ? 'font-cairo font-bold' : 'font-beast'}`}
                        >
                            <option>{t('contact.form.options.join')}</option>
                            <option>{t('contact.form.options.pt')}</option>
                            <option>{t('contact.form.options.class')}</option>
                            <option>{t('contact.form.options.nutri')}</option>
                            <option>{t('contact.form.options.sauna')}</option>
                            <option>{t('contact.form.options.general')}</option>
                        </select>
                    </div>

                    <div className="group">
                        <label className={`block text-[#666] text-[10px] uppercase mb-2 group-focus-within:text-[#76ff03] transition-colors ${fontText}`}>{t('contact.form.msg')}</label>
                        <textarea 
                            rows={4}
                            required
                            value={formData.message}
                            onChange={(e) => setFormData({...formData, message: e.target.value})}
                            className={`w-full bg-[#050a05] border border-[#2e7d32] p-4 text-[#e5e5e5] text-sm focus:border-[#76ff03] outline-none transition-all ${isArabic ? 'font-cairo font-bold' : 'font-mono'}`}
                            placeholder={t('contact.form.msgPh')}
                        />
                    </div>

                    <div className="space-y-3">
                        <button 
                            onClick={handleWhatsApp}
                            className={`w-full bg-[#76ff03] text-black py-6 text-xl uppercase tracking-widest hover:bg-[#f1f8e9] transition-colors duration-300 flex items-center justify-center gap-4 group hover:shadow-[0_0_20px_rgba(118,255,3,0.4)] ${isArabic ? 'font-cairo font-black' : 'font-beast'}`}
                        >
                            {t('contact.form.btn')} <MessageSquare className="group-hover:scale-110 transition-transform" />
                        </button>
                    </div>
                </form>
            </div>
        </div>
      </section>

      {/* --- SECTION 3: THE SACRED TERRITORY (MAP) --- */}
      <section className="py-24 px-6 bg-[#050a05] border-y border-[#2e7d32]">
          <div className="container mx-auto">
              <div className="grid lg:grid-cols-12 gap-12">
                  <div className="lg:col-span-4 space-y-8">
                      <h2 className={`text-3xl md:text-5xl uppercase text-[#e5e5e5] ${fontDisplay}`}>
                          {t('contact.map.title')}
                      </h2>
                      <div className="space-y-6">
                          <div className="flex gap-4">
                              <div className="bg-[#0d1f0d] p-3 h-fit border border-[#2e7d32]"><MapPin className="text-[#76ff03]"/></div>
                              <div>
                                  <h4 className={`uppercase text-lg text-white ${fontDisplay}`}>{t('contact.map.locTitle')}</h4>
                                  <p className={`text-[#a5d6a7] text-xs uppercase ${fontText}`}>
                                      {isArabic ? 'شارع باريس، الصويفية' : 'Paris Street, Sweifieh'}<br/>{isArabic ? 'عمان، الأردن' : 'Amman, Jordan'}
                                  </p>
                              </div>
                          </div>
                          <div className="flex gap-4">
                              <div className="bg-[#0d1f0d] p-3 h-fit border border-[#2e7d32]"><ArrowRight className={`text-[#76ff03] ${isArabic ? 'rotate-180' : ''}`}/></div>
                              <div>
                                  <h4 className={`uppercase text-lg text-white ${fontDisplay}`}>{t('contact.map.tipTitle')}</h4>
                                  <p className={`text-[#a5d6a7] text-xs uppercase ${fontText}`}>
                                      {t('contact.map.tipText')}
                                  </p>
                              </div>
                          </div>
                      </div>
                      <a href="https://maps.app.goo.gl/cwcFScdnaMHdCiz97" target="_blank" rel="noreferrer" className={`inline-block border border-[#76ff03] text-[#76ff03] px-8 py-4 uppercase text-sm tracking-widest hover:bg-[#76ff03] hover:text-black transition-colors ${fontDisplay}`}>
                          {t('contact.map.navBtn')}
                      </a>
                  </div>

                  <div className="lg:col-span-8 h-[500px] border border-[#2e7d32] relative group overflow-hidden">
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
              <h2 className={`text-3xl uppercase text-[#e5e5e5] mb-12 text-center ${fontDisplay}`}>
                  {t('contact.faq.title')}
              </h2>
              
              <div className="space-y-4">
                  {[
                      { q: t('contact.faq.q1'), a: t('contact.faq.a1') },
                      { q: t('contact.faq.q2'), a: t('contact.faq.a2') },
                      { q: t('contact.faq.q3'), a: t('contact.faq.a3') },
                      { q: t('contact.faq.q4'), a: t('contact.faq.a4') },
                      { q: t('contact.faq.q5'), a: t('contact.faq.a5') }
                  ].map((item, i) => (
                      <div key={i} className="border border-[#2e7d32] bg-[#050a05]">
                          <button 
                            onClick={() => setActiveAccordion(activeAccordion === i ? null : i)}
                            className="w-full flex justify-between items-center p-6 text-left group"
                          >
                              <span className={`uppercase text-[#a5d6a7] group-hover:text-[#76ff03] transition-colors ${fontDisplay}`}>{item.q}</span>
                              {activeAccordion === i ? <ChevronUp size={20} className="text-[#76ff03]"/> : <ChevronDown size={20} className="text-[#666]"/>}
                          </button>
                          <AnimatePresence>
                              {activeAccordion === i && (
                                  <motion.div 
                                    initial={{ height: 0, opacity: 0 }} 
                                    animate={{ height: "auto", opacity: 1 }} 
                                    exit={{ height: 0, opacity: 0 }}
                                    className={`px-6 pb-6 text-[#666] text-xs uppercase leading-relaxed border-t border-[#2e7d32]/30 ${fontText}`}
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
                 <h2 className={`text-3xl md:text-5xl uppercase text-[#e5e5e5] ${fontDisplay}`}>{t('contact.team.title')}</h2>
                 <p className={`text-[#666] text-xs uppercase ${fontText}`}>{t('contact.team.sub')}</p>
             </div>

             <div className="grid md:grid-cols-3 gap-8">
                 {[
                     { role: t('contact.team.manager'), icon: Shield },
                     { role: t('contact.team.trainer'), icon: Flame },
                     { role: t('contact.team.member'), icon: CheckCircle2 },
                 ].map((elder, i) => (
                     <div key={i} className="bg-[#0d1f0d] p-8 border border-[#2e7d32] text-center hover:border-[#76ff03] transition-colors group">
                         <div className="flex justify-center">
                            <elder.icon className="text-[#2e7d32] group-hover:text-[#76ff03] transition-colors mb-6" size={40} />
                         </div>
                         <h4 className={`text-xl uppercase text-white mb-2 ${fontDisplay}`}>{elder.role}</h4>
                         <p className={`text-[#666] text-xs uppercase ${fontText}`}>{t('contact.team.avail')}</p>
                     </div>
                 ))}
             </div>
         </div>
      </section>

      {/* --- BOTTOM SUMMARY --- */}
      <section className="py-20 px-6 bg-[#0d1f0d] text-center border-t border-[#2e7d32]/50">
          <div className="max-w-2xl mx-auto">
              <h2 className={`text-3xl uppercase text-[#e5e5e5] mb-6 ${fontDisplay}`}>
                  {t('contact.bottom.title')}
              </h2>
              <p className={`text-[#a5d6a7] text-xs uppercase leading-relaxed mb-8 ${fontText}`}>
                  {t('contact.bottom.desc')}
              </p>
              <p className={`text-[#76ff03] text-xl uppercase mb-8 ${fontDisplay}`}>"{t('contact.bottom.quote')}"</p>
              
              <div className={`grid md:grid-cols-2 gap-8 text-[#666] text-xs uppercase ${fontText}`}>
                  <div>
                      <h4 className="text-white mb-2 font-bold">{t('contact.bottom.contact')}</h4>
                      <p>{isArabic ? 'شارع باريس، الصويفية – عمان' : 'Paris Street, Sweifieh – Amman'}</p>
                      <p>📞 079 888 5011</p>
                  </div>
                  <div>
                      <h4 className="text-white mb-2 font-bold">{t('contact.bottom.hours')}</h4>
                      <p>{t('footer.days')}: 06:00 – 23:00</p>
                      <p>{t('footer.friday')}: 14:00 – 21:00</p>
                  </div>
              </div>
          </div>
      </section>

    </div>
  );
};

export default Contact;