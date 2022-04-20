import * as S from  "./styled"
import Image from "../Image/Image"
import Text from "../Text/Text"

const AeropayButton = () =>{
    return(
        <S.AeropayButtonContainer>
            <Image
            img='./assets/icons/favicon.svg'
            boxSize='28px'
            margin='0 3px 0 0'/>
            <Text
            w='60px'
            weight='800'
            background='gradient'>10.000</Text>
            <Image
            img='./assets/icons/chevron-default.svg'
            boxSize='24px'
            transform='rotate(90deg)'
            margin='0 0 0 10px'/>
        </S.AeropayButtonContainer>
    )
}
export default AeropayButton