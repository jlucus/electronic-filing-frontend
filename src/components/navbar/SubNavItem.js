import React from "react";
import styled from "styled-components";

const SubNavItem = styled.li`
  margin: 0;
  padding: 0 0.5rem;
  line-height: 3rem;
  background-color: ${(props) => props.theme.subNavMenuLevel1BgColor};
  border-bottom: 1px solid ${(props) => props.theme.titleBgColor};

  &:hover {
    background-color: ${(props) => props.theme.titleHoverBgColor};
  }

  & > a {
    margin: 0 1rem;
  }

  & > a, & > a:hover, & > a:visited {
    color: ${(props) => props.theme.titleColor};
  }
`;

export default SubNavItem;
