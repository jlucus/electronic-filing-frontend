import { lightColors, darkColors } from './colors';

export const defaultTheme = {

};

export const lightTheme = {
  name: 'light',
  ...defaultTheme,
  ...lightColors,
  link: {
    decoration: 'none',
    hoverDecoration: 'none',
  },
};

export const darkTheme = {
  name: 'dark',
  ...defaultTheme,
  ...darkColors,
  link: {
    decoration: 'underline !important',
    hoverDecoration: 'none !important',
  },
};
