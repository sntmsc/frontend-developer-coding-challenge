import { Flex } from '../../Flex/styled'
import Text from '../../Text/Text'
import { Divider } from '../../Divider/styled'
import GradientButton from '../../GradientButton/GradientButton'
import Selector from './Selector'
import Pagination from './Pagination'
import { useState } from 'react'

const SortGradientButton = ({children, sortSelected, setSortSelected}) =>{

    const handleClick = () => {
        setSortSelected(children);
    }

    return(
        <GradientButton
        onClick={handleClick}
        borderRadius='12px'
        w='165px'
        h='43px'
        m='0 12px'
        cursor='pointer'
        background={sortSelected === children ? '' : '#E6F0FF'}
        textColor={sortSelected === children ? '' : 
        '-webkit-linear-gradient(left,#176FEB, #FF80FF)'}>
            {children}
        </GradientButton>
    )
}

const ProductsOptions = ({ filterSelected,
     setFilterSelected, setItems, itemsPerPage, totalItems, sortSelected,
      setSortSelected, currentPage, setCurrentPage}) =>{


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
                filterSelected={filterSelected}
                setFilterSelected={setFilterSelected}/>
                <Divider/>
                <Text
                w='81px'>
                    Sort by: 
                </Text>
                <SortGradientButton
                sortSelected={sortSelected}
                setSortSelected={(value)=> setSortSelected(value)}>
                    Most Recent
                </SortGradientButton>
                <SortGradientButton
                sortSelected={sortSelected}
                setSortSelected={(value)=> setSortSelected(value)}>
                    Lowest Price
                </SortGradientButton>
                <SortGradientButton
                sortSelected={sortSelected}
                setSortSelected={(value)=> setSortSelected(value)}>
                    Highest Price
                </SortGradientButton>
            </Flex>
            <Pagination
            setItems={(firstIndex)=>setItems(firstIndex)}
            itemsPerPage={itemsPerPage}
            totalItems={totalItems}
            currentPage={currentPage}
            setCurrentPage={(value)=>setCurrentPage(value)}/>
        </Flex>
    )
}

export default ProductsOptions 