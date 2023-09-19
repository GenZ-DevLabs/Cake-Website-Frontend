import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: "#E2007A", //background color (Dark Pink)        
        secondary: "#E83395", //background color (Light Pink)    
        tertiary: "#BCBBBB", //background color (Gray)    
        text: "#15000B", //paragraph color
        primarybutton: "#FFE662", //button BG
        primarybuttontext: "#E2007A", //button text color
        secondaybuttontext: "#15000B", //secondary button text color
        warning: "#fbbd23",
        error: "#dc2626",
      },
      fontFamily: {
        josefin: ["Josefin Sans", "sans"],
        lato: ["Lato", 'sans-serif']
      },
    },
  },
  plugins: [require("daisyui"), require("@tailwindcss/typography")],

  daisyui: {
    themes: true, // true: all themes | false: only light + dark | array: specific themes like this ["light", "dark", "cupcake"]
    darkTheme: "dark", // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    rtl: false, // rotate style direction from left-to-right to right-to-left. You also need to add dir="rtl" to your html tag and install `tailwindcss-flip` plugin for Tailwind CSS.
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
  },
}
export default config
