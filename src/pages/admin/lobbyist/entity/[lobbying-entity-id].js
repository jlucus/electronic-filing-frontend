import React from "react";
import { useRouter } from "next/router";

import { useAdminLobbyistEntityContext, withAdminLobbyistEntity } from "../../../../components/contexts";
import { AdminLobbyistEntityLayout, Col, ProfileRow, Row, Space } from "../../../../components/layout-containers";
import FilerProfileBox from "../../../../components/info-boxes/FilerProfileBox";
import { Fieldset, ProfileFieldset } from "../../../../components/forms";
import { DataTable } from "../../../../components/tables";
import { Button } from "../../../../components/buttons";


const LobbyistEntityProfilePage = () => {
  const router = useRouter();

  const adminLobbyistEntityContext = useAdminLobbyistEntityContext();
  const { filerInfo, lobbyistEntityId } = adminLobbyistEntityContext;

  const dataTableStatus = (
    <DataTable
      accessors={["period", "entityType", "status", "outStandingFees", "id"]}
      cellRenders={[null, null, null, null, (id) => (
        <Space>
          <Button size="small">Paid</Button>
          <Button size="small">Manage</Button>
        </Space>
      )]}
      data={[
        {
          id: "163",
          period: "2021",
          entityType: "Lobbying Firm",
          status: "Active",
          outStandingFees: "$153.52",
        },
        {
          id: "164",
          period: "Q4/2020",
          entityType: "Expenditure Lobbyist",
          status: "N/A",
          outStandingFees: "N/A",
        },
      ]}
      headers={["Period", "Entity Type", "Status", "Outstanding Fees", ""]}
    />
  );

  const dataTableAssociatedFilers = (
    <DataTable
      accessors={["name", "email", "status", "id"]}
      cellRenders={[null, null, null, (id) => (
        <Space>
          <Button size="small">Retrie</Button>
        </Space>
      )]}
      data={[
        {
          id: "163",
          name: "James Halpern",
          email: "ott+jim@pasaconsult.com",
          status: "active",
        },
        {
          id: "164",
          name: "Jane Doe",
          email: "jane@acmeinfluencers.com",
          status: "active",
        },
      ]}
      headers={["Name", "E-Mail", "Status", ""]}
    />
  );

  const onClickAddAssociatedFiler = () => {
    router.push(`/admin/lobbyist/entity/${lobbyistEntityId}/add-filer`);
  };

  // Filings
  const dataTableFilings = (
    <DataTable
      accessors={["form", "type", "filingDate", "dueDate", "status", "id"]}
      cellRenders={[null, null, null, null, null, (id) => (
        <Space>
          <Button color="robin" size="small">Unredacted</Button>
          <Button color="robin" size="small">Redacted</Button>
        </Space>
      )]}
      color="robin"
      data={[
        {
          id: "601",
          form: "EC-601",
          type: "Quarterly Report Q4/2020",
          fillingDate: "01/29/2021",
          dueDate: "01/29/2021",
          status: "filed",
        },
        {
          id: "602",
          form: "EC-602",
          type: "2021 Registration Amendment",
          fillingDate: "01/29/2021",
          dueDate: "N/A",
          status: "filed, paid",
        },
        {
          id: "603",
          form: "EC-603",
          type: "2021 Registration",
          fillingDate: "01/31/2021",
          dueDate: "N/A",
          status: "filed, paid",
        },
        {
          id: "604",
          form: "EC-604",
          type: "Quarterly Report Q3/2020",
          fillingDate: "01/21/2021",
          dueDate: "10/31/2021",
          status: "filed",
        },
      ]}
      headers={["Form", "Type", "Filing Date", "Due Date", "Status", "View"]}
    />
  );

  const dataTableActivityLog = (
    <DataTable
      accessors={["dateTime", "activity", "user"]}
      color="darkgray"
      data={[
        {
          id: "163",
          dateTime: "James Halpern",
          activity: "ott+jim@pasaconsult.com",
          user: "active",
        },
        {
          id: "163",
          dateTime: "James Halpern",
          activity: "ott+jim@pasaconsult.com",
          user: "active",
        },
      ]}
      headers={["Date/Time", "Activity", "User"]}
    />
  );

  return (
    <AdminLobbyistEntityLayout>
      {filerInfo && (
        <Row>
          <Col span={10}>
            <Fieldset>
              <legend>Entity Info</legend>
              {filerInfo && (
                <Row>
                  <Col sm={12} span={12}>
                    <FilerProfileBox profile={filerInfo} />
                  </Col>
                </Row>
              )}
            </Fieldset>
          </Col>
        </Row>
      )}
      <ProfileRow>
        <Col span={10}>
          <ProfileFieldset>
            <legend>Status</legend>
            {dataTableStatus}
          </ProfileFieldset>
        </Col>
      </ProfileRow>

      <ProfileRow>
        <Col span={10}>
          <ProfileFieldset>
            <legend>Associated Filers</legend>
            <div style={ { float: "right", marginBottom: 16 } }>
              <Button size="small" onClick={() => onClickAddAssociatedFiler()}>
                <div style={ { width: 50 } }>
                  Add
                </div>
              </Button>
            </div>
            {dataTableAssociatedFilers}
          </ProfileFieldset>
        </Col>
      </ProfileRow>
      <ProfileRow>
        <Col span={10}>
          <ProfileFieldset>
            <legend>Filings</legend>
            {dataTableFilings}
          </ProfileFieldset>
        </Col>
      </ProfileRow>
      <ProfileRow>
        <Col span={10}>
          <ProfileFieldset>
            <legend>Activity Log</legend>
            {dataTableActivityLog}
          </ProfileFieldset>
        </Col>
      </ProfileRow>

    </AdminLobbyistEntityLayout>
  );
};

export default withAdminLobbyistEntity(LobbyistEntityProfilePage);
