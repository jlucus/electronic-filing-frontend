import styled from "styled-components";

import { Col } from ".";
import ContentWrapper from "./ContentWrapper";

export const Wrapper = styled(ContentWrapper)`
  padding: ${(props) => props.padding || "3rem"};
  height: ${(props) => props.height || "50rem"};

  @media screen and (max-width: 47.99em) {
    padding: 1rem;
  }
`;

export const FormWrapper = styled.div`
  border-radius: ${(props) => {
    if ([null, undefined].includes(props.rounded)) {
      return "0.375rem";
    }

    return props.rounded;
  }};
  border: 1px solid ${(props) => props.theme.privacyTextColor};
  width: 100%;
  padding: 0.5rem;
`;

export const LoginCol = styled(Col)`
  padding: 1rem 0;
`;

export const FlexWrapper = styled.div`
  display: ${(props) => props.display || "flex"};
  flex-direction: ${(props) => props.direction || "row"};
  justify-content: ${(props) => props.justifyContent || "space-between"};
  align-items: ${(props) => props.alignItems || "normal"};
  padding: ${(props) => props.padding || 0};
  background-color: ${(props) => props.backgroundColor || "inital"};
  cursor: ${(props) => props.cursor || "default"};

  @media only screen and (max-width: 768px) {
    display: ${(props) => props.display || "block"};
  }
`;
