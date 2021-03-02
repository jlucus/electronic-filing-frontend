import React from "react";
import { useRouter } from "next/router";

import { useAdminLobbyistEntityContext, withAdminLobbyistEntity } from "../../../../../components/contexts";
import { AdminLobbyistEntityLayout, Col, ProfileRow, Row, Space } from "../../../../../components/layout-containers";
import { CustomInput, ProfileFieldset } from "../../../../../components/forms";
import { DataTable } from "../../../../../components/tables";
import { Button } from "../../../../../components/buttons";


const LobbyistEntityAddFilerPage = () => {
  const router = useRouter();

  const adminLobbyistEntityContext = useAdminLobbyistEntityContext();
  const { filerInfo, lobbyistEntityId } = adminLobbyistEntityContext;

  const dataTableFilers = (
    <DataTable
      accessors={["name", "email", "eFileStatus", "id"]}
      cellRenders={[null, null, null, (id) => (
        <Space>
          <Button size="small">Activate and Add</Button>
        </Space>
      )]}
      data={[
        {
          id: "163",
          name: "Jane Doe",
          email: "ott+jane@pasaconsult.com",
          eFileStatus: "active",
        },
        {
          id: "164",
          name: "Joy Doe",
          email: "ott+jane@pasaconsult.com",
          eFileStatus: "inactive",
        },
        {
          id: "165",
          name: "Norm Doe",
          email: "ott+norm@pasaconsult.com",
          eFileStatus: "inactive",
        },
      ]}
      headers={["Name", "E-Mail", "eFile Status", ""]}
    />
  );

  const onClickAddNewFiler = () => {
    router.push({
      pathname: "/admin/filer/new-lobbyist",
      query: { "lobbying-entity-id": lobbyistEntityId },
    });
  };

  const onClickBack = () => {
    router.back();
  };

  return (
    <AdminLobbyistEntityLayout>
      <ProfileRow>
        <Col span={8}>
          <ProfileFieldset>
            <legend>Add Filer</legend>
            <Row>
              <Col sm={6} span={4}>
                <CustomInput
                  id="searchFilerKeyword"
                  label="Search existing Filers by Name"
                  name="searchFilerKeyword"
                  size="small"
                />
              </Col>
              <Col sm={6} span={8}>
                <div style={ { width: "100%" } }>
                  <Space align="end">
                    <Button size="small" onClick={() => onClickAddNewFiler()}>Add New Filer</Button>
                    <Button color="darkgray" size="small" onClick={() => onClickBack()}>Back</Button>
                  </Space>
                </div>
              </Col>
            </Row>
            {dataTableFilers}
          </ProfileFieldset>
        </Col>
      </ProfileRow>
    </AdminLobbyistEntityLayout>
  );
};

export default withAdminLobbyistEntity(LobbyistEntityAddFilerPage);
