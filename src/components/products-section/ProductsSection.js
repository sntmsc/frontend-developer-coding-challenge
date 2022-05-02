import { Flex } from '../Flex/styled' 
import ProductsTitle from './ProductsTitle'
import ProductsOptions from './products-options/ProductsOptions'
import CardWithButton from './products/CardWithButton'
import Text from '../Text/Text'
import Pagination from './products-options/Pagination'
import Image from '../Image/Image'

const ProductsSection = () =>{
    return(
        <Flex
        maxW='1464px'
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
            w='100%'
            mt='82px'
            justify='center'
            position='relative'>
                    <Text
                    background='linear-gradient(102.47deg, #176FEB -7.34%, #FF80FF 180.58%) '
                    mr='5px'>
                        16 of 32
                    </Text>
                    <Text>
                        products
                    </Text>
                <Pagination
                position='absolute'
                left='1075px'/>
            </Flex>
            <Flex
            mt='260px'
            mb='80px'>
                <Image
                w='27.97px'
                h='27.23px'
                img='./assets/icons/github-default.svg'/>
                <Text
                mx='8px'>
                    View this repository
                </Text>
            </Flex>
        </Flex>
    )
}

export default ProductsSection 