import { Flex } from '../../Flex/styled'
import Text from '../../Text/Text'
import Image from '../../Image/Image'
import { itemsPerPage } from '../../../../utils/config'

const Pagination = ({ totalItems, currentPage, setCurrentPage}) =>{

    const totalPages = Math.ceil(totalItems/itemsPerPage);

    const handleNext = () =>{
        const nextPage = currentPage + 1;
        if(currentPage === totalPages) return;
        setCurrentPage(nextPage);
    }

    const handlePrev = () =>{
        const prevPage = currentPage - 1;
        if(prevPage < 1) return;
        setCurrentPage(prevPage);
    }

    return(
        <Flex
        w='250px'
        h='59px'
        p='16px'
        justify='space-between'
        align='center'
        border='1px solid #DAE4F2'
        borderRadius='16px'>
                <Flex
                boxSize='40px'
                background={currentPage === 1 ? '#E6EDF7' : '#E5F0FF'}
                borderRadius='8px'
                cursor='pointer'
                onClick={handlePrev}>
                    <Image
                    img={`./assets/icons/chevron-${currentPage === 1 ? 'default' : 'active'}.svg`}
                    alt='previous page handler'
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
                     {currentPage } of {totalPages}</Text>
                <Flex
                boxSize='40px'
                background={currentPage === totalPages ? '#E6EDF7' : '#E5F0FF'}
                borderRadius='8px'
                cursor='pointer'
                onClick={handleNext}>
                    <Image
                    img={`./assets/icons/chevron-${currentPage === totalPages ? 'default' : 'active'}.svg`}
                    alt='next page handler'
                    boxSize='15px'/>
                </Flex>
        </Flex>
    )
}

export default Pagination