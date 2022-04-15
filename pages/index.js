import { Flex } from './../src/components/Flex/styled'
import Image from '../src/components/Image/Image'
import AeropayButton from './../src/components/AeropayButton/AeropayButton'
export default function Home() {
  return(
    <div>
      <Flex
      justify='space-around'
      w='100%'
      p='3em'>
        <Image
            img='./assets/icons/aerolab-logo-1.svg'
            w='150px'
            margin='0 0 0 10px'/>
        <AeropayButton/>
      </Flex>
   </div>
  )
}
