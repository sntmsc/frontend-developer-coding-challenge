import { Flex } from './../Flex/styled'
import Header from './header/Header'
import MainImage from './hero-header/main-image/MainImage'
import MainDescription from './hero-header/main-description/MainDescription'
import * as S from './style'
import BrowseChooseEnjoy from './browse-choose-enjoy-section/BrowseChooseEnjoy.js'


const MainSection = () =>{
  
  return(
    <S.MainContainer>
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
          <BrowseChooseEnjoy/>
       </Flex>
    </S.MainContainer>
  )
}

export default MainSection