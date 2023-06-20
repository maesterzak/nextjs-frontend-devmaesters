import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/globals.css";
import { useRouter } from "next/router";
import * as gtag from "../lib/gitag";

import Layout from "../components/Layout";
import { useEffect, useState } from "react";
import { Provider } from "react-redux";
import { useStore } from "../store";
import Head from "next/head";
import Loader from "../components/Loader";
import { config, dom } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import { NextUIProvider } from "@nextui-org/react";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
    window.scrollTo(0, 0);
  }, []);
  const {
    asPath, // the value: "/question/how-do-you-get-the-current-url-in-nextjs/"
    // the value: "/question/[slug]"
  } = useRouter();

  const pathname = asPath;
  const currentPath = `https://devmaesters.com${pathname}`;

  const [loading, setLoading] = useState(false);
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);

      setLoading(false);
    };
    router.events.on("routeChangeStart", (url) => {
      setLoading(true);
    });
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  const store = useStore(pageProps.initialReduxState);
  return (
    <>
      <Head>
        <style>{dom.css()}</style>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* <link rel="icon" href="/favicon1.ico" /> */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/newlogo/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/newlogo/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/images/newlogo/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />

        <meta charSet="UTF-8" />

        <meta property="og:title" content="DEVMAESTERS HOME PAGE" />
        <meta
          property="og:image"
          content="https://devmaesters.com/images/home-2.png"
        />
        <meta
          property="og:description"
          content="Welcome to devmaesters.com we offer programming tips,tutorials, tricks, freelance web development, coding support and sales of web related products."
        />
        <meta property="og:url" content={currentPath} />
      </Head>
      <Provider store={store}>
        {/* <NextUIProvider> */}
        <div className="main-body">
          <div className="main-content">
            <Layout>
              {loading && <Loader />}
              <Component {...pageProps} />
            </Layout>
          </div>
          <div className="area">
            <ul className="circles">
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
        </div>
        {/* </NextUIProvider> */}
      </Provider>
    </>
  );
}

export default MyApp;
