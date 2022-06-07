import '../styles/globals.css'
import GlobalStyle from '../styles/globalStyles';
import { ContextToast } from './../context/ToastContext'
import { Aeropoints } from './../context/Aeropoints';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {

  return( 
    <>
    <Head>
      <title>Aerolab</title>
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
