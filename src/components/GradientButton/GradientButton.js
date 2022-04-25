import Text from "../Text/Text";
import * as S from "./styled";
const GradientButton = (props) =>{
    return(
        <S.ButtonContainer
        {...props}>
            <Text
            background={props.textColor ? props.textColor : 'white'}>
                {props.children}
            </Text>
        </S.ButtonContainer>
    )
}

export default GradientButton