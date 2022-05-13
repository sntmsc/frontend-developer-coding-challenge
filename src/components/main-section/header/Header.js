import {useState, useEffect} from 'react'
import { Flex } from './../../Flex/styled'
import Image from './../../Image/Image'
import AeropayButton from './AeropayButton/AeropayButton'
import Aeropay from './Aeropay/Aeropay'
import fetchHeaders from '../../../../utils/api/fetchHeaders'

const Header = () => {

  const [ isVisible, setIsVisible ] = useState(false);
  const [ userData, setUserData] = useState({});
  const handleClick = () =>{
    setIsVisible(!isVisible);
  }

  const headers = fetchHeaders(process.env.NEXT_PUBLIC_TOKEN);

  useEffect( ()=>{
      fetch(process.env.NEXT_PUBLIC_GET_USER, {
          method: "GET",
          headers,
      })
      .then(response => response.json())
      .then(data => setUserData(data))
      .catch(err => console.log(err));
  },[])

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
      handleClick={handleClick}
      userPoints={userData.points}/>
        { isVisible && 
            <Aeropay
            userName={userData.name}/>
        }
    </Flex>
  )
}

export default Header