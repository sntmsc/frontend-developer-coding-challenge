import { Flex } from './../src/components/Flex/styled'
import Header from '../src/components/main-section/Header'
import MainImage from '../src/components/main-section/MainImage'
import MainDescription from '../src/components/main-section/MainDescription'



export default function Home() {
  return(
    <div>
      <Header/>
      <Flex
      backgroundImage='url(/assets/illustrations/single-wave-pattern.svg)'
      w='100%'
      direction='row'
      justify='center'
      columnGap='7em'
      align='flex-start'>
        <MainDescription/>
        <MainImage/>
      </Flex>
   </div>
  )
}
