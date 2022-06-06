import { Flex } from '../../Flex/styled'
import Text from '../../Text/Text'
import * as S from './styled'
import GradientButton from '../../GradientButton/GradientButton'
import Selector from './Selector'
import Pagination from './Pagination'


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
     setFilterSelected, totalItems, sortSelected,
      setSortSelected, currentPage, setCurrentPage}) =>{


    return(
        <S.OptionsContainer>
            <S.FilterSortContainer>
                <S.ConditionalContainer>
                    <Text
                    w='81px'>
                        Filter by: 
                    </Text>
                </S.ConditionalContainer>
                <S.ConditionalDirection>
                    <Selector
                    filterSelected={filterSelected}
                    setFilterSelected={setFilterSelected}
                    setCurrentPage={setCurrentPage}/>
                    <S.ConditionalContainer>
                        <S.Divider/>
                        <Text
                        w='81px'>
                            Sort by: 
                        </Text>
                    </S.ConditionalContainer>
                    <Flex>
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
                </S.ConditionalDirection>
            </S.FilterSortContainer>
                <Pagination
                totalItems={totalItems}
                currentPage={currentPage}
                setCurrentPage={(value)=>setCurrentPage(value)}/>
        </S.OptionsContainer>
    )
}

export default ProductsOptions 