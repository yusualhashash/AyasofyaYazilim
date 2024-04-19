module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}", // Your main app files
    "./components/**/*.{js,jsx,ts,tsx}", // If you have a directory for reusable components
    "./src/stories/**/*.{js,jsx,ts,tsx}"  // Adjust this line to include your Storybook stories
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
