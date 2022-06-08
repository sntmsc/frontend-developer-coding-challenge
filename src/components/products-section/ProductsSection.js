import { useState, useEffect, useMemo } from 'react'
import { Flex } from '../Flex/styled' 
import ProductsTitle from './ProductsTitle'
import ProductsOptions from './products-options/ProductsOptions'
import CardWithButton from './products/CardWithButton'
import Text from '../Text/Text'
import Pagination from './products-options/Pagination'
import handleOptions from './products-options/handleOptions'
import { itemsPerPage } from '../../../utils/config'
import * as S from './styled'

const defaultOptions = {
    filter: 'All Products',
    sort: 'Most Recent',
}
const ProductsSection = ({products}) =>{
    const [objOptions, setObjOptions] = useState(defaultOptions);

    const dataProducts = useMemo(()=>{
        if(!products) return [];
        const reorderedProducts = handleOptions(objOptions, products);
        return reorderedProducts;
    },[objOptions]);

    ////////////////////////// PAGINATION /////////////////////////

    const [ currentPage, setCurrentPage ] = useState(1);
    const [visibleItems, setVisibleItems] = useState([]);
    const totalItems = dataProducts.length;
    const numberCurrentProducts = totalItems >= (currentPage*itemsPerPage) ? (currentPage*itemsPerPage) :totalItems;

    useEffect(()=>{
        const firstIndexOfPage = (currentPage - 1) * itemsPerPage
        setVisibleItems([...dataProducts].splice(firstIndexOfPage,itemsPerPage));
        },[objOptions,currentPage]);
    //////////////////////////////////////////////////////////////

    return(
        <Flex
        id='products-section'
        w='100%'
        maxW='1460px'
        mt='250px'
        direction='column'>
            <ProductsTitle/>
            <ProductsOptions
            totalItems={totalItems}
            filterSelected={objOptions.filter}
            setFilterSelected={(filter)=>setObjOptions({...objOptions,filter})}
            sortSelected={objOptions.sort}
            setSortSelected={(sort)=>setObjOptions({...objOptions,sort})}
            currentPage={currentPage}
            setCurrentPage={(value)=>setCurrentPage(value)}/>
            <S.CardsContainer
            wrap='wrap'
            columnGap='24px'>
                {products        ? 
                    visibleItems.map(x=>
                        <CardWithButton
                        key={x._id}
                        id={x._id}
                        name={x.name}
                        category={x.category}
                        cost={x.cost}
                        img={x.img.url}/>)   : 
                    [...Array(16)].map((x,i) =>
                        <CardWithButton
                        key={i}
                        id={i}
                        name={'N/A'}
                        category={''}
                        cost={0}
                        img={'./assets/icons/logo.png'}/>)}
            </S.CardsContainer>
            <S.FooterProducts>
                <S.PaginationContainer>
                    <Pagination
                    itemsPerPage={itemsPerPage}
                    totalItems={totalItems}
                    currentPage={currentPage}
                    setCurrentPage={(value)=>setCurrentPage(value)}/>
                </S.PaginationContainer>
                <Flex
                justify='center'
                align='center'>    
                    <Text
                    background='linear-gradient(102.47deg, #176FEB -7.34%, #FF80FF 180.58%) '
                    mr='5px'>
                        {numberCurrentProducts} of {totalItems}
                    </Text>
                    <Text>
                        products
                    </Text>
                </Flex>
            </S.FooterProducts>
            
        </Flex>
    )
}

export default ProductsSection 