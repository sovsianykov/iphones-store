import { createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#494E6B',
      light: '#5d6385',
      dark: '#2e3145',
      contrastText: '#222432',
    },
    secondary: {
      main: '#494E6B',
      light: '#d1d1d1',
      dark: '#7d85b3',
      contrastText: '#f8f7f7',
    },
    success: {
      main: '#985E6D',
      light: '#c67d90',
      dark: '#502e37',
    },
    warning: {
      main: '#192231',
      light: '#2e3e58',
      dark: '#090d12',
    },
    background: {
      default: '#192231',
      paper: '#ffffff',
    },
    common: {
      black: '#000000',
      white: '#d2d1d1',
    },
  },

  typography: {
    fontFamily: 'Rubik-regular, sans-serif',
  },
});

export default theme;
