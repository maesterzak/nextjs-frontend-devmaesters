import Document, { Html, Head, Main, NextScript } from 'next/document'
import { GA_TRACKING_ID } from '../lib/gitag'
import { CssBaseline } from '@nextui-org/react';
import React from 'react';


export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    useEffect(() => {
      var ads = document.getElementsByClassName('adsbygoogle').length;
      for (var i = 0; i < ads; i++) {
        try {
          (window.adsbygoogle = window.adsbygoogle || []).push({});
        } catch (e) { }
      }
    }, []);
    return {
      ...initialProps,
      styles: React.Children.toArray([initialProps.styles])
    };
  }
  render() {
    return (
      <Html>
        <Head>{CssBaseline.flush()}

          <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2931659559298094"
            crossOrigin="anonymous"></script>
          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
          <script>
            (adsbygoogle = window.adsbygoogle || []).push({ });
          </script>
        </body>
      </Html>
    )
  }
}