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
  testimonial2: {
    quote: string
    name: string
    role: string
    initials: string
  }
  bigStatement: {
    line1: string
    line2: string
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
    menu: string
    bookDemo: string
    privacy: string
    terms: string
    contact: string
    relatedProducts: string
    bens: string
    partnerAccess: string
    rights: string
  }
  legalPage: {
    privacyTab: string
    termsTab: string
    privacyTitle: string
    privacyUpdated: string
    privacyBody: string[]
    termsTitle: string
    termsUpdated: string
    termsBody: string[]
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
    testimonial2: {
      quote:
        'Lo que más valoro de hotelliBI es lo simple que es interpretarlo: no necesito ser analista de datos para entender si estamos mejor o peor que el mes pasado. El equipo de recepción y hasta el dueño del hotel entran al mismo dashboard y hablan el mismo idioma. Pasamos de discutir números en reuniones interminables a resolverlo en cinco minutos.',
      name: 'Valentina Suárez',
      role: 'Directora de Operaciones, Ñikén Hotel & Spa',
      initials: 'VS',
    },
    bigStatement: {
      line1: 'Lleva la gestión de tu hotel',
      line2: 'a otro nivel.',
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
      menu: 'Menú',
      bookDemo: 'Agendar Demo',
      privacy: 'Política de Privacidad',
      terms: 'Términos de Servicio',
      contact: 'Contacto',
      relatedProducts: 'Productos relacionados',
      bens: 'BENS',
      partnerAccess: 'Hotellibi Acceso Socios',
      rights: '© 2024 HotelliBI. Todos los derechos reservados.',
    },
    legalPage: {
      privacyTab: 'Política de Privacidad',
      termsTab: 'Términos de Servicio',
      privacyTitle: 'Política de Privacidad',
      privacyUpdated: 'Última actualización: enero de 2026',
      privacyBody: [
        'En HotelliBI recopilamos únicamente los datos necesarios para operar el servicio: información de contacto que nos proporcionás al agendar una demo (nombre, correo electrónico corporativo y el PMS que utilizás) y los datos operativos que tu hotel conecta a la plataforma para generar los reportes y dashboards.',
        'Usamos esta información exclusivamente para brindarte el servicio, comunicarnos con vos sobre tu cuenta o demo, y mejorar el producto. No vendemos ni compartimos tus datos con terceros con fines publicitarios.',
        'Los datos operativos de tu hotel (ocupación, tarifas, RevPAR y métricas similares) son de tu propiedad. Los procesamos únicamente para generar los reportes de tu cuenta y no los utilizamos para ningún otro fin sin tu consentimiento.',
        'Podés solicitar en cualquier momento acceso, corrección o eliminación de tus datos personales escribiendo a contacto@hotellibi.com.',
        'Esta política puede actualizarse a medida que el producto evoluciona. Te notificaremos ante cualquier cambio significativo.',
      ],
      termsTitle: 'Términos de Servicio',
      termsUpdated: 'Última actualización: enero de 2026',
      termsBody: [
        'Al acceder a la lista de espera o usar HotelliBI, aceptás estos términos. Si no estás de acuerdo, te pedimos que no utilices el servicio.',
        'HotelliBI es una plataforma visual de inteligencia de negocios para hoteles, actualmente en etapa de lanzamiento gradual por mercado. La disponibilidad de funciones puede variar mientras el producto está en esta etapa.',
        'Sos responsable de la exactitud de los datos que conectás o cargás a la plataforma, y de mantener la confidencialidad de las credenciales de acceso a tu cuenta.',
        'Nos esforzamos por mantener el servicio disponible y preciso, pero no garantizamos disponibilidad ininterrumpida. No nos hacemos responsables por decisiones comerciales tomadas exclusivamente en base a los reportes de la plataforma.',
        'Podemos actualizar estos términos con el tiempo. El uso continuado del servicio después de una actualización implica la aceptación de los nuevos términos.',
      ],
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
    testimonial2: {
      quote:
        "What I value most about hotelliBI is how easy it is to read: I don't need to be a data analyst to understand whether we're doing better or worse than last month. The front desk team and even the hotel owner log into the same dashboard and speak the same language. We went from arguing over numbers in endless meetings to settling it in five minutes.",
      name: 'Valentina Suárez',
      role: 'Director of Operations, Ñikén Hotel & Spa',
      initials: 'VS',
    },
    bigStatement: {
      line1: "Take your hotel's management",
      line2: 'to the next level.',
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
      menu: 'Menu',
      bookDemo: 'Book Demo',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
      contact: 'Contact',
      relatedProducts: 'Related Products',
      bens: 'BENS',
      partnerAccess: 'Hotellibi Partner Access',
      rights: '© 2024 HotelliBI. All rights reserved.',
    },
    legalPage: {
      privacyTab: 'Privacy Policy',
      termsTab: 'Terms of Service',
      privacyTitle: 'Privacy Policy',
      privacyUpdated: 'Last updated: January 2026',
      privacyBody: [
        "At HotelliBI we collect only the data needed to run the service: contact information you provide when booking a demo (name, corporate email, and the PMS you use), and the operational data your hotel connects to the platform to generate reports and dashboards.",
        "We use this information solely to provide the service, communicate with you about your account or demo, and improve the product. We do not sell or share your data with third parties for advertising purposes.",
        "Your hotel's operational data (occupancy, rates, RevPAR, and similar metrics) belongs to you. We process it only to generate the reports on your account and do not use it for any other purpose without your consent.",
        "You can request access to, correction of, or deletion of your personal data at any time by writing to contacto@hotellibi.com.",
        "This policy may be updated as the product evolves. We'll notify you of any significant changes.",
      ],
      termsTitle: 'Terms of Service',
      termsUpdated: 'Last updated: January 2026',
      termsBody: [
        "By joining the waitlist or using HotelliBI, you agree to these terms. If you don't agree, please don't use the service.",
        'HotelliBI is a visual business intelligence platform for hotels, currently in a gradual, market-by-market rollout. Feature availability may vary while the product is in this stage.',
        "You're responsible for the accuracy of the data you connect or upload to the platform, and for keeping your account credentials confidential.",
        'We work to keep the service available and accurate, but we do not guarantee uninterrupted availability. We are not responsible for business decisions made solely based on the platform\'s reports.',
        'We may update these terms over time. Continued use of the service after an update means you accept the new terms.',
      ],
    },
  },
}
