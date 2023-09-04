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
import HeadComponent from "../components/HeadComponent";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
    window.scrollTo(0, 0);
  }, []);



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
      <HeadComponent />
      <Provider store={store}>
        {/* <NextUIProvider> */}
        <div className="main-body">
          <div className="main-content">
            <Layout>
              {loading && <Loader />}
              <Component {...pageProps} />
            </Layout>
          </div>

        </div>
        {/* </NextUIProvider> */}
      </Provider>
    </>
  );
}

export default MyApp;
