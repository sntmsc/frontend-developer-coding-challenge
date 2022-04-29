import { Flex } from '../../Flex/styled' 
import Text from '../../Text/Text'
import { Divider } from '../../Divider/styled'
import GradientButton from '../../GradientButton/GradientButton'
import Selector from './Selector'
import Pagination from './Pagination'

const ProductsOptions = () =>{
    const filterOptions = ['All Products', 'Gaming', 'Audio', 'Smart Home', 'Monitors & TV']
    return(
        <Flex
        mt='40px'
        w='100%'
        justify='flex-start'>
            <Flex
            justify='flex-start'>
                <Text>
                    Filter by: 
                </Text>
                <Selector
                options={filterOptions}/>
                <Divider/>
                <Text
                mx='16px'>
                    Sort by: 
                </Text>
                <GradientButton
                borderRadius='12px'
                w='165px'
                h='43px'
                m='0 12px'>Most Recent</GradientButton>
                <GradientButton
                background='#E6F0FF'
                textColor='-webkit-linear-gradient(left,#176FEB, #FF80FF)'
                borderRadius='12px'
                w='165px'
                h='43px'
                m='0 12px'>Lowest Price</GradientButton>
                <GradientButton
                background='#E6F0FF'
                textColor='-webkit-linear-gradient(left,#176FEB, #FF80FF)'
                borderRadius='12px'
                w='165px'
                h='43px'
                m='0 12px'>Highest Price</GradientButton>
            </Flex>
            <Pagination/>
        </Flex>
    )
}

export default ProductsOptions 