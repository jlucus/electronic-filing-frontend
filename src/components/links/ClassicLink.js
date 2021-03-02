import styled from 'styled-components';

const ClassicLink = styled.a`
  font-size: ${(props) => props.fontSize || '0.875rem'};
  text-color: ${(props) => props.theme.lightButtonTextColor};
  text-decoration: underline;

  &:hover,
  &:visited {
    color: ${(props) => props.theme.lightButtonTextColor};
    text-decoration: none;
  }
`;
export default ClassicLink;
