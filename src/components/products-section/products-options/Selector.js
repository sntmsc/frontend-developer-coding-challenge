import {useState, useRef} from 'react'
import { Flex } from '../../Flex/styled' 
import Text from '../../Text/Text'
import Image from '../../Image/Image'
import useClickOutside from '../../../../utils/useClickOutside'


const Selector = ({filterSelected, setFilterSelected, setCurrentPage}) =>{
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    const filterOptions = ['All Products', 'Gaming', 'Audio', 'Smart Home', 'Monitors & TV'];

    const closeComponent = () => setIsVisible(false);

    useClickOutside(ref, closeComponent);

    const handleClickOption = (x) =>{ 
        setIsVisible(false);
        setFilterSelected(x);
        setCurrentPage(1);
    };

    return(
        <Flex
        position='relative'
        ref={ref}>
            <Flex
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
                    {filterSelected}
                </Text>
                <Image
                img='./assets/icons/black-arrow.png'
                transform={isVisible ? 'rotate(180deg)' : ''}
                boxSize='8px'/>
            </Flex>
            {isVisible && 
                <Flex
                position='absolute'
                direction='column'
                top='63px'
                w='256px'
                background='white'
                border='1px solid #DAE4F2'
                borderRadius='8px'
                align='flex-start'
                justify='center'>
                    {filterOptions.map((x,i) => 
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