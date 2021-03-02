import styled from "styled-components";


const TabNav = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  list-style-type: none;
  padding: 0;
  margin: 0 auto;

  @media only screen and (max-width: 1199px)  {
    display: block;
    max-width: 768px;
    width: 98%;
    z-index: 1;

    margin-top: 1rem;
  }
`;

export default TabNav;
