import { Flex } from '../Flex/styled' 
import Text from '../Text/Text'


const ProductsTitle = () =>{
    return(
        <Flex
        w='100%'
        justify='flex-start'
        align='center'>
            <Text
            background='#4573ef'
            fontSize='48px'
            weight='900'
            mr='15px'
            >TECH</Text>
            <Text
            background='black'
            fontSize='48px'
            weight='900'>PRODUCTS</Text>
        </Flex>
    )
}

export default ProductsTitle