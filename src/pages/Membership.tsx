import { useRef, useEffect } from 'react';
import { motion, useScroll } from 'framer-motion';
import { 
  Check, X, Shield, Zap, Crown, 
  Target, CreditCard, ArrowLeft, ArrowRight 
} from 'lucide-react';
import { useTranslation } from 'react-i18next'; // <--- LOCALIZATION HOOK

// --- SEO ---
import Head from '../components/seo/Head';

// --- ASSETS ---
import HERO_VIDEO from '../assets/Ancient_Pillar_Orbit_Shot.mp4'; 
import wolfBadge from '../assets/wolf-badge.png';   // Bronze (Wolf)
import tigerBadge from '../assets/tiger-badge.png'; // Gold (Tiger)
import lionBadge from '../assets/lion-badge.png';   // Premium (Lion)

const Membership = () => {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === 'ar';

  const containerRef = useRef(null);
  const videoRef = useRef<HTMLVideoElement>(null); 

  useScroll({ target: containerRef });

  useEffect(() => {
    if (videoRef.current) {
        videoRef.current.playbackRate = 0.5; 
    }
  }, []);

  // --- TYPOGRAPHY & LAYOUT LOGIC ---
  const fontDisplay = isArabic ? 'font-cairo font-black' : 'font-beast font-black';
  const fontText = isArabic ? 'font-cairo font-bold' : 'font-mono uppercase';
  const textAlign = isArabic ? 'text-right' : 'text-left';

  // --- CONFIG ---
  const WHATSAPP_NUM = "962798885011";

  // --- DATA (DYNAMIC FROM TRANSLATION) ---
  const tiers = [
    {
      id: 'bronze',
      name: t('membership.bronze.name'), // "Bronze" or "برونزي"
      image: wolfBadge, 
      icon: Target,
      color: 'text-[#cd7f32]', 
      border: 'border-[#cd7f32]',
      bg: 'bg-[#cd7f32]/10',
      glow: 'from-transparent to-[#cd7f32]/20',
      desc: t('membership.bronze.desc'),
      // Safely fetch features array
      features: t('membership.features.bronze', { returnObjects: true }) as string[],
      powerLevel: 30,
      msg: t('membership.bronze.msg')
    },
    {
      id: 'gold',
      name: t('membership.gold.name'),
      image: tigerBadge,
      icon: Zap,
      color: 'text-[#ffd700]', 
      border: 'border-[#ffd700]',
      bg: 'bg-[#ffd700]/10',
      glow: 'from-transparent to-[#ffd700]/20',
      desc: t('membership.gold.desc'),
      recommended: true,
      features: t('membership.features.gold', { returnObjects: true }) as string[],
      powerLevel: 70,
      msg: t('membership.gold.msg')
    },
    {
      id: 'premium',
      name: t('membership.premium.name'),
      image: lionBadge,
      icon: Crown,
      color: 'text-[#ef4444]', 
      border: 'border-[#ef4444]',
      bg: 'bg-[#ef4444]/10',
      glow: 'from-transparent to-[#ef4444]/20',
      desc: t('membership.premium.desc'),
      features: t('membership.features.premium', { returnObjects: true }) as string[],
      powerLevel: 100,
      msg: t('membership.premium.msg')
    }
  ];

  return (
    <div ref={containerRef} className="bg-[#0d1f0d] text-[#e8f5e8] pt-20 overflow-x-hidden relative font-sans selection:bg-[#76ff03] selection:text-black" dir={isArabic ? 'rtl' : 'ltr'}>
      
      {/* --- SEO INJECTION --- */}
      <Head 
        title={isArabic ? "اشتراكات وايلدز جيم | الأسعار والباقات" : "Membership Plans | Wilds Gym Amman Pricing"}
        description={t('membership.heroDesc')}
      />

      {/* --- HERO: CHOOSE YOUR DESTINY --- */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-4 py-20 overflow-hidden">
        
        {/* VIDEO BACKGROUND LAYER */}
        <div className="absolute inset-0 z-0">
            <video
                ref={videoRef}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover opacity-60 grayscale-[50%] brightness-75"
            >
                <source src={HERO_VIDEO} type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-[#0d1f0d]/80 mix-blend-multiply"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-[#0d1f0d] via-transparent to-[#0d1f0d]"></div>
        </div>

        <div className="text-center mb-16 relative z-10">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                <h2 className={`text-[#76ff03] uppercase tracking-[0.5em] mb-4 ${isArabic ? 'font-cairo font-bold text-xl' : 'font-beast text-sm'}`}>
                    {t('membership.heroTitle')}
                </h2>
                <h1 className={`text-5xl md:text-8xl uppercase text-[#f1f8e9] mb-6 drop-shadow-2xl ${fontDisplay}`}>
                    {t('membership.heroSub')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#cd7f32] via-[#ffd700] to-[#ef4444]">Tier</span>
                </h1>
                <p className={`max-w-2xl mx-auto text-[#a5d6a7] uppercase leading-relaxed drop-shadow-md ${fontText}`}>
                    "{t('membership.heroDesc')}"
                </p>
            </motion.div>
        </div>

        {/* --- RPG CHARACTER SELECT CARDS --- */}
        <div className="grid lg:grid-cols-3 gap-6 max-w-7xl w-full relative z-10">
            {tiers.map((tier, i) => (
                <motion.div 
                    key={tier.id}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.15 }}
                    whileHover={{ y: -20, scale: 1.02 }}
                    className={`relative h-[650px] border border-[#2e7d32]/50 bg-[#0a140a] group overflow-hidden flex flex-col transition-all duration-500 hover:border-${tier.color.split('[')[1].split(']')[0]}`}
                >
                    {/* Hover Glow Gradient */}
                    <div className={`absolute inset-0 opacity-0 group-hover:opacity-40 transition-opacity duration-500 bg-gradient-to-b ${tier.glow}`}></div>
                    
                    {/* BADGE IMAGE */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-30 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 ease-out z-0">
                        <img 
                            src={tier.image} 
                            className="w-[80%] h-auto object-contain drop-shadow-[0_0_30px_rgba(0,0,0,0.8)]" 
                            alt={`${tier.name} Badge`} 
                        />
                    </div>

                    {/* Content */}
                    <div className="relative z-10 p-8 flex flex-col h-full bg-gradient-to-b from-[#0a140a]/90 via-transparent to-[#0a140a]">
                        <div className="flex justify-between items-start mb-8">
                            <tier.icon className={`${tier.color} drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]`} size={40} />
                            {tier.recommended && (
                                <span className={`bg-[#ffd700] text-black text-[10px] uppercase px-3 py-1 tracking-widest shadow-[0_0_10px_rgba(255,215,0,0.5)] ${isArabic ? 'font-cairo font-bold' : 'font-beast'}`}>
                                    {t('membership.bestValue')}
                                </span>
                            )}
                        </div>

                        <h3 className={`text-4xl uppercase mb-2 text-[#f1f8e9] shadow-black drop-shadow-lg ${fontDisplay}`}>{tier.name}</h3>
                        <p className={`text-xs uppercase tracking-widest mb-8 ${tier.color} drop-shadow-md ${fontText}`}>{tier.desc}</p>

                        {/* Power Level Bar */}
                        <div className="mb-8">
                            <div className={`flex justify-between text-[10px] uppercase text-[#666] mb-1 ${fontText}`}>
                                <span>{t('membership.power')}</span>
                                <span className={tier.color}>{tier.powerLevel}/100</span>
                            </div>
                            <div className="h-1 w-full bg-[#1b5e20]/30">
                                <motion.div 
                                    initial={{ width: 0 }} 
                                    whileInView={{ width: `${tier.powerLevel}%` }} 
                                    transition={{ duration: 1.5, delay: 0.5 }}
                                    className={`h-full ${tier.bg.replace('/10', '')} shadow-[0_0_10px_currentColor]`}
                                    style={{ backgroundColor: 'currentColor', color: tier.id === 'bronze' ? '#cd7f32' : tier.id === 'gold' ? '#ffd700' : '#ef4444' }}
                                ></motion.div>
                            </div>
                        </div>

                        {/* Features List */}
                        <ul className="space-y-4 mb-auto">
                            {tier.features && tier.features.map((feat, j) => (
                                <li key={j} className={`flex items-center gap-3 text-sm uppercase text-[#a5d6a7] drop-shadow-md ${fontText}`}>
                                    <Check size={14} className={tier.color} /> {feat}
                                </li>
                            ))}
                        </ul>

                        {/* Payment Method & CTA */}
                        <div className="pt-8 border-t border-[#2e7d32]/30 group-hover:border-opacity-50 transition-colors">
                            <div className="mb-4">
                                <p className={`text-[#a5d6a7] text-[10px] uppercase tracking-widest mb-1 flex items-center gap-2 ${fontText}`}>
                                    <CreditCard size={12}/> {t('membership.payment')}
                                </p>
                                <p className={`text-xl text-[#f1f8e9] uppercase ${fontDisplay}`}>
                                    {t('membership.paymentMethod')}
                                </p>
                            </div>

                            <a 
                                href={`https://wa.me/${WHATSAPP_NUM}?text=${encodeURIComponent(tier.msg)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`w-full block text-center py-4 uppercase tracking-widest border transition-all duration-300 hover:bg-[#f1f8e9] hover:text-black ${tier.border} ${tier.color} hover:shadow-[0_0_20px_currentColor] bg-black/40 backdrop-blur-sm ${isArabic ? 'font-cairo font-bold' : 'font-beast'}`}
                            >
                                {t('membership.selectBtn')} {tier.name}
                            </a>
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
      </section>

      {/* --- COMPARISON TABLE --- */}
      <section className="py-24 px-4 bg-[#0a140a] border-y border-[#1b5e20]/50">
        <div className="container mx-auto max-w-5xl">
            <div className="text-center mb-16">
                <h2 className={`text-3xl md:text-5xl uppercase text-[#f1f8e9] mb-4 ${fontDisplay}`}>
                    {t('membership.table.title')}
                </h2>
                <p className={`text-[#a5d6a7] text-xs uppercase tracking-widest ${fontText}`}>
                    {t('membership.table.sub')}
                </p>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full border-collapse" style={{ textAlign: isArabic ? 'right' : 'left' }}>
                    <thead>
                        <tr className="border-b border-[#2e7d32]/30">
                            <th className={`p-4 text-sm uppercase text-[#666] ${isArabic ? 'font-cairo' : 'font-beast'}`}>{t('membership.table.colFeature')}</th>
                            <th className={`p-4 text-xl uppercase text-[#cd7f32] text-center ${isArabic ? 'font-cairo' : 'font-beast'}`}>{t('membership.bronze.name')}</th>
                            <th className={`p-4 text-xl uppercase text-[#ffd700] text-center drop-shadow-[0_0_5px_rgba(255,215,0,0.5)] ${isArabic ? 'font-cairo' : 'font-beast'}`}>{t('membership.gold.name')}</th>
                            <th className={`p-4 text-xl uppercase text-[#ef4444] text-center ${isArabic ? 'font-cairo' : 'font-beast'}`}>{t('membership.premium.name')}</th>
                        </tr>
                    </thead>
                    <tbody className={`text-xs uppercase text-[#a5d6a7] ${fontText}`}>
                        {[
                            { name: t('membership.table.rows.access.name'), bronze: t('membership.table.rows.access.bronze'), gold: t('membership.table.rows.access.gold'), premium: t('membership.table.rows.access.premium') },
                            { name: t('membership.table.rows.nutrition'), bronze: false, gold: true, premium: true },
                            { name: t('membership.table.rows.group'), bronze: false, gold: true, premium: true },
                            { name: t('membership.table.rows.pt'), bronze: false, gold: true, premium: true },
                            { name: t('membership.table.rows.private'), bronze: false, gold: false, premium: true },
                            { name: t('membership.table.rows.vip'), bronze: false, gold: false, premium: true },
                        ].map((row, i) => (
                            <tr key={i} className="border-b border-[#2e7d32]/20 hover:bg-[#1b5e20]/20 transition-colors">
                                <td className="p-4 text-[#f1f8e9] font-bold">{row.name}</td>
                                <td className="p-4 text-center">{typeof row.bronze === 'boolean' ? (row.bronze ? <Check className="mx-auto text-[#cd7f32]" size={16}/> : <X className="mx-auto text-[#333]" size={16}/>) : row.bronze}</td>
                                <td className="p-4 text-center">{typeof row.gold === 'boolean' ? (row.gold ? <Check className="mx-auto text-[#ffd700]" size={16}/> : <X className="mx-auto text-[#333]" size={16}/>) : <span className="text-[#ffd700]">{row.gold}</span>}</td>
                                <td className="p-4 text-center">{typeof row.premium === 'boolean' ? (row.premium ? <Check className="mx-auto text-[#ef4444]" size={16}/> : <X className="mx-auto text-[#333]" size={16}/>) : <span className="text-[#ef4444] font-bold">{row.premium}</span>}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
      </section>

      {/* --- THE OATH: COMMITMENT SECTION --- */}
      <section className="py-32 px-4 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#76ff03] blur-[200px] opacity-10 pointer-events-none"></div>

        <div className="container mx-auto max-w-2xl relative z-10 bg-[#0a140a] border border-[#2e7d32] p-8 md:p-12 text-center shadow-[0_0_50px_rgba(46,125,50,0.2)]">
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-[#050505] px-4 border border-[#2e7d32] rounded-full p-2">
                <Shield className="text-[#76ff03]" size={32} />
            </div>

            <h2 className={`text-4xl uppercase text-[#f1f8e9] mb-6 mt-4 ${fontDisplay}`}>
                {t('membership.oathTitle')}
            </h2>
            <p className={`text-[#a5d6a7] text-sm uppercase leading-relaxed mb-12 ${fontText}`}>
                "{t('membership.oathText')}"
            </p>

            <a 
                href={`https://wa.me/${WHATSAPP_NUM}?text=${encodeURIComponent(t('membership.oathMsg'))}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full block bg-[#76ff03] text-black py-6 text-xl uppercase tracking-widest hover:bg-[#f1f8e9] transition-colors duration-300 shadow-[0_0_20px_rgba(118,255,3,0.3)] ${isArabic ? 'font-cairo font-black' : 'font-beast'}`}
            >
                {t('membership.oathBtn')}
            </a>
        </div>
      </section>

    </div>
  );
};

export default Membership;