import { useState, useEffect } from 'react'
import { Flex } from '../Flex/styled' 
import ProductsTitle from './ProductsTitle'
import ProductsOptions from './products-options/ProductsOptions'
import CardWithButton from './products/CardWithButton'
import Text from '../Text/Text'
import Pagination from './products-options/Pagination'
import handleOptions from './products-options/handleOptions'

const ProductsSection = ({products}) =>{
    const [dataProducts, setDataProducts] = useState([]);
    const [objOptions, setObjOptions] = useState({
        filter: 'All Products',
        sort: 'Most Recent'
    });

    useEffect(()=>{
        setDataProducts(products);
    },[products]);

    useEffect(()=>{
        const reorderedProducts = handleOptions(objOptions,products);
        setDataProducts(reorderedProducts);
    },[objOptions]);

    ////////////////////////// PAGINATION /////////////////////////

    const itemsPerPage = 16;
    const [visibleItems, setVisibleItems] = useState([]);
    const setItems = (firstIndex)=> setVisibleItems([...dataProducts].splice(firstIndex,itemsPerPage));
    const totalItems = dataProducts.length;

    //////////////////////////////////////////////////////////////


  console.log(objOptions)

    return(
        <Flex
        maxW='1464px'
        mt='250px'
        direction='column'>
    <ProductsTitle/>
    <ProductsOptions
    setItems={(firstIndex)=>setItems(firstIndex)}
    itemsPerPage={itemsPerPage}
    totalItems={totalItems}
    filterSelected={objOptions.filter}
    setFilterSelected={(filter)=>setObjOptions({...objOptions,filter})}
    sortSelected={objOptions.sort}
    setSortSelected={(sort)=>setObjOptions({...objOptions,sort})}/>
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
                        16 of {totalItems}
                    </Text>
                    <Text>
                        products
                    </Text>
                    <Pagination
                position='absolute'
                left='1075px'
                setItems={(firstIndex)=>setItems(firstIndex)}
                itemsPerPage={itemsPerPage}
                totalItems={totalItems}/>
            </Flex>
        </Flex>
    )
}

export default ProductsSection 