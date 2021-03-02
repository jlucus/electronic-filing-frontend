import styled from "styled-components";

import { getColorFromName } from "../../styles/cssHelper";


const Fieldset = styled.fieldset`
  position: relative;
  border-radius: 0.375rem;
  border: 1px solid
    ${(props) => props.borderColor || props.theme.privacyTextColor};
  padding: ${(props) => props.padding || ".5rem"};
  min-width: 200px;
  min-height: 300px;

  ${(props) => props.color && `
    border: 1px solid ${getColorFromName(props.color, props.theme)};
    & legend {
      color: ${getColorFromName(props.color, props.theme)};
    }
  `}
`;

export default Fieldset;

export const ProfileFieldset = styled(Fieldset)`
  padding: .5rem;
`;
