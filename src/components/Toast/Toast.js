import * as S from "./styled";
import Text from "../Text/Text";
import Image from "../Image/Image";
import { Flex } from "../Flex/styled";

const Toast = () =>{
    return(
<S.Toast>
<Flex
justify='flex-start'>
<Image
boxSize='26px'
img='./assets/icons/system-success.svg'/>

    <Text
    background='#252F3D'
    userSelect='none'
    ml='15px'>Product name </Text>
    <Text
    background='#7C899C'
    ml='8px'
    userSelect='none'>redeemed successfully</Text>
</Flex>
<Image
boxSize='20px'
img='./assets/icons/cross-default.svg'
cursor='pointer'/>
</S.Toast>
    )
}
export default Toast