export type Language = "fr" | "en" | "ar";

export const translations = {
  fr: {
    nav: {
      home: "Accueil",
      about: "À propos",
      services: "Nos services",
      work: "Nos réalisations",
      contact: "Contact",
    },
    hero: {
      tagline: "NOUS SOMMES LA VAGUE",
      slogan1: "Ne suis pas la vague",
      slogan2: "Sois la vague",
      subline: "Vous avez un problème ? Vous cherchez une solution ?",
      cta: "Contactez-nous maintenant",
    },
    about: {
      title: "À propos de DIGIWAVE",
      description:
        "Nous concevons des expériences digitales audacieuses, sécurisées et inspirantes pour transformer chaque projet en une réussite exceptionnelle.",
      slogan: "Votre succès digital commence ici.",
      callout:
        "Chaque idée mérite une approche créative, une technologie fiable et une vision tournée vers l'avenir.",
    },
    services: {
      overline: "NOS SERVICES",
      title1: "Découvrez",
      title2: "NOS SERVICES",
      subtitle1: "Des solutions digitales",
      subtitle2: "SIMPLES, FLEXIBLES ET EFFICACES",
      badges: {
        secure: "SÉCURISÉ",
        flexible: "FLEXIBLE",
        efficient: "EFFICACE",
      },
      additional: "SERVICES SUPPLÉMENTAIRES",
      items: {
        design: {
          name: "DESIGN",
          description:
            "Des designs créatifs et modernes qui captivent et marquent les esprits.",
        },
        automation: {
          name: "AUTOMATISATION",
          description:
            "Des solutions intelligentes pour gagner du temps et booster votre productivité.",
        },
        video: {
          name: "MONTAGE VIDÉO",
          description:
            "Des montages professionnels qui racontent votre histoire avec impact.",
        },
        web: {
          name: "CRÉATION DE SITES",
          description:
            "Des sites web modernes, sécurisés et performants adaptés à tous vos besoins.",
        },
        ads: {
          name: "PUBLICITÉS",
          description:
            "Nous créons des publicités ciblées et efficaces pour développer votre visibilité.",
        },
        boost: {
          name: "BOOST DE PAGES",
          description:
            "Nous boostons vos pages pour augmenter votre portée et faire connaître votre marque.",
        },
        management: {
          name: "GESTION DE PAGES",
          description:
            "Nous gérons et organisons vos pages pour une présence professionnelle au quotidien.",
        },
      },
    },
    work: {
      overline: "NOS RÉALISATIONS",
      title: "Nos projets",
      filters: {
        all: "Tous",
        design: "Design",
        automation: "Automatisation",
        video: "Montage Vidéo",
        web: "Sites Web",
        ads: "Publicités",
        boost: "Boost",
        management: "Gestion",
      },
      viewProject: "Voir le projet",
    },
    contact: {
      overline: "CONTACTEZ-NOUS",
      title: "Prêt à faire des vagues ?",
      subtitle: "Vous avez un projet ? Une question ? Nous sommes là.",
      founder: "Responsable d’équipe design & montage",
      cofounder: "Chef d’équipe en optimisation de pages, gestion de pages et publicité en ligne",
      dev_team_lead: "Chef d'équipe de développement",
    },
    whatsapp: {
      allServices: "Général",
      generalServiceLabel: "le service",
      selectService: "Choisissez un service",
      help: "Sélectionnez un service et une question pour ouvrir WhatsApp avec un message prêt.",
      greetingPrefix: "Bonjour {role} d'équipe DIGIWAVE,",
      defaultRoleLabel: "l'équipe",
      questions: [
        {
          label: "Demander un devis",
          message: "je souhaite un devis pour {service}.",
        },
        {
          label: "Demander le tarif",
          message: "pouvez-vous me communiquer le tarif pour {service} ?",
        },
        {
          label: "Délai estimé",
          message: "quel est le délai estimé pour un projet de {service} ?",
        },
        {
          label: "Voir des exemples",
          message: "pouvez-vous envoyer des exemples de réalisations pour {service} ?",
        },
        {
          label: "Support / maintenance",
          message: "je voudrais connaître vos offres de support et maintenance pour {service}.",
        },
        {
          label: "Offre personnalisée",
          message: "je souhaite une offre personnalisée pour un projet de {service}.",
        },
        {
          label: "Comment travaillez-vous ?",
          message: "comment se déroule votre processus de travail pour {service} ?",
        },
      ],
      pdfRequestLabel: "Demander le PDF",
      pdfRequestMessage: "je souhaite recevoir le PDF : {title}",
    },
    footer: {
      tagline: "Nous sommes la vague",
      rights: "Tous droits réservés.",
    },
  },
  en: {
    nav: {
      home: "Home",
      about: "About",
      services: "Our Services",
      work: "Our Work",
      contact: "Contact",
    },
    hero: {
      tagline: "WE ARE THE WAVE",
      slogan1: "Don't follow the wave",
      slogan2: "Be the wave",
      subline: "Got a problem? Looking for a solution?",
      cta: "Contact us now",
    },
    about: {
      title: "About DIGIWAVE",
      description:
        "We craft bold, secure, and inspiring digital experiences to turn every project into a remarkable success.",
      slogan: "Your digital success starts here.",
      callout:
        "Every idea deserves a creative approach, reliable technology, and a future-focused vision.",
    },
    services: {
      overline: "OUR SERVICES",
      title1: "Discover",
      title2: "OUR SERVICES",
      subtitle1: "Digital solutions",
      subtitle2: "SIMPLE, FLEXIBLE AND EFFICIENT",
      badges: {
        secure: "SECURE",
        flexible: "FLEXIBLE",
        efficient: "EFFICIENT",
      },
      additional: "ADDITIONAL SERVICES",
      items: {
        design: {
          name: "DESIGN",
          description:
            "Creative and modern designs that captivate and leave a lasting impression.",
        },
        automation: {
          name: "AUTOMATION",
          description:
            "Smart solutions to save time and boost your productivity.",
        },
        video: {
          name: "VIDEO EDITING",
          description: "Professional edits that tell your story with impact.",
        },
        web: {
          name: "WEB DEVELOPMENT",
          description:
            "Modern, secure, and high-performing websites tailored to your needs.",
        },
        ads: {
          name: "ADVERTISING",
          description:
            "We create targeted and effective ads to grow your visibility.",
        },
        boost: {
          name: "PAGE BOOST",
          description:
            "We boost your pages to increase your reach and brand awareness.",
        },
        management: {
          name: "PAGE MANAGEMENT",
          description:
            "We manage and organize your pages for a professional daily presence.",
        },
      },
    },
    work: {
      overline: "OUR WORK",
      title: "Our Projects",
      filters: {
        all: "All",
        design: "Design",
        automation: "Automation",
        video: "Video Editing",
        web: "Websites",
        ads: "Advertising",
        boost: "Boost",
        management: "Management",
      },
      viewProject: "View project",
    },
    contact: {
      overline: "CONTACT US",
      title: "Ready to make waves?",
      subtitle: "Got a project? A question? We're here.",
      founder: " Design & Editing Team Leader",
      cofounder: "Social Media & Ads Team Lead",
      dev_team_lead: "Development Team Lead",
    },
    whatsapp: {
      allServices: "General",
      generalServiceLabel: "the service",
      selectService: "Choose a service",
      help: "Select a service and a question to open WhatsApp with a ready message.",
      greetingPrefix: "Hello {role} from the DIGIWAVE team,",
      defaultRoleLabel: "team",
      questions: [
        {
          label: "Request a quote",
          message: "I would like a quote for {service}.",
        },
        {
          label: "Ask for pricing",
          message: "Can you share your pricing for {service}?",
        },
        {
          label: "Estimated timeline",
          message: "What is the estimated timeline for a {service} project?",
        },
        {
          label: "See examples",
          message: "Can you send examples of your work for {service}?",
        },
        {
          label: "Support / maintenance",
          message: "I would like information about support and maintenance for {service}.",
        },
        {
          label: "Custom offer",
          message: "I would like a custom offer for a {service} project.",
        },
        {
          label: "How do you work?",
          message: "How does your workflow work for {service}?",
        },
      ],
      pdfRequestLabel: "Request the PDF",
      pdfRequestMessage: "I would like to receive the PDF: {title}",
    },
    footer: {
      tagline: "We are the wave",
      rights: "All rights reserved.",
    },
  },
  ar: {
    nav: {
      home: "الرئيسية",
      about: "من نحن",
      services: "خدماتنا",
      work: "أعمالنا",
      contact: "اتصل بنا",
    },
    hero: {
      tagline: "نحن الموجة",
      slogan1: "لا تتبع الموجة",
      slogan2: "كن الموجة",
      subline: "هل لديك مشكلة؟ هل تبحث عن حل؟",
      cta: "تواصل معنا الآن",
    },
    about: {
      title: "عن DIGIWAVE",
      description:
        "نصمم تجارب رقمية جريئة وآمنة وملهمة لتحويل كل مشروع إلى نجاح استثنائي.",
      slogan: "نجاحك الرقمي يبدأ هنا.",
      callout:
        "كل فكرة تستحق نهجاً إبداعياً، وتقنية موثوقة، ورؤية تركز على المستقبل.",
    },
    services: {
      overline: "خدماتنا",
      title1: "اكتشف",
      title2: "خدماتنا",
      subtitle1: "حلول رقمية",
      subtitle2: "بسيطة ومرنة وفعالة",
      badges: {
        secure: "آمن",
        flexible: "مرن",
        efficient: "فعال",
      },
      additional: "خدمات إضافية",
      items: {
        design: {
          name: "التصميم",
          description: "تصاميم إبداعية وعصرية تأسر الأنظار وتترك أثراً.",
        },
        automation: {
          name: "الأتمتة",
          description: "حلول ذكية لتوفير الوقت وتعزيز إنتاجيتك.",
        },
        video: {
          name: "مونتاج الفيديو",
          description: "مونتاج احترافي يروي قصتك بتأثير.",
        },
        web: {
          name: "تطوير المواقع",
          description: "مواقع عصرية وآمنة وعالية الأداء مصممة لاحتياجاتك.",
        },
        ads: {
          name: "الإعلانات",
          description: "نصمم إعلانات مستهدفة وفعالة لتنمية ظهورك.",
        },
        boost: {
          name: "تعزيز الصفحات",
          description: "نعزز صفحاتك لزيادة وصولك والتعريف بعلامتك.",
        },
        management: {
          name: "إدارة الصفحات",
          description: "ندير وننظم صفحاتك لحضور احترافي يومي.",
        },
      },
    },
    work: {
      overline: "أعمالنا",
      title: "مشاريعنا",
      filters: {
        all: "الكل",
        design: "التصميم",
        automation: "الأتمتة",
        video: "مونتاج الفيديو",
        web: "المواقع",
        ads: "الإعلانات",
        boost: "التعزيز",
        management: "الإدارة",
      },
      viewProject: "عرض المشروع",
    },
    contact: {
      overline: "اتصل بنا",
      title: "مستعد لصنع الموجات؟",
      subtitle: "لديك مشروع؟ سؤال؟ نحن هنا.",
      founder: "مسؤول فريق التصميم والمونتاج",
      cofounder: "مسؤول فريق تحسين وإدارة الصفحات والإعلانات الرقمية ",
      dev_team_lead: "رئيس فريق التطوير",
    },
    whatsapp: {
      allServices: "عام",
      generalServiceLabel: "الخدمة",
      selectService: "اختر الخدمة",
      help: "اختر خدمة وسؤالاً لفتح واتساب برسالة جاهزة.",
      greetingPrefix: "مرحبًا {role} من فريق DIGIWAVE،",
      defaultRoleLabel: "الفريق",
      questions: [
        {
          label: "طلب عرض سعر",
          message: "أود عرض سعر لخدمة {service}.",
        },
        {
          label: "السعر",
          message: "هل يمكنكم إرسال الأسعار لخدمة {service}؟",
        },
        {
          label: "المدة المتوقعة",
          message: "ما هي المدة المتوقعة لمشروع {service}؟",
        },
        {
          label: "أمثلة الأعمال",
          message: "هل يمكنكم إرسال أمثلة أعمال لخدمة {service}؟",
        },
        {
          label: "الدعم والصيانة",
          message: "أود معرفة عروض الدعم والصيانة لخدمة {service}.",
        },
        {
          label: "عرض مخصص",
          message: "أريد عرضًا مخصصًا لمشروع {service}.",
        },
        {
          label: "كيف تعمل؟",
          message: "كيف يتم العمل على خدمة {service} لديكم؟",
        },
      ],
      pdfRequestLabel: "طلب الـ PDF",
      pdfRequestMessage: "أريد استلام الـ PDF: {title}",
    },
    footer: {
      tagline: "نحن الموجة",
      rights: "جميع الحقوق محفوظة.",
    },
  },
} as const;

export type Translations = typeof translations;
