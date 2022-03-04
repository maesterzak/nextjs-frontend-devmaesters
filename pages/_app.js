import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import '../styles/globals.css'
import { useRouter } from 'next/router'
import * as gtag from '../lib/gitag'

import Layout from './Blog/blog_components/Layout';
import { useEffect, useState } from "react";
import { Provider } from 'react-redux'
import { useStore } from '../store'
import Head from "next/head";
import Loader from './components/Loader'

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url)
      console.log('roure changing end')
      setLoading(false)
    }
    router.events.on('routeChangeStart', (url) =>{
      console.log("route chang begin")
      setLoading(true)
    })
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])
   
  const store = useStore(pageProps.initialReduxState)
  return (
    <>
    <Head>
      
    </Head>
    <Provider store={store}>
      {loading && <Loader />}
      <Layout>

      <Component {...pageProps} />  
      </Layout>
      </Provider>  
      </>
  )
}

export default MyApp
