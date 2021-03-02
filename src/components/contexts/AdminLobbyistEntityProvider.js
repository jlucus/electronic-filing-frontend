import React, { createContext, useContext, useEffect, useState } from "react";

import { adminLobbyingEntityNavMenus } from "../../constants/navMenus";


export const AdminLobbyistEntityContext = createContext();

const initialState = {};

export const AdminLobbyistEntityProvider = ({ children }) => {
  const [state, setState] = useState(initialState);
  const [filerInfo, setFilerInfo] = useState(null);
  const lobbyistEntityId = "1";

  useEffect(() => {
    setFilerInfo({
      "filer_id": "7fe7d659-dd22-4bac-96f8-506459c92743",
      "contact_info": {
        "last_name": "Halpern",
        "address1": null,
        "address2": null,
        "zipcode": null,
        "country": "US",
        "email": null,
        "hide_details": true,
        "first_name": "James",
        "middle_name": null,
        "city": null,
        "state": null,
        "phone": null,
        "effective_date": "2021-02-08",
      },
      "email": "ott+jim@pasaconsult.com",
      "filer_types": [{ "key": "lobbyist", "value": "Lobbyist" }],
      "entities": [{
        "name": "Acme Influencers Inc.",
        "entity_type": "Lobbying Firm",
        "entity_id": "45352737-d6f5-4f4f-bce7-c9116e0879b7",
        "role": "Filer",
        "active": true,
        "url": "/filer/lobbyist/entity/45352737-d6f5-4f4f-bce7-c9116e0879b7",
      }, {
        "name": "Blah Influencers Inc.",
        "entity_type": "Lobbying Firm",
        "entity_id": "35352737-d6f5-4f4f-bce7-c9116e0879b7",
        "role": "Filer",
        "active": true,
        "url": "/filer/lobbyist/entity/35352737-d6f5-4f4f-bce7-c9116e0879b7",
      }],
    });
  }, []);

  return (
    <AdminLobbyistEntityContext.Provider
      value={ {
        state,
        navMenus: adminLobbyingEntityNavMenus,
        filerInfo,
        lobbyistEntityId,
      } }
    >
      {children}
    </AdminLobbyistEntityContext.Provider>
  );
};

export default (App) => {
  function AdminLobbyistEntityWrapper({ initialProps, ...props }) {
    const app = <App {...props} {...initialProps} />;

    return (<AdminLobbyistEntityProvider>
      {app}
    </AdminLobbyistEntityProvider>);
  }

  return AdminLobbyistEntityWrapper;
};

export const useAdminLobbyistEntityContext = () => useContext(AdminLobbyistEntityContext);
