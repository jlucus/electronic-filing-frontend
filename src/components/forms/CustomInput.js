import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { Span } from "../typography";

import Input from "./Input";
import Label from "./Label";


const ValueWrapper = styled.p``;
function CustomInput(props) {
  const {
    id,
    type = "text",
    label = null,
    invalid = false,
    htmlFor,
    children,
    name,
    disabled = false,
    editing = true,
    innerRef = null,
    defaultValue,
    errorMessage,
    required = false,
    size = 'normal',
    ...rest
  } = props;

  const labelHtmlFor = htmlFor || id;

  return (
    <>
      <Label htmlFor={labelHtmlFor} size={size}>
        {label}
        {" "}
        { required && editing && <Span>*</Span>}
      </Label>
      { editing && (
        <>
          <Input
            ref={innerRef}
            aria-invalid={invalid}
            defaultValue={defaultValue}
            disabled={disabled}
            id={id}
            invalid={invalid}
            name={name}
            type={type}
            size={size}
            {...rest}
          />
          {errorMessage && (
            <Span>{errorMessage}</Span>
          )}
        </>
      )}
      {!editing && <ValueWrapper>{defaultValue}</ValueWrapper>}
    </>
  );
}

CustomInput.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  invalid: PropTypes.bool,
  disabled: PropTypes.bool,
  editing: PropTypes.bool,
  required: PropTypes.bool,
  size: PropTypes.string,
  htmlFor: PropTypes.string,
  defaultValue: PropTypes.any,
  errorMessage: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.array, PropTypes.func]),
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.string, PropTypes.func]),
};

export default CustomInput;
