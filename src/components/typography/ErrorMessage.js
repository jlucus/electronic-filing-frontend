import styled from 'styled-components';

const ErrorMessage = styled.p`
  color: ${(props) => props.theme.errorTextColor};
  font-size: 0.875rem;
`;

export default ErrorMessage;
