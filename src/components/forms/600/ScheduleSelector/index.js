import styled from "styled-components";
import React, { Component } from "react";

import Checkbox from "../Checkbox";
import { FormWrapper, FlexWrapper } from "../../../layout-containers";


const StyledCheckbox = styled(Checkbox)`
  margin-top: 4px;
  margin-right: 8px;
`;

const FormContainer = styled(FormWrapper)`
  font-size: 0.875rem;
`;

const OptionContainer = styled(FlexWrapper)`
  margin-top: 8px;

  &:first-child {
    margin-top: 0;
  }
`;


export default class ScheduleSelector extends Component {
  state = { checked: true }

  render() {
    return (
      <FormContainer>
        <OptionContainer>
          <StyledCheckbox checked={true} disabled={true} />
          <span>
            Schedule A: <strong>Lobbyist Disclosure.</strong> Complete this schedule by identifying each
            individual in the firm who has lobbied City Officials within the past 30 days,
            or is expected to lobby City Officials during the year.
          </span>
        </OptionContainer>
        <OptionContainer>
          <StyledCheckbox checked={true} disabled={true} />
          <span>
            Schedule B: <strong>Client disclosure</strong>. Complete this schedule by identifying
            each client for whom the firm provides lobbying services.
          </span>
        </OptionContainer>
        <OptionContainer>
          <StyledCheckbox checked={this.state.checked} id="schedule-3-selector" onChange={this.onChange} />
          <label htmlFor="schedule-3-selector">
            Schedule C: <strong>Activities Disclosure:</strong> Complete this schedule
            if you the firm or employee conducted fundraising  activities, campaign services,
            or contract services for the City within the last two years.
          </label>
        </OptionContainer>
      </FormContainer>
    );
  }

  onChange = (checked) => {
    this.setState({ checked });
  }
}
