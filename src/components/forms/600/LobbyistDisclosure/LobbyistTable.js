import PropTypes from "prop-types";
import React, { Component } from "react";
import styled from "styled-components";

import { FlexWrapper } from "../../../layout-containers";
import { Button } from "../../../buttons";
import DataTable from "../../../tables/DataTable";


const Table = styled.div`
  margin-bottom: 1rem;
  font-size: 13px;

  table {
    width: 100%;
    border-spacing: 4px;
  }

  th {
    background: ${(props) => props.theme.primaryColor};
    color: white;
    padding: 6px;

    div {
      cursor: inherit;
    }
  }

  tr {
    background: transparent;
  }

  td {
    background: rgba(15, 182, 255, 0.1);
    padding: 6px;

    &:last-child {
      width: 118px;
      padding: 2px 4px;
    }
  }
}
`;

const ButtonsContainer = styled(FlexWrapper)`
  justify-content: flex-start;
  width: 106px;

  button {
    margin: 0;
    margin-left: 4px;

    &:first-child {
      margin-left: 0;
    }
  }
`;

const ActionButton = styled(Button)`
  height: 25px;
  padding: 4px 9px;
  font-size: 13px;
`;


export default class LobbyistTable extends Component {
  static propTypes = {
    onDelete: PropTypes.func.isRequired,
    onEdit: PropTypes.func.isRequired,
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

  render() {
    const { lobbyists, entities, onEdit, onDelete } = this.props;
    if (!lobbyists?.length) {
      return null;
    }

    const data = lobbyists.map((item, index) => {
      const entity = entities.find((e) => e.id === item["lobbyist_entity_id"]);

      return {
        ...entity,
        actions: (
          <ButtonsContainer>
            <ActionButton size="small" onClick={onEdit(index)}>Edit</ActionButton>
            <ActionButton size="small" onClick={onDelete(index)}>Delete</ActionButton>
          </ButtonsContainer>
        ),
      };
    });
    const headers = ["Effective date", "First name", "Middle name", "Last name", ""];
    const accessors = ["effective_date", "first_name", "middle_name", "last_name", "actions"];

    return (
      <DataTable
        Styles={Table}
        accessors={accessors}
        data={data}
        headers={headers}
        pagination={false}
      />
    );
  }
}
