// import type { Config } from "tailwindcss";

// export default {
//   content: [
//     "./pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./components/**/*.{js,ts,jsx,tsx,mdx}",
//     "./app/**/*.{js,ts,jsx,tsx,mdx}",
//   ],
//   theme: {
//     extend: {
//       colors: {
//         background: "var(--background)",
//         foreground: "var(--foreground)",
//       },
//     },
//   },
//   plugins: [],
// } satisfies Config;

// tailwind.config.ts
import type { Config } from 'tailwindcss'

export default {
  darkMode: 'class', // important for toggling via .dark class
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    // etc.
  ],
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config