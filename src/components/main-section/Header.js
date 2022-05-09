import {useState} from 'react'
import { Flex } from '../Flex/styled'
import Image from '../Image/Image'
import AeropayButton from '../AeropayButton/AeropayButton'
import Aeropay from '../Aeropay/Aeropay'

const Header = () => {
  const [ isVisible, setIsVisible ] = useState(false);
  const handleClick = () =>{
    setIsVisible(!isVisible);
    console.log('prueba')
  }
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
      <AeropayButton
      handleClick={handleClick}/>
      { isVisible && 
          <Aeropay/>
      }
    </Flex>
  )
}

export default Header