import { useState, useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import { 
  Check, X, Shield, Zap, Crown, 
  Target, ChevronDown, ChevronUp 
} from 'lucide-react';

// --- ASSETS ---
const IMG_SCOUT = "https://images.unsplash.com/photo-1552674605-46d531d0e090?q=80&w=1888"; // Dawn/Hiking
const IMG_HUNTER = "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070"; // Gym Action
const IMG_APEX = "https://images.unsplash.com/photo-1550259114-ad7188f0a967?q=80&w=2080"; // Intense/Dark/Red

const Membership = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);
  
  const containerRef = useRef(null);
  useScroll({ target: containerRef });

  // --- DATA ---
  const tiers = [
    {
      id: 'scout',
      name: 'The Scout',
      icon: Target,
      // Earthy Bronze/Orange for the "Starter" Path
      color: 'text-[#cd7f32]', 
      border: 'border-[#cd7f32]',
      bg: 'bg-[#cd7f32]/10',
      glow: 'from-transparent to-[#cd7f32]/20',
      price: billingCycle === 'monthly' ? '45' : '40',
      desc: 'Begin Your Journey',
      features: ['06:00 - 16:00 Access', 'Open Gym Territory', 'Wilds App Access', 'Orientation Ritual'],
      powerLevel: 30
    },
    {
      id: 'hunter',
      name: 'The Hunter',
      icon: Zap,
      // ELECTRIC GREEN for the "Main" Path
      color: 'text-[#76ff03]', 
      border: 'border-[#76ff03]',
      bg: 'bg-[#76ff03]/10',
      glow: 'from-transparent to-[#76ff03]/20',
      price: billingCycle === 'monthly' ? '65' : '55',
      desc: 'Master The Wild',
      recommended: true,
      features: ['Unlimited Access (23:00)', 'Pack Sessions Included', 'Sacred Springs Access', 'Guest Hunting Rights'],
      powerLevel: 75
    },
    {
      id: 'apex',
      name: 'The Apex',
      icon: Crown,
      // Aggressive Red for the "Elite" Path
      color: 'text-[#ef4444]', 
      border: 'border-[#ef4444]',
      bg: 'bg-[#ef4444]/10',
      glow: 'from-transparent to-[#ef4444]/20',
      price: billingCycle === 'monthly' ? '150' : '130',
      desc: 'Become Unstoppable',
      features: ['Unlimited Everything', 'Personal Transformation Guide', 'Nutrition Council', 'VIP Tribe Status'],
      powerLevel: 100
    }
  ];

  return (
    <div ref={containerRef} className="bg-[#0d1f0d] text-[#e8f5e8] pt-20 overflow-x-hidden relative font-sans selection:bg-[#76ff03] selection:text-black">
      
      {/* --- ATMOSPHERE LAYERS --- */}
      <div className="fixed inset-0 pointer-events-none z-0">
         <div className="absolute inset-0 opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
         {/* Ambient Glows - Mainly Green with accents */}
         <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#1b5e20] blur-[150px] opacity-40"></div>
         <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-[#76ff03] blur-[200px] opacity-10"></div>
      </div>

      {/* --- HERO: CHOOSE YOUR DESTINY --- */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-4 py-20">
        <div className="text-center mb-16 relative z-10">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                <h2 className="text-[#76ff03] font-beast text-sm uppercase tracking-[0.5em] mb-4">The Initiation Ritual</h2>
                <h1 className="text-5xl md:text-8xl font-beast font-black uppercase text-[#f1f8e9] mb-6">
                    Choose Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#cd7f32] via-[#76ff03] to-[#ef4444]">Destiny</span>
                </h1>
                <p className="max-w-2xl mx-auto text-[#a5d6a7] font-mono text-sm uppercase leading-relaxed">
                    "Before you lie three paths through the wilds. The question is not which path is best, but which path calls to YOUR wild nature?"
                </p>
            </motion.div>

            {/* BILLING TOGGLE */}
            <div className="mt-12 inline-flex items-center gap-4 bg-[#050a05] p-1 rounded-full border border-[#2e7d32]">
                <button 
                    onClick={() => setBillingCycle('monthly')}
                    className={`px-6 py-2 rounded-full font-beast text-xs uppercase tracking-widest transition-all ${billingCycle === 'monthly' ? 'bg-[#1b5e20] text-white' : 'text-[#666]'}`}
                >
                    Monthly Hunt
                </button>
                <button 
                    onClick={() => setBillingCycle('annual')}
                    className={`px-6 py-2 rounded-full font-beast text-xs uppercase tracking-widest transition-all ${billingCycle === 'annual' ? 'bg-[#76ff03] text-black shadow-[0_0_15px_rgba(118,255,3,0.4)]' : 'text-[#666]'}`}
                >
                    Annual Oath <span className="text-[10px] ml-1">(Save 20%)</span>
                </button>
            </div>
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
                    
                    {/* Background Image (Faded) */}
                    <div className="absolute inset-0 opacity-30 mix-blend-overlay grayscale group-hover:grayscale-0 transition-all duration-700">
                        <img src={i === 0 ? IMG_SCOUT : i === 1 ? IMG_HUNTER : IMG_APEX} className="w-full h-full object-cover" alt="bg" />
                    </div>

                    {/* Content */}
                    <div className="relative z-10 p-8 flex flex-col h-full">
                        <div className="flex justify-between items-start mb-8">
                            <tier.icon className={`${tier.color} drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]`} size={40} />
                            {tier.recommended && (
                                <span className="bg-[#76ff03] text-black text-[10px] font-beast uppercase px-3 py-1 tracking-widest shadow-[0_0_10px_rgba(118,255,3,0.5)]">
                                    Pack Choice
                                </span>
                            )}
                        </div>

                        <h3 className="text-4xl font-beast font-black uppercase mb-2 text-[#f1f8e9]">{tier.name}</h3>
                        <p className={`font-mono text-xs uppercase tracking-widest mb-8 ${tier.color}`}>{tier.desc}</p>

                        {/* Power Level Bar */}
                        <div className="mb-8">
                            <div className="flex justify-between text-[10px] uppercase text-[#666] mb-1">
                                <span>Power Level</span>
                                <span className={tier.color}>{tier.powerLevel}/100</span>
                            </div>
                            <div className="h-1 w-full bg-[#1b5e20]/30">
                                <motion.div 
                                    initial={{ width: 0 }} 
                                    whileInView={{ width: `${tier.powerLevel}%` }} 
                                    transition={{ duration: 1.5, delay: 0.5 }}
                                    className={`h-full ${tier.bg.replace('/10', '')} shadow-[0_0_10px_currentColor]`}
                                    style={{ backgroundColor: 'currentColor', color: tier.id === 'scout' ? '#cd7f32' : tier.id === 'hunter' ? '#76ff03' : '#ef4444' }}
                                ></motion.div>
                            </div>
                        </div>

                        {/* Features List */}
                        <ul className="space-y-4 mb-auto">
                            {tier.features.map((feat, j) => (
                                <li key={j} className="flex items-center gap-3 text-sm font-mono uppercase text-[#a5d6a7]">
                                    <Check size={14} className={tier.color} /> {feat}
                                </li>
                            ))}
                        </ul>

                        {/* Price & CTA */}
                        <div className="pt-8 border-t border-[#2e7d32]/30 group-hover:border-opacity-50 transition-colors">
                            <div className="flex items-baseline gap-1 mb-4">
                                <span className="text-4xl font-beast text-[#f1f8e9]">{tier.price}</span>
                                <span className="text-xs font-mono text-[#666]">JOD / MO</span>
                            </div>
                            <button className={`w-full py-4 font-beast uppercase tracking-widest border transition-all duration-300 hover:bg-[#f1f8e9] hover:text-black ${tier.border} ${tier.color} hover:shadow-[0_0_20px_currentColor]`}>
                                Select {tier.name}
                            </button>
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
      </section>

      {/* --- COMPARISON TABLE: THE TRIBAL COUNCIL --- */}
      <section className="py-24 px-4 bg-[#0a140a] border-y border-[#1b5e20]/50">
        <div className="container mx-auto max-w-5xl">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-beast font-black uppercase text-[#f1f8e9] mb-4">The Paths at a Glance</h2>
                <p className="text-[#a5d6a7] font-mono text-xs uppercase tracking-widest">Compare your destiny options</p>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="border-b border-[#2e7d32]/30">
                            <th className="p-4 font-beast text-sm uppercase text-[#666]">Feature / Benefit</th>
                            <th className="p-4 font-beast text-xl uppercase text-[#cd7f32] text-center">Scout</th>
                            <th className="p-4 font-beast text-xl uppercase text-[#76ff03] text-center drop-shadow-[0_0_5px_rgba(118,255,3,0.5)]">Hunter</th>
                            <th className="p-4 font-beast text-xl uppercase text-[#ef4444] text-center">Apex</th>
                        </tr>
                    </thead>
                    <tbody className="font-mono text-xs uppercase text-[#a5d6a7]">
                        {[
                            { name: "Access Window", scout: "06:00 - 16:00", hunter: "Unlimited", apex: "Unlimited 24/7" },
                            { name: "Training Zones", scout: "Open Gym", hunter: "All Zones", apex: "All Zones + VIP" },
                            { name: "Pack Sessions", scout: false, hunter: "Limited", apex: "Unlimited" },
                            { name: "Personal Guide", scout: false, hunter: "Discounted", apex: "Included" },
                            { name: "Sacred Springs", scout: false, hunter: true, apex: "Priority" },
                            { name: "Guest Rights", scout: false, hunter: "2 / Month", apex: "4 / Month" },
                        ].map((row, i) => (
                            <tr key={i} className="border-b border-[#2e7d32]/20 hover:bg-[#1b5e20]/20 transition-colors">
                                <td className="p-4 text-[#f1f8e9] font-bold">{row.name}</td>
                                <td className="p-4 text-center">{typeof row.scout === 'boolean' ? (row.scout ? <Check className="mx-auto text-[#cd7f32]" size={16}/> : <X className="mx-auto text-[#333]" size={16}/>) : row.scout}</td>
                                <td className="p-4 text-center">{typeof row.hunter === 'boolean' ? (row.hunter ? <Check className="mx-auto text-[#76ff03]" size={16}/> : <X className="mx-auto text-[#333]" size={16}/>) : <span className="text-[#76ff03]">{row.hunter}</span>}</td>
                                <td className="p-4 text-center">{typeof row.apex === 'boolean' ? (row.apex ? <Check className="mx-auto text-[#ef4444]" size={16}/> : <X className="mx-auto text-[#333]" size={16}/>) : <span className="text-[#ef4444] font-bold">{row.apex}</span>}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
      </section>

      {/* --- THE OATH: COMMITMENT SECTION --- */}
      <section className="py-32 px-4 relative overflow-hidden">
        {/* Background Ritual Fire (Green Fire now) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#76ff03] blur-[200px] opacity-10 pointer-events-none"></div>

        <div className="container mx-auto max-w-2xl relative z-10 bg-[#0a140a] border border-[#2e7d32] p-8 md:p-12 text-center shadow-[0_0_50px_rgba(46,125,50,0.2)]">
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-[#050505] px-4 border border-[#2e7d32] rounded-full p-2">
                <Shield className="text-[#76ff03]" size={32} />
            </div>

            <h2 className="text-4xl font-beast font-black uppercase text-[#f1f8e9] mb-6 mt-4">Seal Your Commitment</h2>
            <p className="text-[#a5d6a7] font-mono text-sm uppercase leading-relaxed mb-12">
                "You have chosen your path. Now make it official. This isn't a transaction—it's a transformation ritual."
            </p>

            <form className="space-y-6 text-left">
                <div className="grid md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-[#666] font-mono text-xs uppercase mb-2">Warrior Name</label>
                        <input type="text" className="w-full bg-[#050a05] border border-[#2e7d32]/50 p-4 text-[#f1f8e9] font-beast focus:border-[#76ff03] outline-none transition-colors" placeholder="ENTER NAME" />
                    </div>
                    <div>
                        <label className="block text-[#666] font-mono text-xs uppercase mb-2">Digital Signal (Email)</label>
                        <input type="email" className="w-full bg-[#050a05] border border-[#2e7d32]/50 p-4 text-[#f1f8e9] font-beast focus:border-[#76ff03] outline-none transition-colors" placeholder="ENTER EMAIL" />
                    </div>
                </div>

                <div>
                    <label className="block text-[#666] font-mono text-xs uppercase mb-2">Select Your Path</label>
                    <select className="w-full bg-[#050a05] border border-[#2e7d32]/50 p-4 text-[#f1f8e9] font-beast focus:border-[#76ff03] outline-none appearance-none uppercase">
                        <option>The Scout Path</option>
                        <option>The Hunter Path (Recommended)</option>
                        <option>The Apex Path</option>
                    </select>
                </div>

                <div className="pt-6">
                    <button type="button" className="w-full bg-[#76ff03] text-black py-6 font-beast text-xl uppercase tracking-widest hover:bg-[#f1f8e9] transition-colors duration-300 shadow-[0_0_20px_rgba(118,255,3,0.3)]">
                        Complete Initiation
                    </button>
                    <p className="text-center text-[#666] font-mono text-[10px] uppercase mt-4">
                        * 30-Day Money Back Guarantee. No Risk. Pure Wild.
                    </p>
                </div>
            </form>
        </div>
      </section>

      {/* --- FAQ SECTION --- */}
      <section className="py-24 px-4 bg-[#0a140a] border-t border-[#2e7d32]/30">
          <div className="container mx-auto max-w-3xl">
              <h2 className="text-3xl font-beast font-black uppercase text-[#f1f8e9] mb-12 text-center">Questions From Future Warriors</h2>
              
              <div className="space-y-4">
                  {[
                      { q: "Can I switch paths later?", a: "Absolutely. Evolution is natural. Upgrade anytime. Downgrade at renewal." },
                      { q: "What if I need to pause?", a: "Life happens. Freeze for up to 3 months per year. Medical or travel reasons accepted." },
                      { q: "I'm a complete beginner. Will I fit in?", a: "YES. 40% of our tribe started as complete newbies. We guide, support, and celebrate growth." },
                      { q: "Are there hidden fees?", a: "Never. Price shown is price paid. No signup fees. No surprise charges." }
                  ].map((item, i) => (
                      <div key={i} className="border border-[#2e7d32]/30 bg-[#0d1f0d]">
                          <button 
                            onClick={() => setActiveAccordion(activeAccordion === i ? null : i)}
                            className="w-full flex justify-between items-center p-6 text-left"
                          >
                              <span className="font-beast uppercase text-[#e5e5e5]">{item.q}</span>
                              {activeAccordion === i ? <ChevronUp size={20} className="text-[#76ff03]"/> : <ChevronDown size={20} className="text-[#666]"/>}
                          </button>
                            {activeAccordion === i && (
                                <div className="px-6 pb-6 text-[#a5d6a7] font-mono text-xs uppercase leading-relaxed border-t border-[#2e7d32]/20">
                                    {item.a}
                                </div>
                            )}
                      </div>
                  ))}
              </div>
          </div>
      </section>

    </div>
  );
};

export default Membership;