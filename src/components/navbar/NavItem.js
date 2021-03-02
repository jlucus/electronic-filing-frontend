import styled from "styled-components";


const NavItem = styled.li`
  margin: 0 0.5rem 0 0;
  line-height: 1rem;
  font-size: ${(props) => props.fontSize || "0.875rem"};
  padding: ${(props) => props.padding || "0.5rem 0.75rem"};
  font-weight: bold;
  cursor: pointer;
  white-space: nowrap;
  background-color: ${(props) =>
    props.selected ? props.theme.tabSelectBgColor : props.theme.titleBgColor};
  box-shadow: 1px 1px 1px rgba(68, 68, 68, 0.6);
  color: ${(props) => props.theme.titleColor};
  font-family: 'Merriweather',serif;

  & > a, & > a:hover, & > a:visited {
    color: ${(props) => props.theme.titleColor};
  }

  & > a > i {
    display: none;
  }
  @media only screen and (max-width: 1199px) {
    margin: 0rem 0.5rem;
    padding: 0;
    line-height: 3rem;
    box-shadow: none;
    border-bottom: 1px solid #ffffff;
    font-weight: 500;
    background: none;
    background-color: ${(props) =>
    props.selected ? props.theme.tabSelectBgColor : "none"};

    & > a {
      margin-left: 0.5rem;
    }
    &:last-of-type {
      border: none;
    }

    & > a {
      user-select: none;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }

    & > a > i {
      display: block;
      color: ${(props) => props.theme.mainMenuSeparatorColor1};
      font-weight: bold;
      font-size: 1.25rem;
    }
  }
  &:hover {
    background-color: ${(props) =>
    props.selected
      ? props.theme.tabSelectHoverBgColor
      : props.theme.titleHoverBgColor};
  }
`;

export default NavItem;
