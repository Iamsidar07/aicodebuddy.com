import Head from 'next/head'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import '../styles/globals.css'


function MyApp({ Component, pageProps }) {
  return <>
    <Head>
      <title>Aicodebuddy.com || Your Online Coder Friend</title>
      <meta name="description" content="Improve your coding experience with our website! Our platform offers a variety of useful features including the ability to add comments to your code, easily fix bugs, convert code into different languages, and refactor your existing code. Simplify your coding process and enhance your productivity with our powerful tools. Try us out today!" />
      <link rel="icon" href="/robot.png" />
    </Head>
    <Navbar/>
    <Component {...pageProps} />
    <Footer/>
  </>
}

export default MyApp
