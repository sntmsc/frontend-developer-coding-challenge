import { Flex } from "../../Flex/styled"
import Image from "../../Image/Image"
import Text from "../../Text/Text"
import GradientButton from "../../GradientButton/GradientButton"
export const Card = ({name, category, img}) =>{
    return(
        <Flex
        background='white'
        border='1px solid #DAE4F2'
        w='348px'
        h='433px'
        mb='16px'
        borderRadius='16px'
        direction='column'
        justify='space-between'
        boxShadow='0px 1px 5px rgba(0, 0, 0, 0.08)'>
            <Flex
            w='100%'
            h='344.92px'>
            <Image
            img={img}
            w='280px'
            h='204px'/>
            </Flex>
            <Flex
            h='80px'
            w='100%'
            background='white'
            borderRadius='0 0 16px 16px'
            borderTop='1px solid #DAE4F2'
            align='flex-start'
            direction='column'
            p='16px 24px 24px'>
                <Text
                background='#252F3D'>
                    {name}
                </Text>
                <Text
                boxSize='14px'>
                    {category}
                </Text>
            </Flex>
        </Flex>
    )
}

export const RedeemerButton = ({cost}) =>{
    return(
        <GradientButton
        borderRadius='16px'
        w='348px'
        h='59px'
        background={cost > 2000 ? '#E6EDF7' : ''}
        cursor={cost > 2000 ? '' : 'pointer'}>
            <Text
            background={cost > 2000 ? '#7C899C' : 'white'}>{cost > 2000 ? 'You need' : 'Redeem for'}</Text>
            <Image
            img={cost > 2000 ? './assets/icons/aeropay-disabled.svg' : './assets/icons/aeropay-3.svg'}
            boxSize={cost > 2000 ? '25px' : '24px'}
            m='0 8px'/>
            <Text
            background={cost > 2000 ? '#7C899C' : 'white'}>{cost}</Text>
        </GradientButton>
    )
}

const CardWithButton = ({name, category, img, cost}) =>{
    return(
        <Flex
        mt='80px'
        direction='column'>
            <Card
            name={name}
            category={category}
            img={img}/>
            <RedeemerButton cost={cost}/>
        </Flex>
    )
}
export default CardWithButton