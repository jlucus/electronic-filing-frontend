import styled, { css } from 'styled-components';
import { baseColors, palletColors } from './colors';

export const responsiveMap = {
  xs: '(max-width: 575px)',
  sm: '(min-width: 576px)',
  md: '(min-width: 768px)',
  lg: '(min-width: 992px)',
  xl: '(min-width: 1200px)',
  xxl: '(min-width: 1600px)',
};

export const mediaQueries = (key) => (style) => `@media ${responsiveMap[key]} { ${style} }`;

export const minMedia = (responsiveBreakPoint, strings, ...interpolations) => css`
  @media screen and ${responsiveBreakPoint} {
    ${css(strings, interpolations)}
  }
`;

export const screenMedia = (strings, ...interpolations) => css`
  @media only screen {
    ${css(strings, interpolations)}
  }
`;

export const getFlexDirection = (direction) => {
  if (direction === 'horizontal') {
    return 'row';
  }
  return 'column';
};

export const getJustifyContent = (align) => {
  if (align === 'start') {
    return 'flex-start';
  } if (align === 'end') {
    return 'flex-end';
  } if (align === 'center') {
    return 'center';
  } if (align === 'between') {
    return 'space-between';
  } if (align === 'around') {
    return 'space-around';
  }

  return 'flex-start';
};

export const getTextAndBgColorFromType = (colorName, theme) => {
  // In dark mode, we only need one style now.
  if (theme.name === 'dark') {
    return {
      textColor: theme.defaultBtnTextColor,
      bgColor: theme.defaultBtnBgColor,
    };
  }

  if (colorName === 'secondary') {
    return {
      textColor: theme.secondaryBtnTextColor,
      bgColor: theme.secondaryBtnBgColor,
    };
  }
  if (colorName === 'robin') {
    return {
      textColor: theme.robinBtnTextColor,
      bgColor: theme.robinBtnBgColor,
    };
  }
  if (colorName === 'primary') {
    return {
      textColor: theme.primaryBtnTextColor,
      bgColor: theme.primaryBtnBgColor,
    };
  }
  if (baseColors[colorName]) {
    return {
      textColor: theme.primaryBtnTextColor,
      bgColor: baseColors[colorName],
    };
  }
  return {
    textColor: theme.primaryBtnTextColor,
    bgColor: theme.primaryBtnBgColor,
  };
};

export const getColorFromName = (colorName, theme) => {
  if (theme.name === 'dark') {
    return baseColors.yellow; // when dark mode, yellow color is always the text color.
  }
  if (baseColors[colorName]) {
    return baseColors[colorName];
  }

  return baseColors.black; //
};
