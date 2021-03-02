import React from 'react';
import Moment from 'moment';
import Link from 'next/link';
import styled from 'styled-components';

import { Table, THead, THeader, TData } from './PdfViewerComponents';
import { capitalize } from '../../utils/strings';

const TableContainer = styled.div`
  height: 600px;
  margin-top: 20px;
`;

function PdfViewerMetadata({ data, metadata }) {
  const {
    filing_date,
    filing_type,
    filing_subtype,
    e_filing_id,
    all_amendments,
  } = metadata;
  const subtypeWords = filing_subtype ? filing_subtype.split(' ') : [];
  const capitalizedSubtypes = subtypeWords
    .map((word) => capitalize(word))
    .join(' ');
  return (
    <TableContainer>
      <Table>
        <THead>
          <tr>
            <THeader>Entry Properties</THeader>
            <THeader> </THeader>
          </tr>
        </THead>
        <tbody>
          <tr>
            <TData>Form</TData>
            <TData>{filing_type}</TData>
          </tr>
          <tr>
            <TData>Filing</TData>
            <TData>{capitalizedSubtypes}</TData>
          </tr>
          <tr>
            <TData>Date Filled</TData>
            <TData>{Moment(filing_date).format('MM/DD/YYYY')}</TData>
          </tr>
          <tr>
            <TData>Filing ID</TData>
            <TData>{e_filing_id || 'Not Electronically Filed'}</TData>
          </tr>
          {all_amendments &&
            all_amendments.map((amendment, index) => (
              <tr key={amendment.filing_id}>
                <TData>Amendment {all_amendments.length - index}</TData>
                <TData>
                  <a href={`/pdfview?filing_id=${amendment.filing_id}`}>
                    {amendment.e_filing_id || 'Not Electronically Filed'}
                  </a>
                </TData>
              </tr>
            ))}
        </tbody>
      </Table>
    </TableContainer>
  );
}

export default PdfViewerMetadata;
