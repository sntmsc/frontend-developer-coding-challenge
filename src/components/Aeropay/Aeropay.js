import Image from "../Image/Image"
import Text from "../Text/Text"
import { Flex } from "../Flex/styled"
import GradientButton from "../GradientButton/GradientButton"
const Aeropay = () =>{
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
                    Add balance
                </Text>
            </Flex>
            <Flex
            w='100%'
            p='24px'
            direction='column'>
                <Flex
                h='148px'
                w='100%'
                boxShadow='0px 2px 8px rgba(0, 0, 0, 0.05)'
                background='#252F3D'
                borderRadius='8px'>
                </Flex>
                <Flex
                w='100%'
                mt='44px'
                justify='space-around'>
                    <GradientButton
                    w='85.33px'
                    h='35px'
                     background='#E6F0FF'
                     textColor='-webkit-linear-gradient(left,#176FEB, #FF80FF)'
                     borderRadius='12px'>
                         1000
                     </GradientButton>
                    <GradientButton
                    w='85.33px'
                    h='35px'
                    borderRadius='12px'>
                        5000
                    </GradientButton>
                    <GradientButton
                    w='85.33px'
                    h='35px'
                     background='#E6F0FF'
                     textColor='-webkit-linear-gradient(left,#176FEB, #FF80FF)'
                     borderRadius='12px'>
                         7500
                     </GradientButton>
                </Flex>
                <GradientButton
                    borderRadius='16px'
                    w='100%'
                    h='51px'
                    m='24px 0 0 0'>
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