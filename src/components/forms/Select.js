import styled from 'styled-components';

const Select = styled.select`
  display: block;
  width: ${(props) => props.width || '100%'};
  border: 1px solid gray;
  border-radius: 0.25rem;
  font-size: 1rem;
  margin: 0.5rem 0;
  padding: 0.75rem 0.5rem 0.629rem 0.5rem;
  color: ${(props) => props.theme.inputTextColor};
  background-color: ${(props) => props.theme.inputBgColor};

  @media only screen and (max-width: 768px) {
    width: 100%;
  }

  :disabled {
    opacity: 0.7;
    background-color: ${(props) => props.theme.inputDisabledBgColor};
  }
`;

export default Select;
