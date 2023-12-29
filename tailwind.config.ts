import type { Config } from "tailwindcss";
const { fontFamily } = require("tailwindcss/defaultTheme");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mont: ["var(--font-mont)", ...fontFamily.sans],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "primary-color": "#D0A2F7",
        "secondary-color": "#E5D4FF",
        primary: "#DBCC95",
        secondary: "#CD8D7A",
        accent: "#C06C84",
        backgroundcolor: "#6C5B7B",
        maincolor: "#355C7D",

        // Add more colors as needed
      },
    },
  },
  plugins: [],
};

export default config;
