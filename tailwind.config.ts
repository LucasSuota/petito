import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./context/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryblue: "#555DF2",
        primarypurple: "#8055F2",
        primarycream: "#f2f2ff",
        primaryblack: "#22222f",
      },
    },
  },
  plugins: [],
};
export default config;
