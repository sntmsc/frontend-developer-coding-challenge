import styled from 'styled-components'
import { device } from '../../../styles/deviceMediaQuery'

export const SectionContainer = styled.div`
width: 100%;
display:flex;
padding: 100px 15px 0 15px;
max-width: 1460px;
margin-top: 270px;
flex-direction: column;
justify-content: center;
align-items: center;

@media not all and ${device.desktop}{
    margin-top: 50px;
}
`
export const CardsContainer = styled.div`
display: grid;
grid-template-columns: repeat(auto-fill, minmax(348px, 1fr)); 
max-width: 1470px;
grid-column-gap: 24px;

@media not all and ${device.desktop}{
    grid-template-columns: repeat(auto-fill, minmax(314.33px, 1fr)); 
    max-width: 100%;
}
`

export const FooterProducts = styled.div`
position: relative;
width: 100%;
display:flex;
justify-content: center;
align-items: center;
margin-top: 82px;

@media not all and ${device.desktop}{
    flex-direction: column;
    grid-row-gap: 35px;
}
`

export const PaginationContainer = styled.div`
position: absolute;
right: 0;
display:flex;

@media not all and ${device.desktop}{
    position: relative;
}
`