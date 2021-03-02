import React, { useEffect, useState, useRef } from 'react';
import { useRouter } from 'next/router';
import { HomeLayout } from '../../components/page-layouts';
import {
  Row, Col, ContentWrapper, Card,
} from '../../components/layout-containers';
import { PageTitle } from '../../components/typography';
import { Button } from '../../components/buttons';
import { useAuthContext } from '../../components/contexts';
import { Avatar } from '../../components/icons';

import { endpoints } from '../../constants/endpoints';

const WelcomePage = ({ redirect }) => {
  const router = useRouter();
  const authData = useAuthContext();

  const onClickDefaultLogin = async (e) => {
    e.preventDefault();
  };

  const onClickOtherLogin = (e) => {
    e.preventDefault();
    router.push(`/auth/filer/local?redirect=${encodeURI(redirect)}`);
  };

  return (
    <HomeLayout>
      <ContentWrapper className="l-padding-hd l-padding-desktop-td l-padding-desktop-bm">

        <Row>
          <Col span={12}>
            <PageTitle title="Filer Login" icon={<i className="icon-lock" />} />
          </Col>
        </Row>
        <Row>
          <Col span={12}>
            <Card bordered={false}>
              <Button
                size="extra"
                color="robin"
                icon={(
                  <Avatar size="large" color="robin">
                    <i className="icon-man2" />
                  </Avatar>
                )}
                rightIcon={<i className="icon-chevron-right" />}
                onClick={onClickDefaultLogin}
              >
                <div style={{ fontSize: 14, textAlign: 'left', width: '10rem' }}>
                  City Users
                  <br />
                  (@sandiego.gov)
                </div>
              </Button>
              <Button
                size="extra"
                icon={(
                  <Avatar size="large">
                    <i className="icon-man2" />
                  </Avatar>
                )}
                rightIcon={<i className="icon-chevron-right" />}
                onClick={onClickOtherLogin}
              >
                <div style={{ fontSize: 14, textAlign: 'left', width: '10rem' }}>
                  Other Users
                </div>
              </Button>
            </Card>
          </Col>
        </Row>
      </ContentWrapper>
    </HomeLayout>
  );
};

export const getServerSideProps = async (context) => ({
  props: {
    redirect: context.query.redirect || '',
  },
});

export default WelcomePage;
