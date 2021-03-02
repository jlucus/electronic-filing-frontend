import React from 'react';
import Document, {
  Html, Head, Main, NextScript,
} from 'next/document';
import { ServerStyleSheet } from 'styled-components';

const importBrowseAloud = process.env.NEXT_PUBLIC_EFILE_ENV !== 'dev';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () => originalRenderPage({
        enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
      });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
          <div style={{ visibility: 'hidden', position: 'absolute', top: 0 }}>
            <div>
              <div id="__ba_launchpad" style={{ visibility: 'hidden' }} />
            </div>
          </div>
          {importBrowseAloud && (
            <script
              type="text/javascript"
              src="https://www.browsealoud.com/plus/scripts/3.1.0/ba.js"
              crossOrigin="anonymous"
              integrity="sha256-VCrJcQdV3IbbIVjmUyF7DnCqBbWD1BcZ/1sda2KWeFc= sha384-k2OQFn+wNFrKjU9HiaHAcHlEvLbfsVfvOnpmKBGWVBrpmGaIleDNHnnCJO4z2Y2H sha512-gxDfysgvGhVPSHDTieJ/8AlcIEjFbF3MdUgZZL2M5GXXDdIXCcX0CpH7Dh6jsHLOLOjRzTFdXASWZtxO+eMgyQ=="
            />
          )}
        </body>
      </Html>
    );
  }
}
