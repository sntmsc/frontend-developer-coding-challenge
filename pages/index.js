import { Flex } from './../src/components/Flex/styled'
import Header from '../src/components/main-section/Header'
import MainImage from '../src/components/main-section/MainImage'
import MainDescription from '../src/components/main-section/MainDescription'
import MainCards from '../src/components/main-section/MainCards.js'


export default function Home() {
  return(
    <div>
      <Header/>
      <Flex
      backgroundImage='url(/assets/illustrations/single-wave-pattern.svg)'
      w='100%'
      direction='column'>
        <Flex
        w='100%'
        justify='center'
        columnGap='6rem'
        mb='20rem'>
          <MainDescription/>
          <MainImage/>
        </Flex>
          <MainCards/>
      </Flex>
   </div>
  )
}
