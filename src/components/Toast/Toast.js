import * as S from "./styled";
import Text from "../Text/Text";
import Image from "../Image/Image";
import { Flex } from "../Flex/styled";

const Toast = (props) =>{

    const typeControl = (success, error) => 
        props.type === 'success' ? success : 
        props.type === 'error' ? error : ''

    return(
<S.Toast {...props}
border={typeControl('2px solid #29CC74','2px solid #E07F4F')}>
<Flex
justify='flex-start'>
<Image
boxSize='26px'
img={`./assets/icons/system-${typeControl('success', 'error')}.svg`}/>

    <Text
    background='#252F3D'
    userSelect='none'
    ml='15px'>{typeControl('Product name','')}</Text>
    <Text
    background='#7C899C'
    ml='8px'
    userSelect='none'>{typeControl('redeemed successfully',
     'There was a problem with the transaction')}</Text>
</Flex>
<Image
boxSize='20px'
img='./assets/icons/cross-default.svg'
cursor='pointer'
onClick={props.handleClose}/>
</S.Toast>
    )
}
export default Toast