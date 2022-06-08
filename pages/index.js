import { useContext } from 'react'
import { Flex } from './../src/components/Flex/styled'
import ProductsSection from '../src/components/products-section/ProductsSection'
import MainSection from '../src/components/main-section/MainSection'
import fetchHeaders from '../utils/api/fetchHeaders';
import Footer from '../src/components/Footer';
import { ToastContext } from '../context/ToastContext';
import Toast from '../src/components/Toast/Toast';

export async function getStaticProps() {
  const headers = fetchHeaders(process.env.NEXT_PUBLIC_TOKEN);
  const res = await fetch(process.env.API_GET_PRODUCTS, {headers});
  const products = await res.json();

  return {
    props: {
      products,
    },
    revalidate: 3600, 
  }

}

export default function Home({products}) {

  const {toast} = useContext(ToastContext);

  return(
    <Flex
    justify='center'
    direction='column'>
        {toast.map((x,i) =>
        <Toast 
        key={i}
        status={x.status}
        fade={x.fade} 
        index={i}
        event={x.event}
        product={x.product}/>)}
        <MainSection/>
        <ProductsSection products={products}/>
        <Footer/>
   </Flex>
  )
}
