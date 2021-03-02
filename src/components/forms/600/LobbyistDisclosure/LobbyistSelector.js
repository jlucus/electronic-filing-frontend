import PropTypes from "prop-types";
import React, { Component } from "react";
import styled from "styled-components";

import { Button } from "../../../buttons";
import { Label, Select } from "../../../forms";
import { FlexWrapper, FormWrapper } from "../../../layout-containers";

import LobbyistForm from "./LobbyistForm";


const FormContainer = styled(FormWrapper)`
  margin-bottom: 16px;
`;

const Required = styled.span`
  color: red;
  &::after {
    content: "*";
  }
`;

const Title = styled.h3`
  font-size: 16px;
  font-weight: normal;
  font-family: "Open Sans";
  margin: 0;
  margin-bottom: 18px;
`;

const CloseButton = styled.button`
  border: none;
  background: transparent;
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FormLabel = styled(Label)`
  font-size: 13px;
`;

const CloseIcon = styled.i`
  color: ${(props) => props.theme.primaryColor};
  transform: rotate(45deg);
  font-size: 16px;
  font-weight: bold;
`;

const LobbyistSelect = styled(Select)`
  width: 300px;
  font-size: 12px;
  padding: 9px;
`;

const SaveButton = styled(Button)`
  margin: 0;
`;


export default class LobbyistSelector extends Component {
  static propTypes = {
    onClose: PropTypes.func.isRequired,
    onSave: PropTypes.func.isRequired,
    entities: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      "first_name": PropTypes.string.isRequired,
      "last_name": PropTypes.string.isRequired,
      "effective_date": PropTypes.string.isRequired,
      "middle_name": PropTypes.string,
    }).isRequired),
    index: PropTypes.number,
    lobbyists: PropTypes.arrayOf(PropTypes.shape({
      "lobbyist_entity_id": PropTypes.string.isRequired,
      ordinal: PropTypes.number.isRequired,
    }).isRequired),
  };

  static defaultProps = {
    entities: [],
    index: undefined,
    lobbyists: [],
  };

  state = { entity: "" };

  render() {
    const { onClose } = this.props;

    return (
      <FormContainer rounded={0}>
        <FlexWrapper>
          <Title>Add a Lobbyist</Title>
          <CloseButton onClick={onClose}>
            <CloseIcon className="icon-plus" />
          </CloseButton>
        </FlexWrapper>
        {this.renderContent()}
      </FormContainer>
    );
  }

  renderContent = () => {
    const { index, lobbyists, entities } = this.props;

    if (index !== undefined) {
      const lobbyist = lobbyists[index];
      const entity = entities.find((e) => e.id === lobbyist["lobbyist_entity_id"]);

      return <LobbyistForm entity={entity} onSave={this.onSaveNewEntity} />;
    }

    const availableLobbyists = entities.filter((entity) => {
      const existingLobbyist = lobbyists.find((l) => l["lobbyist_entity_id"] === entity.id);

      return !existingLobbyist;
    });

    if (!availableLobbyists.length) {
      return <LobbyistForm onSave={this.onSaveNewEntity} />;
    }

    return (
      <FlexWrapper direction="column">
        <FormLabel>Select a Lobbyist <Required /></FormLabel>
        <LobbyistSelect value={this.state.entity} onChange={this.onEntitySelect}>
          <option value="">Select a Lobbyist</option>
          <option value="-1">Add a new Lobbyist</option>
          <optgroup label="Existing lobbyists">
            {availableLobbyists.map(this.renderEntityOption)}
          </optgroup>
        </LobbyistSelect>
        {this.renderContentAfterSelect()}
      </FlexWrapper>
    );
  }

  renderContentAfterSelect = () => {
    const { entity } = this.state;
    if (entity === "-1") {
      return <LobbyistForm onSave={this.onSaveNewEntity} />;
    }

    if (entity) {
      return (
        <FlexWrapper>
          <SaveButton size="small" onClick={this.onSave}>Save</SaveButton>
        </FlexWrapper>
      );
    }

    return null;
  }

  renderEntityOption = (entity) => {
    const { id, first_name: fName, middle_name: mName, last_name: lName } = entity;

    const names = [fName, mName, lName];
    const name = names.filter((n) => !!n).join(" ");

    return <option key={id} value={id}>{name}</option>;
  }

  onSave = () => {
    const { entities, onSave } = this.props;
    const { entity } = this.state;
    const existingEntity = entities.find((e) => e.id === entity);

    onSave(existingEntity);
  }

  onSaveNewEntity = (newEntity) => {
    this.props.onSave(newEntity);
  }

  onEntitySelect = (event) => {
    const entity = event.target.value;
    this.setState({ entity });
  }
}
