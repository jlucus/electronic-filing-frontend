import React from 'react';
import styled from 'styled-components';

const Block = styled.div`
  text-align: center;
  background-color: ${(props) => props.theme.blockBgColor};

  margin-top: 3.125rem;
  padding-bottom: 1.875rem;

  & h2 {
    font-weight: 500;
    font-size: 1.875rem;
    color: ${(props) => props.theme.headerColor}
  }

  @media screen and (max-width: 47.99em) {

    padding-bottom: 1.275rem;

    & h2 {
      font-weight: 400;
      font-size: 1rem;
    }
  }
`;

const Title = styled.div`
  height: 7rem;
  width: 7rem;
  background-color: ${(props) => (props.bgColor ? props.bgColor : 'black')};
  border-radius: 50%;
  display: inline-block;
  font-size: 4rem;
  line-height: 7rem;
  margin-top: -3.5rem;
  color: ${(props) => props.theme.titleColor};

  @media screen and (max-width: 47.99em) {
    height: 4.25rem;
    width: 4.25rem;
    font-size: 2.5rem;
    line-height: 4.25rem;
    margin-top: -2.125rem;
  }
`;

function BlockTitle({
  title = 'Public Access',
  icon = <i className="icon-users2" />,
  iconBgColor = '#2C97DC',
}) {
  return (
    <Block>
      <Title bgColor={iconBgColor}><i className="icon-users2" /></Title>
      <h2>{title}</h2>
    </Block>
  );
}

export default BlockTitle;
