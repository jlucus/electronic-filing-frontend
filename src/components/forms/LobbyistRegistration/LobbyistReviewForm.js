import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '../../buttons';
import {
  Fieldset,
  Label,
  Input,
  Select,
  StateOptions,
  Checkbox,
} from '../../forms';
import { Span } from '../../typography';
import { useAuthContext } from '../../contexts/AuthProvider';
import { endpoints } from '../../../constants/endpoints';
import { Row, Col, FlexWrapper } from '../../layout-containers';
import { cleanUpSubmit } from './utils';

function LobbyistReviewForm({ rawData, setErrorMessage }) {
  const { register, handleSubmit, errors } = useForm({
    defaultValues: {
      entity_id: rawData.entity_id,
      entity_name: rawData.name,
      entity_address1: rawData.address1,
      entity_address2: rawData.address2,
      entity_city: rawData.city,
      entity_zipcode: rawData.zipcode,
      entity_state: rawData.state,
      entity_phone: rawData.phone,
      lobbyist:
        rawData.lobbyist_types.length > 0
          ? rawData.lobbyist_types.map((type) => type[0])
          : null,
    },
  });
  const [allowEdit, setAllowEdit] = useState(true);
  const [updateSuccess, setUpdateSuccess] = useState(false);
  const [lobbyist, setLobbyist] = useState(
    rawData.lobbyist_types.length > 0
      ? rawData.lobbyist_types.map((type) => type[0])
      : null
  );
  const authData = useAuthContext();

  const onSubmit = async (info) => {
    const url =
      endpoints.admin.lobbyist.updateLobbyist + `${rawData.entity_id}`;
    console.log(rawData);
    const data = cleanUpSubmit(info, rawData.entity_id);

    const { entity_expenditure, entity_firm, entity_org } = data;
    const lobbyistArray = [
      entity_expenditure ? 'expenditure' : null,
      entity_firm ? 'firm' : null,
      entity_org ? 'org' : null,
    ];
    setLobbyist(lobbyistArray);

    const response = await authData.globalFetch(url, 'post', data);
    if (response.success) {
      setAllowEdit(!allowEdit);
      setUpdateSuccess(true);
    } else {
      setErrorMessage(
        'A server error occurred. Please try again later and contact efilesd-support@pasaconsult.com if the error persists.'
      );
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <Fieldset>
        <legend>Create New Lobbyist Account</legend>
        <Row>
          <Col span={9}>
            <Row>
              <Col span={12}>
                <Label>Company Name</Label>
                <Input
                  ref={register({
                    required: 'Name is required.',
                    minLength: {
                      value: 3,
                      message: 'Name must have 3 or more characters.',
                    },
                  })}
                  disabled={allowEdit}
                  name="entity_name"
                />
                {errors.entity_name && (
                  <Span>{errors.entity_name.message}</Span>
                )}
              </Col>
            </Row>
            <Row>
              <Col span={12}>
                <Label>Address</Label>
                <Input
                  ref={register({
                    required: 'Address is required.',
                    minLength: {
                      value: 3,
                      message: 'Address must have 3 or more characters.',
                    },
                  })}
                  disabled={allowEdit}
                  name="entity_address1"
                />
                {errors.entity_address1 && (
                  <Span>{errors.entity_address1.message}</Span>
                )}
              </Col>
            </Row>
            <Row>
              <Col span={12}>
                <Label>Address 2</Label>
                <Input
                  ref={register}
                  disabled={allowEdit}
                  name="entity_address2"
                />
              </Col>
            </Row>
            <Row>
              <Col span={5}>
                <Label>City</Label>
                <Input
                  ref={register({
                    required: 'City is required.',
                    minLength: {
                      value: 3,
                      message: 'City must have 3 or more characters.',
                    },
                  })}
                  disabled={allowEdit}
                  name="entity_city"
                />
                {errors.entity_city && (
                  <Span>{errors.entity_city.message}</Span>
                )}
              </Col>
              <Col span={2}>
                <Label>Zip</Label>
                <Input
                  ref={register({
                    required: 'Zip code is required.',
                    pattern: {
                      value: /^\d{5}(?:[-\s]\d{4})?$/,
                      message: 'Zipcode must be valid.',
                    },
                  })}
                  disabled={allowEdit}
                  name="entity_zipcode"
                />
                {errors.entity_zipcode && (
                  <Span>{errors.entity_zipcode.message}</Span>
                )}
              </Col>
              <Col span={5}>
                <Label>State</Label>
                <Select
                  ref={register({
                    required: 'State is required.',
                  })}
                  disabled={allowEdit}
                  name="entity_state"
                >
                  <StateOptions />
                </Select>
                {errors.entity_state && (
                  <Span>{errors.entity_state.message}</Span>
                )}
              </Col>
            </Row>
            <Row>
              <Col span={12}>
                <Label>Phone</Label>
                <Input
                  ref={register({
                    required: 'Phone number is required.',
                    pattern: {
                      value: /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/,
                      message: 'Phone number must be valid.',
                    },
                  })}
                  disabled={allowEdit}
                  name="entity_phone"
                />
                {errors.entity_phone && (
                  <Span>{errors.entity_phone.message}</Span>
                )}
              </Col>
            </Row>
            <Row padding="1rem 0 1rem 0">
              <Col span={12}>
                <FlexWrapper>
                  <div>
                    <Checkbox
                      type="checkbox"
                      name="lobbyist"
                      value="firm"
                      ref={register({
                        required: 'Lobbyist type is required.',
                      })}
                      disabled={allowEdit}
                      showBlack={lobbyist.includes('firm')}
                    />
                    <Label display="inline-block">Lobbying Firm</Label>
                  </div>
                  <div>
                    <Checkbox
                      type="checkbox"
                      name="lobbyist"
                      value="org"
                      ref={register({
                        required: 'Lobbyist type is required.',
                      })}
                      disabled={allowEdit}
                      showBlack={lobbyist.includes('org')}
                    />
                    <Label display="inline-block">Organization</Label>
                  </div>
                  <div>
                    <Checkbox
                      type="checkbox"
                      name="lobbyist"
                      value="expenditure"
                      ref={register({
                        required: 'Lobbyist type is required.',
                      })}
                      disabled={allowEdit}
                      showBlack={lobbyist.includes('expenditure')}
                    />
                    <Label display="inline-block">Expenditure Lobbyist</Label>
                  </div>
                </FlexWrapper>
                {errors.lobbyist && <Span>{errors.lobbyist.message}</Span>}
              </Col>
            </Row>
            {updateSuccess && (
              <Row>
                <Col span={12}>
                  <Span color="#035aa4">Lobbyist information updated!</Span>
                </Col>
              </Row>
            )}
          </Col>
          {!rawData.reviewed && (
            <Col span={3}>
              <FlexWrapper justifyContent="flex-end">
                {allowEdit ? (
                  <Button size="large" onClick={() => setAllowEdit(!allowEdit)}>Edit</Button>
                ) : (
                  <Button size="large" onClick={handleSubmit(onSubmit)}>Save</Button>
                )}
              </FlexWrapper>
            </Col>
          )}
        </Row>
      </Fieldset>
    </form>
  );
}

export default LobbyistReviewForm;
