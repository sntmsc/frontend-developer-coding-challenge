import { useState, useEffect, useMemo } from 'react'
import { Flex } from '../Flex/styled' 
import ProductsTitle from './ProductsTitle'
import ProductsOptions from './products-options/ProductsOptions'
import CardWithButton from './products/CardWithButton'
import Text from '../Text/Text'
import Pagination from './products-options/Pagination'
import handleOptions from './products-options/handleOptions'

const itemsPerPage = 16;
const defaultOptions = {
    filter: 'All Products',
    sort: 'Most Recent',
    firstIndexOfPage: 0
}
const ProductsSection = ({products}) =>{
    const [objOptions, setObjOptions] = useState(defaultOptions);

    const dataProducts = useMemo(()=>{
        if(!products) return [];
        const reorderedProducts = handleOptions(objOptions,itemsPerPage, products);
        return reorderedProducts;
    },[objOptions]);

    ////////////////////////// PAGINATION /////////////////////////

    const [ currentPage, setCurrentPage ] = useState(1);
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
    setFirstIndex={(firstIndexOfPage)=>setObjOptions({...objOptions,firstIndexOfPage})}
    itemsPerPage={itemsPerPage}
    totalItems={totalItems}
    filterSelected={objOptions.filter}
    setFilterSelected={(filter)=>setObjOptions({...objOptions,filter})}
    sortSelected={objOptions.sort}
    setSortSelected={(sort)=>setObjOptions({...objOptions,sort})}
    currentPage={currentPage}
    setCurrentPage={(value)=>setCurrentPage(value)}/>
            <Flex
            wrap='wrap'
            columnGap='24px'>
                {products ? visibleItems.map(x=>
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
                        {currentPage*itemsPerPage} of {totalItems}
                    </Text>
                    <Text>
                        products
                    </Text>
                    <Pagination
                position='absolute'
                left='1075px'
                setFirstIndex={(firstIndexOfPage)=>setObjOptions({...objOptions,firstIndexOfPage})}
                itemsPerPage={itemsPerPage}
                totalItems={totalItems}
                currentPage={currentPage}
                setCurrentPage={(value)=>setCurrentPage(value)}/>
            </Flex>
        </Flex>
    )
}

export default ProductsSection 