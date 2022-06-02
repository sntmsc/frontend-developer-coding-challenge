import styled from 'styled-components'
import { device } from '../../../../styles/deviceMediaQuery'

export const Divider = styled.hr`
border:         1px solid #DAE4F2;
height:         59px;
width:          1px;   
margin: 0 40px;
`


export const ConditionalContainer = styled.div`
display: flex;

@media not all and ${device.desktop}{
    display: none;
}
`

export const ConditionalDirection = styled.div`
display: flex;

@media not all and ${device.desktop}{
    flex-direction: column;
}
`