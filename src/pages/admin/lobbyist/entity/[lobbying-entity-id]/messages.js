import React from "react";

import { useAdminLobbyistEntityContext, withAdminLobbyistEntity } from "../../../../../components/contexts";
import { AdminLobbyistEntityLayout } from "../../../../../components/layout-containers";


const LobbyistEntityMessagesPage = () => {

  const adminLobbyistEntityContext = useAdminLobbyistEntityContext();
  const { filerInfo, lobbyistEntityId } = adminLobbyistEntityContext;

  return (
    <AdminLobbyistEntityLayout>
      <h1>No Implemented</h1>
    </AdminLobbyistEntityLayout>
  );
};

export default withAdminLobbyistEntity(LobbyistEntityMessagesPage);
