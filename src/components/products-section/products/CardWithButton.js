import { Flex } from "../../Flex/styled"
import Image from "../../Image/Image"
import Text from "../../Text/Text"
import GradientButton from "../../GradientButton/GradientButton"
export const Card = () =>{
    return(
        <Flex
        background='white'
        border='1px solid #DAE4F2'
        w='348px'
        h='433px'
        mb='16px'
        borderRadius='16px'
        direction='column'
        justify='space-between'
        boxShadow='0px 1px 5px rgba(0, 0, 0, 0.08)'>
            <Flex
            w='100%'
            h='344.92px'>
            <Image
            img='./assets/Chromecast-x2.png'
            w='280px'
            h='204px'/>
            </Flex>
            <Flex
            h='80px'
            w='100%'
            background='white'
            borderRadius='0 0 16px 16px'
            borderTop='1px solid #DAE4F2'
            align='flex-start'
            direction='column'
            p='16px 24px 24px'>
                <Text
                background='#252F3D'>
                    Chromecast 3 
                </Text>
                <Text
                boxSize='14px'>
                    SMART HOME
                </Text>
            </Flex>
        </Flex>
    )
}

export const RedeemerButton = () =>{
    return(
        <GradientButton
        borderRadius='16px'
        w='348px'
        h='59px'>
            <Text
            background='white'>Redeem for</Text>
            <Image
            img='./assets/icons/aeropay-3.svg'
            boxSize='24px'
            m='0 8px'/>
            <Text
            background='white'>12.050</Text>
        </GradientButton>
    )
}

const CardWithButton = () =>{
    return(
        <Flex
        mt='80px'
        direction='column'>
            <Card/>
            <RedeemerButton/>
        </Flex>
    )
}
export default CardWithButton