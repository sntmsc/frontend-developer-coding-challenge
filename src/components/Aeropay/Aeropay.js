import Image from "../Image/Image"
import Text from "../Text/Text"
import { Flex } from "../Flex/styled"
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
            p='24px'>
                <Flex
                h='148px'
                w='100%'
                boxShadow='0px 2px 8px rgba(0, 0, 0, 0.05)'
                background='#252F3D'
                borderRadius='8px'>

                </Flex>
            </Flex>
        </Flex>
    )
}

export default Aeropay