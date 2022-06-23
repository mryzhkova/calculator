import { css } from 'styled-components';

const font = 'Roboto, sans-serif';

const black = '#000000';
const white = '#ffffff';

// Light theme
const darkWhite = '#F2F2F2';
const hoverWhiteDark = '#F3F3F3';
const gray = '#434343';
const lightGray = '#C7C7C7';

// Dark theme
const yellow = '#fddb3a';
const darkGray = '#373A41';
const darkThemeGray = '#52575d';
const hoverGray = '#6B7076';

// Colored theme
const orange = '#ee6f57';
const blue = '#145374';
const lightBlue = '#387798';
const hoverBlue = '#246384';

const boxShadows = [
  'box-shadow: 0px 4px 24px -8px rgba(0,0,0,0.75)',
];

const size = {
  xs: 650,
  small: 768,
  med: 992,
  large: 1200,
};

const above = Object.keys(size).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${size[label]}px) {
      ${css(...args)}
    }
  `; 
  return acc;
}, {});

const below = Object.keys(size).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${size[label]}px) {
      ${css(...args)}
    }
  `;
  return acc;
}, {});

export default {
  above,
  below,
  boxShadows,
  font,
  spaces: [0, 4, 8, 16, 32, 64, 128],
  fontSizes: [12, 14, 16, 20, 24, 32, 40, 56, 72, 80],
  colors: {
    black,
    white,
  },
  lightTheme: {
    darkWhite,
    gray,
    lightGray,
    hoverWhiteDark,
  },
  darkTheme: {
    darkGray,
    yellow,
    hoverGray,
    darkThemeGray,
  },
  coloredTheme: {
    orange,
    blue,
    lightBlue,
    hoverBlue,
  },
};