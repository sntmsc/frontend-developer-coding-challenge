import styled from 'styled-components'
import { device } from '../../../styles/deviceMediaQuery'

export const MainContainer = styled.div`
display: flex;
flex-direction: column;
width: 100%;
margin-top: 100px;

@media not all and ${device.desktop}{
    overflow: hidden;
}
`

export const HeroContainer = styled.div`
display: flex;
width: 1580px;
align-items: center;
justify-content: space-around;
grid-column-gap: 6rem;
margin-top:3em;
margin-bottom: 230px;

@media not all and ${device.desktop}{
    width: 100%;
    flex-direction: column;
    margin-top:1em;
    margin-bottom: 0;
    z-index: 3
}
`