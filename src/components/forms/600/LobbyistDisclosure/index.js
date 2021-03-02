import PropTypes from "prop-types";
import styled from "styled-components";
import React, { Component } from "react";

import { FlexWrapper } from "../../../layout-containers";
import { Button } from "../../../buttons";

import LobbyistTable from "./LobbyistTable";
import LobbyistSelector from "./LobbyistSelector";


const AddButton = styled(Button)`
  font-size: 13px;
  padding-left: 18px;
  padding-right: 10px;
  font-weight: bold;
`;

const AddButtonContainer = styled(FlexWrapper)`
  margin-bottom: 10px;
  justify-content: flex-end;
  flex-direction: row;
`;

const Textarea = styled.textarea`
  flex: 1;
  height: 60px;
  resize: none;
  margin-bottom: 24px;
`;

const SaveButton = styled(Button)`
  margin-left: 8px;
`;

const CommentsLabel = styled.span`
  font-size: 14px;
  font-weight: bold;
  margin-top: 14px;
  margin-bottom: 6px;
`;


export default class LobbyistDisclosure extends Component {
  static propTypes = {
    comment: PropTypes.string.isRequired,
    onAdd: PropTypes.func.isRequired,
    onCommentChange: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
    entities: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      "first_name": PropTypes.string.isRequired,
      "last_name": PropTypes.string.isRequired,
      "effective_date": PropTypes.string.isRequired,
      "middle_name": PropTypes.string,
    }).isRequired),
    lobbyists: PropTypes.arrayOf(PropTypes.shape({
      "lobbyist_entity_id": PropTypes.string.isRequired,
      ordinal: PropTypes.number.isRequired,
    }).isRequired),
  }

  static defaultProps = {
    entities: [],
    lobbyists: [],
  }

  state = {
    adding: false,
    editing: false,
  }

  render() {
    const { entities, lobbyists, comment } = this.props;

    return (
      <>
        <LobbyistTable
          entities={entities}
          lobbyists={lobbyists}
          onDelete={this.onDelete}
          onEdit={this.onEdit}
        />
        {this.renderForm()}
        <FlexWrapper direction="column">
          <CommentsLabel>Schedule A Comments</CommentsLabel>
          <FlexWrapper>
            <Textarea value={comment} onChange={this.onCommentChange} />
            <SaveButton size="small">Save</SaveButton>
          </FlexWrapper>
        </FlexWrapper>
      </>
    );
  }

  renderForm = () => {
    const { adding, editing } = this.state;
    const { entities, lobbyists } = this.props;

    if (adding) {
      return (
        <LobbyistSelector
          entities={entities}
          lobbyists={lobbyists}
          onClose={this.onDoneEditing}
          onSave={this.onSave}
        />
      );
    }

    if (editing !== false) {
      return (
        <LobbyistSelector
          entities={entities}
          index={editing}
          lobbyists={lobbyists}
          onClose={this.onDoneEditing}
          onSave={this.onSave}
        />
      );
    }

    return (
      <AddButtonContainer>
        <AddButton
          color="robin"
          rightIcon={this.renderAddIcon()}
          size="small"
          onClick={this.onAdd}
        >
          Add a Lobbyist
        </AddButton>
      </AddButtonContainer>
    );
  }

  renderAddIcon() {
    const IconContainer = styled(FlexWrapper)`
      width: 22px;
      height: 22px;
      background: white;
      border-radius: 50%;
      margin-left: 12px;
      justify-content: center;
      align-items: center;
    `;

    const Icon = styled.i`
      color: ${(props) => props.theme.primaryRobin};
      font-weight: bold;
    `;

    return (
      <IconContainer>
        <Icon className="icon-plus" />
      </IconContainer>
    );
  }

  onAdd = () => {
    this.setState({ adding: true, editing: false });
  }

  onEdit = (index) => () => {
    this.setState({ adding: false, editing: index });
  }

  onDelete = (index) => () => {
    if (this.state.editing === index) {
      this.onDoneEditing();
    }

    this.props.onDelete(index);
  }

  onDoneEditing = () => {
    this.setState({ adding: false, editing: false });
  }

  onCommentChange = (event) => {
    this.props.onCommentChange(event.target.value);
  }

  onSave = (data) => {
    this.onDoneEditing();
    this.props.onAdd({ ...data });
  }
}
