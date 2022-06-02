import styled from 'styled-components'
import { device } from '../../../../styles/deviceMediaQuery'

export const Divider = styled.hr`
border:         1px solid #DAE4F2;
height:         59px;
width:          1px;   
margin: 0 40px;
`

export const OptionsContainer = styled.div`
display: flex;
margin-top: 40px;
width: 100%;
justify-content: center;
align-items: center;

@media not all and ${device.desktop}{
    align-items: flex-start;
    justify-content: space-between;
}
`

export const ConditionalContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;

@media not all and ${device.desktop}{
    display: none;
}
`

export const ConditionalDirection = styled.div`
display: flex;
justify-content: flex-start;
align-items: center;
margin: 0;

@media not all and ${device.desktop}{
    flex-direction: column;
    align-items: flex-start;
    grid-gap: 26.5px;
}
`