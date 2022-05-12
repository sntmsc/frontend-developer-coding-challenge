import { Flex } from '../Flex/styled' 
import ProductsTitle from './ProductsTitle'
import ProductsOptions from './products-options/ProductsOptions'
import CardWithButton from './products/CardWithButton'
import Text from '../Text/Text'
import Pagination from './products-options/Pagination'
import { useState, useEffect } from 'react' 

const ProductsSection = ({products}) =>{
    const [dataProducts, setDataProducts] = useState();

    useEffect(()=>{
        setDataProducts(products);
    },[products]);


    const sortFunctions = {
        lowest: ()=>{setDataProducts([...dataProducts].sort((a,b) => a.cost - b.cost))},
        highest: ()=>{setDataProducts([...dataProducts].sort((a,b) => b.cost - a.cost))},
        recent: ()=> {setDataProducts(products)}
    }

    return(
        <Flex
        maxW='1464px'
        mt='250px'
        direction='column'>
    <ProductsTitle/>
    <ProductsOptions
    sortFunctions={sortFunctions}/>
            <Flex
            wrap='wrap'
            columnGap='24px'>
                {dataProducts ? dataProducts.map(x=>
                        <CardWithButton
                        key={x._id}
                        name={x.name}
                        category={x.category}
                        cost={x.cost}
                        img={x.img.url}/>
                ) : <p>loading</p>}
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
        </Flex>
    )
}

export default ProductsSection 