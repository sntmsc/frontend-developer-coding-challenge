import { Flex } from './../Flex/styled'
import Text from '../Text/Text'
import GradientButton from '../GradientButton/GradientButton'
import Image from '../Image/Image'

const MainDescription = () =>{
    return(
      <Flex
      direction='column'
      align='flex-start'
      m='3em 0 0 0'
      p='0'
      w='450px'>
        <Text
        spacing='2px'>
          EXPLORE THE
        </Text>
        <Text
        background= 'gradient'
        fontSize='170px'
        lineHeight='80%'
        weight='900'>
          TECH
        </Text>
        <Text
        background= 'black'
        fontSize='170px'
        weight='900'
        lineHeight='80%'>
          ZONE
        </Text>
        <Text
        textAlign='left'
        fontSize='15px'
        m='1em 0'>
          Here you'll be able to redeem all of your hard-earned Aeropoints and exchange them for cool tech.
        </Text>
        <Flex
        position='relative'>
        <GradientButton
        m='30px 0 0 0'
        w='270px'
        h='70px'>
          VIEW ALL PRODUCTS
        </GradientButton>
        <Image
          img='./assets/icons/Icons.svg'
          boxSize='25px'
          position='relative'
          top='15px'
          right='35px'
          />

        </Flex>
      </Flex>
    )
  }

  export default MainDescription 