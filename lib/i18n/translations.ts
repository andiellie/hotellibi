export type Language = 'es' | 'en'

export type Translations = {
  nav: {
    features: string
    integrations: string
    demo: string
    login: string
    requestAccess: string
  }
  hero: {
    title: string
    subtitle: string
    cta: string
  }
  features: {
    heading: string
    subheading: string
    items: { icon: string; title: string; description: string }[]
  }
  dashboard: {
    heading: string
    subheading: string
    overallPerformance: string
    occupancy: string
    compSet: string
    revparTrend: string
    currentYear: string
    previousYear: string
    months: string[]
  }
  clients: {
    heading: string
  }
  testimonial: {
    quote: string
    name: string
    role: string
    initials: string
  }
  finalCta: {
    title: string
    subtitle: string
    cta: string
  }
  demoBooking: {
    titleBold: string
    titleNormal: string
    description: string
    checklist: string[]
    waitlistNote: string
    nameLabel: string
    namePlaceholder: string
    emailLabel: string
    pmsLabel: string
    pmsPlaceholder: string
    pmsOther: string
    submit: string
  }
  footer: {
    tagline: string
    site: string
    pricing: string
    contact: string
    legal: string
    privacy: string
    terms: string
    rights: string
  }
}

export const translations: Record<Language, Translations> = {
  es: {
    nav: {
      features: 'Features',
      integrations: 'Integraciones',
      demo: 'Agenda una DEMO',
      login: 'Login',
      requestAccess: 'Solicitar acceso',
    },
    hero: {
      title: 'Control Total de tu Hotel.',
      subtitle:
        'HotelliBI unifica tus datos operativos, financieros y comerciales en una plataforma visual de inteligencia comercial.',
      cta: 'Agenda tu Demo',
    },
    features: {
      heading: 'Más que una herramienta visual.',
      subheading: 'Diseñado para ejecutivos que exigen precisión y velocidad en la toma de decisiones.',
      items: [
        {
          icon: '▦',
          title: 'Control Total',
          description:
            'Monitorea cada métrica vital desde un solo panel. Integración perfecta con tu PMS y sistemas de gestión.',
        },
        {
          icon: '◷',
          title: 'Tiempo Recuperado',
          description:
            'Automatiza la recolección y limpieza de datos. Elimina las hojas de cálculo manuales y enfócate en la estrategia.',
        },
        {
          icon: '✣',
          title: 'Visuales Listos',
          description: 'Reportes de nivel ejecutivo generados al instante. Gráficos interactivos y reportes semanales.',
        },
      ],
    },
    dashboard: {
      heading: 'Con HotelliBI tienes el control en tus manos.',
      subheading:
        'Monitorea tu hotel de cerca, compara con métricas de años pasados y revisa cómo está tu tarifa frente a la competencia.',
      overallPerformance: 'Rendimiento Global',
      occupancy: 'Ocupación',
      compSet: 'Vs. Comp Set Local',
      revparTrend: 'Evolución RevPAR YTD',
      currentYear: 'Año Actual',
      previousYear: 'Año Anterior',
      months: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun'],
    },
    clients: {
      heading: 'Ellos ya usan HotelliBI en su negocio',
    },
    testimonial: {
      quote:
        'Antes tardaba horas armando planillas para comparar la ocupación y la tarifa contra el año anterior. Con hotelliBI abro el dashboard un lunes a la mañana y ya tengo todo el panorama: ocupación, ADR, RevPAR y cómo estamos parados frente a la competencia. Automatizamos algo que nos consumía medio día por semana y ahora tomamos decisiones de tarifa mucho más rápido.',
      name: 'Martín Ibáñez',
      role: 'Gerente General, Hotel Plaza Central',
      initials: 'MI',
    },
    finalCta: {
      title: 'Lleva la gestión de tu hotel a otro nivel.',
      subtitle: 'Una plataforma visual para tomar decisiones más rápidas y rentables.',
      cta: 'Agenda tu Demo',
    },
    demoBooking: {
      titleBold: 'Eleva el estándar',
      titleNormal: 'de tu gestión operativa',
      description:
        'Agenda una demostración personalizada y descubre cómo hotelliBI se integra fácilmente a tu equipo y recibe reportes semanales para tener el control total de tu hotel.',
      checklist: [
        'Integración nativa con los principales PMS del mercado.',
        'Implementación rápida sin interrupción de operaciones.',
        'Correos semanales para que compares cada semana.',
      ],
      waitlistNote:
        'HotelliBI será lanzado gradualmente acorde a la participación en diferentes mercados, ¿le gustaría ingresar su hotel al waitlist?',
      nameLabel: 'Nombre completo',
      namePlaceholder: 'Ej. Carlos Mendoza',
      emailLabel: 'Correo electrónico corporativo',
      pmsLabel: '¿Cuál es tu PMS?',
      pmsPlaceholder: 'Selecciona una opción',
      pmsOther: 'Otro',
      submit: 'Agendar Demo',
    },
    footer: {
      tagline: 'Herramienta visual de inteligencia de negocios para hoteles.',
      site: 'SITIO',
      pricing: 'Pricing',
      contact: 'CONTACTO Y REDES',
      legal: 'LEGAL',
      privacy: 'Política de Privacidad',
      terms: 'Términos de Servicio',
      rights: '© 2024 HotelliBI. Todos los derechos reservados.',
    },
  },
  en: {
    nav: {
      features: 'Features',
      integrations: 'Integrations',
      demo: 'Book a DEMO',
      login: 'Login',
      requestAccess: 'Request access',
    },
    hero: {
      title: 'Total Control of your Hotel.',
      subtitle:
        'HotelliBI unifies your operational, financial, and commercial data into one visual business intelligence platform.',
      cta: 'Book your Demo',
    },
    features: {
      heading: 'More than a visual tool.',
      subheading: 'Built for executives who demand precision and speed in decision-making.',
      items: [
        {
          icon: '▦',
          title: 'Total Control',
          description:
            'Monitor every vital metric from a single dashboard. Seamless integration with your PMS and management systems.',
        },
        {
          icon: '◷',
          title: 'Time Reclaimed',
          description: 'Automate data collection and cleanup. Eliminate manual spreadsheets and focus on strategy.',
        },
        {
          icon: '✣',
          title: 'Ready-Made Visuals',
          description: 'Executive-level reports generated instantly. Interactive charts and weekly reports.',
        },
      ],
    },
    dashboard: {
      heading: "With HotelliBI, you're in control.",
      subheading:
        "Monitor your hotel closely, compare against past years' metrics, and check how your rate stacks up against the competition.",
      overallPerformance: 'Overall Performance',
      occupancy: 'Occupancy',
      compSet: 'Vs. Local Comp Set',
      revparTrend: 'RevPAR YTD Trend',
      currentYear: 'Current Year',
      previousYear: 'Previous Year',
      months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    },
    clients: {
      heading: 'They already use HotelliBI in their business',
    },
    testimonial: {
      quote:
        "I used to spend hours building spreadsheets just to compare occupancy and rate against last year. With hotelliBI I open the dashboard on a Monday morning and I already have the full picture: occupancy, ADR, RevPAR, and where we stand against the competition. We automated something that used to eat up half a day every week, and now we make pricing decisions much faster.",
      name: 'Martín Ibáñez',
      role: 'General Manager, Hotel Plaza Central',
      initials: 'MI',
    },
    finalCta: {
      title: "Take your hotel's management to the next level.",
      subtitle: 'A visual platform for faster, more profitable decisions.',
      cta: 'Book your Demo',
    },
    demoBooking: {
      titleBold: 'Raise the standard',
      titleNormal: 'of your operational management',
      description:
        'Book a personalized demo and discover how hotelliBI integrates easily with your team, plus receive weekly reports to keep total control of your hotel.',
      checklist: [
        'Native integration with the leading PMS platforms on the market.',
        'Fast implementation with no disruption to operations.',
        'Weekly emails so you can compare week over week.',
      ],
      waitlistNote:
        "HotelliBI will roll out gradually based on market participation — would you like to add your hotel to the waitlist?",
      nameLabel: 'Full name',
      namePlaceholder: 'E.g. Carlos Mendoza',
      emailLabel: 'Corporate email',
      pmsLabel: "What's your PMS?",
      pmsPlaceholder: 'Select an option',
      pmsOther: 'Other',
      submit: 'Book Demo',
    },
    footer: {
      tagline: 'Visual business intelligence tool for hotels.',
      site: 'SITE',
      pricing: 'Pricing',
      contact: 'CONTACT & SOCIAL',
      legal: 'LEGAL',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
      rights: '© 2024 HotelliBI. All rights reserved.',
    },
  },
}
