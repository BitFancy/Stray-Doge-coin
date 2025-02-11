import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
        gradient: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
      animation: {
        gradient: 'gradient 8s linear infinite'
      },
      backgroundImage: {
        'stamp': "url('/pic/stamp.png')",
      },
      screens: {
        'xs': '480px',
        'xs2': '520px',
        'sm': '680px',
        'md': '720px',
        'lg': '870px',
        'lg2': '1150px',
        'xl': '1280px',
        '2xl': '1250px',
        '3xl': '1475px',
        '3xl2': '1300px',
        '4xl': '1510px',
      },
      fontSize: {
        'fluid': 'clamp(40px, calc(40px + (90 - 40) * ((100vw - 360px) / (870 - 360))), 90px)',
      }
    },
  },
  plugins: [],
} satisfies Config;

