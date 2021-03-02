import React from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Moment from 'moment';
import { Heading2, Heading3 } from '../typography';
import { BlockContainer, Nav } from './PdfViewerComponents';
import { FlexWrapper } from '../layout-containers';
import { Button } from '../buttons';
import { Circle } from '../icons';

const CustomNav = styled(Nav)`
  & > a:nth-child(2) {
    margin-right: 0;
  }

  @media screen and (max-width: 47.99em) {
    justify-content: left;

    & > a {
      margin: 0 1em 10px 0;
    }
  }
`;

function PdfViewerHeading({
  data,
  metadata,
  showMetadata,
  setShowMetadata,
  query,
  start_date,
  end_date,
}) {
  const router = useRouter();
  const { filing_date, filing_type, name, filing_description } = metadata;
  const filing_formatted_date = Moment(filing_date).format('YYYY');

  return (
    <>
      <Nav borderBottom={'2'} justifyContent="space-between">
        <FlexWrapper display="flex">
          <FlexWrapper padding="0 10px 0 0">
            <i className="icon-file-empty icon--xl icon--circle background--cerulean" />
          </FlexWrapper>
          <BlockContainer>
            <Heading2 margin="0">{name}</Heading2>
            <Heading3 margin="0">
              {filing_description}, Year: {filing_formatted_date}
            </Heading3>
          </BlockContainer>
        </FlexWrapper>
        <CustomNav
          justifyContent="flex-end"
          borderBottom={'2'}
          padding="4px 0 4px 4px"
        >
          <Button
            color="primary"
            size="large"
            onClick={() =>
              router.push(
                `/public/search?query=${query || ''}&start_date=${
                  start_date || new Date(new Date().getFullYear(), 0, 1)
                }&end_date=${end_date || new Date()}`
              )
            }
          >
            Back to Results
          </Button>
          <Button
            color="robin"
            size="large"
            onClick={() => setShowMetadata(!showMetadata)}
          >
            {showMetadata ? 'Close Metadata' : 'View Metadata'}
          </Button>
        </CustomNav>
      </Nav>
    </>
  );
}

PdfViewerHeading.propTypes = {
  setShowMetadata: PropTypes.func.isRequired,
  showMetadata: PropTypes.bool.isRequired,
};

export default PdfViewerHeading;
