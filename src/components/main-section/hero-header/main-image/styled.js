import styled from 'styled-components'
import { device } from '../../../../../styles/deviceMediaQuery'

export const ImageContainer = styled.div`
display: flex;
justify-content: ${props => props.justify ? props.justify : 'center'};
align-items: ${props => props.align ? props.align : 'center'};
padding: ${props => props.p ? props.p : '0'};
margin: ${props => props.m ? props.m : '0'};
width: 650px;
max-width: ${props => props.maxW ? props.maxW  : ''};
height: 530px;
background: linear-gradient(to left,rgba(255, 128, 255, .4),rgba(23, 111, 235, .4));
border-radius: 45px;
clip-path: inset( -100vw -100vw 0 -100vw );

@media not all and ${device.desktop}{
    background: transparent;
    width: 464px;
    height: 424px;
}

`


export const Image = styled.img`
content:url(${props => props.img});
width: 800px;
height: 800px;
position: ${props => props.position ? props.position : ''};
left: ${props => props.left ? props.left : ''};
right: ${props => props.right ? props.right : ''};
top: ${props => props.top ? props.top : ''};
bottom: ${props => props.bottom ? props.bottom : ''};

@media not all and ${device.desktop}{
    width: 640px;
    height: 640px;
}
`