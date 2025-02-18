import type { Config } from "tailwindcss";
import {fontFamily} from "tailwindcss/defaultTheme";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    width: {
      'fill': 'fill-available',
      'webkit-fill': '-webkit-fill-available',
      'moz-fill': '-moz-available',
    },
    height: {
      'fill': 'fill-available',
      'webkit-fill': '-webkit-fill-available',
      'moz-fill': '-moz-available',
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
        mono: ["var(--font-geist-mono)", ...fontFamily.mono],
        nunito: ["var(--font-nunito)", ...fontFamily.sans], // Nunito as primary font
        cabin: ["var(--font-cabin)", ...fontFamily.sans], // Cabin as secondary font
      },

    },
  },
  plugins: [],
} satisfies Config;
