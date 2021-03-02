import PropTypes from "prop-types";
import React, { Component } from "react";
import styled from "styled-components";

import LobbyingFirmDisplay from "./LobbyingFirmDisplay";
import LobbyistForm from "./LobbyingFirmEditForm";


const Title = styled.h2`
  font-family: "Open Sans";
  border-bottom: 1px solid black;
  font-size: 1rem;
  font-weight: bold;
  padding-bottom: 6px;
  margin-top: 28px;
  margin-bottom: 0;
`;


export default class LobbyingFirmForm extends Component {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    value: PropTypes.shape({
      name: PropTypes.string,
      phone: PropTypes.string,
      "effective_date": PropTypes.string,
      address1: PropTypes.string,
      address2: PropTypes.string,
      city: PropTypes.string,
      state: PropTypes.string,
      zipcode: PropTypes.string,
    }),
  }

  static defaultProps = { value: undefined }

  constructor(...args) {
    super(...args);

    let editMode = false;
    if (!this.props.value) {
      editMode = true;
    } else {
      const values = Object.values(this.props.value);
      editMode = !values.find((v) => !!v);
    }
    this.state = { editMode };
  }

  render() {
    const { value } = this.props;
    const { editMode } = this.state;

    return (
      <>
        <Title>Identity of the Lobbying Firm</Title>
        <LobbyistForm show={editMode} value={value} onChange={this.onSubmit} />
        <LobbyingFirmDisplay show={!editMode} value={value} onEdit={this.onEdit} />
      </>
    );
  }

  onSubmit = (data) => {
    this.setState({ editMode: false }, () => {
      this.props.onChange(data);
    });
  }

  onEdit = () => {
    this.setState({ editMode: true });
  }
}
