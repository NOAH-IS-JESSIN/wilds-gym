import { Suspense, lazy } from 'react'; 
import { motion } from 'framer-motion';
import { 
  ArrowRight, ArrowLeft, MapPin, Clock, Zap, Skull, Dumbbell, 
  Users, Flame, Leaf, Brain, Moon, Swords 
} from 'lucide-react';
import { useTranslation } from 'react-i18next'; 

// --- SEO ---
import Head from '../components/seo/Head';

// --- LAZY LOAD 3D COMPONENT ---
const ThreeDCarousel = lazy(() => import('../components/ui/3d-carousel').then(module => ({ default: module.ThreeDPhotoCarousel })));

// --- ASSETS ---
import logoImg from '../assets/logo.png'; 
import threeDBg from '../assets/3D-BG.png';

// --- NEW IMAGES ---
// import heroBg from '../assets/homepage-header.jpeg'; // <--- UNUSED NOW, REVERTED TO URL
import facilityImg from '../assets/homepage-open-gym.jpeg'; 
import habitat from '../assets/habitat-atmosphere.jpg';    

// --- CONSTANTS ---
// RESTORED THE UNSPLASH JUNGLE URL
const JUNGLE_BG_URL = "https://plus.unsplash.com/premium_photo-1686899171869-4d80f6f9d315?w=500&auto=format&fit=crop";
const WOOD_LOG_URL = "https://images.unsplash.com/photo-1546484396-fb3fc6f95f98?q=80&w=2070&auto=format&fit=crop";
const WHATSAPP_LINK = "https://wa.me/962798885011?text=Hi,%20I%20want%20to%20enter%20the%20wild.";

// --- VIBE CARD COMPONENT ---
const VibeCard = ({ icon: Icon, title, desc, delay, z, x, y, isArabic }: any) => {
  return (
    <motion.div 
      style={{ 
        zIndex: z, 
        top: y, 
        [isArabic ? 'right' : 'left']: x,
        position: 'absolute'
      }}
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: delay, duration: 0.8, type: "spring" }}
      className="w-48 p-4 bg-[#0d1f0d]/80 backdrop-blur-md border border-[#76ff03]/30 rounded-xl shadow-2xl flex flex-col gap-2"
    >
      <div className={`flex items-center gap-2 text-[#76ff03] mb-1 ${isArabic ? 'flex-row-reverse' : 'flex-row'}`}>
        <Icon size={16} />
        <span className={`uppercase tracking-wider text-sm ${isArabic ? 'font-cairo font-bold' : 'font-beast'}`}>{title}</span>
      </div>
      <p className={`text-[#a5d6a7] text-xs leading-relaxed uppercase ${isArabic ? 'font-cairo text-right' : 'font-mono text-left'}`}>
        {desc}
      </p>
    </motion.div>
  );
};

