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
        w='100%'>
            <Flex
            justify='flex-start'>
                <Text>
                    Filter by: 
                </Text>
            </Flex>
        </Flex>
    )
}
const ProductsSection = () =>{
    return(
        <Flex
        w='90%'
        h='5em'
        mt='159px'
        direction='column'>
    <ProductsTitle/>
    <ProductsOptions/>
        </Flex>
    )
}

export default ProductsSection 