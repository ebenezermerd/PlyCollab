/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html', 
    './src/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        'neon-green': '#CCFF00',
        'dark-bg': '#0A0A0A',
        'card-bg': '#1C1C1C',
        'text-primary': '#FFFFFF',
        'text-secondary': '#A0A0A0',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
  plugins: [],
}