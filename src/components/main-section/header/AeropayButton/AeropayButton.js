import * as S from  "./styled"
import Image from "./../../../Image/Image"
import Text from "./../../../Text/Text"

const AeropayButton = ({handleClick, aeropoints, isLoading, isVisible}) =>{

    return(
        <S.AeropayButtonContainer
            onClick={handleClick}>
            <Image
            img='./assets/icons/favicon.svg'
            alt='favicon'
            margin='0 3px 0 0'/>
            <Text
            w='60px'
            weight='600'
            background='gradient'
            fontSize={aeropoints === 0 || isLoading ? '14px' : ''}
            userSelect='none'>
                {aeropoints === 0  || isLoading ? 'loading..' : aeropoints}
            </Text>
            <Image
            img={`./assets/icons/chevron-${isVisible.render ? 'active' : 'default'}.svg`}
            alt='arrow toggle visibility'
            transform={`rotate(${isVisible.render ? 270 : 90}deg)`}
            margin='0 0 0 10px'/>
        </S.AeropayButtonContainer>
    )
}
export default AeropayButton