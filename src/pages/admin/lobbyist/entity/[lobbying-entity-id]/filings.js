import React from "react";
import { useRouter } from "next/router";

import { HomeLayout } from "../../../../../components/page-layouts";
import { ContentWrapper, Row, Col, Card } from "../../../../../components/layout-containers";
import { PageTitle } from "../../../../../components/typography";
import { useAuthContext } from "../../../../../components/contexts";


const LobbyingEntityFilingPage = (props) => {
  const authData = useAuthContext();
  const router = useRouter();
  const lobbyingEntityId = router.query["lobbying-entity-id"];

  return (
    <HomeLayout headerMenu={authData.navMenus} tabMenu={authData.tabMenus}>
      <ContentWrapper className="l-padding-hd l-padding-desktop-td l-padding-desktop-bm">
        <Row>
          <Col span={8}>
            <PageTitle icon={<i className="icon-screen" />} title="Lobbying Entity Filing Page" />
          </Col>
        </Row>
        <Row>
          <Col span={8}>
            Entity ID : {lobbyingEntityId}
          </Col>
        </Row>
      </ContentWrapper>
    </HomeLayout>
  );
};

export default LobbyingEntityFilingPage;
