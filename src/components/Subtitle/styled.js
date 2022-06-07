import styled from 'styled-components'
import { device } from '../../../styles/deviceMediaQuery'

export const ProductsTitleContainer = styled.div`
display: flex;
width: 100%;
justify-content: flex-start;
align-items: center;

@media${device.mobile}{
    justify-content: center;
}`



export const Subtitle = styled.h2`
font-size: 48px;
font-family: 'Montserrat', sans-serif;
font-weight: ${props => props.weight ? props.weight : '900'};
line-height: ${props => props.lineHeight ? props.lineHeight : '80%'};
letter-spacing: ${props => props.spacing ? props.spacing : '0%'};
text-transform: uppercase;
color: ${props=> props.color ? props.color : 'black'};
margin-right: 15px;


@media not all and ${device.desktop}{
    font-size: ${props => props.fontSize ? props.fontSize : '36px'};
    margin-right: 11px;
}
`