/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0A0A0C',
        panel: '#131316',
        raised: '#1B1B20',
        line: '#26262C',
        fog: '#F4F4F2',
        muted: '#A7A7B0',
        dim: '#6E6E78',
        accent: '#C8FF3D',
        accentink: '#101300',
      },
      fontFamily: {
        sans: [
          'Inter',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'Segoe UI',
          'Roboto',
          'Helvetica',
          'Arial',
          'sans-serif',
        ],
      },
      boxShadow: {
        card: '0 0 0 1px #26262C',
        glow: '0 0 0 1px #C8FF3D, 0 12px 48px -12px rgba(200, 255, 61, 0.35)',
        pop: '0 24px 64px -24px rgba(0, 0, 0, 0.8)',
      },
      borderRadius: {
        xl2: '1.25rem',
      },
    },
  },
  plugins: [],
}
