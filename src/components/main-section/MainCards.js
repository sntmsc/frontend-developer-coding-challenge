import { Flex } from '../Flex/styled'
import Image from '../Image/Image'
import Text from '../Text/Text'

const WalkthroughCard = ({title, description, img, icon, transform, zIndex, right, left, bottom})=>{
    return(
        <Flex
        background='white'
        h='676px'
        w='532px'
        p='12px'
        border='1px solid #DAE4F2'
        borderRadius='32px'
        boxShadow='0px 2px 40px rgba(0, 0, 0, 0.05)'
        transform={transform}
        align='flex-start'
        direction='column'
        zIndex={zIndex}
        position='absolute'
        right={right}
        left={left}
        bottom={bottom}>
            <Flex
            background='linear-gradient(to left,rgba(255, 128, 255, .9),rgba(23, 111, 235, .4))'
            w='508px'
            h='498px'
            borderRadius='32px'
            overflow='hidden'
            justify='flex-start'>
                <Image
                img={img}
                boxSize='498px'/>
            </Flex>
            <Flex
            h='154px'
            w='508px'
            p='16px 24px 24px 24px'
            gap='12px'
            direction='column'
            justify='flex-start'
            align='flex-start'>
                <Flex
                justify='flex-start'>
                    <Flex
                    background='#E5F0FF'
                    borderRadius='8px'
                    padding='4px'
                    align='flex-start'
                    justify='flex-start'
                    m='0 16px'>
                        <Image
                        img={icon}
                        boxSize='36.38px'/>
                    </Flex>
                    <Text
                    background='gradient'
                    fontSize='32px'
                    m='0 16px'
                    userSelect='none'>
                        {title}
                    </Text>
                </Flex>
                <Text
                textAlign='left'
                w='372px'>
                    {description}
                </Text>
            </Flex>
        </Flex>
    )
}
const MainCards = () =>{
    return(
        <Flex
        w='100%'
        h='528px'
        background='-webkit-linear-gradient(left,#176FEB, #FF80FF)'
        position='relative'>
            <WalkthroughCard
            img='./assets/illustrations/walkthroug-1-desktop.png'
            icon='./assets/icons/walkthrough-1.svg'
            title='1---BROWSE'
            description="Browse our tech catalog with more than 20 bottom tech products"
            transform='rotate(-3deg)'
            zIndex='1'
            right=''
            left='185px'
            bottom='-80px'/>
            <WalkthroughCard
            img='./assets/illustrations/walkthroug-2-desktop.png'
            icon='./assets/icons/walkthrough-3.svg'
            title='2---CHOOSE'
            description="Exchange your hard earned AeroPoints for the item you want"
            transform=''
            zIndex='2'
            right=''
            left=''
            bottom='-20px'/>
            <WalkthroughCard
            img='./assets/illustrations/walkthroug-3-desktop.png'
            icon='./assets/icons/walkthrough-2.svg'
            title='3---ENJOY!'
            description="All done, you can relax! We'll take care of delivery of your tech item!"
            transform='rotate(3deg)'
            zIndex='3'
            right='185px'
            left=''
            bottom='-80px'/>
        </Flex>
    )
}

export default MainCards