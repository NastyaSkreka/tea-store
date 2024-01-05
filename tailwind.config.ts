import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        teaDeepBlue: '#003B40',
        teaBlue: '#00575F',
        teaGreen: '#106269',
        teaBackground: '#EDF0EF',
        teaGray: '#B7C1C2',
        teaGrayLight: '#D9D9D9',
      },
    },
  },
  plugins: [],
};
export default config;
