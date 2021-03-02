import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";

import MessageTemplateEditor from "../components/MessageTemplateEditor";
import { Input, Label } from "../components/forms";
import { HomeLayout } from "../components/page-layouts";
import { Row, Col, ContentWrapper } from "../components/layout-containers";
import { Button } from "../components/buttons";
import { PageTitle } from "../components/typography";


const Wrapper = styled(ContentWrapper)`
  border: 0.125rem solid ${(props) => props.theme.primaryColor};
`;

const TemplateCommonTitle = styled.h2`
  font-size: 1.125rem;
  margin: 0.5rem 0;
`;

const TemplateSubtitle = styled(TemplateCommonTitle)`
  font-size: 1.25rem;
`;

const TemplateConfigTitle = styled(TemplateCommonTitle)`
  font-weight: bold;
`;

const RowSubtitle = styled(Row)`
  border-top: 0.125rem solid ${(props) => props.theme.separateLineColor};
`;

const Textarea = styled.textarea`
  display: block;
  width: 100%;
  border: 1px solid gray;
  font-size: 1rem;
  margin: 0.25rem 0;
  height: 3rem;
  border-radius: 0.25rem;
  color: ${(props) => props.theme.inputTextColor};
  background-color: ${(props) => props.theme.inputBgColor};
`;

const RowEditor = styled(Row)`
  padding: 1rem 0;
  background-color: ${(props) => props.theme.templateConfigureBgColor};
  margin: 1rem 0;
`;

const TemplateListRow = styled(Row)`
  background-color: ${(props) => props.theme.primaryBgColor};
  height: 100%;
  & > div {
    padding: 1rem 0.25rem;
  }
`;


const headerMenus = [
  {
    id: 1,
    title: "Admin Dashboard",
    link: "/admin",
  },
  {
    id: 2,
    title: "Filings Dashboard",
    link: "/admin",
  },
  {
    id: 3,
    title: "Analytics Dashboard",
    link: "/admin",
  },
  {
    id: 4,
    title: "Manage Filers",
    link: "/admin",
  },
  {
    id: 5,
    title: "Manage Master Data",
    link: "/admin",
  },
  {
    id: 6,
    title: "Manage Templates",
    link: "/admin",
  },
  {
    id: 7,
    title: "Manage Admin Users",
    link: "/admin",
  },
];
function TemplateEditor() {
  const [editorHeight, setEditorHeight] = useState(0);
  const editorColRef = useRef(null);

  useEffect(() => {
    if (editorColRef.current) {
      console.log("client height", editorColRef.current.clientHeight);
      setEditorHeight(editorColRef.current.clientHeight);
    }
  }, [editorColRef]);

  return (
    <HomeLayout tabMenu={headerMenus}>
      <Wrapper className="l-padding-hd l-padding-desktop-td l-padding-desktop-bm">
        <Row>
          <Col ref={editorColRef} noGutter={true} sm={12} span={9}>
            <Row>
              <Col span={12}>
                <PageTitle icon={<i className="icon-paper-plane" />} title="Template Letter Manager" />
              </Col>
            </Row>
            <RowSubtitle>
              <Col span={12}>
                <TemplateSubtitle>Template Editor</TemplateSubtitle>
              </Col>
            </RowSubtitle>
            <RowEditor gutter={16}>
              <Col span={12}>
                <TemplateConfigTitle>Template Configuration</TemplateConfigTitle>
              </Col>
              <Col span={12}>
                <Label>Title</Label>
                <Input placeholder="Title" type="text" />
              </Col>
              <Col span={12}>
                <Label>Email Subject</Label>
                <Input placeholder="Email Subject" type="text" />
              </Col>
              <Col span={12}>
                <Label>Description</Label>
                <Textarea />
              </Col>
            </RowEditor>
            <Row gutter={8}>
              <MessageTemplateEditor />
            </Row>
            <Row gutter={16}>
              <Col span={2}>
                <Button block={true} color="secondary">Cancel</Button>
              </Col>
              <Col span={2}>
                <Button block={true}>Save</Button>
              </Col>
            </Row>
          </Col>
          {/* <Col span={3} sm={12} noGutter> */}
          {/*  <TemplateListRow style={{ height: editorHeight }}> */}
          {/*    <Col span={12}> */}
          {/*      <Button title="Admin Dashboard" /> */}
          {/*    </Col> */}
          {/*    <Col span={12}> */}
          {/*      <Button primary title="Filings Dashboard" /> */}
          {/*    </Col> */}
          {/*    <Col span={12}> */}
          {/*      <Button danger title="Analytics" /> */}
          {/*    </Col> */}
          {/*    <Col span={12}> */}
          {/*      <Button secondary title="Manage Filers" /> */}
          {/*    </Col> */}
          {/*  </TemplateListRow> */}
          {/* </Col> */}
        </Row>
      </Wrapper>
    </HomeLayout>
  );
}

export default TemplateEditor;
