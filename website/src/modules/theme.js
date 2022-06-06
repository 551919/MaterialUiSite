import { createTheme } from '@mui/material/styles';

const rawTheme = createTheme({
    palette: {
        primary: {
            light : '#EEF1EF',
            main: '#EEF1EF',
            dark : '#1C2321'
        },
        secondary: {
            light : '#A9B4C2',
            main:  '#A9B4C2',
            dark: '#5E6572',
        },
        warning: {
            main: '#f8ba62',
            dark: '#f8ba62',
        },
        error: {
            light: '#f95959',
            main: '#fb3737',
            dark: '#fb3737',
        },
        success: {
            light: '#48f357',
            main: '#2df33e',
            dark: '#20dc31',
        },
    },
    typography: {
        fontFamily: "'Work Sans', sans-serif",
        fontSize: 14,
        fontWeightLight: 300,
        fontWeightRegular: 400,
        fontWeightMedium: 700.
    },
});

const fontHeader = {
    color: rawTheme.palette.text.primary,
    fontWeight: rawTheme.typography.fontWeightMedium,
    fontFamily: "'Roboto Condensed', sans-serif",
    textTransform: 'uppercase',
};

const theme = {
    ...rawTheme,
    palette: {
      ...rawTheme.palette,
      background: {
        ...rawTheme.palette.background,
        default: rawTheme.palette.common.white,
        placeholder: grey[200],
      },
    },
    typography: {
      ...rawTheme.typography,
      fontHeader,
      h1: {
        ...rawTheme.typography.h1,
        ...fontHeader,
        letterSpacing: 0,
        fontSize: 60,
      },
      h2: {
        ...rawTheme.typography.h2,
        ...fontHeader,
        fontSize: 48,
      },
      h3: {
        ...rawTheme.typography.h3,
        ...fontHeader,
        fontSize: 42,
      },
      h4: {
        ...rawTheme.typography.h4,
        ...fontHeader,
        fontSize: 36,
      },
      h5: {
        ...rawTheme.typography.h5,
        fontSize: 20,
        fontWeight: rawTheme.typography.fontWeightLight,
      },
      h6: {
        ...rawTheme.typography.h6,
        ...fontHeader,
        fontSize: 18,
      },
      subtitle1: {
        ...rawTheme.typography.subtitle1,
        fontSize: 18,
      },
      body1: {
        ...rawTheme.typography.body2,
        fontWeight: rawTheme.typography.fontWeightRegular,
        fontSize: 16,
      },
      body2: {
        ...rawTheme.typography.body1,
        fontSize: 14,
      },
    },
  };
  
  export default theme;