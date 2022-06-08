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
bottom={`${(props.index * 100 ) + 20}px`}>
    <Image
    boxSize='26px'
    img={`./assets/icons/system-${statusControl('success', 'error')}.svg`}
    alt='status icon'/>
    <S.TextContainer>
        <Text
        background='#252F3D'
        userSelect='none'
        textAlign='left'>
            {eventControl('black')}
        </Text>
        <Text
        background='#7C899C'
        textAlign='left'
        userSelect='none'>{eventControl('gray')}</Text>
    </S.TextContainer>
    <Image
    boxSize='20px'
    img='./assets/icons/cross-default.svg'
    alt='close icon'
    cursor='pointer'
    onClick={toastHandleClose}/>
</S.Toast>
    )
}
export default Toast