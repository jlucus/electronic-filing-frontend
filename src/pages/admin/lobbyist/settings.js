import React from 'react';

import { HomeLayout } from '../../../components/page-layouts';
import {
  ContentWrapper, Row, Col,
} from '../../../components/layout-containers';
import { PageTitle } from '../../../components/typography';
import { useAuthContext } from '../../../components/contexts';

const LobbyistSettingsPage = (props) => {
  const authData = useAuthContext();

  return (
    <HomeLayout headerMenu={authData.navMenus}>
      <ContentWrapper className="l-padding-hd l-padding-desktop-td l-padding-desktop-bm">
        <Row>
          <Col span={8}>
            <PageTitle title='Lobbyist Settings' icon={<i className="icon-database" />} />
          </Col>
        </Row>
        <Row>
          <Col span={8}>

          </Col>
        </Row>
      </ContentWrapper>
    </HomeLayout>
  );
};

export default LobbyistSettingsPage;
