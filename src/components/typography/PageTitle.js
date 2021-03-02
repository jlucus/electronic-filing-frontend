import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: ${(props) => props.align || 'center'}};
  margin: 2rem 0;
`;

const TitleIcon = styled.div`
  background-color: ${(props) => (props.theme.primaryColor ? props.theme.primaryColor : 'black')};
  height: 5.5rem;
  width: 5.5rem;
  min-width: 5.5rem;
  border-radius: 50%;
  display: inline-block;
  font-size: 3rem;
  line-height: 5.5rem;
  color: ${(props) => props.theme.titleColor};
  margin-top: ${(props) => (props.align === 'start' ? '1rem' : '0')};
  text-align: center;
  @media screen and (max-width: 47.99em) {
    height: 3.5rem;
    width: 3.5rem;
    line-height: 3.5rem;
    font-size: 2rem;
    min-width: 3.5rem;
  }
`;

const Title = styled.h1`
  padding: 0 1rem;
  @media screen and (max-width: 47.99em) {
    font-size: 1.5rem;
  }
`;
const SubTitle = styled.h2`
  padding: 0.1rem 1rem;
  font-size: 1.25rem;
  font-weight: 600;
  @media screen and (max-width: 47.99em) {
    font-size: 1rem;
  }
`;

const PageTitle = ({ align, title, subTitle, icon }) => (
  <Wrapper align={align}>
    <TitleIcon align={align}>{icon}</TitleIcon>
    <div>
      <Title>{title}</Title>{subTitle && <SubTitle>{subTitle}</SubTitle>}
    </div>
  </Wrapper>
);

PageTitle.propTypes = {
  align: PropTypes.string,
  icon: PropTypes.node,
  subTitle: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  title: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
};

PageTitle.defaultProps = {
  align: undefined,
  title: null,
  subTitle: null,
  icon: null,
};

export default PageTitle;
