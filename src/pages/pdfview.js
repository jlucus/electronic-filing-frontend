import React, { useContext, useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import Head from "next/head";
import useSWR from "swr";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { endpoints } from "../constants/endpoints";
import { useAuthContext } from "../components/contexts/AuthProvider";
import { GlobalStyle } from "../styles/globalStyles";
import { Header, Footer, HomeLayout } from "../components/page-layouts";
import {
  MainWrapper,
  MainContent,
  Wrapper,
} from "../components/layout-containers";

const PdfViewerNoSSR = dynamic(() => import("../components/PdfViewer"), {
  ssr: false,
});

function PdfView({
  filing_id,
  doc_public,
  query,
  start_date,
  end_date,
  textonly,
}) {
  const authData = useAuthContext();
  const fetcher = (url) =>
    authData.noAuthFetch(url, "get", null, {
      filing_id,
      doc_id: doc_public,
    });
  const { data: response_url, error: error_url } = useSWR(
    endpoints.public.getDocUrl,
    fetcher
  );
  const { data: response_metadata, error: error_metadata } = useSWR(
    endpoints.public.getDocMetadata,
    fetcher
  );

  if (!response_url || !response_metadata)
    return <Loader color="#078dd3" height={30} type="Bars" width="100%" />;

  if (
    !(
      response_url.success &&
      response_url.data &&
      response_metadata.success &&
      response_metadata.data
    )
  ) {
    return <h1>Error fetching data</h1>;
  }

  return (
    <div>
      <Head>
        <title>City of San Diego Official Website</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GlobalStyle />
      <Header />
      <MainWrapper>
        <MainContent>
          <PdfViewerNoSSR
            data={response_url.data}
            metadata={response_metadata.data}
            query={query}
            start_date={start_date}
            end_date={end_date}
            textonly={textonly}
          />
        </MainContent>
      </MainWrapper>
      <div />
    </div>
  );
}

PdfView.getInitialProps = ({
  query: {
    filing_id,
    doc_public,
    query,
    start_date,
    end_date,
    filer,
    filing_date,
    textonly,
  },
}) => ({
  filing_id,
  doc_public,
  query,
  start_date,
  end_date,
  textonly,
});

export default PdfView;
