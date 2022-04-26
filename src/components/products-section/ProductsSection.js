import { Flex } from '../Flex/styled' 
import Text from '../Text/Text'
import Image from '../Image/Image'
import { Divider } from '../Divider/styled'
import GradientButton from '../GradientButton/GradientButton'
const ProductsTitle = () =>{
    return(
        <Flex
        w='100%'
        justify='flex-start'
        align='center'>
            <Text
            background='#4573ef'
            fontSize='48px'
            mr='15px'
            >TECH</Text>
            <Text
            background='black'
            fontSize='48px'>PRODUCTS</Text>
        </Flex>
    )
}

const ProductsOptions = () =>{
    return(
        <Flex
        my='40px'
        w='100%'
        justify='flex-start'
        position='relative'>
            <Flex
            justify='flex-start'>
                <Text>
                    Filter by: 
                </Text>
                <Flex
                ml='16px'
                w='256px'
                h='59px'
                p='16px 8px 16px 24px'
                justify='space-between'
                align='center'
                border='1px solid #DAE4F2'
                borderRadius='16px'>
                    <Text>
                        All Products
                    </Text>
                    <Image
                    img='./assets/icons/black-arrow.png'
                    boxSize='8px'/>
                </Flex>
                <Flex
                position='absolute'
                top='63px'
                left='100px'
                w='256px'
                h='271px'
                background='white'
                border='1px solid #DAE4F2'
                borderRadius='8px'
                align='flex-start'>
                    <Flex
                    w='100%'
                    h='51px'
                    justify='flex-start'
                    p='12px 24px'>
                        <Text>
                            All Products
                        </Text>
                    </Flex>
                </Flex>
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
const ProductsSection = () =>{
    return(
        <Flex
        w='90%'
        mt='250px'
        direction='column'>
    <ProductsTitle/>
    <ProductsOptions/>
        </Flex>
    )
}

export default ProductsSection 