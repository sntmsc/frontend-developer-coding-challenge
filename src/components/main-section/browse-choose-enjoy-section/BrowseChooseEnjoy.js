import { Flex } from '../../Flex/styled'
import * as S from './styled'

const WalkthroughCard = ({title, description, img, icon, transform, zIndex, right, left, bottom, top})=>{
    return(
        <S.WalkthroughContainer
        transform={transform}
        zIndex={zIndex}
        right={right}
        left={left}
        bottom={bottom}
        top={top}>
            <S.WalkthroughImage
            img={img}/>
            <Flex
            w='100%'
            h='154px'
            p='16px 24px 24px 24px'
            gap='12px'
            direction='column'
            justify='flex-start'
            align='flex-start'
            background='white'
            border='1px solid #DAE4F2'
            borderRadius='0px 0px 24px 24px'>
                <Flex
                justify='flex-start'>
                    <Flex
                    background='#E5F0FF'
                    borderRadius='8px'
                    padding='4px'
                    align='flex-start'
                    justify='flex-start'
                    mr='16px'>
                        <S.WalkthroughIcon
                        img={icon}/>
                    </Flex>
                    <S.WalkthroughTitle
                    background='gradient'
                    fontSize='32px'
                    userSelect='none'
                    weight='900'>
                        {title}
                    </S.WalkthroughTitle>
                </Flex>
                <S.WalkthroughDescription
                textAlign='left'
                w='400px'>
                    {description}
                </S.WalkthroughDescription>
            </Flex>
        </S.WalkthroughContainer>
    )
}
const BrowseChooseEnjoy = () =>{
    return(
        <S.CardsContainer>
            <WalkthroughCard
            img='./assets/illustrations/walkthroug-1-desktop.png'
            icon='./assets/icons/walkthrough-1.svg'
            title='1—BROWSE'
            description="Browse our tech catalog with more than 20 bottom tech products"
            transform='rotate(-3deg)'
            zIndex='1'
            left='85px'
            bottom='10px'/>
            <WalkthroughCard
            img='./assets/illustrations/walkthroug-2-desktop.png'
            icon='./assets/icons/walkthrough-3.svg'
            title='2—CHOOSE'
            description="Exchange your hard earned AeroPoints for the item you want"
            transform=''
            zIndex='2'
            bottom='60px'/>
            <WalkthroughCard
            img='./assets/illustrations/walkthroug-3-desktop.png'
            icon='./assets/icons/walkthrough-2.svg'
            title='3—ENJOY!'
            description="All done, you can relax! We'll take care of delivery of your tech item!"
            transform='rotate(3deg)'
            zIndex='3'
            right='85px'
            bottom='10px'/>
        </S.CardsContainer>
    )
}

export default BrowseChooseEnjoy