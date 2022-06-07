import { Flex } from '../Flex/styled'
import Text from '../Text/Text'
import * as S from './../Subtitle/styled'

const ProductsTitle = () =>{
    return(
        <S.ProductsTitleContainer>
            <S.Subtitle
            color='#4573ef'
            mr='11px'>
                tech
            </S.Subtitle>
            <S.Subtitle>
                products
            </S.Subtitle>
        </S.ProductsTitleContainer>
    )
}

export default ProductsTitle