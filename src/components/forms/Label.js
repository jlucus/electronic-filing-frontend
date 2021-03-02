import styled from "styled-components";


const Label = styled.label`
  display: ${(props) => props.display || "block"};
  font-weight: ${(props) => props.fontWeight || "bold"};
  margin: 0.25rem 0;
  color: ${(props) => props.theme.inputTextColor};
  font-family: ${(props) => props.font || "Open Sans"};

  ${(props) => props.size === "small" && `
  font-size: 0.875rem;
  `}
`;

export default Label;
