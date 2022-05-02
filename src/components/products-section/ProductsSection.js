import { Flex } from '../Flex/styled' 
import ProductsTitle from './ProductsTitle'
import ProductsOptions from './products-options/ProductsOptions'
import CardWithButton from './products/CardWithButton'
import Text from '../Text/Text'
import Pagination from './products-options/Pagination'

const ProductsSection = () =>{
    return(
        <Flex
        w='90%'
        mt='250px'
        direction='column'>
    <ProductsTitle/>
    <ProductsOptions/>
    <Flex
    wrap='wrap'
    columnGap='24px'>
        <CardWithButton/>
        <CardWithButton/>
        <CardWithButton/>
        <CardWithButton/>
        <CardWithButton/>
        <CardWithButton/>
        <CardWithButton/>
        <CardWithButton/>
        <CardWithButton/>
        <CardWithButton/>
        <CardWithButton/>
        <CardWithButton/>
    </Flex>
    <Flex
    w='100%'>
        <Flex
        flexGrow='1'
        justify='center'>
            <Text>
                prueba
            </Text>
        </Flex>
        <Pagination/>
    </Flex>
        </Flex>
    )
}

export default ProductsSection 