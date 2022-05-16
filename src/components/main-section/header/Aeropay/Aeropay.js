import Image from "./../../../Image/Image"
import Text from "./../../../Text/Text"
import { Flex } from "./../../../Flex/styled"
import GradientButton from "./../../../GradientButton/GradientButton"
import { useState , useContext } from "react"
import { ContextAeropoints } from "../../../../../context/Aeropoints"


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
const Aeropay = ({userName}) =>{
    const [pointSelected, setPointSelected] = useState(0);
    const {aeropoints, setAeropoints} = useContext(ContextAeropoints);

    return(
        <Flex
        w='312px'
        h='404px'
        border='1px solid #DAE4F2'
        borderRadius='16px'
        boxShadow='0px 2px 12px rgba(0, 0, 0, 0.08)'
        position='absolute'
        top='105px'
        right='50px'
        zIndex='8'
        background='white'
        direction='column'
        justify='flex-start'>
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
                         7000
                     </PointsOption>
                </Flex>
                <GradientButton
                    borderRadius='16px'
                    cursor='pointer'
                    w='100%'
                    h='51px'
                    m='24px 0 0 0'
                    onClick={()=>setAeropoints(aeropoints + parseInt(pointSelected))}>
                        <Image
                        img='./assets/icons/aeropay-3.svg'
                        boxSize='24px'
                        m='0 8px'/>
                        <Text
                        background='white'>Add Points</Text>
                </GradientButton>
            </Flex>
        </Flex>
    )
}

export default Aeropay