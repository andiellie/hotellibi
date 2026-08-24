/**
 * Configuración de Estilos Global de HotelliBI
 * Este archivo contiene toda la configuración de diseño para reutilizar en futuras versiones
 */

export const designConfig = {
  // Paleta de Colores Completa
  colors: {
    primary: {
      50: '#EFF6FF',
      100: '#DBEAFE',
      200: '#BFDBFE',
      300: '#93C5FD',
      400: '#60A5FA',
      500: '#3B82F6',
      600: '#2563EB',
      700: '#1D4ED8',
      800: '#1E40AF',
      900: '#1E3A8A',
    },
    secondary: {
      50: '#FFF7ED',
      100: '#FFEDD5',
      200: '#FED7AA',
      300: '#FDBA74',
      400: '#FB923C',
      500: '#F97316',
      600: '#EA580C',
      700: '#C2410C',
      800: '#FF6B5B',
      900: '#E84C3D',
    },
    functional: {
      success: '#10B981',
      error: '#EF4444',
      warning: '#F59E0B',
      info: '#0EA5E9',
    },
    neutral: {
      white: '#FFFFFF',
      black: '#000000',
      gray: {
        50: '#F9FAFB',
        100: '#F3F4F6',
        200: '#E5E7EB',
        300: '#D1D5DB',
        400: '#9CA3AF',
        500: '#6B7280',
        600: '#4B5563',
        700: '#374151',
        800: '#1F2937',
        900: '#111827',
      },
    },
  },

  // Tipografía
  typography: {
    fontFamily: {
      sans: ['system-ui', 'Segoe UI', 'Roboto', 'Ubuntu', 'sans-serif'],
    },
    fontSize: {
      xs: '0.75rem',   // 12px
      sm: '0.875rem',  // 14px
      base: '1rem',    // 16px
      lg: '1.125rem',  // 18px
      xl: '1.25rem',   // 20px
      '2xl': '1.5rem', // 24px
      '3xl': '1.875rem', // 30px
      '4xl': '2.25rem', // 36px
      '5xl': '3rem',   // 48px
    },
    fontWeight: {
      regular: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
  },

  // Espaciado
  spacing: {
    xs: '0.25rem',   // 4px
    sm: '0.5rem',    // 8px
    md: '1rem',      // 16px
    lg: '1.5rem',    // 24px
    xl: '2rem',      // 32px
    '2xl': '2.5rem', // 40px
    '3xl': '3rem',   // 48px
  },

  // Sombras
  shadows: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
    '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
  },

  // Radio de Bordes
  borderRadius: {
    none: '0',
    sm: '0.375rem',   // 6px
    md: '0.5rem',     // 8px
    lg: '0.75rem',    // 12px
    xl: '1rem',       // 16px
    '2xl': '1.5rem',  // 24px
    full: '9999px',
  },

  // Breakpoints Responsivos
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },
}

// Componentes Predefinidos
export const componentStyles = {
  button: {
    primary: 'px-8 py-3 bg-primary-800 text-white rounded-lg hover:bg-primary-900 transition font-medium',
    secondary: 'px-8 py-3 border-2 border-primary-800 text-primary-800 dark:text-primary-400 dark:border-primary-400 rounded-lg hover:bg-primary-50 dark:hover:bg-gray-800 transition font-medium',
    text: 'text-primary-800 dark:text-primary-400 hover:text-primary-900 font-medium transition',
    small: 'px-4 py-2 bg-primary-800 text-white rounded-lg hover:bg-primary-900 transition font-medium text-sm',
  },

  card: {
    base: 'bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition',
    elevated: 'bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-2',
    bordered: 'bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition border-l-4 border-primary-800',
  },

  input: {
    base: 'w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition',
  },

  section: {
    light: 'py-20 sm:py-32 bg-white dark:bg-black',
    dark: 'py-20 sm:py-32 bg-gray-50 dark:bg-gray-900',
    gradient: 'py-20 sm:py-32 bg-gradient-to-br from-primary-50 to-primary-100 dark:from-gray-900 dark:to-black',
  },
}

// Transiciones
export const transitions = {
  fast: 'transition duration-150',
  normal: 'transition duration-300',
  slow: 'transition duration-500',
}
