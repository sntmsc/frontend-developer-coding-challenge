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
    <Head>
      <meta property="og:image" content="https://github.com/Aerolab/frontend-developer-coding-challenge/blob/main/assets/github-cover-aerolab-frontend-developer-coding-challenge.png"/>
      <meta property="og:title" content="Aerolab Challenge"/>
      <meta property="og:image:width" content="600"/>
      <meta property="og:image:height" content="250"/>
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
