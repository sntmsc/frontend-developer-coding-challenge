import { Flex } from './../src/components/Flex/styled'
import ProductsSection from '../src/components/products-section/ProductsSection'
import MainSection from '../src/components/main-section/MainSection'
import fetchHeaders from '../utils/api/fetchHeaders';
import Footer from '../src/components/Footer';
import { Aeropoints } from '../context/ContextAeropoints';
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
  return(
    <Flex
    justify='center'
    direction='column'>
      <Aeropoints>
        <MainSection/>
        <ProductsSection products={products}/>
        <Footer/>
      </Aeropoints>
   </Flex>
  )
}
