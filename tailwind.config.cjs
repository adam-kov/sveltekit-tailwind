const plugin = require('tailwindcss/plugin');

module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: ['./src/**/*.svelte', './src/**/*.html'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
			colors: {
				base: {
          dark: '#15181b',
          white: '#e8e8e8',
				}
			},
			fontFamily: {
        // add double quotes if there is space in font name
        title: ['"Bebas Neue"', 'cursive'],
        body: ['Montserrat', 'sans-serif'],
      },
		},
  },
  variants: {
    extend: {},
  },
  plugins: [
		plugin(function ({ addBase, theme }) {
      addBase({
        body: {
          color: theme('colors.base.dark'),
          fontFamily: theme('fontFamily.body'),
          backgroundColor: theme('colors.base.white'),
          minHeight: '100vh',
        },
        h1: {
          fontSize: theme('fontSize.5xl'),
          fontFamily: theme('fontFamily.title'),
        },
        h2: {
          fontSize: theme('fontSize.4xl'),
          fontFamily: theme('fontFamily.title'),
        },
        h3: {
          fontSize: theme('fontSize.3xl'),
          fontFamily: theme('fontFamily.title'),
        },
        h4: {
          fontSize: theme('fontSize.2xl'),
          fontFamily: theme('fontFamily.title'),
        },
        h5: {
          fontSize: theme('fontSize.xl'),
          fontFamily: theme('fontFamily.title'),
        },
      });
    }),
	],
}
