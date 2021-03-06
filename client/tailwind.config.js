// See https://next.tailwindcss.com/docs/configuration for details

module.exports = {
  theme: {
    backgroundColor: theme => ({
      ...theme('colors'),
      'primary': '#f3694f',
      'secondary': '#ffed4a',
      'danger': '#e3342f',
      'main': '#fafafa',
    }),
    borderRadius: {
      'none': '0',
      'sm': '.125rem',
      'lg': '.5rem',
      'full': '9999px',
      'large': '12px',
    },
    extend: {
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
        '100': '36rem',
        'larger': '20px',
      }
    },
    textColor: theme => ({
      ...theme('colors'),
      'primary': '#f3694f',
      'secondary': '#999999',
      'strong-secondary': '#808080'
    }),
    minWidth: {
      '0': '0',
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
      'full': '100%',
    }
  },
  variants: {},
  plugins: []
};
