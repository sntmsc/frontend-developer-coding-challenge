import styled from 'styled-components'
import { device } from '../../../../../styles/deviceMediaQuery'

export const HeroContainer = styled.div`
display: flex;
max-width: 1464px;
align-items: center;
justify-content: space-around;
grid-column-gap: 6rem;
margin-top:3em;
margin-bottom: 230px;

@media not all and ${device.desktop}{
    flex-direction: column;
    margin-top:1em;
}
`