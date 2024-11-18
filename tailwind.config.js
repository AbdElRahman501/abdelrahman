/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html", // If you're using plain HTML files
    "./**/*.js", // If you're using JS files
    "./**/*.html", // If you're using HTML files in subdirectories
    // Add other paths if necessary
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
