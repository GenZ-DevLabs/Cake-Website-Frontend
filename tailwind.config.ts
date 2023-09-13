import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
    },
  },
  plugins: [require("daisyui")],

  daisyui: {
    themes: false, 
    darkTheme: "dark", 
    base: true, 
    styled: true, 
    utils: true, 
    rtl: false, 
    prefix: "",
    logs: true, 
  },
}
export default config
