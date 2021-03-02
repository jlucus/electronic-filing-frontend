export const endpoints = {
  auth: {
    loginAdmin: '/auth/admin-login',
    loginFiler: '/auth/filer-login',
    samlSpInitiatedAdmin: '/auth/admin/saml/login/csd',
    refreshCookie: '/auth/refresh',
    logout: '/auth/logout',
    resetPassword: '/auth/set-password',
  },
  admin: {
    me: '/auth/me',
    lobbyist: {
      getLobbyist: '/admin/lobbyist/',
      reviewNewLobbyist: '/admin/lobbyist/review-new-lobbyist/',
      updateLobbyist: '/admin/lobbyist/',
    },
    tasks: {
      getTasks: '/admin/tasks/open',
    },
  },
  filer: {
    me: '/auth/me',
    profile: {
      info: '/filer/info',
      updateContact: '/filer/update-contact-info',
    },
    lobbyist: {
      register: '/filer/lobbyist/register',
      registerConfirmEmail: '/filer/lobbyist/register-confirm-email',
    },
  },
  public: {
    search: '/public/search',
    getDocUrl: 'public/document/',
    getDocMetadata: 'public/document/metadata',
  },
};
