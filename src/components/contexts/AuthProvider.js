import React, { useContext, useEffect, useState, createContext } from "react";
import Axios from "axios";
import { Promise } from "es6-promise";
import { useRouter } from "next/router";
import Loader from "react-loader-spinner";
import { useCookie } from "next-cookie";

import { endpoints } from "../../constants/endpoints";
import { adminNavMenus, filerNavMenus } from "../../constants/navMenus";

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";


export const AuthContext = createContext();

const initialState = { token: null };

const axios = Axios.create({ baseURL: process.env.NEXT_PUBLIC_EFILE_API_URL });

const noAuthAxios = Axios.create({ baseURL: process.env.NEXT_PUBLIC_EFILE_API_URL });

const AuthProvider = ({ children }) => {
  const [state, setState] = useState(initialState);

  const [isUserLoading, setUserLoading] = useState(false);
  const [isAuthenticated, setAuthenticated] = useState(null);
  const [navMenus, setNavMenus] = useState(null);
  const [tabMenus, setTabMenus] = useState(null);

  const cookie = useCookie();

  axios.interceptors.response.use(
    (response) => response,
    (error) => {
      // Handle Network error
      if (error.message) {
        Promise.reject(error);
      }

      // Return any error which is not due to authentication
      if (error.response.status !== 401) {
        return new Promise((resolve, reject) => {
          reject(error);
        });
      }

      // Refresh token didn't work
      if (
        [
          endpoints.auth.refreshCookie,
          endpoints.auth.loginAdmin,
          endpoints.auth.loginFiler,
        ].includes(error.config.url)
      ) {
        return new Promise((resolve, reject) => {
          reject(error);
        });
      }

      // Try request again with new token
      return axios.
        get(endpoints.auth.refreshCookie, { withCredentials: true }).
        then((response) => {
          const { config } = error;
          const { data } = response;
          const { access_token } = data;
          config.headers.Authorization = `Bearer ${access_token}`;
          setState({ token: access_token });

          return new Promise((resolve, reject) => {
            axios.
              request(config).
              then((response) => {
                resolve(response);
              }).
              catch((error) => {
                reject(error);
              });
          });
        }).
        catch((error) => {
          Promise.reject(error);
        });
    }
  );

  // login functionality here
  const login = async(username, password, url) => {
    try {
      const response = await axios.post(
        url,
        {
          username,
          password,
        },
        { withCredentials: true }
      );
      const { access_token } = response.data;
      setState({ token: access_token });

      return response.data;
    } catch (error) {
      const { response } = error;
      if (response && response !== undefined) {
        const { status } = response;
        if (status === 401) {
          return { success: false, errType: "user/pass" };
        }
      }

      return { success: false, errType: "network" };
    }
  };

  // fetch
  const globalFetch = async(url, method, body = null, params = null) => {
    // if we don't have a refresh token, get a new one before making original request
    let token;
    try {
      // check if we have a refresh token
      if (!state.token) {
        console.log("We need to get token again.");
        const resp = await axios.get(endpoints.auth.refreshCookie, { withCredentials: true });
        const { access_token, success } = resp.data;
        if (success) {
          setState({ token: access_token });
          // store token locally so it is accessible below, as setState is slow to update,
          // so sometimes it shows up as {state: null}
          token = access_token;
        }
      }
    } catch (error) {
      // if we can't get one, we know that the user is NOT logged in, so
      // only one error request needs to be shown.
      const { detail } = error.response ? error.response.data : {};

      return { success: false, errType: "server", detail };
    }

    if (method === "get") {
      if (url === "/auth/logout") {
        setState({ token: null }); // if we send the bearer token when logging out, we won't actually log out
        token = null;
      }
      try {
        const response = await axios.get(url, {
          withCredentials: true,
          params,
          headers: { Authorization: `Bearer ${token || state.token}` },
        });

        return response.data;
      } catch (error) {
        const { detail } = error.response ? error.response.data : {};

        return { success: false, errType: "server", detail };
      }
    }
    try {
      if (method === "post") {
        const response = await axios.post(url, body, {
          withCredentials: true,
          params,
          headers: { Authorization: `Bearer ${token || state.token}` },
        });

        return response.data;
      }
      // put
      const response = await axios.put(url, body, { withCredentials: true });

      return response.data;
    } catch (error) {
      const { detail } = error.response ? error.response.data : {};

      return { success: false, errType: "server", detail };
    }
  };

  const noAuthFetch = async(url, method, body = null, params = null) => {
    if (method === "get") {
      try {
        const response = await noAuthAxios.get(url, { params });

        return response.data;
      } catch (error) {
        const { detail } = error.response ? error.response.data : {};

        return { success: false, errType: "server", detail };
      }
    }
    try {
      if (method === "post") {
        const response = await noAuthAxios.post(url, body, { params });

        return response.data;
      }
      // put
      const response = await noAuthAxios.put(url, body, { params });

      return response.data;
    } catch (error) {
      const { detail } = error.response ? error.response.data : {};

      return { success: false, errType: "server", detail };
    }
  };

  // @TODO enhance the ACL protecting configuration
  const aclRole = {
    "/admin": "admin",
    "/filer": "filer",
  };

  const checkIfProtectedPath = (pathname, user = null) => {
    for (const item of Object.entries(aclRole)) {
      const path = item[0];
      const role = item[1];
      if (pathname.startsWith(path)) {
        if (user) {
          // check with role
          // @TODO update when the complicated ACL
          if (user.account_type === role) {
            // only return true when has role
            return true;
          }
        } else {
          return true;
        }
      }
    }

    return false;
  };

  const getLoginPageUrlForProtectedPath = (pathname) => {
    for (const item of Object.entries(aclRole)) {
      const path = item[0];
      if (pathname.startsWith(path)) {
        return `/auth${path}`;
      }
    }

    return "";
  };

  //
  function getApplicationNavBarMenu() {
    // admin
    const adminNavBarMenu = [
      {
        id: "dashboard",
        title: "Dashboard",
        link: "/admin/dashboard",
      },
      {
        id: "filings",
        title: "Filings",
        link: "/admin/filings",
      },
      {
        id: "filers",
        title: "Filers",
        link: "/admin/filer/manager",
        children: [
          {
            id: "manager",
            title: "Manager",
            link: "/admin/filer/manager",
          },
        ],
      },
      {
        id: "lobbyists",
        title: "Lobbyists",
        link: "/admin/lobbyist/manager",
        children: [
          {
            id: "dashboard",
            title: "Manager",
            link: "/admin/lobbyist/manager",
          },
          {
            id: "filings",
            title: "Filings",
            link: "/admin/lobbyist/filings",
          },
          {
            id: "settings",
            title: "Settings",
            link: "/admin/lobbyist/settings",
          },
        ],
      },
      {
        id: "campaigns",
        title: "Campaigns",
        link: "#",
      },
      {
        id: "masterData",
        title: "Master Data",
        link: "#",
      },
      {
        id: "reports",
        title: "Reports",
        link: "#",
      },
    ];

    return adminNavBarMenu;
  }

  // check the auth protection
  const router = useRouter();
  const { pathname, asPath, events } = router;
  const protectedPage = checkIfProtectedPath(asPath);
  const [userProfile, setUserProfile] = useState(null);

  async function getUser() {
    // load user
    const loadUser = async() => {
      const url = endpoints.admin.me;
      const resp = await globalFetch(url, "get");

      return resp;
    };

    const myProfileResp = await loadUser();
    if (myProfileResp.user) {
      // set user
      setUserProfile(myProfileResp.user);

      const userAccountType = myProfileResp.user.account_type;
      if (userAccountType === "admin") {
        // setNavMenus(adminNavMenus);
        setNavMenus(getApplicationNavBarMenu());

      } else if (userAccountType === "filer") {
        // setNavMenus(filerNavMenus);
        setTabMenus(filerNavMenus);
      } else {
        setNavMenus(null);
        setTabMenus(null);
      }
    } else {
      if (protectedPage) {
        window.location.href = `${getLoginPageUrlForProtectedPath(
          asPath
        )}?redirect=${encodeURI(asPath)}`;
      }
      setUserProfile(null);
      setNavMenus(null);
      setTabMenus(null);
    }
  }

  useEffect(() => {
    getUser();
  }, [asPath]);

  // don't render anything until we know if we have authorization
  if (protectedPage) {
    if (!userProfile) {
      return <Loader color="#078dd3" height={30} type="Bars" width="100%" />;
    }
    if (!checkIfProtectedPath(asPath, userProfile)) {
      window.location.href = `${getLoginPageUrlForProtectedPath(
        asPath
      )}?redirect=${encodeURI(asPath)}`;

      return;
    }
  }

  return (
    <AuthContext.Provider
      value={ {
        state,
        globalFetch,
        noAuthFetch,
        login,
        userProfile,
        getUser,
        navMenus,
        tabMenus,
      } }
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
export const useAuthContext = () => useContext(AuthContext);
