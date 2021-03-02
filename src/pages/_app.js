import React, { useMemo } from 'react';
import { TinaProvider, TinaCMS } from 'tinacms';
import { ModalProvider } from 'styled-react-modal';

import {
  AuthProvider,
  ThemeModeProvider,
  GlobalModalProvider,
  PasscodeProtectProvider,
} from '../components/contexts';
import { ModalBackground, Modal } from '../components/modals';

function MyApp({ Component, pageProps }) {
  const cms = useMemo(() => {
    return new TinaCMS({
      enabled: false, // need to disable in routes not in /help
      toolbar: { hidden: false },
      sidebar: true,
    });
  }, []);
  return (
    <PasscodeProtectProvider>
      <AuthProvider>
        <TinaProvider cms={cms}>
          <ThemeModeProvider>
            <GlobalModalProvider>
              <ModalProvider backgroundComponent={ModalBackground}>
                <Modal />
                <Component {...pageProps} />
              </ModalProvider>
            </GlobalModalProvider>
          </ThemeModeProvider>
        </TinaProvider>
      </AuthProvider>
    </PasscodeProtectProvider>
  );
}

// next-dark-mode package provide autoMode as true so it shows dark mode as default.
// we need light mode
export default MyApp;
