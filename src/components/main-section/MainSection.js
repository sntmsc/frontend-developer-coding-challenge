import { Flex } from './../Flex/styled'
import Header from './header/Header'
import MainImage from './hero-header/main-image/MainImage'
import MainDescription from './hero-header/main-description/MainDescription'
import * as S from './hero-header/HeroContainer/styled'
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
      direction='column'
      mt='3em'>
        <S.HeroContainer>
          <MainDescription/>
          <MainImage/>
        </S.HeroContainer>
          <MainCards/>
       </Flex>
    </Flex>
  )
}

export default MainSection