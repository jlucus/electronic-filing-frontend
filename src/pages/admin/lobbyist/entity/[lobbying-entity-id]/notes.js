import React from "react";

import {
  useAdminLobbyistEntityContext,
  withAdminLobbyistEntity,
} from "../../../../../components/contexts";
import {
  AdminLobbyistEntityLayout,
  Card,
  Col,
  ProfileRow,
} from "../../../../../components/layout-containers";
import { ProfileFieldset } from "../../../../../components/forms";
import AttachmentBox from "../../../../../components/info-boxes/AttachmentBox";


const LobbyistEntityNotesPage = () => {

  const adminLobbyistEntityContext = useAdminLobbyistEntityContext();
  const { filerInfo, lobbyistEntityId } = adminLobbyistEntityContext;

  const attachments = [
    {
      id: 1,
      creator: {
        firstName: "Jane",
        lastName: "Doe",
        type: "admin",
      },
      created: "01/24/2020, 3:05 pm",
      note: "Phone call with Jim Halpern on 01/24/2021. Firm may be late with their Q4/2020 filing.",
    },
    {
      id: 2,
      creator: {
        firstName: "Jane",
        lastName: "Doe",
        type: "admin",
      },
      created: "01/24/2021, 3:05 pm",
      note: "Invoice for 2021 registration.",
      attachments: [
        {
          type: "pdf",
          filename: "invoice.pdf",
          size: 1023123,
        },
      ],
    },
  ];

  return (
    <AdminLobbyistEntityLayout>
      <ProfileRow>
        <Col span={8}>
          <ProfileFieldset>
            <legend>Attachments &amp; Notes</legend>
            <Card borderRadius={8} bordered={true}>
              Attachments Uploader
            </Card>
            {attachments.map((attachment) => <AttachmentBox key={attachment.id} attachment={attachment} />)}
          </ProfileFieldset>
        </Col>
      </ProfileRow>
    </AdminLobbyistEntityLayout>
  );
};

export default withAdminLobbyistEntity(LobbyistEntityNotesPage);
