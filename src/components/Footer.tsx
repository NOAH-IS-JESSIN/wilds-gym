import { Instagram, MapPin, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; // <--- LOCALIZATION HOOK

const Footer = () => {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === 'ar';

  // --- TYPOGRAPHY & LAYOUT LOGIC ---
  const fontDisplay = isArabic ? 'font-cairo font-black' : 'font-beast font-black';
  const fontText = isArabic ? 'font-cairo font-bold' : 'font-mono uppercase';
  const textAlign = isArabic ? 'text-right' : 'text-left';

  return (
    <footer className="bg-wild-black border-t border-wild-dark pt-20 pb-10 px-6 relative z-10 overflow-hidden" dir={isArabic ? 'rtl' : 'ltr'}>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* BRAND COLUMN */}
          <div className={`md:col-span-2 ${textAlign}`}>
            <Link to="/">
                <h2 className={`text-3xl font-black text-wild-white uppercase tracking-tighter mb-6 hover:text-wild-accent transition-colors ${fontDisplay}`}>
                {isArabic ? 'وايلدز جيم' : 'WILDS GYM'}
                </h2>
            </Link>
            <p className={`text-wild-gray text-xs max-w-sm leading-relaxed ${fontText}`}>
              {t('footer.habitat')}
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
          <div className={textAlign}>
            <h4 className={`text-wild-white uppercase tracking-widest mb-6 ${fontDisplay}`}>{t('footer.contact')}</h4>
            <ul className={`space-y-4 text-xs text-wild-gray ${fontText}`}>
              <li className="flex items-center gap-3">
                <MapPin size={14} className="text-wild-accent shrink-0" /> 
                <span>{isArabic ? 'شارع باريس، الصويفية' : 'Paris Street, Sweifieh'}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={14} className="text-wild-accent shrink-0" /> 
                <span dir="ltr">079 888 5011</span>
              </li>
              <li className="flex items-center gap-3 lowercase">
                <Mail size={14} className="text-wild-accent shrink-0" /> 
                <span>info@wildsgym.com</span>
              </li>
            </ul>
          </div>

          {/* HOURS COLUMN */}
          <div className={textAlign}>
            <h4 className={`text-wild-white uppercase tracking-widest mb-6 ${fontDisplay}`}>{t('footer.hours')}</h4>
            <ul className={`space-y-4 text-xs text-wild-gray ${fontText}`}>
              <li className="flex justify-between gap-4">
                <span>{t('footer.days')}</span>
                <span className="text-wild-white">06:00 - 23:00</span>
              </li>
              <li className="flex justify-between gap-4">
                <span>{t('footer.friday')}</span>
                <span className="text-wild-white">14:00 - 21:00</span>
              </li>
            </ul>
          </div>

        </div>

        {/* BOTTOM STRIP (Inside Footer) */}
        <div className="border-t border-wild-dark pt-10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className={`text-[10px] uppercase text-wild-gray tracking-widest ${fontText}`}>
            © 2026 Wilds Gym Jordan. {t('footer.rights')}
          </p>
          
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
              <p className={`text-[10px] uppercase text-wild-gray/50 tracking-widest ${fontText}`}>
                {t('footer.built')}
              </p>
              
              {/* POWERED BY MAWQEIJO */}
              <a 
                href="https://mawqeijo.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`text-[10px] uppercase text-wild-gray hover:text-wild-accent tracking-widest transition-colors flex items-center gap-2 ${fontText}`}
              >
                <span className="opacity-50">{t('footer.powered')}</span> 
                <span className="font-bold">Mawqeijo</span>
              </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;