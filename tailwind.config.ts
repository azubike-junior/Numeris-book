import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        neueLight: ['var(--font-neueHaasLight)'],
        neueMedium: ['var(--font-neueHaasMedium)'],
        neueBold: ['var(--font-neueHaasBold)'],
      },
      colors: {
       secondary: "#003EFF"
      },
    },
  },
  plugins: [],
};
export default config;
