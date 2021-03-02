import React from 'react';
import HomeLayout from '../components/page-layouts/HomeLayout';
import {
  Row,
  Col,
  BlockArticle,
  ContentWrapper,
  MainTitle,
  NoWrapSpan, Space,
} from '../components/layout-containers';
import { Button } from '../components/buttons';
import Avatar from '../components/icons/Avatar';

const ExamplePage = (props) => (
    <HomeLayout footer>
      <ContentWrapper className="l-padding-hd l-padding-desktop-td l-padding-desktop-bm">
        <Row>
          <Col>
            <h1>Button Usage:</h1>
          </Col>
        </Row>
        <Row>
          <Col span={2}>
            <Button>My button</Button>
          </Col>
          <Col span={2}>
            <Button size="small" color="secondary">My button</Button>
          </Col>
          <Col span={2}>
            <Button size="large" color="robin" shadow>My button</Button>
          </Col>
          <Col span={2}>
            <Button
              loading={true}
              color="primary"
              rightIcon={<i className="icon-chevron-right" />}
            >
              My button
            </Button>
          </Col>
          <Col span={2}>
            <Button
              size="extra"
              color="primary"
              shadow
              icon={<Avatar size="large"><i className="icon-man2" /></Avatar>}
              rightIcon={<i className="icon-chevron-right" />}
            >
              My button
            </Button>
          </Col>
          <Col span={2}>
            <Button
              size="extra"
              color="robin"
              icon={
                <Avatar size="large" color="robin">
                  <i className="icon-man2" />
                </Avatar>}
              rightIcon={<i className="icon-chevron-right" />}
            >
              My button
            </Button>
          </Col>
          <Col span={6}>
            <Button
              size="extra"
              color="primary"
              icon={
                <Avatar size="large">
                  <i className="icon-man2" />
                </Avatar>}
              rightIcon={<i className="icon-chevron-right" />}
            >
              <div style={{ fontSize: 14, textAlign: 'left', width: '10rem' }}>
                City Users
                <br />
                (@sandiego.gov)
              </div>
            </Button>
          </Col>
          <Col span={4}>
            <Button
              size="large"
            >
              My button
            </Button>
          </Col>
        </Row>
        <Row>
          <Col span={4}>
            <Button
              size="extra"
            >
              My button
            </Button>
          </Col>
        </Row>
        <Row>
          <Col span={12}>
            <Button block={true}>Submit</Button>
          </Col>
        </Row>
        <Row>
          <Col span={12}>
            <Button size="large" color="secondary" rightIcon={<i className="icon-chevron-right" />}>Submit</Button>
          </Col>
        </Row>
      </ContentWrapper>
    </HomeLayout>
  );

export default ExamplePage;
