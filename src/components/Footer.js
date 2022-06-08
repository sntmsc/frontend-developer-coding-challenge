import { Flex } from "./Flex/styled"
import Image from "./Image/Image"
import Text from "./Text/Text"

const Footer = () =>{
    return(
            <Flex
            mt='174px'
            mb='80px'>
                <a 
                target='_blank'
                href='https://github.com/sntmsc/frontend-developer-coding-challenge'>
                <Flex>
                <Image
                w='27.97px'
                h='27.23px'
                img='./assets/icons/github-default.svg'/>
                <Text
                mx='8px'>
                    View this repository
                </Text>
                </Flex>
                </a>
            </Flex>
    )
}
export default Footer