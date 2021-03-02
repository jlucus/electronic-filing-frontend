import React from 'react';

import styled from 'styled-components';

const HelpBoxWrapper = styled.div`
  background-color: ${(props) =>
    props.backgroundColor || props.theme.helpboxBgColor};
  color: ${(props) => props.color || props.theme.helpboxTextColor};
  text-align: center;
  position: relative;
  padding: 0.5rem;
  border-radius: ${(props) => props.borderRadius || 0};

  margin-top: 1.5rem;

  & h1 {
    font-size: 1rem;
    color: ${(props) => props.titleColor || props.theme.helpboxTextColor};
    margin: 0.5rem 0 1rem;
  }

  & p {
    line-height: 1.125rem;
    font-size: 0.875rem;
  }
`;

export const HelpParagraph = styled.p`
  line-height: 1.125rem;
  text-align: ${(props) => props.textAlign || 'center'};
  padding: ${(props) => props.padding || 0};
`;

const HelpBox = ({ title, children, ...styles }) => {
  return (
    <HelpBoxWrapper {...styles}>
      {title && <h1>{title}</h1>}
      {children}
    </HelpBoxWrapper>
  );
};

export default HelpBox;
