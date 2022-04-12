const IS_PROD = process.env.NODE_ENV !== 'development';
const twBaseName = '';
module.exports = {
  mode: IS_PROD ? '' : 'jit',
  purge: {
    content: ['./public/**/*.html', './src/**/*.{vue,js,ts,tsx}']
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true
    },
    extend: {
      fontSize: {
        [`${twBaseName}-base`]: ['12px', { lineHeight: 0 }]
      }
    }
  },
  variants: {
    extend: {}
  },
  prefix: 'tw-',
  plugins: []
};
