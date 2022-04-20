import { Flex } from './../src/components/Flex/styled'
import Image from '../src/components/Image/Image'
import Text from '../src/components/Text/Text'
import AeropayButton from './../src/components/AeropayButton/AeropayButton'
export default function Home() {
  return(
    <div>
      <Flex
      justify='space-around'
      w='100%'
      p='3em'
      m='0 0 3em 0'>
        <Image
            img='./assets/icons/aerolab-logo-1.svg'
            w='150px'
            margin='0 0 0 10px'/>
        <AeropayButton/>
      </Flex>
      <Flex
      backgroundImage='url(/assets/illustrations/single-wave-pattern.svg)'
      w='100%'
      direction='row'>
        <Flex
        direction='column'
        align='flex-start'> 
          <Text>
            EXPLORE THE
          </Text>
          <Text
          background= 'gradient'
          fontSize='150px'
          lineHeight='100%'>
            TECH
          </Text>
          <Text
          background= 'black'
          fontSize='150px'
          lineHeight='100%'>
            ZONE
          </Text>
          <Text
          textAlign='left'
          fontSize='15px'>
            Here you'll be able to redeem all of your hard-earned Aeropoints and exchange them for cool tech.
          </Text>
        </Flex>
        <Flex
        p='3em'
         justify='flex-start'
         align='flex-end'
         position='relative'
         >
          <Flex
          h='530px'
          background='linear-gradient(to left,rgba(255, 128, 255, .4),rgba(23, 111, 235, .4))'
          borderRadius='45px'
          w='80%'
          clipPath='inset( -100vw -100vw 0 -100vw )'>
            <Image
            img='./assets/illustrations/hero-desktop.png'
            boxSize='800px'
            position='relative'
            bottom='5em'
            />
          </Flex>
        </Flex>
      </Flex>
   </div>
  )
}
