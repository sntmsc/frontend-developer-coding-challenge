import {useState} from 'react'
import { Flex } from '../../Flex/styled' 
import Text from '../../Text/Text'
import Image from '../../Image/Image'



const Selector = ({options, filterFunction}) =>{
    const [isVisible, setIsVisible] = useState(false);
    const [currentOption, setCurrentOption] = useState('All Products');

    const handleClickOption = (x) =>{
        setCurrentOption(x); 
        setIsVisible(false);
        filterFunction(x);
    };

    return(
        <Flex
        position='relative'>
            <Flex
            ml='16px'
            w='256px'
            h='59px'
            p='16px 8px 16px 24px'
            justify='space-between'
            align='center'
            border='1px solid #DAE4F2'
            borderRadius='16px'
            onClick={()=>setIsVisible(!isVisible)}
            cursor='pointer'
            >
                <Text
                userSelect='none'>
                    {currentOption}
                </Text>
                <Image
                img='./assets/icons/black-arrow.png'
                boxSize='8px'/>
            </Flex>
            {isVisible && 
                <Flex
                position='absolute'
                direction='column'
                top='63px'
                left='15px'
                w='256px'
                background='white'
                border='1px solid #DAE4F2'
                borderRadius='8px'
                align='flex-start'
                justify='center'>
                    {options.map((x,i) => 
                        <Flex
                        key={i}
                        w='100%'
                        h='51px'
                        justify='flex-start'
                        p='12px 24px'
                        hoverBackground='#F5F9FF'
                        cursor='pointer'
                        onClick={()=>handleClickOption(x)}>
                            <Text
                            userSelect='none'>
                                {x}
                            </Text>
                        </Flex>
                    )}
                </Flex>
            }
        </Flex>
    )
}

export default Selector