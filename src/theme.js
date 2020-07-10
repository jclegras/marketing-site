/* Need to use nodejs compatible import/export here because this file is required by
 * gatsby-config.js.
 *
 * Restart gatsby develop to pick up changes in this file.
 */

const deepOrange = require('@material-ui/core/colors/deepOrange').default;
const grey = require('@material-ui/core/colors/grey').default;
const indigo = require('@material-ui/core/colors/indigo').default;

const theme = {
  breakpoints: {
    keys: ['xs', 'sm', 'md', 'lg', 'xl'],
    values: {
      xs: 0,
      sm: 600,
      md: 720,
      lg: 960,
      xl: 1280,
    },
  },

  palette: {
    background: {
      paper: '#fff',
      default: '#fafafa',
    },

    error: {
      light: '#e57373',
      main: '#f44336',
      dark: '#d32f2f',
      contrastText: '#fff',
    },

    grey,

    info: {
      light: '#64b5f6',
      main: '#2196f3',
      dark: '#1976d2',
      contrastText: '#fff',
    },

    deepOrange,

    primary: {
      light: deepOrange[400],
      main: deepOrange[600],
      dark: deepOrange[900],
      contrastText: '#fff',
    },

    secondary: {
      light: indigo[400],
      main: indigo[600],
      dark: indigo[900],
      contrastText: '#fff',
    },

    success: {
      light: '#81c784',
      main: '#4caf50',
      dark: '#388e3c',
      contrastText: 'rgba(0, 0, 0, 0.87)',
    },

    text: {
      primary: 'rgba(0, 0, 0, 0.87)',
      secondary: 'rgba(0, 0, 0, 0.54)',
      disabled: 'rgba(0, 0, 0, 0.38)',
      hint: 'rgba(0, 0, 0, 0.38)',
    },
  },

  transitions: {
    easing: {
      easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
      easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
      easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
      sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
    },
  },

  typography: {
    headline: {
      fontFamily: 'LuloCleanOne',
      fontWeight: 700,
    },

    body: {
      fontFamily: 'Overpass',
      fontWeight: 400,
    },

    content: {
      fontFamily: 'Merriweather',
      fontWeight: 400,
      fontFeatureSettings: ['"kern"', '"liga"', '"clig"', '"calt"'],
      fontKerning: 'normal',
      fontSize: '1.1rem',
      color: 'hsla(0, 0%, 0%, 0.9)',
    },

    mono: {
      fontFamily: 'Courier New, monospace',
      fontWeight: 700,
    },

    logo: {
      fontFamily: 'LuloCleanOutline',
      fontWeight: 700,
    },
  },
};

module.exports = theme;
