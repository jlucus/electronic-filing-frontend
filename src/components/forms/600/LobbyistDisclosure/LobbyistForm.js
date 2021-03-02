import PropTypes from "prop-types";
import React from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";

import { Button } from "../../../buttons";
import { Label, Input } from "../../../forms";
import { FlexWrapper } from "../../../layout-containers";


const Required = styled.span`
  color: red;
  &::after {
    content: "*";
  }
`;

const FormInput = styled(Input)`
  font-size: 12px;
  padding: 9px;
  margin-top: 0;
`;

const FormLabel = styled(Label)`
  font-size: 13px;
`;

const Field = styled.div`
  margin-left: 20px;
  flex: 1;

  &:first-child {
    margin-left: 0;
  }
`;

const DateInput = styled(FormInput)`
  width: calc(33% - 10px);
`;

const SaveButton = styled(Button)`
  width: 117px;
  height: 37px;
  font-size: 13px;
  font-weight: bold;
`;

export default function LobbyistForm({ entity, onSave }) {
  const form = useForm({ defaultValues: { ...entity } });
  const { register, handleSubmit } = form;

  return (
    <form onSubmit={handleSubmit(onSave)}>
      <input ref={register()} name="id" type="hidden" />
      <FlexWrapper direction="column">
        <FlexWrapper>
          <Field>
            <FormLabel>Effective Date <Required /></FormLabel>
            <DateInput ref={register({ required: true })} name="effective_date" />
          </Field>
        </FlexWrapper>

        <FlexWrapper>
          <Field>
            <FormLabel>First name <Required /></FormLabel>
            <FormInput ref={register({ required: true })} name="first_name" />
          </Field>
          <Field>
            <FormLabel>Middle name <Required /></FormLabel>
            <FormInput ref={register()} name="middle_name" />
          </Field>
          <Field>
            <FormLabel>Last name <Required /></FormLabel>
            <FormInput ref={register({ required: true })} name="last_name" />
          </Field>
        </FlexWrapper>
      </FlexWrapper>
      <FlexWrapper>
        <SaveButton type="submit">Save</SaveButton>
      </FlexWrapper>
    </form>
  );
}

LobbyistForm.propTypes = {
  onSave: PropTypes.func.isRequired,
  entity: PropTypes.shape({
    id: PropTypes.string.isRequired,
    "first_name": PropTypes.string.isRequired,
    "last_name": PropTypes.string.isRequired,
    "effective_date": PropTypes.string.isRequired,
    "middle_name": PropTypes.string,
  }),
};

LobbyistForm.defaultProps = { entity: undefined };
