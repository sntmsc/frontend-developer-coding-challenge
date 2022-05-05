import { Flex } from './../Flex/styled'
import Text from '../Text/Text'
import GradientButton from '../GradientButton/GradientButton'
import Image from '../Image/Image'

const MainDescription = () =>{
    return(
      <Flex
      direction='column'
      align='flex-start'
      mt='3em'
      p='0'
      w='602px'
      zIndex='2'>
        <Text
        userSelect='none'
        spacing='2px'>
          EXPLORE THE
        </Text>
        <Text
        background= 'gradient'
        fontSize='200px'
        lineHeight='80%'
        weight='900'
        userSelect='none'>
          TECH
        </Text>
        <Text
        background= 'black'
        fontSize='200px'
        weight='900'
        lineHeight='80%'
        userSelect='none'>
          ZONE
        </Text>
        <Text
        textAlign='left'
        fontSize='15px'
        m='1em 0'
        userSelect='none'>
          Here you'll be able to redeem all of your hard-earned Aeropoints and exchange them for cool tech.
        </Text>
        <Flex
        position='relative'>
        <GradientButton
        m='30px 0 0 0'
        w='318px'
        h='80px'>
          VIEW ALL PRODUCTS
        </GradientButton>
        <Image
          img='./assets/icons/Icons.svg'
          boxSize='23px'
          position='relative'
          top='15px'
          right='35px'
          cursor='pointer'
          />

        </Flex>
      </Flex>
    )
  }

  export default MainDescription 