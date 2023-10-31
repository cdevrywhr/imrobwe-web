import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    screens: {
      mob: "375px",
      tablet: "768px",
      laptop: "1024px",
      desktop: "1280px",
      laptopl: "1440px",
    },
    extend: {},
  },
  plugins: [],
});
