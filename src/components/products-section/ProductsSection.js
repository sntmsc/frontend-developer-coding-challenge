import { Flex } from '../Flex/styled' 
import ProductsTitle from './ProductsTitle'
import ProductsOptions from './products-options/ProductsOptions'
import CardWithButton from './products/CardWithButton'

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
        </Flex>
    )
}

export default ProductsSection 