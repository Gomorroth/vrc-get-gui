import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        "shs": "var(--font-shs)",
        "ns": "var(--font-ns)"
      },
      colors: {
        primary: "#00ae88",
      }
    },
  },
  plugins: [],
}
export default config
