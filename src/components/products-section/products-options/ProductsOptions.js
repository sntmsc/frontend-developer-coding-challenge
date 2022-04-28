import { Flex } from '../../Flex/styled' 
import Text from '../../Text/Text'
import Image from '../../Image/Image'
import { Divider } from '../../Divider/styled'
import GradientButton from '../../GradientButton/GradientButton'
import Selector from './Selector'


const ProductsOptions = () =>{
    return(
        <Flex
        mt='40px'
        w='100%'
        justify='flex-start'>
            <Flex
            justify='flex-start'>
                <Text>
                    Filter by: 
                </Text>
                <Selector/>
                <Divider/>
                <Text
                mx='16px'>
                    Sort by: 
                </Text>
                <GradientButton
                borderRadius='12px'
                w='165px'
                h='43px'
                m='0 12px'>Most Recent</GradientButton>
                <GradientButton
                background='#E6F0FF'
                textColor='-webkit-linear-gradient(left,#176FEB, #FF80FF)'
                borderRadius='12px'
                w='165px'
                h='43px'
                m='0 12px'>Lowest Price</GradientButton>
                <GradientButton
                background='#E6F0FF'
                textColor='-webkit-linear-gradient(left,#176FEB, #FF80FF)'
                borderRadius='12px'
                w='165px'
                h='43px'
                m='0 12px'>Highest Price</GradientButton>
            </Flex>
            <Flex
            ml='140px'
            w='250px'
            h='59px'
            p='16px'
            justify='space-between'
            align='center'
            border='1px solid #DAE4F2'
            borderRadius='16px'>
                    <Flex
                    boxSize='40px'
                    background='#E6EDF7'
                    borderRadius='8px'>
                        <Image
                        img='./assets/icons/chevron-default.svg'
                        transform='rotate(-180deg)'
                        boxSize='15px'/>
                    </Flex>
                    <Text
                    background='-webkit-linear-gradient(left,#176FEB, #FF80FF)'>
                        Page 1 of 2</Text>
                    <Flex
                    boxSize='40px'
                    background='#E5F0FF'
                    borderRadius='8px'>
                        <Image
                        img='./assets/icons/chevron-active.svg'
                        boxSize='15px'/>
                    </Flex>
            </Flex>
        </Flex>
    )
}

export default ProductsOptions 