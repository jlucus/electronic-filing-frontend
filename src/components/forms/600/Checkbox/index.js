import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

import Check from "./Check";


const CheckboxContainer = styled.button`
  width: 15px;
  height: 15px;
  flex-shrink: 0;
  border: 1px solid #A7ABAC;
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
  padding: 0;
  &:hover,
  &:focus,
  &:active {
    border: 1px solid #A7ABAC;
    border-radius: 0;
  }
`;


export default function Checkbox({ disabled, checked, onChange, ...props }) {
  const tick = checked ? <Check disabled={disabled} /> : null;
  function onClick() {
    onChange(!checked);
  }

  return (
    <CheckboxContainer disabled={disabled} onClick={onClick} {...props}>
      {tick}
    </CheckboxContainer>
  );
}

Checkbox.propTypes = {
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
};

Checkbox.defaultProps = {
  checked: false,
  disabled: false,
  onChange: () => undefined,
};
