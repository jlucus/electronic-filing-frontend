import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { ProfileFieldset } from "../../../../components/forms";
import { HomeLayout } from "../../../../components/page-layouts";
import { Col, ContentWrapper, ProfileRow, Row, Space } from "../../../../components/layout-containers";
import { ErrorMessage, NoteMessage, PageTitle } from "../../../../components/typography";
import { useAuthContext } from "../../../../components/contexts";
import { Button } from "../../../../components/buttons";
import FilerProfileBox from "../../../../components/info-boxes/FilerProfileBox";
import { CloseIconButton } from "../../../../components/icons";
import { endpoints } from "../../../../constants/endpoints";
import { DataTable } from "../../../../components/tables";


const LobbyingEntityPage = (props) => {
  const authData = useAuthContext();
  const router = useRouter();
  const lobbyingEntityId = router.query.entity;
  const [filerInfo, setFilerInfo] = useState(null);
  const [pageLoading, setPageLoading] = useState(true);
  const lobbyistHumanReadiableId = "Lobbying Firm";
  const [errorMessage, setErrorMessage] = useState("");
  const [isHelpOpened, setHelpOpened] = useState(true);

  useEffect(async() => {
    const url = endpoints.filer.profile.info;
    const resp = await authData.globalFetch(url, "get");

    if (resp.success) {
      console.log(resp.data);
      setFilerInfo(resp.data);
    } else {
      setErrorMessage("Fetch Error in User Profile");
    }
  }, []);

  const onClickHelp = () => {
    setHelpOpened(!isHelpOpened);
  };
  const onClickCloseHelp = () => {
    setHelpOpened(false);
  };


  const statusContent = (
    <DataTable
      accessors={["year", "entityType", "status", "outStandingFees"]}
      data={[
        { year: 2021, entityType: "Lobbying Firm", status: "Active", outStandingFees: "$0.00" },
      ]}
      headers={["Year", "Entity Type", "Status", "Outstanding Fees"]}
    />
  );

  const etcFilings = (
    <DataTable
      accessors={["formType", "filingType", "status", "dueDate", "id"]}
      cellRenders={[null, null, null, null, (id) => (
        <Space>
          <Button color="robin" size="small">Edit</Button>
          <Button color="robin" size="small">Discard</Button>
        </Space>
      )]}
      color="robin"
      data={[
        {
          id: "163",
          formType: "EC-603",
          filingType: "Quarterly Report, Q1/2021",
          status: "Not started",
          dueDate: "04/30/2021",
        },
      ]}
      headers={["Form", "Type", "Status", "Due", ""]}
    />
  );

  const associatedFilers = (
    <DataTable
      accessors={["formType", "filingType", "status", "dueDate", "id"]}
      cellRenders={[null, null, null, null, (id) => (
        <Space>
          <Button size="small">Retire</Button>
        </Space>
      )]}
      data={[
        {
          id: "163",
          formType: "EC-603",
          filingType: "Quarterly Report, Q1/2021",
          status: "Not started",
          dueDate: "04/30/2021",
        },
      ]}
      headers={["Form", "Type", "Status", "Due", ""]}
    />
  );

  return (
    <HomeLayout headerMenu={authData.navMenus} tabMenu={authData.tabMenus}>
      <ContentWrapper className="l-padding-hd l-padding-desktop-td l-padding-desktop-bm">
        <Row>
          <Col span={8}>
            <PageTitle
              icon={<i className="icon-screen" />} subTitle={lobbyistHumanReadiableId}
              title="Lobbying Entity Page"
            />
          </Col>
        </Row>
        <Row>
          <Col span={8}>
            <div style={ { float: "right", marginTop: -50 } }>
              <Button color={isHelpOpened ? "darkgray" : "orange"} noMargin={true} size="small" onClick={() => onClickHelp()}>
                <div style={ { width: 100 } }>
                  Help
                </div>
              </Button>
            </div>
          </Col>
        </Row>
        {
          isHelpOpened && (
            <ProfileRow>
              <Col span={8}>
                <Fieldset color="orange">
                  <legend>Help</legend>
                  <CloseIconButton color="orange" onClick={() => onClickCloseHelp()}>
                    Close <i className="icon-close" />
                  </CloseIconButton>
                </Fieldset>
              </Col>
            </ProfileRow>
          )
        }
        {filerInfo && (
          <Row>
            <Col span={8}>
              <Fieldset>
                <legend>Entity Info</legend>
                {filerInfo && (
                  <Row>
                    <Col sm={12} span={12}>
                      <FilerProfileBox profile={filerInfo} />
                    </Col>
                  </Row>
                )}
                {errorMessage && (
                  <Row>
                    <Col span={12}>
                      <ErrorMessage>{errorMessage}</ErrorMessage>
                    </Col>
                  </Row>
                )}
                <Row>
                  <Col span={12}>
                    <NoteMessage color="black">
                      Please file an EC-601 amendment to update your contact information. If your contact information
                      changed last year, you must file amendments for last year and this year.
                    </NoteMessage>
                  </Col>
                </Row>
              </Fieldset>
            </Col>
          </Row>
        )}
        <ProfileRow>
          <Col span={8}>
            <ProfileFieldset>
              <legend>Status</legend>
              {statusContent}
              <Row>
                <Col span={12}>
                  <NoteMessage color="black">
                    Please file you must amend your registration form within 10 days of any change of information.
                    This includes your contact information, and any change in your lobbying personal, and clients.
                  </NoteMessage>
                </Col>
              </Row>
            </ProfileFieldset>
          </Col>
        </ProfileRow>
        <ProfileRow>
          <Col span={8}>
            <ProfileFieldset>
              <legend>Due, Upcoming, and other Filings</legend>
              {etcFilings}
            </ProfileFieldset>
          </Col>
        </ProfileRow>
        <ProfileRow>
          <Col span={8}>
            <ProfileFieldset>
              <legend>Associated Filers</legend>
              {associatedFilers}
            </ProfileFieldset>
          </Col>
        </ProfileRow>
      </ContentWrapper>
    </HomeLayout>
  );
};

export default LobbyingEntityPage;
