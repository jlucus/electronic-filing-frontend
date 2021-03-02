import React from 'react';
import PropTypes from 'prop-types';
import { states } from '../../constants/area';
import { Card } from '../layout-containers';

function FilerProfileBox(props) {
  const {
    profile,
  } = props;

  const { contact_info, email } = profile;

  return (
    <Card noFlex={true} style={{ padding: '1rem', margin: '1rem 0'}}>
      <strong>Name:</strong> {contact_info.first_name}{contact_info.middle_name && ` ${contact_info.middle_name} `}
      {' '}
      {contact_info.last_name}
      <br />
      <strong>Email:</strong> {email}<br />
      <strong>Address:</strong> {contact_info.address1} {contact_info.address2 && `, ${contact_info.address2}`}<br />
      <strong>Telephone:</strong> {contact_info.phone}<br />
      <strong>City:</strong> {contact_info.city}<br />
      <strong>State:</strong> {contact_info.state && states[contact_info.state]} <br />
      <strong>Zip:</strong> {contact_info.zipcode}<br />
      <strong>Redact personal data on filings:</strong> {contact_info.hide_details ? 'Yes' : 'No'}
    </Card>
  );
}

FilerProfileBox.propTypes = {
  profile: PropTypes.any.isRequired,
};

export default FilerProfileBox;
