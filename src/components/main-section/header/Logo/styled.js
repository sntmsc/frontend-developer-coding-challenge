import styled from 'styled-components'
import { device } from '../../../../../styles/deviceMediaQuery'

export const Logo = styled.img`
width: 120px;
height: 50px;
content:url(./assets/icons/aerolab-logo-1.svg);

@media not all and ${device.desktop}{
    width: 50px;
    content:url(./assets/icons/aerolab-logo-2.svg);
}
`