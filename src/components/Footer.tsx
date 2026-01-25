import { Instagram, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-wild-black border-t border-wild-dark pt-20 pb-10 px-6 relative z-10">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* BRAND COLUMN */}
          <div className="md:col-span-2">
            <h2 className="text-3xl font-beast font-black text-wild-white uppercase tracking-tighter mb-6">
              WILDS GYM
            </h2>
            <p className="text-wild-gray text-sm max-w-sm uppercase font-mono leading-relaxed">
              A habitat for the relentless. We provide the steel and the atmosphere; you provide the will to survive. Leave the ego at the door.
            </p>
            
            {/* SOCIALS */}
            <div className="flex gap-4 mt-8">
              <a 
                href="https://www.instagram.com/wildgym.jo?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-wild-dark border border-wild-accent/20 text-wild-accent hover:bg-wild-accent hover:text-wild-black transition-all"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* CONTACT COLUMN */}
          <div>
            <h4 className="font-beast text-wild-white uppercase tracking-widest mb-6">Contact</h4>
            <ul className="space-y-4 text-xs font-mono uppercase text-wild-gray">
              <li className="flex items-center gap-3">
                <MapPin size={14} className="text-wild-accent" /> Paris Street, Sweifieh
              </li>
              <li className="flex items-center gap-3">
                <Phone size={14} className="text-wild-accent" /> 079 888 5011
              </li>
              <li className="flex items-center gap-3 lowercase">
                <Mail size={14} className="text-wild-accent" /> info@wildsgym.com
              </li>
            </ul>
          </div>

          {/* HOURS COLUMN */}
          <div>
            <h4 className="font-beast text-wild-white uppercase tracking-widest mb-6">Hours</h4>
            <ul className="space-y-4 text-xs font-mono uppercase text-wild-gray">
              <li className="flex justify-between">
                <span>Sat - Thu</span>
                <span className="text-wild-white">06:00 - 23:00</span>
              </li>
              <li className="flex justify-between">
                <span>Friday</span>
                <span className="text-wild-white">14:00 - 21:00</span>
              </li>
            </ul>
          </div>

        </div>

        {/* BOTTOM STRIP */}
        <div className="border-t border-wild-dark pt-10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] font-mono uppercase text-wild-gray tracking-widest">
            © 2026 Wilds Gym Jordan. All Rights Reserved.
          </p>
          <p className="text-[10px] font-mono uppercase text-wild-gray/50 tracking-widest">
            Built for Beasts
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;