import React from 'react';
import styled from 'styled-components';

const StyledCircle = styled.i`
  width: ${(props) => props.width || '5em'};
  height: ${(props) => props.height || '5em'};
  text-align: center;
  line-height: 1em;
  padding: 20px 0 20px 2px;
  vertical-align: middle;
  color: white;
  border-radius: 50%;
  margin: ${(props) => props.margin || '0'};
  background-color: ${(props) => props.theme.secondaryButtonBgColor};
`;

function Circle({ children, width, height, margin }) {
  return (
    <StyledCircle width={width} height={height} margin={margin}>
      {children}
    </StyledCircle>
  );
}

export default Circle;
