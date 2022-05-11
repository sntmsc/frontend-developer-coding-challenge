import { Flex } from '../../Flex/styled'
import Text from '../../Text/Text'
import { Divider } from '../../Divider/styled'
import GradientButton from '../../GradientButton/GradientButton'
import Selector from './Selector'
import Pagination from './Pagination'
import { useState } from 'react'

const SortGradientButton = ({children, sortSelected, setSortSelected, lowestPriceOrder, highestPriceOrder}) =>{

    const handleClick = () => {
        setSortSelected(children);

        if(children === 'Lowest Price'){
            lowestPriceOrder();
        } 
        else if(children === 'Highest Price') {
            highestPriceOrder();
        }
    }

    return(
        <GradientButton
        onClick={handleClick}
        borderRadius='12px'
        w='165px'
        h='43px'
        m='0 12px'
        background={sortSelected === children ? '' : '#E6F0FF'}
        textColor={sortSelected === children ? '' : 
        '-webkit-linear-gradient(left,#176FEB, #FF80FF)'}>
            {children}
        </GradientButton>
    )
}

const ProductsOptions = ({lowestPriceOrder, highestPriceOrder}) =>{

    const filterOptions = ['All Products', 'Gaming', 'Audio', 'Smart Home', 'Monitors & TV'];
    const [sortSelected, setSortSelected] = useState('Most Recent');

    return(
        <Flex
        mt='40px'
        w='100%'
        justify='flex-start'>
            <Flex
            justify='flex-start'>
                <Text
                w='81px'>
                    Filter by: 
                </Text>
                <Selector
                options={filterOptions}/>
                <Divider/>
                <Text
                w='81px'>
                    Sort by: 
                </Text>
                <SortGradientButton
                sortSelected={sortSelected}
                setSortSelected={(value)=> setSortSelected(value)}
                lowestPriceOrder={lowestPriceOrder}
                highestPriceOrder={highestPriceOrder}>
                    Most Recent
                </SortGradientButton>
                <SortGradientButton
                sortSelected={sortSelected}
                setSortSelected={(value)=> setSortSelected(value)}
                lowestPriceOrder={lowestPriceOrder}
                highestPriceOrder={highestPriceOrder}>
                    Lowest Price
                </SortGradientButton>
                <SortGradientButton
                sortSelected={sortSelected}
                setSortSelected={(value)=> setSortSelected(value)}
                lowestPriceOrder={lowestPriceOrder}
                highestPriceOrder={highestPriceOrder}>
                    Highest Price
                </SortGradientButton>
            </Flex>
            <Pagination/>
        </Flex>
    )
}

export default ProductsOptions 