import { Flex } from './../src/components/Flex/styled'
import Image from '../src/components/Image/Image'
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
        p='3em' //PROVISIONAL 
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
