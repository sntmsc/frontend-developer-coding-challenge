import { Flex } from '../../Flex/styled' 
import Text from '../../Text/Text'
import Image from '../../Image/Image'



const Selector = () =>{
    return(
        <Flex
        position='relative'>
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
            left='15px'
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
        </Flex>
    )
}

export default Selector