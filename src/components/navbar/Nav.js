import styled from "styled-components";


const Nav = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  list-style-type: none;
  padding: 0;
  margin: 0;

  @media only screen and (max-width: 1199px)  {
    display: ${(props) => (props.show ? "block" : "none")};
    position: absolute;
    max-width: 768px;
    width: 98%;
    z-index: 1;
    background-image: linear-gradient(${(props) => props.theme.titleBgColor}, ${(props) => props.theme.titleHoverBgColor});
  }
`;

export default Nav;
