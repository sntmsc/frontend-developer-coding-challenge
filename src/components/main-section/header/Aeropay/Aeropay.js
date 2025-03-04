import Image from "./../../../Image/Image"
import Text from "./../../../Text/Text"
import { Flex } from "./../../../Flex/styled"
import GradientButton from "./../../../GradientButton/GradientButton"
import { useState , useContext } from "react"
import { ContextAeropoints } from "../../../../../context/Aeropoints"
import { ToastContext } from "../../../../../context/ToastContext"
import fetchPostAndGet from "../../../../../utils/api/fetchPostAndGet"
import useClickOutside from "../../../../../utils/useClickOutside"
import * as S from './styled'

const PointsOption = ({children, pointSelected, handleClick}) =>{
    return(
        <GradientButton
        w='85.33px'
        h='35px'
        borderRadius='12px'
        cursor='pointer'
         background={pointSelected !== children ? '#E6F0FF' : ''}
         textColor={pointSelected !== children ? '-webkit-linear-gradient(left,#176FEB, #FF80FF)' : ''}
         onClick={()=>handleClick(children)}>
             {children}
         </GradientButton>
    )
}
const Aeropay = ({setIsLoading, userName, closeComponent, refElement, fade}) =>{
    const [pointSelected, setPointSelected] = useState(0);
    const {setAeropoints} = useContext(ContextAeropoints);
    const {toast,setToast} = useContext(ToastContext);

    useClickOutside(refElement, closeComponent);
    
    const addPoints = (points) =>{
        const postObject = {'amount': points};
        setIsLoading(true);

        fetchPostAndGet(
            postObject,
            process.env.NEXT_PUBLIC_POST_POINTS,
            (value)=>setAeropoints(value),
            toast,
            (value)=> setToast(value),
            'aeropay',
            '',
            (value)=>setIsLoading(value)
        );

    }

    const handleAddPoints = () =>{
        if(pointSelected !== 0){
            addPoints(parseInt(pointSelected))
        }
    }

    return(
        <S.AeropayContainer
        fade={fade}>
            <Flex
            w='100%'
            h='58px'
            borderBottom='1px solid #DAE4F2'
            p='16px 24px'
            justify='flex-start'>
                <Text
                background='black'>
                    Add Balance
                </Text>
            </Flex>
            <Flex
            w='100%'
            p='24px'
            direction='column'>
                <Flex
                h='148px'
                w='100%'
                p='16px'
                boxShadow='0px 2px 8px rgba(0, 0, 0, 0.05)'
                background='#252F3D'
                borderRadius='8px'
                direction='column'
                justify='space-between'>
                    <Flex
                    w='100%'
                    justify='space-between'>
                          <Text
                        background='#F5F9FF'>
                            Aerocard
                        </Text>
                        <Image
                        img='./assets/icons/aeropay-2.svg'
                        alt='aeropay icon'
                        boxSize='24px'/>
                    </Flex>
                    <Flex
                    w='100%'
                    justify='space-between'>
                        <Text
                        background='#F5F9FF'
                        fontSize='14px'>
                            {userName}
                        </Text>
                        <Text
                        background='#F5F9FF'
                        fontSize='14px'>
                            07/23
                        </Text>
                    </Flex>
                    <Flex
                    position='absolute'
                    w='100%'
                    direction='column'
                    h='150px'
                    overflow='hidden'
                    bottom='120px'>
                       {[...Array(11)].map((x,i) =>
                        <Image
                        key={i}
                        img='./assets/illustrations/single-wave-pattern.svg'
                        alt='background waveform'
                        opacity='0.07'
                        w='800px'
                        h='33px'
                        m='-11px'
                        p='3px'
                        objectFit='contain'/>)}

                    </Flex>
                </Flex>
                <Flex
                w='100%'
                mt='44px'
                justify='space-between'>
                    <PointsOption
                    pointSelected={pointSelected}
                    handleClick={(value)=>setPointSelected(value)}>
                         1000
                     </PointsOption>
                     <PointsOption
                    pointSelected={pointSelected}
                    handleClick={(value)=>setPointSelected(value)}>
                         5000
                     </PointsOption>
                     <PointsOption
                    pointSelected={pointSelected}
                    handleClick={(value)=>setPointSelected(value)}>
                         7500
                     </PointsOption>
                </Flex>
                <GradientButton
                    borderRadius='16px'
                    cursor={pointSelected === 0 ? 'auto' : 'pointer'}
                    w='100%'
                    h='51px'
                    m='24px 0 0 0'
                    onClick={handleAddPoints}>
                        <Image
                        img='./assets/icons/aeropay-3.svg'
                        alt='aeropay icon'
                        boxSize='24px'
                        m='0 8px'/>
                        <Text
                        background='white'>Add Points</Text>
                </GradientButton>
            </Flex>
        </S.AeropayContainer>
    )
}

export default Aeropay