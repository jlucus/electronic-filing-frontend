import React from 'react';
import styled from 'styled-components';
import { FlexWrapper } from '../layout-containers';
import { Span } from '../typography';

const Select = styled.select`
  width: 50px;
  border: 0.800000011920929px solid #a7abac;
  background: #ffffff 0% 0% no-repeat padding-box;
  border-radius: 4px;
  font-size: 0.9rem;
`;

function ResultsSelect({ pageSize, setPageSize }) {
  return (
    <div>
      <Span display="block" color="black" fontSize=".75rem">
        Results per Page
      </Span>
      <FlexWrapper justifyContent="flex-end">
        <Select
          value={pageSize}
          onChange={(e) => {
            setPageSize(Number(e.target.value));
          }}
        >
          {[10, 20, 30, 40, 50].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              {pageSize}
            </option>
          ))}
        </Select>
      </FlexWrapper>
    </div>
  );
}

export default ResultsSelect;
