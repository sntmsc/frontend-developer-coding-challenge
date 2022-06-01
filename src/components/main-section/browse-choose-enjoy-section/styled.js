import styled from 'styled-components'
import { device } from '../../../../styles/deviceMediaQuery'

export const CardsContainer = styled.div`

display: flex;
justify-content: center;
align-items: center;
position: relative;
left: ${props => props.left ? props.left : ''};
right: ${props => props.right ? props.right : ''};
top: ${props => props.top ? props.top : ''};
bottom: ${props => props.bottom ? props.bottom : ''};
padding: 0;
margin: 0;
width: 100%;
background: linear-gradient(102.47deg, rgba(23, 111, 235, .5) -5.34%,
            rgba(255, 128, 255, .5) 106.58%);

@media not all and ${device.desktop}{
    bottom: 13.5rem;
    padding: 5em 0;
}
`