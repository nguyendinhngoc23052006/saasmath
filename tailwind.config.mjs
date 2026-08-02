/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          50: '#f7f8fa',
          100: '#eef0f4',
          200: '#d7dbe4',
          300: '#b3bac9',
          400: '#8993a8',
          500: '#66708a',
          600: '#4b5570',
          700: '#3a4359',
          800: '#232a3d',
          900: '#141a2a',
        },
        accent: {
          500: '#0f766e',
          600: '#0d6660',
        },
      },
      fontFamily: {
        sans: ['ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      maxWidth: {
        prose: '68ch',
      },
    },
  },
  plugins: [],
};
