import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { CheckCircle2, HeartPulse, Trophy, Users, ArrowRight, ArrowLeft, MapPin, Clock, Phone } from 'lucide-react';
import { useTranslation } from 'react-i18next'; 

// --- SEO ---
import Head from '../components/seo/Head';

// --- ASSETS ---
const LEAF_1 = "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?w=500&auto=format&fit=crop&q=80&w=400&bg=transparent"; 
const LEAF_2 = "https://images.unsplash.com/photo-1473081556163-2a17de81fc97?w=500&auto=format&fit=crop&q=80&w=400&bg=transparent"; 
const JUNGLE_BG_1 = "https://plus.unsplash.com/premium_photo-1687428554393-abae29906c75?w=500&auto=format&fit=crop"; 
const JUNGLE_BG_2 = "https://images.unsplash.com/photo-1623874514711-0f321325f318?w=500&auto=format&fit=crop"; 

const About = () => {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === 'ar';

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  
  // --- TYPOGRAPHY & LAYOUT LOGIC ---
  const fontDisplay = isArabic ? 'font-cairo font-black leading-tight' : 'font-beast font-black tracking-tighter leading-[0.9]';
  const fontText = isArabic ? 'font-cairo font-bold text-sm' : 'font-mono text-sm tracking-widest';
  
  // Mirror Borders and Padding for RTL
  const borderStart = isArabic ? 'border-r-4 pr-6' : 'border-l-4 pl-6';
  const borderStartSmall = isArabic ? 'border-r-2 pr-4' : 'border-l-2 pl-4';

  const ySlow = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const yFast = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const rotateLeaf = useTransform(scrollYProgress, [0, 1], [0, 45]);

  const fadeInUp: any = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as any } 
    }
  };

  // --- CRASH FIX: SAFETY CHECK ---
  // If translation fails, fallback to an empty array so the page doesn't crash (Black Screen)
  const rawList = t('about.list', { returnObjects: true });
  const featureList = Array.isArray(rawList) ? rawList : [];

  return (
    <div ref={containerRef} className="bg-wild-black text-wild-white pt-20 overflow-x-hidden relative" dir={isArabic ? 'rtl' : 'ltr'}>
      
      <Head 
        title={isArabic ? "عن وايلدز جيم | أفضل جيم في الصويفية، عمان" : "About Wilds Gym | Best Gym in Sweifieh, Amman"}
        description={t('about.subtitle')}
      />

      {/* --- GLOBAL JUNGLE OVERLAYS --- */}
      <div className="fixed inset-0 pointer-events-none z-0">
          <motion.div 
            style={{ 
              y: ySlow, 
              backgroundImage: `url(${JUNGLE_BG_1})` 
            }} 
            className="absolute top-0 left-0 w-full h-[120vh] opacity-10 bg-cover bg-center mix-blend-overlay" 
          />
      </div>

      {/* --- HERO --- */}
      <section className="relative min-h-[80vh] flex flex-col justify-center px-6 z-10 pt-20 border-b border-wild-dark/30">
        <motion.div style={{ y: yFast }} className="absolute top-0 right-0 w-3/4 h-full opacity-30 grayscale pointer-events-none z-[-1]">
          <img src={JUNGLE_BG_2} className="w-full h-full object-cover mask-image-b" alt="Jungle Texture" />
          <div className="absolute inset-0 bg-gradient-to-l from-wild-black via-wild-black/50 to-transparent"></div>
        </motion.div>
        
        <div className="container mx-auto relative">
          <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="max-w-5xl">
            <h1 className={`text-5xl md:text-[7rem] uppercase mb-8 relative ${fontDisplay}`}>
              {isArabic ? 'عن' : 'About'} <span className="text-wild-accent relative z-10">{isArabic ? 'وايلدز جيم' : 'Wilds Gym'}</span> <br/> {isArabic ? 'في عمان' : 'in Amman'}
              <motion.img src={LEAF_1} style={{ rotate: rotateLeaf }} className={`absolute -top-20 w-48 md:w-80 grayscale brightness-50 opacity-50 -z-10 pointer-events-none ${isArabic ? '-left-20' : '-right-20'}`} />
            </h1>
            <p className={`text-xl md:text-2xl uppercase leading-relaxed text-wild-gray border-wild-accent max-w-3xl ${fontText} ${borderStart}`}>
              {t('about.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- SECTION 1: WHO WE ARE --- */}
      <section className="py-32 px-6 relative z-10">
        <div className="container mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          <motion.div 
            initial={{ opacity: 0, x: isArabic ? 100 : -100, rotate: -6 }}
            whileInView={{ opacity: 1, x: 0, rotate: -3 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className="w-full lg:w-1/2 relative z-20"
          >
             <div className="aspect-[3/4] relative overflow-hidden border-2 border-wild-dark shadow-2xl shadow-wild-black">
                <img src="https://images.unsplash.com/photo-1641337221253-fdc7237f6b61?w=500&auto=format&fit=crop" className="w-full h-full object-cover grayscale brightness-75 contrast-115" alt="Gym Community" />
                <img src={LEAF_2} className={`absolute -bottom-20 w-80 rotate-45 grayscale brightness-25 opacity-80 pointer-events-none ${isArabic ? '-right-20' : '-left-20'}`} />
             </div>
          </motion.div>

          <motion.div 
             initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
             className="w-full lg:w-1/2 relative z-10"
          >
            <h2 className={`text-4xl md:text-5xl uppercase mb-8 ${fontDisplay}`}>
                {t('about.introTitle')}
            </h2>
            <div className={`space-y-6 text-wild-gray uppercase leading-loose bg-wild-black/80 p-8 backdrop-blur-sm border-wild-accent/50 ${fontText} ${borderStartSmall}`}>
              <p>{t('about.introText1')}</p>
              <p>{t('about.introText2')}</p>
              <p className="text-wild-white font-bold">
                  {isArabic ? 'هدفنا بسيط: نساعدك تتمرن أحسن، وتقوى، وتضلك مستمر.' : 'Our goal is simple: help you train better, feel stronger, and stay consistent.'}
              </p>
              
              <ul className="grid grid-cols-1 gap-2 pt-4">
                 {/* SAFE MAPPING: Now using featureList which is guaranteed to be an array */}
                 {featureList.map((item: string, i: number) => (
                    <li key={i} className="flex items-start gap-3 text-wild-accent text-xs">
                       <CheckCircle2 size={14} className="mt-1 shrink-0"/> <span className={`text-wild-gray ${isArabic ? 'font-cairo font-bold' : ''}`}>{item}</span>
                    </li>
                 ))}
              </ul>
              <p className="text-wild-white italic pt-2">
                  {isArabic ? 'سواء كنت جديد عالجيم أو قديم، وايلدز هو مكانك.' : 'Whether you are new to the gym or already experienced, Wilds is built for you.'}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- SECTION 2: TRAINING APPROACH --- */}
      <section className="py-32 px-6 relative z-10">
        <div className="absolute inset-0 bg-wild-dark/40 skew-y-3 z-0 pointer-events-none"></div>

        <div className="container mx-auto flex flex-col lg:flex-row-reverse items-center gap-16 lg:gap-32 relative z-10">
          
          <motion.div 
            initial={{ opacity: 0, x: isArabic ? -100 : 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className="w-full lg:w-3/5 relative z-20"
          >
             <div className="aspect-[16/9] relative overflow-hidden border-2 border-wild-dark shadow-2xl shadow-wild-black lg:translate-x-12">
                <img src="https://images.unsplash.com/photo-1584466977773-e625c37cdd50?q=80&w=387&auto=format&fit=crop" className="w-full h-full object-cover grayscale brightness-50 contrast-120" alt="Training Approach" />
                <img src={LEAF_1} className={`absolute -top-24 w-96 -rotate-12 grayscale brightness-25 opacity-70 pointer-events-none ${isArabic ? '-left-24' : '-right-24'}`} />
             </div>
          </motion.div>

          <motion.div 
             initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
             className="w-full lg:w-2/5 relative z-10"
          >
            <h2 className={`text-4xl md:text-5xl uppercase mb-8 ${fontDisplay}`}>
                {t('about.approachTitle')}
            </h2>
            <p className={`text-wild-gray uppercase mb-6 ${fontText}`}>{t('about.approachSub')}</p>
            
            <div className="space-y-4">
              {[
                { title: t('about.consistency'), desc: isArabic ? "دعم الكوتش بأرض الجيم." : "Coach support on the gym floor." },
                { title: t('about.guidance'), desc: isArabic ? "خطة تمرين واضحة." : "Clear training structure." },
                { title: t('about.env'), desc: isArabic ? "مكان نظيف ومرتب." : "A clean and organized space." }
              ].map((item, i) => (
                <div key={i} className="bg-wild-black p-4 border border-wild-dark hover:border-wild-accent transition-colors">
                  <h4 className={`text-xl uppercase text-wild-white mb-1 ${isArabic ? 'font-cairo font-bold' : 'font-beast'}`}>{item.title}</h4>
                  <p className={`text-wild-gray uppercase ${fontText} text-xs`}>{item.desc}</p>
                </div>
              ))}
            </div>
            
            <div className={`mt-8 p-4 bg-wild-accent/10 border-wild-accent ${borderStartSmall}`}>
               <p className={`text-wild-white uppercase leading-relaxed ${fontText}`}>
                  {isArabic ? 'ما بتحتاج تعرف كل اشي قبل ما تبلش. بس عليك تبلش، وفريقنا بكمل معك.' : 'You don’t need to know everything before joining a gym. You just need to start. Our team will guide you.'}
               </p>
            </div>
          </motion.div>
        </div>
      </section>

       {/* --- SECTION 3 & 4: THE SPACE & RECOVERY --- */}
       <section className="py-40 px-6 relative z-10 overflow-hidden">
        <div className="container mx-auto grid lg:grid-cols-2 gap-20 items-start relative">
            
            <motion.img style={{ y: ySlow, rotate: -10 }} src={LEAF_2} className="absolute top-0 left-1/4 w-[800px] grayscale brightness-[0.15] opacity-50 pointer-events-none -z-10" />

            <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="relative z-20">
                <div className="aspect-square relative border-4 border-wild-black shadow-[0_0_50px_rgba(0,0,0,0.5)] z-20 overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1590487988256-9ed24133863e?q=80&w=1928" className="w-full h-full object-cover grayscale brightness-50" alt="The Gym Space" />
                     <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-wild-black p-8">
                        <h3 className={`text-3xl uppercase text-wild-white mb-2 ${fontDisplay}`}>
                            {isArabic ? 'جيم معمول للتدريب الصح' : 'A Gym Built for Real Training'}
                        </h3>
                        <ul className={`text-wild-gray text-[10px] md:text-xs uppercase tracking-wide space-y-2 ${fontText}`}>
                           <li>• {isArabic ? 'مناطق للأوزان الحرة والقوة' : 'Strength and free-weight zones'}</li>
                           <li>• {isArabic ? 'أجهزة كارديو' : 'Cardio equipment'}</li>
                           <li>• {isArabic ? 'مناطق تدريب جماعي' : 'Group training areas'}</li>
                           <li>• {isArabic ? 'غرف غيار نظيفة' : 'Clean locker and workout spaces'}</li>
                           <li>• {isArabic ? 'جو هادي وحماسي' : 'A calm but energetic atmosphere'}</li>
                        </ul>
                     </div>
                </div>
                 <div className="absolute top-4 left-4 w-full h-full border-2 border-wild-accent/20 -z-10"></div>
            </motion.div>
            
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className={`relative z-10 bg-wild-black/90 p-12 backdrop-blur-md border-wild-accent lg:mt-24 ${isArabic ? 'border-l-4' : 'border-r-4'}`}>
                <h2 className={`text-4xl md:text-5xl uppercase mb-6 ${fontDisplay}`}>
                    {t('about.recoveryTitle')}
                </h2>
                <p className={`text-wild-gray uppercase leading-relaxed mb-8 ${fontText}`}>
                    {t('about.recoveryText')}
                </p>
                <div className="grid grid-cols-1 gap-4 text-sm uppercase tracking-widest">
                    <div className={`bg-wild-dark p-4 flex items-center gap-4 hover:bg-wild-accent hover:text-wild-black transition-colors ${isArabic ? 'font-cairo font-bold' : 'font-beast'}`}>
                        <HeartPulse size={20} className="text-wild-accent" /> {isArabic ? 'أخصائية تغذية' : 'Nutritionist Access'}
                    </div>
                    <div className={`bg-wild-dark p-4 flex items-center gap-4 hover:bg-wild-accent hover:text-wild-black transition-colors ${isArabic ? 'font-cairo font-bold' : 'font-beast'}`}>
                        <Trophy size={20} className="text-wild-accent" /> {isArabic ? 'ساونا للاسترخاء' : 'Sauna for Relaxation'}
                    </div>
                    <div className={`bg-wild-dark p-4 flex items-center gap-4 hover:bg-wild-accent hover:text-wild-black transition-colors ${isArabic ? 'font-cairo font-bold' : 'font-beast'}`}>
                        <Users size={20} className="text-wild-accent" /> {isArabic ? 'جاكوزي لراحة العضلات' : 'Jacuzzi for Muscle Relief'}
                    </div>
                </div>
            </motion.div>
        </div>
       </section>

      {/* --- SECTION 5: COMMUNITY --- */}
      <section className="py-24 px-6 relative z-10">
         <div className="absolute inset-0 bg-wild-accent/5 skew-y-[-2deg] z-0"></div>
         <div className="container mx-auto relative z-10 max-w-4xl text-center">
            <h2 className={`text-4xl md:text-6xl uppercase text-wild-white mb-8 ${fontDisplay}`}>
                {t('about.commTitle')}
            </h2>
            <div className={`text-lg md:text-xl uppercase leading-relaxed text-wild-gray space-y-6 ${fontText}`}>
               <p>{isArabic ? 'اللي بيميز وايلدز عنجد هو الناس اللي فيه.' : 'What truly makes Wilds Gym different is the people inside it.'}</p>
               <p>{isArabic ? 'مدربينا موجودين عشان يساعدوك ويشجعوك. والأعضاء بيعطوك طاقة واحترام.' : 'Our coaches are here to help, correct, and encourage. Our members bring energy, respect, and motivation.'}</p>
               <div className="inline-block border-y border-wild-accent py-4">
                  <p className="text-wild-white font-bold">{t('about.commText')}</p>
               </div>
               <p className="text-sm tracking-widest">{isArabic ? 'وايلدز جيم هو مكان للكل بعمان.' : 'Wilds is a gym in Amman where everyone is welcome.'}</p>
            </div>
         </div>
      </section>

      {/* --- SECTION 6: VISIT US / CTA --- */}
      <section className="py-40 relative z-10 border-t border-wild-dark overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=1974')] bg-cover bg-center grayscale brightness-[0.15] contrast-150 z-0"></div>
        
        <div className="container mx-auto px-6 relative z-20 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
            <h2 className={`text-5xl md:text-8xl uppercase text-wild-white mb-8 tracking-tighter ${fontDisplay}`}>
              {isArabic ? 'زور' : 'Visit'} <span className="text-wild-accent px-2 relative">{isArabic ? 'وايلدز جيم' : 'Wilds Gym'}
                <img src={LEAF_1} className="absolute bottom-0 left-0 w-full h-4 object-cover grayscale brightness-0 opacity-50" />
              </span> {isArabic ? 'بالصويفية' : 'in Sweifieh'}
            </h2>
            <div className={`text-wild-gray text-sm md:text-lg uppercase tracking-widest max-w-2xl mx-auto mb-16 space-y-4 ${fontText}`}>
              <p>{isArabic ? 'الحكي مش زي الشوف. التجربة الحقيقية بتبلش لما تفوت من الباب.' : 'You can read about Wilds Gym, but the real experience starts when you walk through the door.'}</p>
              <p>{isArabic ? 'زورنا بشارع باريس، تعرف على الفريق، وشوف المكان بنفسك.' : 'Visit us on Paris Street in Sweifieh, meet our team, and see the space for yourself.'}</p>
            </div>
            
            <a href="https://wa.me/962798885011" className="group relative inline-flex items-center gap-6 bg-wild-accent text-wild-black px-16 py-8 font-black text-2xl md:text-3xl uppercase tracking-widest overflow-hidden transition-transform hover:scale-105 shadow-2xl shadow-wild-accent/20">
              <span className={`relative z-10 flex items-center gap-4 ${isArabic ? 'font-cairo' : 'font-beast'}`}>
                  {t('about.ctaVisit')} {isArabic ? <ArrowLeft size={32} /> : <ArrowRight size={32} />}
              </span>
              <div className="absolute inset-0 bg-wild-white translate-y-full group-hover:translate-y-0 transition-transform z-0"></div>
            </a>
            
            <div className="mt-24 flex flex-wrap justify-center gap-8 text-wild-gray font-mono text-xs uppercase tracking-[0.2em] border-t border-wild-accent/20 pt-12 inline-block px-12 bg-wild-black/50 backdrop-blur-md">
               <span className={`flex items-center gap-2 ${isArabic ? 'flex-row-reverse' : ''}`}><MapPin size={14} className="text-wild-accent"/> Paris Street, Sweifieh – Amman</span>
               <span className={`flex items-center gap-2 ${isArabic ? 'flex-row-reverse' : ''}`}><Clock size={14} className="text-wild-accent"/> Open Daily 06:00–23:00</span>
               <span className={`flex items-center gap-2 ${isArabic ? 'flex-row-reverse' : ''}`}><Phone size={14} className="text-wild-accent"/> 079 888 5011</span>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default About;