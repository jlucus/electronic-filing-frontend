import PropTypes from "prop-types";
import React, { Component } from "react";
import styled from "styled-components";

import { FlexWrapper } from "../../../layout-containers";
import { Button } from "../../../buttons";


const Container = styled.div`
  padding-top: 8px;
  border-top: 2px solid ${(props) => props.theme.primaryColor};
  margin-top: 24px;
  margin-bottom: 10px;
`;

const Title = styled.h2`
  color: ${(props) => props.theme.primaryColor};
  font-family: "Open Sans";
  font-size: 1rem;
  margin: 0;
  padding: 0;
`;


export default class SectionTitle extends Component {
  static propTypes = { children: PropTypes.node.isRequired }

  render() {
    const { children } = this.props;

    return (
      <Container>
        <FlexWrapper>
          <Title>{children}</Title>
          <Button
            color="secondary"
            href="#"
            size="small"
          >
            Help
          </Button>
        </FlexWrapper>
      </Container>
    );
  }
}
