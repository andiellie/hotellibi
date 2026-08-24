import type { Config } from 'tailwindcss'

// Design tokens (colors, radii, fonts) are defined in app/globals.css via @theme.
const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
}

export default config
