import { Flex } from '../Flex/styled'
import Image from '../Image/Image'
import Text from '../Text/Text'
const WalkthroughCard = ()=>{
    return(
        <Flex
        background='white'
        h='676px'
        w='532px'
        p='12px'
        border='1px solid #DAE4F2'
        borderRadius='32px'
        boxShadow='0px 2px 40px rgba(0, 0, 0, 0.05)'
        transform='rotate(3deg)'
        align='flex-start'
        direction='column'>
            <Flex
            background='linear-gradient(to left,rgba(255, 128, 255, .9),rgba(23, 111, 235, .4))'
            w='508px'
            h='498px'
            borderRadius='32px'
            overflow='hidden'
            justify='flex-start'>
                <Image
                img='./assets/illustrations/walkthroug-3-desktop.png'
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
                        img='./assets/icons/walkthrough-2.svg'
                        boxSize='36.38px'/>
                    </Flex>
                    <Text
                    background='gradient'
                    fontSize='32px'
                    m='0 16px'
                    userSelect='none'>
                        3---ENJOY!
                    </Text>
                </Flex>
                <Text
                textAlign='left'>
                    All done, you can relax! We'll take care of delivery of your tech item!
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
        background='-webkit-linear-gradient(left,#176FEB, #FF80FF)'>
            <WalkthroughCard/>
        </Flex>
    )
}

export default MainCards