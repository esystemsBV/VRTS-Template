const { nextui } = require("@nextui-org/react");

export default {
  content: [
    "./src/**/*.{jd,jsx,ts,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: { colors: { main: "", second: "", third: "" } },
  },
  darkMode: "class",
  plugins: [nextui()],
};
