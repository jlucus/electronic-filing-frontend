import styled from "styled-components";


const Row = styled.div`
  padding: ${(props) => props.padding || 0};
  margin: ${(props) => props.margin || 0};
  &:before {
    content: ' ';
    display: table;
    clear: both;
  }
  &:after {
    content: ' ';
    display: table;
    clear: both;
  }
`;

export default Row;

export const ProfileRow = styled(Row)`
  margin: 2rem 0;
`;
