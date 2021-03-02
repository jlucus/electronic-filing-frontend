import React from 'react';

import { HomeLayout } from '../../components/page-layouts';
import { ContentWrapper, Row, Col, Card } from '../../components/layout-containers';
import { PageTitle } from '../../components/typography';
import { useAuthContext } from '../../components/contexts';

const DashboardPage = (props) => {

  const authData = useAuthContext();

  return (
    <HomeLayout headerMenu={authData.navMenus}>
      <ContentWrapper className="l-padding-hd l-padding-desktop-td l-padding-desktop-bm">
        <Row>
          <Col span={8}>
            <PageTitle title='Lobbyist Dashboard' icon={<i className="icon-screen" />} />
          </Col>
        </Row>
        <Row>
          <Col span={8}>
            <Card bordered={true}
                  style={{ backgroundColor: 'white', textAlign: 'left', justifyContent: 'start', padding: '0.5rem' }}>
              {authData.userProfile && (<>
                You are logged in as {authData.userProfile.first_name} {authData.userProfile.last_name}({authData.userProfile.account_type});
              </>)}

            </Card>
          </Col>
        </Row>
      </ContentWrapper>
    </HomeLayout>
  );
};

export default DashboardPage;
