import '../styles/globals.css'
import { ContextToast } from './../context/ToastContext'
import { Aeropoints } from './../context/Aeropoints';

function MyApp({ Component, pageProps }) {

  return( 
    <ContextToast>
    <Aeropoints>
      <Component {...pageProps} />
    </Aeropoints>
    </ContextToast>
)}

export default MyApp
