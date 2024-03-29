import Head from 'next/head'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Script from 'next/script'
import '../styles/globals.css'
import { useRouter } from 'next/router';
import { useEffect } from "react";
import * as gtag from "../lib/gtag"
import { ToastContainer } from 'react-toastify'


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

      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="Upgrade your coding skills with aicodebuddy.com. Our platform enables you to comment on code, fix bugs, convert to multiple languages and refactor existing code. Join us today for an enhanced coding experience" />
      <meta name="keywords" content="aicodebuddy,aicodebuddy.com,add comments in code,fix bugs in code,convert to multiple languages, refactor existing code, Conver code to another programming language, Explain this code, Optimise the code,find bugs in code, coding tool" />
      <title>Aicodebuddy.com|Revamp Your Coding Skills.</title>

      <link rel="icon" href="/fire.png" />
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


    <Navbar />
    <ToastContainer />
    <Component {...pageProps} />
    <Footer />
  </>
}

export default MyApp
