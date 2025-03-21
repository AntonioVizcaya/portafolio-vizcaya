/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#6B21A8', // morado profundo
        secondary: '#9333EA', // morado brillante
        accent: '#FACC15', // amarillo vibrante
        background: '#F9FAFB', // gris claro
        textDark: '#1F2937', // gris oscuro
        textLight: '#F3F4F6', // gris claro para textos sobre fondo oscuro
      },
      fontFamily: {
        sans: ['Poppins', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
 