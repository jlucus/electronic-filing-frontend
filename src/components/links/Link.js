import styled from 'styled-components';

const Link = styled.a`
  color: ${(props) => (props.color) ? props.color : props.theme.titleColor};
  text-decoration: none;
  cursor: pointer;

  &:hover, &:visited{
    color: ${(props) => (props.color) ? props.color : props.theme.titleColor};
    text-decoration: none;
  }
`;

export default Link;
