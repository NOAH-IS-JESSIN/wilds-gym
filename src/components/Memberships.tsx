// 1. Remove unused icons (Calendar, ShieldCheck, Trophy, Crown)
import { Check } from 'lucide-react';
import { motion } from 'framer-motion';

// 2. Remove 'duration' from the props list
const TierCard = ({ title, price, total, features, recommended, delay }: any) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.6 }}
    className={`relative p-8 border ${recommended ? 'border-wild-accent bg-wild-dark' : 'border-wild-dark bg-wild-black'} flex flex-col h-full`}
  >
    {recommended && (
      <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-wild-accent text-wild-black px-4 py-1 font-beast font-bold text-[10px] uppercase tracking-[0.2em]">
        Elite Commitment
      </div>
    )}
    
    <div className="mb-6">
      <h3 className="text-xl font-beast text-wild-gray uppercase tracking-widest">{title}</h3>
      <div className="flex items-baseline gap-1 mt-2">
        <span className="text-5xl font-beast font-black text-wild-white uppercase">{price}</span>
        <span className="text-wild-gray font-mono text-xs uppercase">/ JOD</span>
      </div>
      {total && <p className="text-wild-accent font-mono text-[10px] mt-1 uppercase italic">{total}</p>}
    </div>

    <ul className="space-y-4 mb-10 flex-grow border-t border-wild-dark pt-6">
      {features.map((f: string, i: number) => (
        <li key={i} className="flex items-start gap-3 text-xs text-wild-gray font-sans uppercase tracking-tight leading-tight">
          <Check size={14} className="text-wild-accent mt-0.5 shrink-0" />
          {f}
        </li>
      ))}
    </ul>

    <button className={`w-full py-4 font-beast font-bold uppercase tracking-widest transition-all duration-300 ${recommended ? 'bg-wild-accent text-wild-black hover:bg-wild-white' : 'border border-wild-accent text-wild-accent hover:bg-wild-accent hover:text-wild-black'}`}>
      Begin The Hunt
    </button>
  </motion.div>
);

const Memberships = () => {
  return (
    <section className="bg-wild-black py-32 px-6 relative border-t border-wild-dark">
      <div className="container mx-auto">
        <div className="text-center mb-20">
          <p className="text-wild-accent font-mono text-xs uppercase tracking-[0.5em] mb-4">Duration Equals Results</p>
          <h2 className="text-5xl md:text-8xl font-beast font-black text-wild-white uppercase leading-none">The Commitment</h2>
          <div className="h-1 w-20 bg-wild-accent mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">
          <TierCard 
            title="Trial"
            duration="1 Month"
            price="50"
            delay={0.1}
            features={["Full Territory Access", "Locker & Shower Access", "No Commitment", "Standard Induction"]}
          />
          <TierCard 
            title="The Pack"
            duration="3 Months"
            price="135"
            total="Save 15 JOD"
            delay={0.2}
            features={["Full Territory Access", "Locker & Shower Access", "Access to Classes", "Community Events"]}
          />
          <TierCard 
            title="The Predator"
            duration="6 Months"
            price="240"
            total="Save 60 JOD"
            delay={0.3}
            features={["All Pack Features", "1 Guest Pass per Month", "Sauna & Jacuzzi Access", "Progress Tracking"]}
          />
          <TierCard 
            title="Apex Tribe"
            duration="12 Months"
            price="420"
            total="Best Value - 35/Month"
            recommended
            delay={0.4}
            features={["All Predator Features", "Priority Equipment Access", "Complimentary Gym Wear", "Apex Training Strategy"]}
          />
        </div>
      </div>
    </section>
  );
};

export default Memberships;