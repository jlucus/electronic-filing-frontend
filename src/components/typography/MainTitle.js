import styled from 'styled-components';

const MainTitle = styled.h1`
  font-size: 2.6rem;
  font-weight: bold;
  color: ${(props) => props.theme.headerColor};
  margin: 3rem 0;

  @media screen and (max-width: 47.99em) {
    font-size: 1.5rem;
    font-weight: 500;
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
`;

export default MainTitle;
