import { useContext, useState } from 'react'
import { Flex } from "../../Flex/styled"
import Image from "../../Image/Image"
import Text from "../../Text/Text"
import GradientButton from "../../GradientButton/GradientButton"
import { ContextAeropoints } from '../../../../context/Aeropoints'
import { ToastContext } from '../../../../context/ToastContext'
import fetchPostAndGet from '../../../../utils/api/fetchPostAndGet'
import * as S from './styled'

export const Card = ({name, category, img}) =>{

    return(
        <S.CardContainer>
            <Flex
            w='100%'
            h='344.92px'>
            <Image
            img={img}
            w={name === 'N/A' ? '77.5px' : '280px'}
            h={name === 'N/A' ? '72px' : '204px'}/>
            </Flex>
            <Flex
            h='88px'
            w='100%'
            background='white'
            borderRadius='0 0 16px 16px'
            borderTop='1px solid #DAE4F2'
            align='flex-start'
            direction='column'
            p='16px 24px 24px'>
                <S.ProductName
                background='#252F3D'>
                    {name}
                </S.ProductName>
                <S.ProductDescription
                boxSize='14px'>
                    {category}
                </S.ProductDescription>
            </Flex>
        </S.CardContainer>
    )
}

export const RedeemerButton = ({cost, id, name}) =>{
    const [isLoading, setIsLoading] = useState(false);
    const {aeropoints, setAeropoints} = useContext(ContextAeropoints);
    const {toast,setToast} = useContext(ToastContext);

const handleClick = () =>{
    setIsLoading(true);
    const postObject ={'productId': id};
    fetchPostAndGet(
        postObject,
        process.env.NEXT_PUBLIC_POST_REDEEM,
        (value)=> setAeropoints(value),
        toast,
        (value)=> setToast(value),
        'product',
        name,
        (value)=> setIsLoading(value)
    )
}


    return(
        <GradientButton
        borderRadius='16px'
        w='348px'
        h='59px'
        background={cost > aeropoints ? '#E6EDF7' : ''}
        cursor={cost > aeropoints || name === 'N/A' ? ''  : 'pointer'}
        opacity={isLoading || name === 'N/A' ? '0.7' : ''}
        onClick={name === 'N/A' ? ()=>{return false} : handleClick}> 
            <Text
            background={cost > aeropoints ? '#7C899C' : 'white'}>
                {name === 'N/A' ? '' : isLoading ? 'Processing...' : cost > aeropoints ? 'You need' : 'Redeem for'}
            </Text>
            { !isLoading && 
                <> 
                    <Image
                    img={cost > aeropoints ? './assets/icons/aeropay-disabled.svg' : './assets/icons/aeropay-3.svg'}
                    boxSize={cost > aeropoints ? '25px' : '24px'}
                    m='0 8px'/>
                    <Text
                    background={cost > aeropoints ? '#7C899C' : 'white'}>
                        {cost}
                    </Text>
                </> 
            }
        </GradientButton>
    )
}

const CardWithButton = ({name, category, img, cost, id}) =>{
    return(
        <Flex
        mt='80px'
        direction='column'>
            <Card
            name={name}
            category={category}
            img={img}/>
            <RedeemerButton cost={cost} id={id} name={name}/>
        </Flex>
    )
}
export default CardWithButton