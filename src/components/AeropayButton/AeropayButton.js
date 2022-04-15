import * as S from  "./styled"
import Image from "../Image/Image"
import Text from "../Text/Text"
const AeropayButtonContainer = (props)=> {
    return(
        <S.AeropayButtonContainer {...props}>
            {props.children}
        </S.AeropayButtonContainer>
    )
}
const AeropayButton = () =>{
    return(
        <AeropayButtonContainer>
            <Image
            img='./assets/icons/favicon.svg'
            boxSize='24px'/>
            <Text>1000</Text>
            <Image
            img='./assets/icons/chevron-default.svg'
            boxSize='24px'
            transform='rotate(90deg)'/>
        </AeropayButtonContainer>
    )
}
export default AeropayButton