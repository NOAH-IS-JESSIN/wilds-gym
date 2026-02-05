import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  Dumbbell, Crown, Utensils, Droplets, 
  MapPin, Clock, Phone, ArrowRight, ArrowLeft, CheckCircle2 
} from 'lucide-react';
import { useTranslation } from 'react-i18next'; 

// --- SEO ---
import Head from '../components/seo/Head';

// --- ASSETS ---
// Make sure these exact files exist in src/assets/
import img1 from '../assets/services-1.jpeg'; // Hero
import img2 from '../assets/services-2.jpeg'; // Open Gym
import img3 from '../assets/services-3.jpeg'; // Personal Training
import img4 from '../assets/services-4.jpg';  // Nutrition
import img5 from '../assets/services-5.jpeg'; // Recovery
import junglePath from '../assets/jungle-path.jpg'; // Keeping the background texture if you have it, or use a generic one

const Services = () => {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === 'ar';

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  
  // --- TYPOGRAPHY & LAYOUT LOGIC ---
  const fontDisplay = isArabic ? 'font-cairo font-black leading-tight' : 'font-beast font-black tracking-tighter leading-[0.9]';
  const fontText = isArabic ? 'font-cairo font-bold text-sm' : 'font-mono text-sm tracking-widest';
  const borderStart = isArabic ? 'border-r-2 pr-6' : 'border-l-2 pl-6';
  const borderStartSmall = isArabic ? 'border-r-2 pr-6' : 'border-l-2 pl-6';

  const yParallax = useTransform(scrollYProgress, [0, 1], [0, 150]);
  
  const fadeInUp: any = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <div ref={containerRef} className="bg-[#0d1f0d] text-[#e8f5e8] pt-20 overflow-x-hidden relative font-sans selection:bg-[#76ff03] selection:text-black" dir={isArabic ? 'rtl' : 'ltr'}>
      
      <Head 
        title={isArabic ? "خدمات وايلدز جيم | تدريب شخصي وتغذية في عمان" : "Services | Personal Training, Nutrition & Recovery in Amman"}
        description={t('services.heroDesc')}
      />

      {/* --- ATMOSPHERE --- */}
      <div className="fixed inset-0 pointer-events-none z-0">
         <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
         <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[#76ff03] blur-[250px] opacity-5"></div>
      </div>

      {/* --- HERO (IMAGE 1) --- */}
      <section className="relative h-[90vh] flex flex-col justify-center items-center text-center px-6 overflow-hidden border-b border-[#1b5e20]">
        <motion.div style={{ y: yParallax }} className="absolute inset-0 z-0 will-change-transform">
             <div className="absolute inset-0 bg-black/40 z-10"></div>
             {/* FULL COLOR HERO */}
             <img src={img1} className="w-full h-full object-cover" alt="Wilds Gym Hero" />
        </motion.div>
        
        <div className="relative z-30 max-w-5xl">
          <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
            <h2 className={`text-[#76ff03] uppercase tracking-[0.5em] mb-6 ${isArabic ? 'font-cairo font-bold text-xl' : 'font-beast text-lg md:text-xl'}`}>
                {isArabic ? 'أهلاً بك في البرية' : 'Welcome to the Wilds'}
            </h2>
            <h1 className={`text-5xl md:text-[7rem] uppercase mb-8 text-[#f1f8e9] ${fontDisplay}`}>
              {isArabic ? 'أطلق قوتك' : 'Unleash Your'} <br/> <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#4caf50] to-[#1b5e20]">{isArabic ? 'البدائية' : 'Primal Strength'}</span> <br/> {isArabic ? 'في عمان' : 'in Sweifieh, Amman'}
            </h1>
            <div className={`bg-black/60 p-6 max-w-3xl mx-auto backdrop-blur-sm ${borderStart}`}>
                <p className={`text-lg md:text-xl uppercase leading-relaxed text-[#a5d6a7] mb-4 ${fontText}`}>
                  {isArabic 
                    ? 'من تمارين الحديد للتغذية والاستشفاء، وايلدز جيم في شارع باريس بوفرلك كل اشي بتحتاجه عشان تتمرن صح وتبني جسم قوي.' 
                    : 'From strength training to recovery and nutrition, Wilds Gym on Paris Street in Sweifieh offers everything you need to train better, feel stronger, and build real results.'}
                </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- SERVICE 1: OPEN GYM (IMAGE 2) --- */}
      <section className="py-24 px-6 relative z-10">
        <div className="container mx-auto grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="relative group">
                <div className="aspect-[4/5] overflow-hidden border-2 border-[#2e7d32] rounded-sm relative z-10 bg-[#0d1f0d]">
                    {/* FULL COLOR IMAGE */}
                    <img loading="lazy" src={img2} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Open Gym" />
                </div>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
                <div className="flex items-center gap-4 mb-4">
                    <Dumbbell className="text-[#76ff03]" size={32} />
                    <span className={`text-[#76ff03] text-xs uppercase tracking-widest ${fontText}`}>
                        {isArabic ? 'منطقة التجوال الحر' : 'The Free Roam Territory'}
                    </span>
                </div>
                <h2 className={`text-4xl md:text-6xl uppercase mb-6 text-[#e8f5e8] ${fontDisplay}`}>
                    {t('services.openTitle')}
                </h2>
                <div className={`space-y-6 text-[#a5d6a7] uppercase leading-relaxed ${fontText}`}>
                    <p>{isArabic ? 'وايلدز جيم بوفرلك دخول كامل للأعضاء اللي بفضلوا يتمرنوا لحالهم.' : 'Wilds Gym provides full open-gym access for members who prefer to train independently.'}</p>
                    <p>{isArabic ? 'نادينا بالصويفية بشمل:' : 'Our gym in Sweifieh, Amman includes:'}</p>
                    <ul className={`grid grid-cols-1 gap-2 ${borderStartSmall} py-2`}>
                        {[
                            isArabic ? "مناطق أوزان حرة وقوة" : "Strength & free-weight zones", 
                            isArabic ? "أجهزة كارديو" : "Cardio machines", 
                            isArabic ? "مناطق تمرين نظيفة ومرتبة" : "Clean, organized workout areas", 
                            isArabic ? "ساعات دوام طويلة (06:00 – 23:00)" : "Long opening hours (06:00–23:00)"
                        ].map((item, i) => (
                            <li key={i} className="text-[#f1f8e9] flex items-center gap-2">
                                <CheckCircle2 size={14} className="text-[#76ff03]"/> {item}
                            </li>
                        ))}
                    </ul>
                    <p className={`text-[#76ff03] text-lg tracking-wide ${isArabic ? 'font-cairo font-black' : 'font-beast'}`}>
                        {t('services.openDesc')}
                    </p>
                </div>
            </motion.div>
        </div>
      </section>

      {/* ===================================================================================== */}
      {/* === MEGA SECTION: PERSONAL TRAINING & WELLNESS (Unified Background) === */}
      {/* ===================================================================================== */}
      <section className="py-32 relative z-10 border-t border-[#2e7d32]/30 overflow-hidden">
        
        {/* --- SHARED BACKGROUND --- */}
        <div className="absolute inset-0 z-0">
            {/* If you have the junglePath image, keeps it as texture, otherwise use generic */}
            <img src={junglePath} alt="Texture" className="w-full h-full object-cover opacity-60 grayscale-[0.2]" />
            <div className="absolute inset-0 bg-[#0d1f0d]/80 mix-blend-multiply"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-[#0d1f0d] via-transparent to-[#0d1f0d]"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">

            {/* --- SERVICE 2: PERSONAL TRAINING (IMAGE 3) --- */}
            <div className="mb-40 pt-16">
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 border border-[#76ff03] px-4 py-2 rounded-full mb-6 bg-[#76ff03]/5 backdrop-blur-md">
                        <Crown size={16} className="text-[#76ff03]" />
                        <span className={`text-[#76ff03] text-xs uppercase tracking-widest ${fontText}`}>
                            {isArabic ? 'طريق الألفا' : 'The Alpha Path'}
                        </span>
                    </div>
                    <h2 className={`text-5xl md:text-8xl uppercase mb-6 text-[#f1f8e9] drop-shadow-2xl ${fontDisplay}`}>
                        {t('services.ptTitle')} <span className="text-[#76ff03]">{isArabic ? 'في عمان' : 'in Amman'}</span>
                    </h2>
                    <p className={`text-[#a5d6a7] text-lg uppercase tracking-widest max-w-2xl mx-auto drop-shadow-md ${fontText}`}>
                        {t('services.ptDesc')}
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Glass Text Box */}
                    <div className="bg-[#0d1f0d]/60 backdrop-blur-md border border-[#76ff03]/30 p-10 relative group rounded-sm shadow-xl hover:border-[#76ff03]/60 transition-colors">
                        <h3 className={`text-3xl uppercase text-[#f1f8e9] mb-8 ${fontDisplay}`}>
                            {isArabic ? 'مع مدرب وايلدز الشخصي:' : 'With a Wilds personal trainer:'}
                        </h3>
                        <ul className="space-y-4 mb-8">
                            {[
                                isArabic ? "توجيه شخصي واحد لواحد" : "One-on-one Guidance", 
                                isArabic ? "خطة تمرين مفصلة إلك" : "A custom training plan", 
                                isArabic ? "إتقان التتكنيك" : "Technique Mastery", 
                                isArabic ? "تحفيز ومتابعة" : "Motivation and accountability"
                            ].map((item, i) => (
                                <li key={i} className={`flex items-center gap-4 text-[#a5d6a7] uppercase ${fontText}`}>
                                    <div className="w-2 h-2 bg-[#76ff03] rotate-45"></div> {item}
                                </li>
                            ))}
                        </ul>
                        <h4 className={`text-[#76ff03] font-bold text-xs uppercase mb-2 ${fontText}`}>
                            {isArabic ? 'مثالي لـ:' : 'Ideal for:'}
                        </h4>
                        <p className={`text-[#a5d6a7] text-xs uppercase leading-relaxed ${fontText}`}>
                            {isArabic ? 'المبتدئين • خسارة الوزن • بناء العضلات • العودة بعد إصابة • تحسين الأداء' : 'Beginners • Fat loss goals • Muscle building • Returning after injury • Performance improvement'}
                        </p>
                    </div>
                    
                    {/* Image Box (IMAGE 3) */}
                    <div className="relative aspect-video border-2 border-[#76ff03]/50 bg-[#0d1f0d] shadow-2xl overflow-hidden">
                        {/* FULL COLOR IMAGE */}
                        <img loading="lazy" src={img3} className="w-full h-full object-cover contrast-110" alt="Personal Training" />
                        <div className={`absolute bottom-6 ${isArabic ? 'right-6' : 'left-6'}`}>
                            <p className={`text-[#76ff03] text-4xl uppercase drop-shadow-lg ${fontDisplay}`}>
                                {isArabic ? '"صير القمة."' : '"Become the Apex."'}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* --- SERVICE 3 & 4: NUTRITION & RECOVERY (IMAGES 4 & 5) --- */}
            <div className="mb-40 grid lg:grid-cols-2 gap-24 lg:gap-20">
                {/* NUTRITION (IMAGE 4) */}
                <motion.div 
                    initial={{ opacity: 0 }} 
                    whileInView={{ opacity: 1 }} 
                    viewport={{ once: true }} 
                    className="relative w-full max-w-[550px] mx-auto aspect-video group overflow-hidden border border-[#76ff03]/30 bg-[#0d1f0d]/10 backdrop-blur-sm hover:border-[#76ff03] transition-all"
                >
                    {/* FULL COLOR IMAGE */}
                    <img loading="lazy" src={img4} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Nutrition" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-[#0d1f0d]/30 to-transparent"></div>
                    
                    <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-center p-12">
                        <div className="flex items-center gap-2 mb-2 text-[#4caf50] bg-black/60 px-3 py-1 rounded-full backdrop-blur-sm">
                            <Utensils size={20} /> <span className={`text-[10px] uppercase tracking-widest ${fontText}`}>{isArabic ? 'الوقود' : 'The Fuel'}</span>
                        </div>
                        <h3 className={`text-3xl md:text-4xl uppercase text-[#e8f5e8] mb-4 drop-shadow-md ${fontDisplay}`}>
                            {t('services.nutritionTitle')}
                        </h3>
                    </div>
                </motion.div>

                {/* RECOVERY (IMAGE 5) */}
                <motion.div 
                    initial={{ opacity: 0 }} 
                    whileInView={{ opacity: 1 }} 
                    viewport={{ once: true }} 
                    transition={{ delay: 0.1 }} 
                    className="relative w-full max-w-[550px] mx-auto aspect-video group overflow-hidden border border-[#00bcd4]/30 bg-[#0d1f0d]/40 backdrop-blur-sm hover:border-[#00bcd4] transition-all"
                >
                    {/* FULL COLOR IMAGE */}
                    <img loading="lazy" src={img5} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Recovery" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-[#0d1f0d]/30 to-transparent"></div>
                    
                    <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-center p-12">
                        <div className="flex items-center gap-2 mb-2 text-[#00bcd4] bg-black/60 px-3 py-1 rounded-full backdrop-blur-sm">
                            <Droplets size={20} /> <span className={`text-[10px] uppercase tracking-widest ${fontText}`}>{isArabic ? 'الينابيع' : 'The Springs'}</span>
                        </div>
                        <h3 className={`text-3xl md:text-4xl uppercase text-[#e8f5e8] mb-4 drop-shadow-md ${fontDisplay}`}>
                            {t('services.recoveryTitle')}
                        </h3>
                    </div>
                </motion.div>
            </div>

            {/* --- PATH SELECTION --- */}
            <div>
                <div className="text-center mb-16">
                    <h2 className={`text-4xl md:text-6xl uppercase mb-4 text-[#f1f8e9] drop-shadow-lg ${fontDisplay}`}>
                        {t('services.pathTitle')}
                    </h2>
                    <div className="w-24 h-1 bg-[#76ff03] mx-auto mb-8 box-shadow-[0_0_10px_#76ff03]"></div>
                    <p className={`text-[#a5d6a7] text-sm uppercase max-w-2xl mx-auto bg-black/40 p-2 backdrop-blur-sm rounded ${fontText}`}>
                        {isArabic ? '"فريقنا بالصويفية رح يساعدك تختار الأنسب لهدفك."' : '"Our team in Sweifieh will help you choose what fits your goals."'}
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {[
                        { title: isArabic ? "صيادين القمة" : "Apex Hunters", desc: isArabic ? "دخول حر (Free Roam)" : "Open Gym (Free Roam)", color: "text-[#ffd700]", border: "hover:border-[#ffd700]" },
                        { title: isArabic ? "المستجدين" : "Newcomers", desc: isArabic ? "تدريب شخصي" : "Personal Training", color: "text-[#76ff03]", border: "hover:border-[#76ff03]" },
                        { title: isArabic ? "كل القبيلة" : "All Tribe", desc: isArabic ? "تغذية وينابيع مقدسة" : "Nutrition & Sacred Springs", color: "text-[#00bcd4]", border: "hover:border-[#00bcd4]" },
                    ].map((path, i) => (
                        <div key={i} className={`relative p-10 flex items-center justify-center group h-[200px] backdrop-blur-md bg-white/5 border border-white/10 rounded-lg shadow-2xl transition-all ${path.border}`}>
                            <div className="relative z-10 text-center">
                                <h4 className={`text-xl uppercase mb-2 ${path.color} drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] ${fontDisplay}`}>{path.title}</h4>
                                <p className={`text-[#e5e5e5] text-[10px] uppercase drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)] ${fontText}`}>{path.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
      </section>

      {/* --- CTA: STEP INTO THE WILDS --- */}
      <section className="py-32 relative z-10 border-t border-[#2e7d32] text-center overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
            <h2 className={`text-5xl md:text-8xl uppercase text-[#f1f8e9] mb-8 tracking-tighter drop-shadow-xl ${fontDisplay}`}>
                {isArabic ? 'ادخل' : 'Step Into'} <span className="text-[#76ff03]">{isArabic ? 'البرية' : 'The Wilds'}</span>
            </h2>
            <p className={`text-[#a5d6a7] text-lg uppercase tracking-widest max-w-2xl mx-auto mb-12 ${fontText}`}>
                {isArabic ? 'زور وايلدز جيم بشارع باريس، قابل قبيلتك، وشوف وين بنصنع التقدم.' : 'Visit Wilds Gym on Paris Street in Sweifieh, meet your tribe, and see where progress is forged.'}
            </p>
            
            <a href="https://wa.me/962798885011" className={`group relative inline-flex items-center gap-6 bg-[#0d1f0d] border-2 border-[#76ff03] text-[#76ff03] px-16 py-8 font-black text-3xl uppercase tracking-widest overflow-hidden hover:bg-[#76ff03] hover:text-[#0d1f0d] transition-all duration-300 shadow-lg ${isArabic ? 'font-cairo' : 'font-beast'}`}>
                <span className="relative z-10 flex items-center gap-4">
                    {t('services.ctaStep')} {isArabic ? <ArrowLeft size={32} /> : <ArrowRight size={32} />}
                </span>
            </a>
            
            <div className="mt-16 flex flex-wrap justify-center gap-12 text-[#4caf50] font-mono text-xs uppercase tracking-[0.2em] bg-black/50 inline-block px-12 py-6 rounded-sm border border-[#2e7d32]">
               <span className={`flex items-center gap-3 ${isArabic ? 'flex-row-reverse' : ''}`}><MapPin size={16}/> {isArabic ? 'شارع باريس، الصويفية – عمان' : 'Paris Street, Sweifieh – Amman'}</span>
               <span className={`flex items-center gap-3 ${isArabic ? 'flex-row-reverse' : ''}`}><Clock size={16}/> {isArabic ? 'يومياً 06:00 – 23:00' : 'Open Daily 06:00–23:00'}</span>
               <span className={`flex items-center gap-3 ${isArabic ? 'flex-row-reverse' : ''}`}><Phone size={16}/> 079 888 5011</span>
            </div>
        </div>
      </section>

    </div>
  );
};

export default Services;