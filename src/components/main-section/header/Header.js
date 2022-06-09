import {useState, useEffect, useContext, useRef } from 'react'
import { Flex } from './../../Flex/styled'
import * as S from './styled'
import AeropayButton from './AeropayButton/AeropayButton'
import Aeropay from './Aeropay/Aeropay'
import fetchHeaders from '../../../../utils/api/fetchHeaders'
import { ContextAeropoints } from '../../../../context/Aeropoints'
import Link from 'next/dist/client/link'

const Header = () => {
  const [ isVisible, setIsVisible ] = useState({render:false , fade: 'out'});
  const [isLoading, setIsLoading] = useState(false);
  const [ userData, setUserData] = useState({});
  const {aeropoints, setAeropoints} = useContext(ContextAeropoints);
  const ref = useRef(null);
  const headers = fetchHeaders(process.env.NEXT_PUBLIC_TOKEN);

  const handleIsVisible = (fade, render) =>{

    if(render){
      setIsVisible({render, fade});
    }
    else{
      setIsVisible({render:true, fade});

      setTimeout(()=>{setIsVisible({render, fade})},500);
    }
  }

  const handleClick = ()=>{
    const newFade = () => isVisible.fade === 'out' ? 'in' : 'out';
    handleIsVisible(newFade(), !isVisible.render);
  }

  useEffect( ()=>{
      fetch(process.env.NEXT_PUBLIC_GET_USER, {
          method: "GET",
          headers,
      })
      .then(response => response.json())
      .then(data => {setUserData(data); setAeropoints(data.points)})
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
      <Link
      href='#'>
        <a>
          <S.Logo/>
        </a>
      </Link>
      <Flex
      ref={ref}
      position='relative'>
      <AeropayButton
      handleClick={handleClick}
      aeropoints={aeropoints}
      isLoading={isLoading}
      isVisible={isVisible}/>
        { isVisible.render && 
            <Aeropay
            refElement = {ref}
            setIsLoading={(value)=>setIsLoading(value)}
            userName={userData.name}
            fade={isVisible.fade}
            closeComponent={()=>{handleIsVisible('out',false)}}/>
        }
        </Flex>
    </S.HeaderContainer>
    </Flex>
  )
}

export default Header