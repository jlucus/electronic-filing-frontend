import React from 'react';
import styled from 'styled-components';
import { getTextAndBgColorFromType } from '../../styles/cssHelper';

const avatarCssHelper = {
  cssAvatarSize: (size) => {
    const iconSize = (size * 2) / 3;
    const marginRight = (size * 2) / 10;
    return `
      width: ${size}px;
      height: ${size}px;
      line-height: ${size}px;
      border-radius: 50%;
      margin-right: ${marginRight}px;

      & > * {
        font-size: ${iconSize}px;
      }
    `;
  },
  cssAvatarVariantPrimaryObj: (colorInfo) =>
    // switch color from button
    avatarCssHelper.cssButtonVariantPrimary(colorInfo.bgColor, colorInfo.textColor),
  cssButtonVariantPrimary: (color, background) => `
    color: ${color};
    background-color: ${background};
  `,
};

const AvatarWrapper = styled.span`
  ${(props) => avatarCssHelper.cssAvatarSize(28)};

  ${(props) => avatarCssHelper.cssAvatarVariantPrimaryObj(
    getTextAndBgColorFromType(props.color, props.theme),
  )};

  ${(props) => (props.size === 'extra') &&
    avatarCssHelper.cssAvatarSize(36)};
  ${(props) => (props.size === 'large') &&
    avatarCssHelper.cssAvatarSize(32)};
  ${(props) => (props.size === 'small') &&
    avatarCssHelper.cssAvatarSize(24)};
  ${(props) => (props.size === 'tiny') &&
    avatarCssHelper.cssAvatarSize(18)};
`;

const Avatar = (props) => {
  const {
    size = 'default',
    color = 'primary',
    children,
    ...rest
  } = props;
  return (
    <AvatarWrapper
      size={size}
      color={color}
      {...rest}
    >
      {children}
    </AvatarWrapper>
  );
};

export default Avatar;
