import { extendTheme } from 'native-base';

export const THEME = extendTheme({
  colors: {
    gray: {
      700: '#0D0D0D',
      600: '#1A1A1A',
      500: '#262626',
      400: '#333333',
      300: '#808080',
      200: '#D9D9D9',
      100: '#F2F2F2'
    },
    danger: '#E25858',
    blue: {
      'light': '#4EA8DE',
      'dark': '#1E6F9F',
    },
    purple: {
      light: '#8284FA',
      dark: '#5E60CE',
    },
    white: '#FFFFFF',
    backGround: '#262626',
    backGround2: '#a4e',
  },
  fonts: {
    regular: 'Inter_400Regular',
    bold: 'Inter_700Bold'
  },
  fontSizes: {
    xs: 12,
    sm: 14,
    md: 16,
  }
});