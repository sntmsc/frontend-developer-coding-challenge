import { Flex } from './../src/components/Flex/styled'
import ProductsSection from '../src/components/products-section/ProductsSection'
import MainSection from '../src/components/main-section/MainSection'


export default function Home() {
  return(
    <Flex
    justify='center'
    direction='column'>
      <MainSection/>
      <ProductsSection/>
   </Flex>
  )
}
