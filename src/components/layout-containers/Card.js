import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {getColorFromName} from '../../styles/cssHelper';

const CardContainer = styled.div`
  background-color: ${(props) => props.bgColorName ?
    getColorFromName(props.bgColorName, props.theme) : props.theme.cardDefaultBgColor};

  ${(props) => !props.noPadding && `
  padding: 3rem 0;
  `}

  ${(props) => props.bordered && `
  border: 1px solid ${props.theme.cardBorderColor};
  border-radius: ${props.borderRadius}px;
  `};

  ${(props) => !props.noFlex && `
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 47.99em) {
     flex-direction: column;
    }
  `}

`;

const Card = (props) => {
  const {
    title = null,
    bordered = false,
    noFlex = false,
    borderRadius = 0,
    bgColorName = null,
    noPadding = false,
    children,
    ...restProps
  } = props;

  return (
    <CardContainer
      bordered={bordered}
      borderRadius={borderRadius}
      bgColorName={bgColorName}
      noFlex={noFlex}
      noPadding={noPadding}
      {...restProps}>
      {children}
    </CardContainer>
  );
};

Card.propTypes = {
  title: PropTypes.string,
  bordered: PropTypes.bool,
  borderRadius: PropTypes.number,
  bgColorName: PropTypes.string,
  noFlex: PropTypes.bool,
  noPadding: PropTypes.bool,
  children: PropTypes.oneOfType(
    [PropTypes.node, PropTypes.array, PropTypes.func]),
};
export default Card;
