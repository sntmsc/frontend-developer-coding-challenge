import { Flex } from '../../../Flex/styled'
import Image from '../../../Image/Image'
import * as S from './styled'
const MainImage = () => {
    return(
      <Flex
       justify='center'
       align='flex-end'
       position='relative'>
        <S.ImageContainer>
          <S.Image
          img='./assets/illustrations/hero-desktop.png'
          position='relative'
          bottom='5em'/>
        </S.ImageContainer>
      </Flex>
    )
  }

  export default MainImage 