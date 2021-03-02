import React, { useContext } from 'react';
import styled from 'styled-components';

const HeadingStyle = `
  font-family: "Merriweather", serif;
`;

const OpenSans = `
  font-family: "Open Sans"
`;

export const Heading1 = styled.h1`
  ${HeadingStyle}
  font-size: 2.25rem;
  margin: ${(props) => props.margin || null};
`;

export const Heading2 = styled.h2`
  ${HeadingStyle}
  text-align: ${(props) => props.textAlign || null};
  font-size: 1.6875rem;
  margin: ${(props) => props.margin || null};
`;

export const Heading3 = styled.h3`
  ${HeadingStyle}
  text-align: ${(props) => props.textAlign || null};
  font-size: 1.5rem;
  margin: ${(props) => props.margin || null};
`;

export const Heading4 = styled(Heading3)`
  font-size: 1rem;
`;

export const Subheading = styled.p`
  display: block;
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: ${(props) => props.fontWeight || 'normal'};
  margin: 0.25rem 0;
  color: ${(props) => props.theme.inputTextColor};
`;

export const Span = styled.span`
  font-size: ${(props) => props.fontSize || '1rem'};
  display: ${(props) => props.display || 'inline-block'};
  color: ${(props) => props.color || 'red'};
  padding: ${(props) => props.padding || 0};
`;

export const ModalSubheading = styled.p`
  font-size: 1rem;
  text-align: ${(props) => props.textAlign || null};

  ${OpenSans}
`;
