import styled from 'styled-components'
import { device } from '../../../../styles/deviceMediaQuery'

export const HeaderContainer = styled.div`
position: relative;
display: flex;
justify-content: space-between;
margin: 0;
padding: 50px 0 10px 0;
width: 1464px;

@media not all and ${device.desktop}{
    width: 100%;
    padding: 50px 20px 0 20px;
}
`

export const Logo = styled.img`
width: 120px;
height: 50px;
content:url(./assets/icons/aerolab-logo-1.svg);

@media not all and ${device.desktop}{
    width: 50px;
    content:url(./assets/icons/aerolab-logo-2.svg);
}
`

