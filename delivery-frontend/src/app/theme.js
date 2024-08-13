import { extendTheme } from '@mui/joy/styles';

const theme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: '#2196F3', // Default 500 shade
        },
        secondary: {
          main: '#f50057', // Example secondary color
        },
        tertiary: {  // Adding a third custom color
          main: '#FF9800',  // Default main shade for tertiary
          50: '#FFF3E0',
          100: '#FFE0B2',
          200: '#FFCC80',
          300: '#FFB74D',
          400: '#FFA726',
          500: '#FF9800',
          600: '#FB8C00',
          700: '#F57C00',
          800: '#EF6C00',
          900: '#E65100',
        },
        background: {
          paper: '#f5f5f5',
        },
        text: {
          primary: '#0D47A1',
          secondary: '#1E88E5',
        },
      },
    },
  },
});

export default theme;