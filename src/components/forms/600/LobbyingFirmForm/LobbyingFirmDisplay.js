import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

import { Button } from "../../../buttons";
import { FlexWrapper } from "../../../layout-containers";


const PresenterContainer = styled(FlexWrapper)`
  padding: 10px 8px;
  background: ${(props) => props.theme.blockBgColor};
  font-size: 13px;
`;


export default function LobbyingFirmDisplay({ value, onEdit, show }) {
  if (!show) {
    return null;
  }

  const {
    name,
    phone,
    address1,
    address2,
    city,
    state,
    zipcode,
  } = value;

  return (
    <PresenterContainer direction="row" justifyContent="space-between">
      <div>
        <strong>Name:</strong> {name}<br />
        <strong>Telephone:</strong> {phone}<br />
        <strong>Address:</strong> {address1}, {address2}<br />
        <strong>City:</strong> {city}<br />
        <strong>State:</strong> {state}<br />
        <strong>Zip:</strong> {zipcode}<br />
      </div>
      <Button size="small" onClick={onEdit}>Edit</Button>
    </PresenterContainer>
  );
}

LobbyingFirmDisplay.propTypes = {
  show: PropTypes.bool.isRequired,
  value: PropTypes.object.isRequired,
  onEdit: PropTypes.func.isRequired,
};
