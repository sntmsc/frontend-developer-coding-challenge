import { Flex } from '../Flex/styled'
import Image from '../Image/Image'
import AeropayButton from '../AeropayButton/AeropayButton'


const Header = () => {
  return(
    <Flex
    justify='space-between'
    w='100%'
    p='3em 20em'
    m='0 0 3em 0'>
      <Image
          img='./assets/icons/aerolab-logo-1.svg'
          w='150px'
          margin='0 0 0 10px'/>
      <AeropayButton/>
    </Flex>
  )
}

export default Header