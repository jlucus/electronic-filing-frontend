import React, { useState } from 'react';
import styled from 'styled-components';
import { ReactSVG } from 'react-svg';
import colorPalette from '../../styles/utils/colorPalette';
import { getTextAndBgColorFromType } from '../../styles/cssHelper';

const lineHeightBase = 1.66667;
const borderWidthBase = 1;

const buttonCssHelper = {
  iconSize: (size) => {
    const marginRight = (size * 2) / 10;
    return `
      width: ${size}px;
      height: ${size}px;
      line-height: ${size}px;
      margin-right: ${marginRight}px;
    `;
  },
  cssButtonSize: (height, paddingHorizontal, fontSize, borderRadius) => {
    const paddingVertical = Math.max(
      Math.round(((height - fontSize * lineHeightBase) / 2) * 10) / 10 -
        borderWidthBase,
      0
    );
    return `
      height: ${height}px;
      padding: ${paddingVertical}px ${paddingHorizontal}px ;
      font-size: ${fontSize}px;
      border-radius: ${borderRadius}px;
      line-height: ${fontSize}px;
    `;
  },
  cssButtonColor: (color, background, border) => `
      color: ${color};
      background: ${background};
      border-color: ${border};

      & > a:only-child {
        color: currentColor;
        &::after {
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          background: transparent;
          content: '';
        }
      };
    `,
  cssButtonVariantPrimaryObj: (colorInfo) =>
    buttonCssHelper.cssButtonVariantPrimary(
      colorInfo.textColor,
      colorInfo.bgColor
    ),
  cssButtonVariantPrimary: (color, background) => `
    ${buttonCssHelper.cssButtonColor(color, background, background)}

    text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.12);
    box-shadow: 0 2px 0 rgba(0, 0, 0, 0.045);

    &:hover,
    &:focus {
      ${buttonCssHelper.cssButtonColor(
        color,
        colorPalette(background, 5),
        colorPalette(background, 5)
      )}
    }
    `,

  cssButtonDisabled: (
    color = 'rgba(0, 0, 0, 0.25)',
    background = 'rgb(245, 245, 245)',
    border = 'rgb(217, 217, 217)'
  ) => `
    &[disabled] {
      &,
      &:hover,
      &:focus,
      &:active {
        ${buttonCssHelper.cssButtonColor(color, background, border)};

        text-shadow: none;
        box-shadow: none;
      }
    }`,
};

const CustomButton = styled.button`
  line-height: 1.5715;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  font-weight: normal;
  white-space: nowrap;
  text-align: center;
  background-image: none;
  border: 1px solid transparent;
  box-shadow: 0 2px 0 rgba(0, 0, 0, 0.015);
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  user-select: none;
  touch-action: manipulation;
  padding: ${(props) => props.padding || 0};
  margin-right: ${(props) => props.noMargin ? 0 : '0.5rem'};
  margin-top: ${(props) => props.marginTop || 0};
  margin-bottom: ${(props) => props.marginBottom || 0};

  ${(props) =>
    buttonCssHelper.cssButtonSize(40, props.hasIcon ? 8 : 14, 14, 3)};

  &,
  &:active,
  &:focus {
    outline: 0;
  }
  &:not([disabled]):hover {
    text-decoration: none;
  }
  &:not([disabled]):active {
    outline: 0;
    box-shadow: none;
  }
  &[disabled] {
    cursor: not-allowed;
    > * {
      pointer-events: none;
    }
  }

  ${(props) =>
    props.size === 'extra' &&
    buttonCssHelper.cssButtonSize(64, props.hasIcon ? 14 : 40, 14 + 2, 5)};
  ${(props) =>
    props.size === 'large' &&
    buttonCssHelper.cssButtonSize(48, props.hasIcon ? 12 : 32, 14 + 2, 3)};
  ${(props) =>
    props.size === 'small' &&
    buttonCssHelper.cssButtonSize(32, props.hasIcon ? 4 : 10, 14, 3)};
  ${(props) =>
    props.size === 'tiny' &&
    buttonCssHelper.cssButtonSize(24, props.hasIcon ? 4 : 10, 12, 2)};

  & > span {
    display: inline-block;
  }

  ${(props) =>
    buttonCssHelper.cssButtonVariantPrimaryObj(
      getTextAndBgColorFromType(props.color, props.theme)
    )};
  ${buttonCssHelper.cssButtonDisabled()};

  ${(props) => props.shadow && 'box-shadow: 0.175rem 0.175rem #3333331F;'}

  ${(props) => props.block && 'width: 100%;'}
  ${(props) => props.padding && `padding: ${props.padding};`}
  ${(props) => props.height && `height: ${props.height};`}
`;

const SvgWrapper = styled(ReactSVG)``;
const LoadingIcon = ({ loading, ...rest }) => {
  if (!loading) {
    return null;
  }
  return (
    <SvgWrapper
      beforeInjection={(svg) => {
        svg.setAttribute('style', buttonCssHelper.iconSize(24));
      }}
      src="/icons/spinning-circles.svg"
      {...rest}
    />
  );
};

const Button = (props) => {
  const {
    loading = false,
    children,
    icon, // it will be left icon if there is a children
    rightIcon,
    block = false,
    htmlType = 'button',
    size = 'default',
    color = 'primary',
    shadow = false,
    style,
    noMargin = false,
    ...rest
  } = props;
  const [innerLoading, setLoading] = useState(!!loading);
  const delayTimeoutRef = React.useRef();

  // =============== Update Loading ===============
  let loadingOrDelay = false;
  if (typeof loading === 'object' && loading.delay) {
    loadingOrDelay = loading.delay || true;
  } else {
    loadingOrDelay = !!loading;
  }

  React.useEffect(() => {
    clearTimeout(delayTimeoutRef.current);
    if (typeof loadingOrDelay === 'number') {
      delayTimeoutRef.current = window.setTimeout(() => {
        setLoading(loadingOrDelay);
      }, loadingOrDelay);
    } else {
      setLoading(loadingOrDelay);
    }
  }, [loadingOrDelay]);

  const handleClick = (e) => {
    const { onClick } = props;
    if (innerLoading) {
      return;
    }
    if (onClick) {
      onClick(e);
    }
  };

  const iconNode =
    icon && !innerLoading
      ? icon
      : innerLoading && (
          <LoadingIcon loading={!!innerLoading}>loading</LoadingIcon>
        );

  const hasIcon = !!iconNode || !!rightIcon;
  return (
    <CustomButton
      type={htmlType}
      onClick={handleClick}
      size={size}
      shadow={!!shadow}
      hasIcon={hasIcon}
      color={color}
      block={block}
      noMargin={noMargin}
      {...rest}
    >
      {iconNode}
      {children}
      {rightIcon}
    </CustomButton>
  );
};

export default Button;
