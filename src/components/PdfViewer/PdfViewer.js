import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import { InView } from "react-intersection-observer";
import ScrollContainer from "react-indiana-drag-scroll";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import PdfViewerNav from "./PdfViewerNav";
import { PageContainer } from "./PdfViewerComponents";
import PdfViewerMetadata from "./PdfViewerMetadata";
import PdfViewerHeading from "./PdfViewerHeading";
import PdfViewerText from "./PdfViewerText";

const CustomPage = styled(Page)`
  width: ${(props) => props.w || null}px;
  height: ${(props) => props.h || null}px;
`;

function PdfViewer({ data, metadata, query, start_date, end_date, textonly }) {
  const [numPages, setNumPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [scale, setScale] = useState(1);
  const [rotation, setRotation] = useState(0);
  const [file, setFile] = useState(data.url);
  const [showMetadata, setShowMetadata] = useState(false);
  const [sizeSelect, setSizeSelect] = useState("fw");
  const refs = useRef([]);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setCurrentPage(1);
  }

  function changeScale(offset) {
    setScale((prevScale) => prevScale + offset);
  }

  function changeRotation() {
    if (rotation === 270) {
      setRotation(0);
    } else {
      setRotation((prevRotation) => prevRotation + 90);
    }
  }

  function createPages() {
    let margin = 0;
    if (scale < 0.9 && scale >= 0.8) {
      margin += 1;
    } else if (scale < 0.5) {
      margin += 6;
    } else if (scale <= 0.8) {
      margin += 4;
    } else if (scale > 1.2) {
      margin -= 1;
    }

    const arr = Array.from(new Array(numPages), (el, index) => (
      <InView
        as="div"
        key={`page_${index + 1}`}
        onChange={(inView) => {
          if (inView) {
            setCurrentPage(index + 1);
          }
        }}
        ref={(el) => (refs.current[index] = el)}
      >
        <CustomPage
          className="pdf-page"
          pageNumber={index + 1}
          scale={scale}
          w={(1137 + 8) * scale + margin} // need to scale inner and outer widths
          width={1110}
          renderMode="canvas"
        />
      </InView>
    ));

    return arr;
  }

  if (showMetadata) {
    return (
      <PageContainer>
        <PdfViewerHeading
          data={data}
          metadata={metadata}
          setShowMetadata={setShowMetadata}
          showMetadata={showMetadata}
          query={query}
          start_date={start_date}
          end_date={end_date}
        />
        <PdfViewerMetadata data={data} metadata={metadata} />
      </PageContainer>
    );
  }

  if (textonly) {
    return (
      <PageContainer>
        <PdfViewerHeading
          data={data}
          metadata={metadata}
          setShowMetadata={setShowMetadata}
          showMetadata={showMetadata}
          query={query}
          start_date={start_date}
          end_date={end_date}
        />
        <PdfViewerText />
      </PageContainer>
    );
  }

  return (
    <PageContainer>
      <PdfViewerHeading
        data={data}
        metadata={metadata}
        setShowMetadata={setShowMetadata}
        showMetadata={showMetadata}
        query={query}
        start_date={start_date}
        end_date={end_date}
      />
      <PdfViewerNav
        url={data.url}
        changeScale={changeScale}
        scale={scale}
        setScale={setScale}
        setCurrentPage={setCurrentPage}
        changeRotation={changeRotation}
        currentPage={currentPage}
        totalPages={numPages}
        setFile={setFile}
        sizeSelect={sizeSelect}
        setSizeSelect={setSizeSelect}
        ref={refs}
      />
      <Document
        file={file}
        loading={
          <Loader color="#078dd3" height={30} type="Bars" width="100%" />
        }
        onLoadSuccess={onDocumentLoadSuccess}
        className="pdf-container"
        rotate={rotation}
      >
        <ScrollContainer
          vertical
          horizontal
          hideScrollbars={false}
          className="scroll-container"
        >
          {createPages()}
        </ScrollContainer>
      </Document>
    </PageContainer>
  );
}

export default PdfViewer;
