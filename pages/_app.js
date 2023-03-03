import Head from 'next/head'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Script from 'next/script'
import '../styles/globals.css'
import { useRouter } from 'next/router';
import { useEffect } from "react";
import * as gtag from "../lib/gtag"


function MyApp({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);
  return <>
    <Head>
      <meta name="google-site-verification" content="ov7Bey3q-3Oik96i5soxIG-HXH4B9JBSXXe11_XveJs" />
      <title>Aicodebuddy.com || Your Online Coder Friend</title>
      <meta name="description" content="Improve your coding experience with our website! Our platform offers a variety of useful features including the ability to add comments to your code, easily fix bugs, convert code into different languages, and refactor your existing code. " />
      <link rel="icon" href="/robot.png" />
    </Head>
    {/* <!-- Google tag (gtag.js) --> */}
   
    <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-ZKSXVL88DL" />
    <Script
      id='google-analytics'
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-ZKSXVL88DL', {
            page_path: window.location.pathname,
          });
        `,
      }}
    />

    
    <Navbar/>

    <Component {...pageProps} />

    <Footer/>
  </>
}

export default MyApp
