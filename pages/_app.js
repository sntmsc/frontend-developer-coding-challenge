import { ContextToast } from './../context/ToastContext'
import { Aeropoints } from './../context/Aeropoints'
import Head from 'next/head';
import GlobalStyle from '../styles/globalStyles';
function MyApp({ Component, pageProps }) {

  return( 
    <>
    <Head>
      <title>Aerolab</title>
      <meta name="keywords" content="aerolab challenge"/>
      <link rel="shortcut icon" href="./assets/icons/favicon.svg" />
    </Head>
      <ContextToast>
      <Aeropoints>
        <GlobalStyle/>
        <Component {...pageProps} />
      </Aeropoints>
      </ContextToast>
    </>
)}

export default MyApp
