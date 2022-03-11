/* tailwind.config.js */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  mode: 'jit',
  //purge: ['./public/**/*.html'],
  darkMode: false,
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        dunes: "url('/bg-1.png')",
        bean: "url('/bean.jpeg')",
        sunflower: "url('/sunflower.jpeg')",
        techno: "url('/techno.jpeg')",
        bg1: "url('/bg-1.png')",
        bg2: "url('/bg-2.jpeg')",
        bg3: "url('/bg-3.jpeg')",
        music: "url('/music.jpeg')",
        leaves: "url('/leaves.jpeg')",
        astronaut: "url('/astronaut.jpeg')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}