const Home = () => {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === 'ar';

  // --- TYPOGRAPHY ---
  const fontDisplay = isArabic ? 'font-cairo font-black leading-tight' : 'font-beast font-black tracking-tighter leading-[0.9]';
  const fontText = isArabic ? 'font-cairo font-bold text-base' : 'font-mono text-sm tracking-widest';
  const textAlign = isArabic ? 'text-right' : 'text-left';

  const fadeInUp: any = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <div className="bg-[#0d1f0d] text-[#e8f5e8] min-h-screen relative font-sans selection:bg-[#76ff03] selection:text-black overflow-x-hidden" dir={isArabic ? 'rtl' : 'ltr'}>
      
      <Head 
        title={isArabic ? "وايلدز جيم | تدريب وحوش في عمان" : "Wilds Gym | Elite Personal Training in Amman"}
        description={t('home.desc')}
      />

      <style>{`
        .firefly {
          position: absolute; width: 4px; height: 4px; background-color: #76ff03; border-radius: 50%;
          opacity: 0; animation: float 6s infinite ease-in-out; will-change: transform, opacity; box-shadow: 0 0 10px #76ff03;
        }
        .fog-layer {
          background: radial-gradient(circle, rgba(46,125,50,0.15) 0%, rgba(0,0,0,0) 70%);
          animation: fog-drift 20s infinite linear; will-change: transform;
        }
      `}</style>

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
          {/* UPDATED: Reverted back to JUNGLE_BG_URL */}
          <div className="absolute inset-0 z-0 bg-cover bg-center opacity-40 grayscale-[30%]" style={{ backgroundImage: `url('${JUNGLE_BG_URL}')` }}></div>
          <div className="absolute inset-0 z-10 bg-[#050a05]/60 mix-blend-multiply"></div>
          <div className="absolute inset-0 z-20 pointer-events-none" style={{ background: 'radial-gradient(circle at center, transparent 0%, #0d1f0d 100%)', boxShadow: 'inset 0 0 200px 100px #0d1f0d' }}></div>

          <div className="relative z-30 container mx-auto px-6 flex flex-col xl:flex-row items-center justify-between gap-8 mt-10">
            
            {/* LEFT CARDS */}
            <div className="hidden xl:block relative w-[280px] h-[300px]">
              <VibeCard isArabic={isArabic} icon={Dumbbell} title={t('home.vibe.arsenal.title', 'Raw Arsenal')} desc={t('home.vibe.arsenal.desc', 'Free weights and gravity only.')} delay={1.0} z={10} x={0} y={120} />
              <VibeCard isArabic={isArabic} icon={Skull} title={t('home.vibe.ego.title', 'No Ego')} desc={t('home.vibe.ego.desc', 'Leave your pride at the door.')} delay={1.2} z={20} x={40} y={60} />
              <VibeCard isArabic={isArabic} icon={Zap} title={t('home.vibe.voltage.title', 'High Voltage')} desc={t('home.vibe.voltage.desc', 'Loud music. Pure energy.')} delay={1.4} z={30} x={80} y={0} />
            </div>

            {/* CENTER CONTENT */}
            <div className="flex flex-col items-center text-center z-40">
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
                <h1 className={`text-6xl md:text-9xl uppercase text-[#e8f5e8] mb-4 drop-shadow-lg ${fontDisplay}`}>
                    {isArabic ? 'وايلدز جيم' : 'WILDS GYM'}
                </h1>
                <h2 className={`text-xl md:text-3xl text-[#e8f5e8] uppercase tracking-widest mb-2 ${isArabic ? 'font-cairo' : 'font-beast'}`}>
                    {t('home.welcome')}
                </h2>
                
                <div className="flex flex-col items-center gap-4 mb-12">
                  <div className="h-[2px] w-20 bg-[#76ff03]"></div>
                  <p className={`text-[#a5d6a7] uppercase font-bold ${isArabic ? 'font-cairo text-base' : 'font-sans text-sm tracking-[0.2em]'}`}>
                    {t('home.title')}
                  </p>
                  <p className="text-[#76ff03] font-mono text-xs uppercase tracking-[0.3em]">Paris Street — Sweifieh</p>
                </div>

                <div className="mb-24">
                    <a href={WHATSAPP_LINK} className={`inline-flex items-center gap-4 bg-[#76ff03] text-[#0d1f0d] px-12 py-5 font-black text-xl uppercase hover:bg-[#1AFF64] hover:scale-105 transition-all shadow-lg shadow-[#76ff03]/20 relative z-50 ${isArabic ? 'font-cairo tracking-normal' : 'font-beast tracking-widest'}`}>
                        {t('home.join')} {isArabic ? <ArrowLeft size={24} /> : <ArrowRight size={24} />}
                    </a>
                </div>
              </motion.div>
            </div>

            {/* RIGHT CARDS */}
            <div className="hidden xl:block relative w-[280px] h-[300px]">
              <VibeCard isArabic={isArabic} icon={Users} title={t('home.vibe.pack.title', 'The Pack')} desc={t('home.vibe.pack.desc', 'Iron sharpens iron.')} delay={1.4} z={30} x={0} y={0} />
              <VibeCard isArabic={isArabic} icon={Flame} title={t('home.vibe.forged.title', 'Forged')} desc={t('home.vibe.forged.desc', 'Pressure makes diamonds.')} delay={1.2} z={20} x={40} y={60} />
              <VibeCard isArabic={isArabic} icon={Leaf} title={t('home.vibe.primal.title', 'Primal')} desc={t('home.vibe.primal.desc', 'No AC. Just will.')} delay={1.0} z={10} x={80} y={120} />
            </div>
          </div>

          <div className="absolute bottom-0 left-0 w-full h-16 md:h-24 z-40 bg-cover bg-center border-t-4 border-[#0d1f0d]" style={{ backgroundImage: `url('${WOOD_LOG_URL}')`, boxShadow: '0px -20px 50px 0px rgba(13, 31, 13, 1)' }}>
            <div className="absolute inset-0 bg-[#0d1f0d]/60 mix-blend-multiply"></div>
          </div>
        </section>

        {/* ================= INTRO ================= */}
        <section className="py-24 px-6 relative z-10 bg-[#0a140a] border-b border-[#2e7d32]/30">
            <div className="container mx-auto grid lg:grid-cols-2 gap-16 items-center">
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
                    <h2 className={`text-5xl md:text-7xl uppercase text-[#e8f5e8] mb-8 ${fontDisplay}`}>
                        {isArabic ? 'مش مجرد جيم' : 'Not a Gym.'} <br/> 
                        <span className="text-[#76ff03]">{isArabic ? 'موطن وحوش.' : 'A Habitat.'}</span>
                    </h2>
                    <div className={`space-y-6 text-[#a5d6a7] uppercase leading-relaxed ${fontText} ${textAlign}`}>
                        <p>{t('home.desc')}</p>
                        <p className={`border-l-2 ${isArabic ? 'border-r-2 border-l-0 pr-4' : 'pl-4'} border-[#76ff03] text-white`}>
                            {isArabic ? 'ما بنتمرن عشان المنظرة. بنتمرن عشان القوة عنجد.' : 'We don’t train for the mirror. We train for real strength.'}
                        </p>
                        <p className="text-[#76ff03] font-bold">
                            {isArabic 
                                ? 'وايلدز هو مركز لياقة بدنية حديث في عمان للأشخاص الذين يريدون أكثر من مجرد آلات. إنه لمن يريدون التقدم.' 
                                : 'Wilds is a modern fitness center in Amman for people who want more than machines. It’s for those who want progress.'}
                        </p>
                    </div>
                </motion.div>
                
                <div className="relative h-[400px] border border-[#2e7d32] p-4 rotate-3">
                    <div className="w-full h-full bg-[#0d1f0d] relative overflow-hidden">
                        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
                        {/* Using Habitat image for now (slanted middle image) */}
                        <img loading='lazy' src={habitat} className="w-full h-full object-cover contrast-10 opacity-60" alt="Habitat Atmosphere" />
                        <div className={`absolute bottom-4 ${isArabic ? 'left-4' : 'right-4'} text-[#76ff03] font-beast text-6xl opacity-20`}>HABITAT</div>
                    </div>
                </div>
            </div>
        </section>

        {/* ================= WHAT MAKES WILDS DIFFERENT ================= */}
        <section className="py-24 px-6 relative z-10">
            <div className="container mx-auto">
                <div className="text-center mb-16">
                    <h2 className={`text-4xl md:text-6xl uppercase text-[#e8f5e8] mb-4 ${fontDisplay}`}>
                        {t('home.code.heading')}
                    </h2>
                    <div className="w-24 h-1 bg-[#76ff03] mx-auto"></div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                        { icon: Dumbbell, title: t('home.code.items.arsenal.title', 'Raw Arsenal'), desc: t('home.code.items.arsenal.desc', 'Heavy dumbbells. Calibrated plates.'), color: "text-[#76ff03]" },
                        { icon: Flame, title: t('home.code.items.recovery.title', 'Recovery Zone'), desc: t('home.code.items.recovery.desc', 'Sauna & Jacuzzi.'), color: "text-[#ff4d00]" },
                        { icon: Users, title: t('home.code.items.tribe.title', 'The Tribe'), desc: t('home.code.items.tribe.desc', 'Train with beasts.'), color: "text-[#ffd700]" },
                        { icon: Brain, title: t('home.code.items.mental.title', 'Mental Warfare'), desc: t('home.code.items.mental.desc', 'Discipline beats motivation.'), color: "text-[#00bcd4]" },
                        { icon: Moon, title: t('home.code.items.atm.title', 'Atmosphere'), desc: t('home.code.items.atm.desc', 'Focused environment.'), color: "text-[#d946ef]" },
                        { icon: Swords, title: t('home.code.items.comfort.title', 'No Comfort'), desc: t('home.code.items.comfort.desc', 'Comfort is the enemy of growth.'), color: "text-[#ef4444]" }
                    ].map((item, i) => (
                        <motion.div 
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-[#050a05] border border-[#2e7d32] p-8 hover:border-[#76ff03] transition-all group hover:-translate-y-2"
                        >
                            <div className={`flex ${isArabic ? 'justify-end' : 'justify-start'}`}>
                                <item.icon className={`${item.color} mb-6`} size={40} />
                            </div>
                            <h3 className={`text-2xl uppercase text-[#f1f8e9] mb-3 ${isArabic ? 'font-cairo font-bold text-right' : 'font-beast text-left'}`}>{item.title}</h3>
                            <p className={`text-[#a5d6a7] uppercase leading-relaxed ${isArabic ? 'font-cairo text-sm text-right border-r-2 pr-4 border-[#2e7d32]' : 'font-mono text-xs text-left border-l-2 pl-4 border-[#2e7d32]'} group-hover:border-[#76ff03]`}>
                                {item.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>

        {/* ================= FACILITIES (OPEN GYM) ================= */}
        <section className="py-24 px-6 bg-[#0a140a] border-y border-[#2e7d32]/50">
            <div className="container mx-auto grid lg:grid-cols-2 gap-16 items-center">
                <motion.div initial={{ opacity: 0, x: isArabic ? 50 : -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                    <h2 className={`text-4xl md:text-6xl uppercase text-[#e8f5e8] mb-8 ${fontDisplay}`}>
                        {t('home.paths.title')}
                    </h2>
                    <p className={`text-[#a5d6a7] uppercase mb-6 ${fontText} ${textAlign}`}>
                        {t('home.paths.desc')}
                    </p>
                    <div className="space-y-4">
                        {[
                            t('home.paths.open'), 
                            t('home.paths.pack'), 
                            t('home.paths.apex')
                        ].map((item, i) => (
                            <div key={i} className={`flex items-center gap-4 group ${isArabic ? 'flex-row-reverse' : ''}`}>
                                <div className="w-8 h-[1px] bg-[#2e7d32] group-hover:bg-[#76ff03] transition-colors"></div>
                                <span className={`uppercase tracking-widest text-[#a5d6a7] group-hover:text-white transition-colors ${isArabic ? 'font-cairo font-bold text-sm' : 'font-beast text-sm'}`}>{item}</span>
                            </div>
                        ))}
                    </div>
                    <div className={`mt-8 ${textAlign}`}>
                        <p className="text-[#76ff03] font-beast text-xl uppercase">{isArabic ? '"كل ما تحتاجه."' : '"Everything you need."'}</p>
                        <p className="text-[#76ff03] font-beast text-xl uppercase">{isArabic ? '"لا شيء لا تحتاجه."' : '"Nothing you don’t."'}</p>
                    </div>
                </motion.div>
                
                <div className="relative h-[500px] border-2 border-[#2e7d32] p-2">
                    <div className="w-full h-full bg-[#0d1f0d] relative overflow-hidden">
                        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
                        
                        {/* UPDATED: REMOVED grayscale and brightness so it's full color */}
                        <img src={facilityImg} className="w-full h-full object-cover" alt="Gym Interior" />
                        
                        <div className={`absolute bottom-8 ${isArabic ? 'right-8 text-right' : 'left-8 text-left'}`}>
                            <p className="font-mono text-xs text-[#76ff03] uppercase tracking-widest">Location: Paris Street</p>
                            <p className="font-mono text-xs text-[#76ff03] uppercase tracking-widest">Status: Ready for War</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* ================= 3D CAROUSEL SECTION ================= */}
        <section className="py-24 relative z-10 border-b border-[#2e7d32]/30 overflow-hidden bg-[#050a05]">
            <div className="absolute inset-0 z-0">
                <img src={threeDBg} alt="Gym Texture" className="w-full h-full object-cover opacity-20 grayscale contrast-125"/>
                <div className="absolute inset-0 bg-gradient-to-t from-[#4f584fce] via-[#050a05]/10 to-[#8d8d8d18]"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#050a05_100%)]"></div>
            </div>

            <div className="container mx-auto px-6 mb-12 text-center relative z-10">
                <h2 className={`text-4xl md:text-5xl uppercase text-[#e8f5e8] mb-4 ${fontDisplay}`}>
                    {t('home.explore')} <span className="text-[#76ff03]">{t('home.watcher.title')}</span>
                </h2>
                <div className="w-16 h-1 bg-[#76ff03] mx-auto"></div>
            </div>
            
            <div className="relative z-20">
                <Suspense fallback={<div className="h-[400px] flex items-center justify-center text-[#76ff03] font-beast">Summoning The Habitat...</div>}>
                    <ThreeDCarousel />
                </Suspense>
            </div>
        </section>

        {/* ================= FOOTER ================= */}
        <div className="py-12 bg-[#050a05] border-t border-[#2e7d32] text-center">
            <div className="container mx-auto flex flex-wrap justify-center gap-8 text-[#4caf50] font-mono text-xs uppercase tracking-[0.2em]">
               <span className={`flex items-center gap-2 ${isArabic ? 'flex-row-reverse' : ''}`}><MapPin size={14}/> {isArabic ? 'شارع باريس، الصويفية – عمان' : 'Paris Street, Sweifieh – Amman'}</span>
               <span className={`flex items-center gap-2 ${isArabic ? 'flex-row-reverse' : ''}`}><Clock size={14}/> {isArabic ? 'يومياً 06:00 – 23:00' : '06:00–23:00 Daily'}</span>
            </div>
        </div>

      </div>
    </div>
  );
};

export default Home;