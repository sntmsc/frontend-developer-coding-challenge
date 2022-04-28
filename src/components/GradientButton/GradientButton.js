import Text from "../Text/Text";
import * as S from "./styled";
const GradientButton = (props) =>{
    return(
        <S.ButtonContainer
        {...props}>
            {typeof props.children === 'string' ?
                <Text
                background={props.textColor ? props.textColor : 'white'}>
                    {props.children}
                </Text>                             :
                <>
                {props.children}
                </>
            }
        </S.ButtonContainer>
    )
}

export default GradientButton