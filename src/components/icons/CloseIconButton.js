import styled from "styled-components";

import { getColorFromName } from "../../styles/cssHelper";


const CloseIconButton = styled.div`
  position: absolute;
  right: 0.5rem;
  top: 0.125rem;
  cursor: pointer;
  outline: none;
  ${(props) => `color: ${getColorFromName(props.color, props.theme)};`}
`;

export default CloseIconButton;
