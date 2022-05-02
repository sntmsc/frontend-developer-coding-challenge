import { Flex } from '../../Flex/styled' 
import Text from '../../Text/Text'
import Image from '../../Image/Image'


const Pagination = () =>{
    return(
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
                borderRadius='8px'
                cursor='pointer'>
                    <Image
                    img='./assets/icons/chevron-default.svg'
                    transform='rotate(-180deg)'
                    boxSize='15px'/>
                </Flex>
                <Text
                background='-webkit-linear-gradient(left,#176FEB, #FF80FF)'
                userSelect='none'>
                    Page 1 of 2</Text>
                <Flex
                boxSize='40px'
                background='#E5F0FF'
                borderRadius='8px'
                cursor='pointer'>
                    <Image
                    img='./assets/icons/chevron-active.svg'
                    boxSize='15px'/>
                </Flex>
        </Flex>
    )
}

export default Pagination