import React, { useContext, useEffect, useState } from "react";
import styled, { ThemeContext } from "styled-components";
import Moment from "moment";
import dynamic from "next/dynamic";
import Loader from "react-loader-spinner";

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { HomeLayout } from "../../components/page-layouts";
import {
  Row,
  Col,
  Card,
  Wrapper,
  FormWrapper,
  FlexWrapper,
} from "../../components/layout-containers";
import { PublicSearchForm, Fieldset } from "../../components/forms";
import { PageTitle, Heading3, Span } from "../../components/typography";
import { SearchResultStyles } from "../../components/tables";
import { useAuthContext } from "../../components/contexts";
import { Button } from "../../components/buttons";
import { endpoints } from "../../constants/endpoints";
import { sampleData } from "../../components/tables/sampleData";


const DataTable = dynamic(
  () => import("../../components/tables/DataTable/DataTable"),
  { ssr: false }
);

const headerMenus = [
  {
    id: 1,
    title: "Search by Name",
    link: "/",
    selected: true,
  },
  {
    id: 2,
    title: "Lobbyist Disclosures",
    link: "/",
  },
  {
    id: 3,
    title: "Campaign Disclosures",
    link: "/",
  },
  {
    id: 4,
    title: "Statements of Economic Interests",
    link: "/",
  },
];

const tabMenuStyles = {
  fontSize: "1rem;",
  padding: "1rem 1.25rem",
};

function SearchPage({ query, start_date, end_date }) {
  const [showHelp, setShowHelp] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState(null);

  let content = (
    <FlexWrapper alignItems="center" display="flex" justifyContent="center">
      <Heading3>No search results found.</Heading3>
    </FlexWrapper>
  );

  if (isLoading) {
    content = <Loader color="#078dd3" height={30} type="Bars" width="100%" />;
  }

  if (results) {
    content = (
      <>
        <DataTable
          Styles={SearchResultStyles}
          accessors={[
            "filing_date",
            "filer",
            "filing_type",
            "description",
            "access",
          ]}
          data={results}
          headers={[
            "Filing Date",
            "Filer/Organization",
            "Filing Type",
            "Description",
            "Access",
          ]}
          pagination={true}
        />
      </>
    );
  }

  return (
    <HomeLayout tabMenu={headerMenus} tabMenuStyles={tabMenuStyles}>
      <Wrapper height="auto">
        <Row>
          <Col span={12}>
            <FlexWrapper alignItems="center" justifyContent="space-between">
              <PageTitle
                icon={<i className="icon-users2" />}
                title="Search All Filings"
              />
              <Button color="primary">Back to eFile Home</Button>
            </FlexWrapper>
          </Col>
        </Row>
        <Row margin="2rem 0">
          <Col span={12}>
            <PublicSearchForm
              end_date={end_date}
              query={query}
              setIsLoading={setIsLoading}
              setResults={setResults}
              start_date={start_date}
            />
          </Col>
        </Row>
        <Row>
          <Col span={12}>
            <FlexWrapper display="flex" justifyContent="flex-end">
              <Button
                justifyContent="space-between"
                padding="0 1rem"
                rightIcon={<i className="icon-chevron-down" />}
                size="small"
              >
                Export
              </Button>
              <Button
                color="secondary"
                padding="0 2rem"
                size="small"
                onClick={() => setShowHelp(!showHelp)}
              >
                Help
              </Button>
            </FlexWrapper>
          </Col>
        </Row>
        {showHelp && (
          <Row margin="2rem 0">
            <Col span={12}>
              <Fieldset borderColor="#FFA02F" padding=".5rem .5rem 0 .5rem">
                <FlexWrapper
                  alignItems="center"
                  display="flex"
                  justifyContent="space-between"
                >
                  <Span color="#FFA02F">Help on Search</Span>
                  <FlexWrapper
                    alignItems="center"
                    cursor="pointer"
                    display="flex"
                    onClick={() => setShowHelp(!showHelp)}
                  >
                    <Span color="#FFA02F" padding="0 5px 0 0">
                      Close
                    </Span>
                    <i className="icon-close" style={ { color: "#FFA02F" } } />
                  </FlexWrapper>
                </FlexWrapper>
                <p>Content ...</p>
              </Fieldset>
            </Col>
          </Row>
        )}
        <Row margin="2rem 0">
          <Col span={12}>
            <Fieldset padding=".5rem .5rem 0 .5rem">
              <legend>Search Results</legend>
              {content}
            </Fieldset>
          </Col>
        </Row>
      </Wrapper>
    </HomeLayout>
  );
}

SearchPage.getInitialProps = ({ query: { query, start_date, end_date } }) => {
  return {
    query,
    start_date,
    end_date,
  };
};

export default SearchPage;
