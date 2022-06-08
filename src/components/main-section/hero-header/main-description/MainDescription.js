import { Flex } from '../../../Flex/styled'
import Text from '../../../Text/Text'
import GradientButton from '../../../GradientButton/GradientButton'
import Image from '../../../Image/Image'
import Link from 'next/link'
import * as S from './styled'

const MainDescription = () =>{
    return(
      <S.DescriptionContainer>
        <S.DescriptionText
        spacing='0.24em'>
          EXPLORE THE
        </S.DescriptionText>
        <S.DescriptionTitle
        m='8px 0 0 0'
        background= 'gradient'>
          TECH
        </S.DescriptionTitle>
        <S.DescriptionTitle
        background= 'black'>
          ZONE
        </S.DescriptionTitle>
        <S.DescriptionText
        textAlign='left'
        fontSize='15px'
        m='1em 0'>
          Here you’ll be able to redeem all of your hard-earned Aeropoints and exchange them for cool tech.
        </S.DescriptionText>
        <Flex
        position='relative'>
          <Link
          href='#products-section'>
            <a>
              <S.DescriptionButton
              m='30px 0 0 0'
              w='318px'
              h='80px'
              cursor='pointer'>
                  <Text
                  background='white'>
                  VIEW ALL PRODUCTS 
                  </Text>
                  <Image
                  img='./assets/icons/Icons.svg'/>
              </S.DescriptionButton>
            </a>
          </Link>
        </Flex>
      </S.DescriptionContainer>
    )
  }

  export default MainDescription 