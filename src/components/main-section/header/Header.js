import {useState, useEffect, useContext} from 'react'
import { Flex } from './../../Flex/styled'
import * as S from './styled'
import AeropayButton from './AeropayButton/AeropayButton'
import Aeropay from './Aeropay/Aeropay'
import fetchHeaders from '../../../../utils/api/fetchHeaders'
import { ContextAeropoints } from '../../../../context/Aeropoints'

const Header = () => {

  const [ isVisible, setIsVisible ] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [ userData, setUserData] = useState({});
  const {aeropoints, setAeropoints} = useContext(ContextAeropoints);

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
      .then(data => {setUserData(data); setAeropoints(data.points)})
      .catch(err => console.log(err));
  },[])

  return(
    <Flex
    zIndex= '20'
    background= 'rgba(255,255,255, 1)'
    boxShadow='0 2px 2px -2px rgba(0,0,0,.2)'
    position='fixed'
    left='0'
    top='0'
    w='100%'>
    <S.HeaderContainer>
          <S.Logo/>
      <AeropayButton
      handleClick={handleClick}
      aeropoints={aeropoints}
      isLoading={isLoading}
      isVisible={isVisible}/>
        { isVisible && 
            <Aeropay
            setIsLoading={(value)=>setIsLoading(value)}
            userName={userData.name}
            closeComponent={()=>setIsVisible(false)}/> 
        }
    </S.HeaderContainer>
    </Flex>
  )
}

export default Header