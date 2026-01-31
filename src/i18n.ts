import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      nav: {
        territory: "Territory",
        about: "About",
        services: "Services",
        membership: "Membership",
        contact: "Contact",
        enter: "Enter Wilds",
        switchBtn: "عربي"
      },
      home: {
        welcome: "Welcome to the Territory",
        title: "Awaken The Wild",
        desc: "We do not build machines here. We build hunters. Step into the only gym in Amman designed to reconnect you with your primal strength.",
        join: "Join The Tribe",
        explore: "Explore Territory",
        vibe: {
          arsenal: { title: "Raw Arsenal", desc: "No machines doing the work for you. Free weights and gravity only." },
          ego: { title: "No Ego", desc: "Leave your pride at the door. Here, respect is earned by sweat." },
          voltage: { title: "High Voltage", desc: "Loud music. Heavy atmosphere. A habitat for pure energy." },
          pack: { title: "The Pack", desc: "You don't hunt alone. Iron sharpens iron. We move as one." },
          forged: { title: "Forged", desc: "Heat and pressure. That is how diamonds—and beasts—are made." },
          primal: { title: "Primal", desc: "No AC. No neon. Just air, steel, and the will to survive." }
        },
        watcher: { title: "The Watcher", text: "Strength is not given. It is forged in the fire of consistency." },
        paths: { title: "Choose Your Path", desc: "From open territory to specialized hunting packs.", open: "Open Territory", pack: "The Pack", apex: "Apex Training" },
        code: {
          title: "The Code", heading: "What Makes Wilds Gym Different",
          items: {
            arsenal: { title: "Raw Arsenal", desc: "Heavy dumbbells. Calibrated plates. No plastic shortcuts." },
            recovery: { title: "Recovery Zone", desc: "Post-training rituals. Sauna & Jacuzzi to reset the mind." },
            tribe: { title: "The Tribe", desc: "You are shaped by the people around you. Train with beasts." },
            mental: { title: "Mental Warfare", desc: "Discipline beats motivation. We coach the mind too." },
            atm: { title: "Atmosphere", desc: "Dark lighting. Heavy bass. Focused environment." },
            comfort: { title: "No Comfort", desc: "Comfort is the enemy of growth. We removed it." }
          },
          iron: "Iron & Instinct", ironDesc: "A raw environment designed to strip away distractions.",
          guide: "Expert Guidance", guideDesc: "Certified trainers who walk the path themselves.",
          access: "24/7 Access", accessDesc: "The wild does not sleep. Neither do we."
        }
      },
      about: {
        title: "About Wilds Gym", subtitle: "A modern gym on Paris Street, Sweifieh — built for real training, real people, and real results.",
        introTitle: "More Than Just a Gym", introText1: "Wilds Gym is a community-focused fitness center located on Paris Street in Sweifieh, Amman.",
        introText2: "Our goal is simple: help you train better, feel stronger, and stay consistent.",
        list: ["Welcoming training environment", "Professional personal trainers", "Serious strength & cardio equipment", "Friendly community that supports progress"],
        approachTitle: "How We Help You Get Results", approachSub: "We believe that real fitness progress comes from three things:",
        consistency: "Consistency", guidance: "Proper Guidance", env: "The Right Environment",
        recoveryTitle: "Train Better. Recover Smarter.", recoveryText: "At Wilds, we care about your full fitness journey. These services help you recover faster.",
        commTitle: "The People Make Wilds Special", commText: "You don’t have to be “fit” to belong here. You just need the desire to improve.",
        ctaVisit: "Visit Wilds Gym"
      },
      services: {
        heroDesc: "Wilds Gym is a modern fitness center in Amman designed for people who want more than machines — they want progress.",
        openTitle: "Open Gym Access",
        openDesc: "You train at your own pace. We provide the wilderness.",
        groupTitle: "Group Classes",
        groupDesc: "The pack makes you stronger. The jungle makes you wild.",
        ptTitle: "Personal Training",
        ptDesc: "For those who demand real change, our personal training service offers focused, one-on-one coaching.",
        nutritionTitle: "Nutritionist Services",
        nutritionDesc: "Training alone is not enough.",
        recoveryTitle: "Sauna & Jacuzzi",
        recoveryDesc: "Train hard. Recover well.",
        pathTitle: "Choose Your Path",
        ctaStep: "Step Into The Wilds"
      },
      membership: {
        heroTitle: "The Initiation Ritual",
        heroSub: "Choose Your Tier",
        heroDesc: "Three paths through the wilds. Bronze for the steady, Gold for the ambitious, Premium for the relentless.",
        selectBtn: "Select",
        bestValue: "Best Value",
        payment: "Payment Method",
        paymentMethod: "Bank Transfer / CliQ",
        power: "Power Level",
        bronze: { name: "Bronze", desc: "The Foundation", msg: "Hi, I am interested in the Bronze membership." },
        gold: { name: "Gold", desc: "The Standard", msg: "Hi, I am interested in the Gold membership." },
        premium: { name: "Premium", desc: "The Elite Choice", msg: "Hi, I am interested in the Premium membership." },
        features: {
          bronze: ["Regular Gym Access", "Basic Equipment Usage", "Locker Room Access", "Water Station"],
          gold: ["Unlimited Gym Access", "Nutritionist Consultation", "Group Activities Access", "Personal Training (PT)"],
          premium: ["Everything in Gold", "Private Lessons", "Priority Support", "Full VIP Access"]
        },
        table: {
          title: "The Paths at a Glance",
          sub: "Compare your destiny options",
          colFeature: "Feature",
          rows: {
            access: { name: "Gym Access", bronze: "Regular", gold: "Unlimited", premium: "Unlimited" },
            nutrition: "Nutritionist",
            group: "Group Activities",
            pt: "Personal Training",
            private: "Private Lessons",
            vip: "VIP Perks"
          }
        },
        oathTitle: "Seal Your Commitment",
        oathText: "You have chosen your path. Now make it official. Contact us directly to finalize your initiation.",
        oathBtn: "Open Communication Channel",
        oathMsg: "Hi, I am ready to seal my commitment and join Wilds Gym."
      },
      contact: {
        heroTitle: "The Tribe Awaits.",
        heroSub: "Your Signal.",
        heroDesc: "In the wild, communication is survival. Choose your method. Send your signal. The team at Wilds Gym in Sweifieh, Amman will answer.",
        methods: {
          fire: "Signal Fire",
          call: "Tribal Drum",
          map: "Sacred Territory",
          chat: "Direct Message",
          social: "Tribal Network"
        },
        form: {
          title: "Light Your Signal Fire",
          sub: "Send a message to Wilds Gym – Sweifieh, Amman.",
          name: "Your Name",
          namePh: "WHAT DO THEY CALL YOU?",
          signal: "Your Signal (Email or Phone)",
          signalPh: "WHERE SHALL WE REPLY?",
          purpose: "Purpose of Signal",
          msg: "Your Message",
          msgPh: "SPEAK YOUR TRUTH...",
          btn: "Send via WhatsApp",
          options: {
            join: "Join Wilds Gym (Membership)",
            pt: "Personal Training",
            class: "Classes & Programs",
            nutri: "Nutritionist Services",
            sauna: "Sauna & Jacuzzi",
            general: "General Question"
          }
        },
        strength: {
          title: "Signal Strength",
          weak: "Fill the stones to build the fire",
          strong: "The fire is roaring. Send the signal."
        },
        map: {
          title: "Journey To Our Grounds",
          locTitle: "Wilds Gym Location",
          tipTitle: "Arrival Tip",
          tipText: "Look for the Wilds Totem. Entrance via Main Gate.",
          navBtn: "Navigate To Wilds Gym"
        },
        faq: {
          title: "Wisdom From The Elders",
          q1: "How do I join Wilds Gym in Amman?",
          a1: "Visit us on Paris Street in Sweifieh or contact us using the form above. Our team will guide you through membership options.",
          q2: "Can I bring a guest to the gym?",
          a2: "Yes, guests are welcome. Contact us for details.",
          q3: "What are Wilds Gym opening hours?",
          a3: "Saturday–Thursday: 06:00 – 23:00. Friday: 14:00 – 21:00.",
          q4: "Is parking available near Wilds Gym?",
          a4: "Yes, parking is available near the gym.",
          q5: "Do you offer personal training in Amman?",
          a5: "Yes. Wilds Gym offers professional personal training for all fitness levels."
        },
        team: {
          title: "Pack Leaders",
          sub: "Contact The Team",
          manager: "General Manager",
          trainer: "Head Trainer",
          member: "Membership Team",
          avail: "Available at Front Desk"
        },
        bottom: {
          title: "Wilds Gym — Sweifieh, Amman",
          desc: "Wilds Gym is a modern fitness center in Amman built for people who want real results. We offer: Open gym training, Group classes, Personal training, Nutritionist services, Sauna & Jacuzzi.",
          quote: "You bring the will. We provide the space.",
          contact: "Contact Details",
          hours: "Hours"
        }
      },
      // --- ADDED MISSING ENGLISH FOOTER ---
      footer: {
        habitat: "A habitat for the relentless. We provide the steel and the atmosphere; you provide the will to survive. Leave the ego at the door.",
        contact: "Contact",
        hours: "Hours",
        days: "Sat - Thu",
        friday: "Friday",
        rights: "All Rights Reserved.",
        built: "Built for Beasts",
        powered: "Powered By"
      }
    }
  },
  ar: {
    translation: {
      nav: {
        territory: "منطقتنا",
        about: "قصتنا",
        services: "شو بنقدم",
        membership: "الاشتراكات",
        contact: "تواصل معنا",
        enter: "فوت عالوايلدز",
        switchBtn: "English"
      },
      home: {
        welcome: "يا هلا بساحة الوحوش",
        title: "صحي الوحش اللي جواتك",
        desc: "احنا ما بنصنع آلات، احنا بنبني زلم. هاي الجيم الوحيدة بعمان اللي بترجعك لطبيعتك وقوتك الحقيقية.",
        join: "انضم للشلة",
        explore: "اكتشف",
        vibe: {
          arsenal: { title: "حديد عالحل", desc: "فش ماكينات تقوم بالشغل عنك. بس أوزان حرة وجاذبية أرضية." },
          ego: { title: "بلا شوفة حال", desc: "اترك الـ Ego عالباب. هون الاحترام بس للي بتعب وبعرق." },
          voltage: { title: "جو نار", desc: "أغاني عالية. طاقة بتخوف. مكان معمول عشان تطلع كل اللي عندك." },
          pack: { title: "الربع", desc: "ما بتصيد لحالك. الحديد بيسن الحديد. بنتحرك كتف بكتف." },
          forged: { title: "انحت حالك", desc: "ضغط وحرارة وتعب. هيك بنصنع الوحوش." },
          primal: { title: "على الفطرة", desc: "فش مكيفات. فش دلع. بس هوا، حديد، وإرادة." }
        },
        watcher: { title: "المراقب", text: "القوة ما بتيجيك هدية. بدك تتعب عشانها وتلتزم." },
        paths: { title: "نقي طريقك", desc: "من التدريب الحر لتدريب المجموعات.", open: "التدريب الحر", pack: "تمرين الجماعة", apex: "تدريب النخبة" },
        code: {
          title: "دستورنا", heading: "شو اللي بيميز وايلدز؟",
          items: {
            arsenal: { title: "عدة ثقيلة", desc: "دامبلز ثقال. أوزان عيارية. فش بلاستيك، كلو حديد." },
            recovery: { title: "منطقة الروقان", desc: "بعد التمرين، ريح جسمك بالساونا والجاكوزي." },
            tribe: { title: "الربع والشلة", desc: "الناس اللي حوليك بأثروا عليك. تمرن مع وحوش زيك." },
            mental: { title: "عقلية حديد", desc: "الالتزام أهم من الحماس. احنا بندرب مخك كمان." },
            atm: { title: "الجو العام", desc: "ضو خافت. بيس عالي. مكان بخليك تركز بحالك." },
            comfort: { title: "فش راحة", desc: "الراحة عدوة التطور. شلناها من القاموس." }
          },
          iron: "حديد وغريزة", ironDesc: "بيئة خام، فش فيها شي يلهيك عن تمرينك.",
          guide: "مدربين فهمانة", guideDesc: "كباتن عايشين اللعبة، مش بس حافظينها.",
          access: "فاتحين 24/7", accessDesc: "الوحش ما بنام. واحنا كمان."
        }
      },
      about: {
        title: "عن وايلدز جيم", subtitle: "نادي حديث بشارع باريس، الصويفية — مصمم للتدريب الصح، وللنتائج الحقيقية.",
        introTitle: "مش مجرد جيم", introText1: "وايلدز هو مركز لياقة بدنية بركز عالمجتمع، موقعنا بشارع باريس بالصويفية.",
        introText2: "هدفنا بسيط: نساعدك تتمرن أحسن، وتقوى، وتضلك مستمر.",
        list: ["بيئة تدريب مرحبة ومشجعة", "مدربين شخصيين محترفين", "معدات حديد وكارديو ثقيلة", "مجتمع بوقف جنبك وبدعمك"],
        approachTitle: "كيف بنضمنلك النتائج", approachSub: "القصة مش بس تمرين، التقدم بيجي من 3 شغلات:",
        consistency: "الاستمرارية", guidance: "التوجيه الصح", env: "البيئة المناسبة",
        recoveryTitle: "تدرّب بذكاء. تعافى بسرعة.", recoveryText: "بوايلدز، بنهتم برحلتك كاملة. هاي الخدمات بتساعدك ترجع تتمرن أسرع وبطاقة أكبر.",
        commTitle: "الناس هم الأساس", commText: "ما في داعي تكون 'رياضي' عشان تكون معنا. بس جيب عزيمتك وتعال.",
        ctaVisit: "زور وايلدز جيم"
      },
      services: {
        heroDesc: "وايلدز هو نادي حديث بعمان، معمول للناس اللي بدهم اشي أكثر من مجرد ماكينات... بدهم تطور عنجد.",
        openTitle: "تمرين حر (Open Gym)",
        openDesc: "اتمرن برحتك وعلى وقتك. الساحة الك.",
        groupTitle: "حصص وتدريب جماعي",
        groupDesc: "اللمة بتعطيك حماس. والجو بخليك وحش.",
        ptTitle: "التدريب الشخصي",
        ptDesc: "للي بده يغير حياته عنجد، تدريبنا الشخصي بوفرلك كوتش بركز معك بكل تمرين.",
        nutritionTitle: "خدمات التغذية",
        nutritionDesc: "التمرين لحاله عالفاضي.",
        recoveryTitle: "ساونا وجاكوزي",
        recoveryDesc: "اتمرن بجهد. وارتاح بعمق.",
        pathTitle: "نقي طريقك",
        ctaStep: "ادخل البرية"
      },
      membership: {
        heroTitle: "طقوس الانضمام",
        heroSub: "اختر مستواك",
        heroDesc: "ثلاث طرق في البرية. البرونزي للثابت، الذهبي للطموح، والبريميوم لمن لا يتوقف.",
        selectBtn: "اختر",
        bestValue: "الأفضل قيمة",
        payment: "طريقة الدفع",
        paymentMethod: "تحويل بنكي / كليك",
        power: "مستوى القوة",
        bronze: { name: "برونزي", desc: "الأساس", msg: "مرحبا، أنا مهتم باشتراك البرونز." },
        gold: { name: "ذهبي", desc: "المعيار", msg: "مرحبا، أنا مهتم باشتراك الذهب." },
        premium: { name: "بريميوم", desc: "النخبة", msg: "مرحبا، أنا مهتم باشتراك البريميوم." },
        features: {
          bronze: ["دخول عادي للجيم", "استخدام الأجهزة الأساسية", "دخول غرف الغيار", "محطة مياه"],
          gold: ["دخول غير محدود", "استشارة أخصائية تغذية", "دخول الحصص الجماعية", "تدريب شخصي (PT)"],
          premium: ["كل ميزات الذهبي", "حصص خاصة", "دعم فوري", "دخول VIP كامل"]
        },
        table: {
          title: "مقارنة المسارات",
          sub: "قارن خيارات مصيرك",
          colFeature: "الميزة",
          rows: {
            access: { name: "دخول الجيم", bronze: "عادي", gold: "شامل", premium: "شامل" },
            nutrition: "أخصائية تغذية",
            group: "أنشطة جماعية",
            pt: "تدريب شخصي",
            private: "حصص خاصة",
            vip: "ميزات VIP"
          }
        },
        oathTitle: "وثّق التزامك",
        oathText: "لقد اخترت طريقك. الآن اجعله رسمياً. تواصل معنا مباشرة لإتمام انضمامك.",
        oathBtn: "افتح قناة الاتصال",
        oathMsg: "مرحبا، أنا جاهز لتوثيق التزامي والانضمام لوايلدز جيم."
      },
      contact: {
        heroTitle: "القبيلة بانتظار",
        heroSub: "إشارتك.",
        heroDesc: "بالبرية، التواصل هو نجاة. اختار طريقتك. ابعت إشارتك. فريق وايلدز جيم بالصويفية رح يجاوبك.",
        methods: {
          fire: "شعلة الإشارة",
          call: "طبل القبيلة",
          map: "الأرض المقدسة",
          chat: "رسالة مباشرة",
          social: "شبكة القبيلة"
        },
        form: {
          title: "أشعل نار الإشارة",
          sub: "ابعت رسالة لوايلدز جيم – الصويفية، عمان.",
          name: "الاسم",
          namePh: "شو بنادوك؟",
          signal: "إشارتك (تلفون أو إيميل)",
          signalPh: "وين نرد عليك؟",
          purpose: "سبب الإشارة",
          msg: "رسالتك",
          msgPh: "احكي اللي ببالك...",
          btn: "أرسل عبر واتساب",
          options: {
            join: "اشتراك بالجيم (عضوية)",
            pt: "تدريب شخصي",
            class: "حصص وبرامج",
            nutri: "خدمات تغذية",
            sauna: "ساونا وجاكوزي",
            general: "سؤال عام"
          }
        },
        strength: {
          title: "قوة الإشارة",
          weak: "عبي الحجار عشان تقوي النار",
          strong: "النار والعة. ابعت الإشارة."
        },
        map: {
          title: "الرحلة لأراضينا",
          locTitle: "موقع وايلدز جيم",
          tipTitle: "نصيحة الوصول",
          tipText: "دور على شعار وايلدز. المدخل من البوابة الرئيسية.",
          navBtn: "اتجاهات لوايلدز جيم"
        },
        faq: {
          title: "حكمة الشيوخ",
          q1: "كيف أشترك بوايلدز جيم؟",
          a1: "زورنا بشارع باريس بالصويفية أو تواصل معنا عالنموذج فوق. فريقنا رح يساعدك بكل التفاصيل.",
          q2: "بقدر أجيب ضيف معي؟",
          a2: "آه، أهلاً وسهلاً بالضيوف. تواصل معنا للتفاصيل.",
          q3: "شو ساعات دوام وايلدز جيم؟",
          a3: "السبت - الخميس: 06:00 – 23:00. الجمعة: 14:00 – 21:00.",
          q4: "في كراجات قريبة؟",
          a4: "آه، في كراجات متوفرة قريبة من الجيم.",
          q5: "عندكم تدريب شخصي؟",
          a5: "طبعاً. وايلدز جيم بوفر تدريب شخصي احترافي لكل المستويات."
        },
        team: {
          title: "قادة القطيع",
          sub: "تواصل مع الفريق",
          manager: "المدير العام",
          trainer: "رئيس المدربين",
          member: "فريق العضويات",
          avail: "موجودين عالاستقبال"
        },
        bottom: {
          title: "وايلدز جيم — الصويفية، عمان",
          desc: "وايلدز هو نادي حديث بعمان، معمول للناس اللي بدهم نتائج حقيقية. بنقدم: جيم، حصص، تدريب شخصي، تغذية، وساونا.",
          quote: "جيب عزيمتك. احنا بنأمن المكان.",
          contact: "معلومات التواصل",
          hours: "الدوام"
        }
      },
      footer: {
        habitat: "موطن للمثابرين. احنا بنأمنلك الحديد والجو؛ وانت عليك الإرادة. اترك الـ Ego عالباب.",
        contact: "تواصل معنا",
        hours: "ساعات الدوام",
        days: "السبت - الخميس",
        friday: "الجمعة",
        rights: "جميع الحقوق محفوظة.",
        built: "صُنع للوحوش",
        powered: "مشغل بواسطة"
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    react: { useSuspense: false },
    interpolation: { escapeValue: false }
  });

export default i18n;