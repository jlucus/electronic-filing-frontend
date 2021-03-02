import React, { useState, forwardRef } from 'react';
import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DatepickerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: ${(props) => props.width || '100%'};
  border: 1px solid gray;
  border-radius: 0.25rem;
  font-size: 1rem;
  margin: 0.5rem 0;
  padding: 7px 0.5rem;
  color: ${(props) => props.theme.inputTextColor};
  background-color: ${(props) => props.theme.inputBgColor};
`;

const WrapperStyles = styled.div`
  & .react-datepicker-wrapper {
    width: 100%;
    cursor: pointer;
  }
`;

const CustomInput = forwardRef((props, ref) => (
  <DatepickerContainer onClick={props.onClick} ref={ref}>
    <label onClick={props.onClick}>{props.value || props.placeholder}</label>
    <i
      onClick={props.onClick}
      aria-hidden="true"
      className="icon-calendar-31 icon--lg"
    />
  </DatepickerContainer>
));

const Datepicker = forwardRef((props, ref) => (
  <WrapperStyles ref={ref}>
    <DatePicker
      selected={props.selected}
      onChange={props.onChange}
      showYearDropdown
      dateFormatCalendar="MMMM"
      yearDropdownItemNumber={30}
      scrollableYearDropdown
      customInput={<CustomInput />}
      maxDate={props.maxDate}
    />
  </WrapperStyles>
));

export default Datepicker;
