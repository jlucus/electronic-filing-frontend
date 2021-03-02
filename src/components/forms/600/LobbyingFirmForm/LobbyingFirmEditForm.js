import PropTypes from "prop-types";
import React from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";

import { Button } from "../../../buttons";
import { Label, Input, Select, StateOptions } from "../../../forms";
import { FlexWrapper, FormWrapper } from "../../../layout-containers";


const Required = styled.span`
  color: red;
  &::after {
    content: "*";
  }
`;

const FormContainer = styled(FormWrapper)`
  margin-top: 20px;
`;

const FormInput = styled(Input)`
  font-size: 12px;
  padding: 9px;
`;

const FormLabel = styled(Label)`
  font-size: 13px;
`;

const Field = styled.div`
  margin-left: 20px;

  &:first-child {
    margin-left: 0;
  }
`;

const LargeInput = styled(FormInput)`
  width: 335px;
`;

const PhoneInput = styled(FormInput)`
  width: 123px;
`;

const DateInput = styled(FormInput)`
  width: 131px;
`;

const Address2Input = styled(FormInput)`
  width: 245px;
`;

const StateSelect = styled(Select)`
  width: 69px;
  font-size: 12px;
  padding: 9px;
`;

const ZipcodeInput = styled(FormInput)`
  width: 155px;
`;

const SaveButton = styled(Button)`
  margin: 0;
`;


export default function LobbyingFirmEditForm({ value, onChange, show }) {
  if (!show) {
    return null;
  }

  const form = useForm({ defaultValues: { ...value } });
  const { register, handleSubmit } = form;

  return (
    <FormContainer rounded={0}>
      <form onSubmit={handleSubmit(onChange)}>
        <FlexWrapper justifyContent="space-between">
          <FlexWrapper direction="column">
            <FlexWrapper justifyContent="flex-start">
              <Field>
                <FormLabel>Name <Required /></FormLabel>
                <LargeInput ref={register({ required: true })} name="name" />
              </Field>

              <Field>
                <FormLabel>Telephone <Required /></FormLabel>
                <PhoneInput ref={register({ required: true })} name="phone" />
              </Field>

              <Field>
                <FormLabel>Effective Date of Address <Required /></FormLabel>
                <DateInput ref={register({ required: true })} name="effective_date" />
              </Field>
            </FlexWrapper>

            <FlexWrapper justifyContent="flex-start">
              <Field>
                <FormLabel>Address Line 1 <Required /></FormLabel>
                <LargeInput ref={register({ required: true })} name="address1" />
              </Field>

              <Field>
                <FormLabel>Address Line 2</FormLabel>
                <Address2Input ref={register()} name="address2" />
              </Field>
            </FlexWrapper>

            <FlexWrapper justifyContent="flex-start">
              <Field>
                <FormLabel>City <Required /></FormLabel>
                <LargeInput ref={register({ required: true })} name="city" />
              </Field>

              <Field>
                <FormLabel>State <Required /></FormLabel>
                <StateSelect ref={register({ required: true })} name="state">
                  <StateOptions display="code" />
                </StateSelect>
              </Field>

              <Field>
                <FormLabel>Zip <Required /></FormLabel>
                <ZipcodeInput ref={register({ required: true })}name="zipcode" />
              </Field>
            </FlexWrapper>
          </FlexWrapper>
          <SaveButton size="small" type="submit">Save</SaveButton>
        </FlexWrapper>
      </form>
    </FormContainer>
  );
}

LobbyingFirmEditForm.propTypes = {
  show: PropTypes.bool.isRequired,
  value: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
};
