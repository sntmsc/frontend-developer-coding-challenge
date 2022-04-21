import { Flex } from '../Flex/styled'

const WalkthroughCard = ()=>{
    return(
        <Flex
        background='red'
        h='5rem'
        w='5rem'>

        </Flex>
    )
}
const MainCards = () =>{
    return(
        <Flex
        w='100%'
        h='20rem'
        background='-webkit-linear-gradient(left,#176FEB, #FF80FF)'>
            <WalkthroughCard/>
        </Flex>
    )
}

export default MainCards