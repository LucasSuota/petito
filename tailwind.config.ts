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
        primaryblack: "#111111",
      },
      backgroundImage: {
        "login-background": 'url("/images/login-background.jpg")',
        "register-background": 'url("/images/register-background.jpg")',
      },
    },
  },
  plugins: [],
};
export default config;
