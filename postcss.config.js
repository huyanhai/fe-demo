/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-require-imports */
/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: [require('tailwindcss'), require('autoprefixer')]
};

module.exports = config;
