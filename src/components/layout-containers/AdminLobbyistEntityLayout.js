import React from "react";

import { HomeLayout } from "../page-layouts";
import { Col, ContentWrapper, Row } from "../layout-containers";
import { PageTitle } from "../typography";
import { useAuthContext, useAdminLobbyistEntityContext } from "../contexts";


const AdminLobbyistEntityLayout = (props) => {
  const {
    children,
    ...rest
  } = props;
  const authData = useAuthContext();
  const adminLobbyistEntityContext = useAdminLobbyistEntityContext();

  return (
    <HomeLayout headerMenu={authData.navMenus} tabMenu={authData.tabMenus}>
      <ContentWrapper className="l-padding-hd l-padding-desktop-td l-padding-desktop-bm">
        <Row>
          <Col span={8}>
            <PageTitle
              icon={<i className="icon-screen" />}
              subTitle="Lobbying Firm, Expenditure Lobbyist"
              title="ACME Influencers Inc."
            />
          </Col>
        </Row>
        {children}
      </ContentWrapper>
    </HomeLayout>
  );
};

export default AdminLobbyistEntityLayout;
