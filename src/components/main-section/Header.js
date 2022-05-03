import { Flex } from '../Flex/styled'
import Image from '../Image/Image'
import AeropayButton from '../AeropayButton/AeropayButton'
import Aeropay from '../Aeropay/Aeropay'

const Header = () => {
  return(
    <Flex
    justify='space-between'
    w='1464px'
    p='3em'
    mb='3em'
    position='relative'>
      <Image
          img='./assets/icons/aerolab-logo-1.svg'
          w='150px'
          margin='0 0 0 10px'/>
      <AeropayButton/>
      <Aeropay/>
    </Flex>
  )
}

export default Header