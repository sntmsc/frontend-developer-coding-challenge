import { Flex } from './../Flex/styled'
import Header from './header/Header'
import MainImage from './MainImage'
import MainDescription from './MainDescription'
import MainCards from './MainCards.js'


const MainSection = () =>{


  
  return(
    <Flex
    direction='column'>
      <Header/>
      <Flex
      backgroundImage='url(/assets/illustrations/single-wave-pattern.svg)'
      backgroundSize='350px 17px'
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
    </Flex>
  )
}

export default MainSection