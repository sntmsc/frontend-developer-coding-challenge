import { useState } from 'react'
import { Flex } from '../../Flex/styled' 
import Text from '../../Text/Text'
import Image from '../../Image/Image'


const Pagination = ({position, left, setItems, itemsPerPage, totalItems}) =>{
    const [ currentPage, setCurrentPage ] = useState(0);
    const [firstIndex, setFirstIndex] = useState(0);
    const totalPages = Math.ceil(totalItems/itemsPerPage);
console.log(firstIndex)
    const handleNext = () =>{
        const nextPage = currentPage + 1;
        if(firstIndex + itemsPerPage >= totalItems) return;
        setFirstIndex(nextPage * itemsPerPage);
        setCurrentPage(nextPage);
        setItems(firstIndex);
    }

    const handlePrev = () =>{
        const prevPage = currentPage - 1;
        if(prevPage < 0) return;

         setFirstIndex(prevPage * itemsPerPage);
        setCurrentPage(prevPage);
        setItems(firstIndex);
    }

    return(
        <Flex
        ml='140px'
        w='250px'
        h='59px'
        p='16px'
        justify='space-between'
        align='center'
        border='1px solid #DAE4F2'
        borderRadius='16px'
        position={position}
        left={left}>
                <Flex
                boxSize='40px'
                background={currentPage === 0 ? '#E6EDF7' : '#E5F0FF'}
                borderRadius='8px'
                cursor='pointer'
                onClick={handlePrev}>
                    <Image
                    img={`./assets/icons/chevron-${currentPage === 0 ? 'default' : 'active'}.svg`}
                    transform='rotate(-180deg)'
                    boxSize='15px'/>
                </Flex>
                <Text
                userSelect='none'>
                Page
                </Text>
                <Text
                background=' linear-gradient(102.47deg, #176FEB -150.34%, #FF80FF 106.58%)'
                userSelect='none'>
                     {currentPage + 1} of {totalPages}</Text>
                <Flex
                boxSize='40px'
                background={firstIndex + itemsPerPage >= totalItems ? '#E6EDF7' : '#E5F0FF'}
                borderRadius='8px'
                cursor='pointer'
                onClick={handleNext}>
                    <Image
                    img={`./assets/icons/chevron-${firstIndex + itemsPerPage >= totalItems ? 'default' : 'active'}.svg`}
                    boxSize='15px'/>
                </Flex>
        </Flex>
    )
}

export default Pagination