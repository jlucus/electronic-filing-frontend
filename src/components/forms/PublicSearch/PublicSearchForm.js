import React, { useEffect, useRef, useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { useForm, Controller } from 'react-hook-form';
import {
  Fieldset,
  Label,
  Input,
  Select,
  StateOptions,
  Datepicker,
} from '../../forms';
import { Button } from '../../buttons';
import { Span, Subheading } from '../../typography';
import { useAuthContext } from '../../contexts/AuthProvider';
import { endpoints } from '../../../constants/endpoints';
import { Row, Col, FormWrapper, FlexWrapper } from '../../layout-containers';
import { HelpBox, HelpParagraph } from '../../info-boxes';
import { prepareTableRows } from './utils';

function PublicSearchForm({
  setResults,
  setIsLoading,
  query,
  start_date,
  end_date,
}) {
  const authData = useAuthContext();
  const { register, handleSubmit, errors, control } = useForm({
    defaultValues: {
      query: query || '',
      start_date: start_date
        ? new Date(start_date)
        : new Date(new Date().getFullYear(), 0, 1),
      end_date: end_date ? new Date(end_date) : new Date(),
    },
  });

  const submitCall = async (params) => {
    setResults(null);
    setIsLoading(true);
    const url = endpoints.public.search;
    const response = await authData.noAuthFetch(url, 'get', null, params);
    if (response.success) {
      if (response.data.length === 0) {
        setResults(null);
        setIsLoading(false);
        return;
      }
      const results = response.data.map((filing) => {
        return prepareTableRows(filing, params);
      });
      setResults(results);
    }
    setIsLoading(false);
  };

  const onSubmit = (params) => {
    submitCall(params);
  };

  useEffect(() => {
    if (query && start_date && end_date) {
      const start = new Date(start_date);
      const end = new Date(end_date);
      // we came back, make the call to repopulate
      submitCall({ query, start_date: start, end_date: end });
    }
  }, []);

  return (
    <FormWrapper>
      <form>
        <Row>
          <Col span={8}>
            <Row margin="1rem">
              <Col span={12}>
                <Label font="Merriweather" fontWeight="normal">
                  Search for Individual Filer or Organization Name
                </Label>
                <Input
                  ref={register({
                    required: 'Name is required.',
                    minLength: {
                      value: 2,
                      message: 'Name must have 2 or more characters.',
                    },
                  })}
                  name="query"
                />
                {errors.entity_name && (
                  <Span>{errors.entity_name.message}</Span>
                )}
              </Col>
            </Row>
            <Row margin="1rem 0 0 1rem">
              <Col span={12}>
                <Label font="Merriweather" fontWeight="normal">
                  Narrow Search by picking Dates
                </Label>
              </Col>
            </Row>
            <Row margin="0 1rem 0 1rem">
              <Col span={5.5}>
                <Controller
                  render={({ onChange, value, ref }) => (
                    <Datepicker
                      onChange={onChange}
                      selected={value}
                      maxDate={new Date()}
                      ref={ref}
                    />
                  )}
                  control={control}
                  valueName="selected"
                  name="start_date"
                />
              </Col>
              <Col span={5.5}>
                <Controller
                  render={({ onChange, value, ref }) => (
                    <Datepicker
                      onChange={onChange}
                      selected={value}
                      maxDate={new Date()}
                      ref={ref}
                    />
                  )}
                  control={control}
                  valueName="selected"
                  name="end_date"
                />
              </Col>
            </Row>
            <Row margin="1rem">
              <Col span={8}>
                <Button
                  color="secondary"
                  size="lg"
                  padding="0 3rem"
                  htmlType="submit"
                  onClick={handleSubmit(onSubmit)}
                >
                  Search
                </Button>
              </Col>
            </Row>
          </Col>
          <Col span={4}>
            <Row margin="1rem">
              <Col span={12}>
                <HelpBox
                  title="Find any Filing!"
                  backgroundColor="#E7EBEC"
                  titleColor="black"
                  color="black"
                  borderRadius="6px"
                >
                  <HelpParagraph textAlign="left" padding=".5rem">
                    Use this search form to look for any kind of filing using
                    the filer or organization name.
                  </HelpParagraph>
                  <HelpParagraph textAlign="left" padding=".5rem">
                    Choose from the top for specialized Searches.
                  </HelpParagraph>
                </HelpBox>
              </Col>
            </Row>
          </Col>
        </Row>
      </form>
    </FormWrapper>
  );
}

export default PublicSearchForm;
