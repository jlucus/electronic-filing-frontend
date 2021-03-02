import React, { useRef, useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { useForm } from 'react-hook-form';
import { Fieldset, Label, Input, Select, StateOptions } from '../../forms';
import { Button } from '../../buttons';
import { Span } from '../../typography';
import { useAuthContext } from '../../contexts/AuthProvider';
import { endpoints } from '../../../constants/endpoints';
import { Row, Col } from '../../layout-containers';

function LobbyistRegistrationForm({ setSubmitSuccess }) {
  const { register, handleSubmit, errors } = useForm();
  const [captchaGood, setCaptchaGood] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const recaptchaRef = useRef();
  const authData = useAuthContext();

  const onSubmit = async (info) => {
    const url = endpoints.filer.lobbyist.register;
    const recaptchaValue = await recaptchaRef.current.getValue();
    if (recaptchaValue === '') {
      setErrorMessage('You must click on the recaptcha above.');
      return;
    }
    const data = { ...info, recaptcha: recaptchaValue };

    const response = await authData.noAuthFetch(url, 'post', data);
    if (response && response.success) {
      setSubmitSuccess(true);
    } else {
      if (response.detail) {
        setErrorMessage(response.detail);
      } else {
        setErrorMessage(
          'A server error occurred. Please try again later and contact efile-sd-support@pasaconsult.com if the error persists.'
        );
      }
      recaptchaRef.current.reset();
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <Fieldset>
        <legend>Create New Lobbyist Account</legend>
        <Row>
          <Col span={9}>
            <Row padding="1rem 0">
              <Col span={12}>
                <Span>* Indicates required field</Span>
              </Col>
            </Row>
            <Row>
              <Col span={12}>
                <Label>
                  Company / Organization Name: <Span>*</Span>
                </Label>
                <Input
                  ref={register({
                    required: 'Name is required.',
                    minLength: {
                      value: 3,
                      message: 'Name must have 3 or more characters.',
                    },
                  })}
                  name="entity_name"
                />
                {errors.entity_name && (
                  <Span>{errors.entity_name.message}</Span>
                )}
              </Col>
            </Row>
            <Row>
              <Col span={12}>
                <Label>
                  Address: <Span>*</Span>
                </Label>
                <Input
                  ref={register({
                    required: 'Address is required.',
                    minLength: {
                      value: 3,
                      message: 'Address must have 3 or more characters.',
                    },
                  })}
                  name="entity_address1"
                />
                {errors.entity_address1 && (
                  <Span>{errors.entity_address1.message}</Span>
                )}
              </Col>
            </Row>
            <Row>
              <Col span={12}>
                <Label>Address Line 2:</Label>
                <Input ref={register()} name="entity_address2" />
              </Col>
            </Row>
            <Row padding="2rem 0 0 0">
              <Col span={12}>
                <Label>
                  City: <Span>*</Span>
                </Label>
                <Input
                  ref={register({
                    required: 'City is required.',
                    minLength: {
                      value: 3,
                      message: 'City must have 3 or more characters.',
                    },
                  })}
                  name="entity_city"
                />
                {errors.entity_city && (
                  <Span>{errors.entity_city.message}</Span>
                )}
              </Col>
            </Row>
            <Row>
              <Col span={8}>
                <Label>
                  Zip Code: (99999 or 99999-9999): <Span>*</Span>
                </Label>
                <Input
                  width="50%"
                  ref={register({
                    required: 'Zip code is required.',
                    pattern: {
                      value: /^\d{5}(?:[-\s]\d{4})?$/,
                      message: 'Zipcode must be valid.',
                    },
                  })}
                  name="entity_zipcode"
                />
                {errors.entity_zipcode && (
                  <Span>{errors.entity_zipcode.message}</Span>
                )}
              </Col>
              <Col span={4}>
                <Label>
                  State: <Span>*</Span>
                </Label>
                <Select
                  ref={register({
                    required: 'State is required.',
                  })}
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
                <Label>
                  Company Phone: (999-999-9999) <Span>*</Span>
                </Label>
                <Input
                  ref={register({
                    required: 'Phone number is required.',
                    pattern: {
                      value: /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/,
                      message: 'Phone number must be valid.',
                    },
                  })}
                  name="entity_phone"
                />
                {errors.entity_phone && (
                  <Span>{errors.entity_phone.message}</Span>
                )}
              </Col>
            </Row>
            <Row padding="2rem 0 0 0">
              <Col span={12}>
                <Label>
                  Type of Lobbyist: <Span>*</Span>
                </Label>
                <input
                  type="radio"
                  name="entity_type"
                  value="org"
                  ref={register({ required: 'Lobbyist type is required.' })}
                />
                <label>Organization</label>
                <br />
                <input
                  type="radio"
                  name="entity_type"
                  value="firm"
                  ref={register({ required: 'Lobbyist type is required.' })}
                />
                <label>Firm</label>
                <br />
                <input
                  type="radio"
                  name="entity_type"
                  value="expenditure"
                  ref={register({ required: 'Lobbyist type is required.' })}
                />
                <label>Expenditure</label>
                {errors.entity_type && (
                  <Span display="block">{errors.entity_type.message}</Span>
                )}
              </Col>
            </Row>
            <Row padding="2rem 0 0 0">
              <Col span={12}>
                <Label>Individual Who Will Complete and File Forms:</Label>
              </Col>
            </Row>
            <Row>
              <Col span={4}>
                <Label>
                  First Name <Span>*</Span>
                </Label>
                <Input
                  ref={register({
                    required: 'First name is required.',
                  })}
                  name="filer_first_name"
                />
                {errors.filer_first_name && (
                  <Span>{errors.filer_first_name.message}</Span>
                )}
              </Col>
              <Col span={4}>
                <Label>Middle Name or Initial</Label>
                <Input ref={register()} name="filer_middle_name" />
              </Col>
              <Col span={4}>
                <Label>
                  Last Name <Span>*</Span>
                </Label>
                <Input
                  ref={register({
                    required: 'Last name is required.',
                  })}
                  name="filer_last_name"
                />
                {errors.filer_last_name && (
                  <Span>{errors.filer_last_name.message}</Span>
                )}
              </Col>
            </Row>
            <Row>
              <Col span={12}>
                <Label>
                  Above-Named Individual&apos;s E-mail Address
                  (you@yourdomain.com) <Span>*</Span>
                </Label>
                <Input
                  ref={register({
                    required: 'Email is required.',
                    pattern: {
                      value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                      message: 'Email must be valid.',
                    },
                  })}
                  name="filer_email"
                />
                {errors.filer_email && (
                  <Span>{errors.filer_email.message}</Span>
                )}
              </Col>
            </Row>
            <Row padding=".75rem .3rem">
              <Col>
                <ReCAPTCHA
                  ref={recaptchaRef}
                  sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                  onChange={() => {
                    setCaptchaGood(!captchaGood);
                  }}
                />
              </Col>
            </Row>
            {errorMessage && (
              <Row padding=".9rem 0">
                <Col span={10}>
                  <Span>{errorMessage}</Span>
                </Col>
              </Row>
            )}
            <Row padding=".3rem">
              <Col>
                <Button size="large" onClick={handleSubmit(onSubmit)}>
                  Submit
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Fieldset>
    </form>
  );
}

export default LobbyistRegistrationForm;
