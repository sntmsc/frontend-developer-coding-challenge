import styled from 'styled-components'
import { device } from '../../../../../styles/deviceMediaQuery'

export const AeropayButtonContainer = styled.div`
width: 172px;
height: 48px;
display: flex;
align-items: center;
justify-content: center;
cursor: pointer;
border: 1px solid #DAE4F2;
border-radius: 15px;
box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.08);
grid-column-gap: 5px;
padding: 7px 15px;
z-index:15;

@media not all and ${device.desktop}{
    width: 143px;
    height: 40px;
}
`

