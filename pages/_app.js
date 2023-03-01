import Head from 'next/head'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

import '../styles/globals.css'


function MyApp({ Component, pageProps }) {
  return <>
    <Head>
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-ZKSXVL88DL"></script>
      <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments)};
        gtag('js', new Date());

        gtag('config', 'G-ZKSXVL88DL');
      </script>
      <meta name="google-site-verification" content="ov7Bey3q-3Oik96i5soxIG-HXH4B9JBSXXe11_XveJs" />
      <title>Aicodebuddy.com || Your Online Coder Friend</title>
      <meta name="description" content="Improve your coding experience with our website! Our platform offers a variety of useful features including the ability to add comments to your code, easily fix bugs, convert code into different languages, and refactor your existing code. " />
      <link rel="icon" href="/robot.png" />
    </Head>

    
    <Navbar/>

    <Component {...pageProps} />

    <Footer/>
  </>
}

export default MyApp
