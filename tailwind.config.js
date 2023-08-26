import { fontFamily } from 'tailwindcss/defaultTheme'
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        manrope: ['var(--font-manrope)', ...fontFamily.sans]
      },
    },
  },
  plugins: []
}
