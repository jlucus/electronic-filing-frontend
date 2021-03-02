import React from 'react';
import { useRouter } from 'next/router';

import { HomeLayout } from '../../../components/page-layouts';
import {
  ContentWrapper, Row, Col,
} from '../../../components/layout-containers';
import { PageTitle } from '../../../components/typography';
import { useAuthContext } from '../../../components/contexts';

const ProfileEditPage = (props) => {
  const authData = useAuthContext();

  return (
    <HomeLayout headerMenu={authData.navMenus} tabMenu={authData.tabMenus}>
      <ContentWrapper className="l-padding-hd l-padding-desktop-td l-padding-desktop-bm">
        <Row>
          <Col span={8}>
            <PageTitle title="Profile Edit" icon={<i className="icon-screen" />} />
          </Col>
        </Row>
        <Row>
          <Col span={8}>
            Edit Form
          </Col>
        </Row>
      </ContentWrapper>
    </HomeLayout>
  );
};

export default ProfileEditPage;
