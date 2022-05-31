import styled from 'styled-components'
import { device } from '../../../../../styles/deviceMediaQuery'

export const Logo = styled.img`
width: 280px;
height: 50px;
content:url(./assets/icons/aerolab-logo-1.svg);
position: ${props => props.position ? props.position : ''};
margin-left: 10px;
left: ${props => props.left ? props.left : ''};
right: ${props => props.right ? props.right : ''};
top: ${props => props.top ? props.top : ''};
bottom: ${props => props.bottom ? props.bottom : ''};

@media not all and ${device.desktop}{
    content:url(./assets/icons/aerolab-logo-2.svg);
}
`