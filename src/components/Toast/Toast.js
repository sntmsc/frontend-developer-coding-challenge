import { useContext } from 'react'
import * as S from "./styled"
import Text from "../Text/Text"
import Image from "../Image/Image"
import { Flex } from "../Flex/styled"
import { ToastContext } from '../../../context/ToastContext'

const Toast = (props) =>{

    const {toast,setToast} = useContext(ToastContext);

    const toastHandleClose = () => {
        setToast(toast.map((x,i)=>i === props.index ? {...x,fade:'out'} : x));
        setTimeout(()=>{setToast(toast.filter((x,i)=> i !== props.index))},500);
    };

    const statusControl = (success, error) =>
        props.status === 'success' ? success : 
        props.status === 'error' ? error : ''
    
    const eventControl = (text) => {
        if(text === 'black'){
        return props.event === 'product' ?
        statusControl(props.product,'') : 
        statusControl('aeropoints added successfully',
        '')
        }
        else{
        return props.event === 'product' ?
        statusControl('redeemed successfully',
        'There was a problem with the transaction') : 
        statusControl('',
        'There was a problem with the transaction')
        }
    }

    return(
<S.Toast {...props}
border={statusControl('2px solid #29CC74','2px solid #E07F4F')}
bottom={`${(props.index * 90 ) + 20}px`}>

<Image
boxSize='26px'
img={`./assets/icons/system-${statusControl('success', 'error')}.svg`}/>
<S.TextContainer>
    <Text
    background='#252F3D'
    userSelect='none'
    ml='15px'>
        {eventControl('black')}
    </Text>

    <Text
    background='#7C899C'
    ml='8px'
    userSelect='none'>{eventControl('gray')}</Text>
</S.TextContainer>
<Image
boxSize='20px'
img='./assets/icons/cross-default.svg'
cursor='pointer'
onClick={toastHandleClose}/>
</S.Toast>
    )
}
export default Toast