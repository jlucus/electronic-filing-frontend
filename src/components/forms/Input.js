import styled from "styled-components";


const Input = styled.input`
  display: block;
  width: ${(props) => props.width || "100%"};
  border: 1px solid gray;
  ${(props) => props.invalid && `border: 2px solid ${props.theme.errorTextColor};`}

  border-radius: 0.25rem;
  font-size: 1rem;
  margin: 0.5rem 0;
  padding: 0.75rem 0.5rem;
  ${(props) => props.size === "small" && `
  border-radius: 0.25rem;
  font-size: 0.75rem;
  margin: 0.25rem 0;
  padding: 0.5rem 0.375rem;
  `}
  color: ${(props) => props.theme.inputTextColor};
  background-color: ${(props) => props.theme.inputBgColor};


  :disabled {
    opacity: 0.7;
    background-color: ${(props) => props.theme.inputDisabledBgColor};
  }
`;

export default Input;
