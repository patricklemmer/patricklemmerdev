/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      cabin: 'Cabin',
    },
    extend: {
      backgroundColor: {
        skin: {
          // Background

          // Light
          'bg-light': 'var(--color-bg-light)',
          //Dark
          'bg-dark': 'var(--color-bg-dark)',

          // Buttons
          // Button #1 light
          'button-primary-light-accent':
            'var(--color-button-primary-light-accent)',
          'button-primary-light-accent-hover':
            'var(--color-button-primary-light-accent-hover)',
          // Button #1 dark
          'button-primary-dark-accent':
            'var(--color-button-primary-dark-accent)',
          'button-primary-dark-accent-hover':
            'var(--color-button-primary-dark-accent-hover)',
          // Button #2 light
          'button-secondary-light-accent':
            'var(--color-button-secondary-light-accent)',
          'button-secondary-light-accent-hover':
            'var(--color-button-secondary-light-accent-hover)',
          // Button #2 dark
          'button-secondary-dark-accent':
            'var(--color-button-secondary-dark-accent)',
          'button-secondary-dark-accent-hover':
            'var(--color-button-secondary-dark-accent-hover)',
          // Button #3 light
          'button-tertiary-light': 'var(--color-button-tertiary-light)',
          'button-tertiary-light-hover':
            'var(--color-button-tertiary-light-hover)',
          // Button #3 dark
          'button-tertiary-dark': 'var(--color-button-tertiary-dark)',
          'button-tertiary-dark-hover':
            'var(--color-button-tertiary-dark-hover)',
          // Button #4 light
          'button-four-light': 'var(--color-button-four-light)',
          'button-four-light-hover': 'var(--color-button-four-light-hover)',
          // Button #4 dark
          'button-four-dark': 'var(--color-button-four-dark)',
          'button-four-dark-hover': 'var(--color-button-four-dark-hover)',
          // Button #5 light
          'button-five-light': 'var(--color-button-five-light)',
          'button-five-light-hover': 'var(--color-button-five-light-hover)',
          // Button #5 dark
          'button-five-dark': 'var(--color-button-five-dark)',
          'button-five-dark-hover': 'var(--color-button-five-dark-hover)',

          // Cards
          // Light
          'card-light': 'var(--color-card-light)',
          // Dark
          'card-dark': 'var(--color-card-dark)',
          'card-detail-dark': 'var(--color-card-detail-dark)',

          // Bubbles
          'bubble-left': 'var(--color-bubble-left)',
          'bubble-right': 'var(--color-bubble-right)',

          // Modal
          // Light
          'modal-light': 'var(--color-modal-light)',
          // Dark
          'modal-dark': 'var(--color-modal-dark)',
          'modal-detail-dark': 'var(--color-modal-detail-dark)',

          // Bubbles
          'bubble-left': 'var(--color-bubble-left)',
          'bubble-right': 'var(--color-bubble-right)',
        },
      },
      textColor: {
        skin: {
          // Fonts
          'font-light': 'var(--color-font-light)',
          'font-dark': 'var(--color-font-dark)',

          // Social icons
          'hover-linkedin': 'var(--color-hover-linkedin)',
          'hover-github': 'var(--color-hover-github)',
          'hover-github-dark': 'var(--color-hover-github-dark)',
          'hover-twitter': 'var(--color-hover-twitter)',
          'hover-instagram': 'var(--color-hover-instagram)',
          'hover-dev': 'var(--color-hover-dev)',
          'hover-dev-dark': 'var(--color-hover-dev-dark)',
          'hover-medium': 'var(--color-hover-medium)',
          'hover-medium-dark': 'var(--color-hover-medium-dark)',
        },
      },
    },
    screens: {
      xxs: '300px',
      xs: '480px',
      sm: '768px',
      md: '1060px',
      lg: '1280px',
    },
  },
  plugins: [require('daisyui')],
};
