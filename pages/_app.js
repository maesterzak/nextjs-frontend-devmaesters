import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import '../styles/globals.css'
import { useRouter } from 'next/router'
import * as gtag from '../lib/gitag'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Layout from './Blog/blog_components/Layout';
import { useEffect } from "react";
import { Provider } from 'react-redux'
import { useStore } from '../store'



function MyApp({ Component, pageProps }) {
  const router = useRouter()
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])
   
  const store = useStore(pageProps.initialReduxState)
  return (
    <Provider store={store}>
      <Layout>
      <Component {...pageProps} />  
      </Layout>
      </Provider>  
  )
}

export default MyApp
