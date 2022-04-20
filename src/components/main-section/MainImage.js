import { Flex } from '../Flex/styled'
import Image from '../Image/Image'

const MainImage = () => {
    return(
      <Flex
       justify='center'
       align='flex-end'
       position='relative'
       >
        <Flex
        h='530px'
        background='linear-gradient(to left,rgba(255, 128, 255, .4),rgba(23, 111, 235, .4))'
        borderRadius='45px'
        clipPath='inset( -100vw -100vw 0 -100vw )'
        w='650px'>
          <Image
          img='./assets/illustrations/hero-desktop.png'
          boxSize='800px'
          position='relative'
          bottom='5em'
          />
        </Flex>
      </Flex>
    )
  }

  export default MainImage 