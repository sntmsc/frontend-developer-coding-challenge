import { Flex } from './../src/components/Flex/styled'
import Header from '../src/components/main-section/Header'
import MainImage from '../src/components/main-section/MainImage'
import MainDescription from '../src/components/main-section/MainDescription'
import MainCards from '../src/components/main-section/MainCards.js'
import ProductsSection from '../src/components/products-section/ProductsSection'


export default function Home() {
  return(
    <Flex
    justify='center'
    direction='column'>
      <Header/>
      <Flex
      backgroundImage='url(/assets/illustrations/single-wave-pattern.svg)'
      backgroundSize='300px 18px'
      w='100%'
      direction='column'>
        <Flex
        maxW='1464px'
        justify='space-around'
        columnGap='6rem'
        mb='20rem'>
          <MainDescription/>
          <MainImage/>
        </Flex>
          <MainCards/>
      </Flex>
      <ProductsSection/>
   </Flex>
  )
}
