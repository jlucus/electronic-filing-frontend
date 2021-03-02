import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";


const Svg = styled.svg`
  width: 9px;
  height: 9px;
`;


export default function Check({ disabled }) {
  const color = disabled ? "#A7ABAC" : "#0fb6ff";

  return (
    <Svg viewBox="0 0 9.414 9.414" xmlns="http://www.w3.org/2000/svg">
      <g transform="translate(-51.293 -785.293)">
        <g transform="translate(52 786)">
          <g transform="translate(0 0)">
            <path
              d="M0-8.971l8-8"
              fill="none"
              stroke={color}
              strokeWidth="2"
              transform="translate(0 16.971)"
            />
          </g>
          <g>
            <path
              d="M-8.971-8.971l-8-8"
              fill="none"
              stroke={color}
              strokeWidth="2"
              transform="translate(16.971 16.971)"
            />
          </g>
        </g>
      </g>
    </Svg>
  );
}

Check.propTypes = { disabled: PropTypes.bool };
Check.defaultProps = { disabled: false };
