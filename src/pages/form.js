import React, { Component } from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";

import { AuthContext } from "../components/contexts/AuthProvider";
import HomeLayout from "../components/page-layouts/HomeLayout";
import {
  LobbyingFirmForm,
  ScheduleSelector,
  LobbyistDisclosure,
  SectionTitle,
} from "../components/forms/600/";
import { ContentWrapper, FlexWrapper } from "../components/layout-containers";
import { PageTitle } from "../components/typography";
import { Button } from "../components/buttons";


const Subtitle = styled.span`
  font-family: "Open Sans",serif;
  font-weight: normal;
  font-size: 1.25rem;
  display: block;
  margin-top: 6px;
`;

const MainContainer = styled(FlexWrapper)`
  width: 100%;
  max-width: 900px;
  flex-direction: column;
  padding: 0 50px;
`;

const Title = styled(PageTitle)`
  margin-bottom: 0;
`;

const BackButtonContainer = styled(FlexWrapper)`
  margin-bottom: 26px;
  margin-top: -4rem;
`;

const Note = styled.p`
  font-size: 0.875rem;
`;

export default class EC601Form extends Component {
  static contextType = AuthContext;

  state = { data: undefined };

  componentDidMount() {
    this.getFilingFromServer();
  }

  render() {
    const { data } = this.state;
    if (!data) {
      return null;
    }

    const personEntities = data.directory.entity.filter((item) => !!item.individual);
    const lobbyists = data["schedule_a"];
    const scheduleAComment = data.comments["schedule_a"];

    return (
      <HomeLayout footer={true}>
        <ContentWrapper>
          <MainContainer>
            <Title
              align="start"
              icon={<i className="icon-file-empty" />}
              title={this.renderPageTitle()}
            />
            <BackButtonContainer justifyContent="flex-end">
              <Button size="small">Back to Filer Portal</Button>
            </BackButtonContainer>
            <Note>
              Note: Per San Diego Municipal Code §27.4012: Amendments to Registration Form, you are required
              to file an <strong>amendment within ten calendar</strong> days when information on a
              previously filed Registration Form has changed (e.g. the firm changes its name, address,
              contact information, adds/removes a new client or lobbyist or adds a new municipal decision.)
            </Note>
            <LobbyingFirmForm
              value={this.state.data["lobbying_entity_contact_info"]}
              onChange={this.onLobbyingFirmChange}
            />
            <SectionTitle>
              <strong>DISCLOSURE SCHEDULES</strong>
            </SectionTitle>
            <ScheduleSelector />
            <SectionTitle>
              <strong>SCHEDULE A:</strong> Lobbyist Disclosure
            </SectionTitle>
            <LobbyistDisclosure
              comment={scheduleAComment}
              entities={personEntities}
              lobbyists={lobbyists}
              onAdd={this.onAddLobbyistScheduleA}
              onCommentChange={this.onChangeScheduleAComment}
              onDelete={this.onDeleteFromScheduleA}
            />
            <SectionTitle>
              <strong>SCHEDULE B:</strong> Client Disclosure
            </SectionTitle>
          </MainContainer>
        </ContentWrapper>
      </HomeLayout>
    );
  }

  renderPageTitle = () => (
    <>
      Form EC-601
      <br />
      Lobying Firm Registration
      <br />
      <Subtitle>
        Calendar Year:
        {" "}
        {new Date().getFullYear()}
      </Subtitle>
    </>
  )

  onLobbyingFirmChange = (value) => {
    const { data } = this.state;
    const newData = {
      ...data,
      "lobbying_entity_contact_info": value,
    };

    this.setState({ data: newData });
  }

  onAddLobbyistScheduleA = (entity) => {
    const { data } = this.state;
    const newData = { ...data };

    const lobbyist = {};

    if (entity.id) {
      const existing = data.directory.entity.findIndex((e) => e.id === entity.id);
      if (existing === -1) {
        newData.directory.entity.push(entity);
      } else {
        newData.directory.entity[existing] = {
          ...newData.directory.entity[existing],
          ...entity,
        };
      }

      lobbyist["lobbyist_entity_id"] = entity.id;
    } else {
      const newEntity = {
        ...entity,
        id: uuidv4(),
        individual: true,
      };
      newData.directory.entity.push(newEntity);
      lobbyist["lobbyist_entity_id"] = newEntity.id;
    }

    const e = newData["schedule_a"].find((l) => lobbyist["lobbyist_entity_id"] === l["lobbyist_entity_id"]);
    if (!e) {
      lobbyist.ordinal = newData["schedule_a"].length;
      newData["schedule_a"].push(lobbyist);
    }

    this.setState({ data: newData });
  }

  onDeleteFromScheduleA = (index) => {
    const { data } = this.state;
    const newData = { ...data };
    newData["schedule_a"].splice(index, 1);
    newData["schedule_a"] = newData["schedule_a"].map((item, offset) => {
      return {
        ...item,
        ordinal: offset,
      };
    });

    this.setState({ data: newData });
  }

  onChangeScheduleAComment = (value) => {
    const { data } = this.state;
    const newData = { ...data };

    newData.comments["schedule_a"] = value;

    this.setState({ data: newData });
  }

  getFilingFromServer = async() => {
    const url = "/filer/lobbyist/filing/ec601/bf0a39f9-5b61-4230-b64f-56974a2ce61d";
    const response = await this.context.globalFetch(url, "get");
    const { data = {} } = response;
    this.setState({ data });
  }
}
