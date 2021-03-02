import styled from 'styled-components';

const Container = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 1200px;
  &:before {
    content: " ";
    display: table;
  }
  &:after {
    content: " ";
    display: table;
    clear: both;
  }
`;

export default Container;
