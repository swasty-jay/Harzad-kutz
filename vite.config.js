import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

import defaultTheme from "tailwindcss/defaultTheme";

export default defineConfig({
  content: ["./src/**/*.{js,jsx,ts,tsx,html}"],
  theme: {
    fontFamily: {
      heading: ["Cinzel", ...defaultTheme.fontFamily.sans],
      body: ["Bellefair", ...defaultTheme.fontFamily.sans],
    },
    colors: {
      white: "#FFFFFF",
      primary: "#1A1A1A",
      secondary: "#6B7280",
      accent: "#D62828",
      borderGray: "#E5E7EB",
    },
    extend: {},
  },
  plugins: [react(), tailwindcss()],
});
