import { Flex } from '../Flex/styled'
import Text from '../Text/Text'
import * as S from './../Subtitle/styled'

const ProductsTitle = () =>{
    return(
        <Flex
        w='100%'
        justify='flex-start'
        align='center'>
            <S.Subtitle
            color='#4573ef'
            mr='11px'>
                tech
            </S.Subtitle>
            <S.Subtitle>
                products
            </S.Subtitle>
        </Flex>
    )
}

export default ProductsTitle