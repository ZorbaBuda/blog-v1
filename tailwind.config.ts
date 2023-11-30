import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
   darkMode:'class',
  theme: {
    extend: {
      fontFamily: {
        // lora: ["LORA-REGULAR"],
        // montserrat: ["MONTSERRAT-REGULAR"],
        // minion_pro: ["MINION-PRO-REGULAR"],
        // newsreader_light: ["NEWSREADER-LIGHT"]
      },
      colors: {
        primary: {
          
        },
        dark: "#0e1111",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
  
           ],
};
export default config;
