import styled from 'styled-components'

export const Image = styled.img`
object-fit: ${props => props.objectFit ? props.objectFit : ''};
width: ${props => props.boxSize ? props.boxSize : props.w ? props.w : '3em'};
height: ${props => props.boxSize ? props.boxSize : props.h ? props.h : '3em'};
margin: ${props => props.margin ? props.margin : '0'};
transform: ${props => props.transform ? props.transform : ''};
position: ${props => props.position ? props.position : ''};
left: ${props => props.left ? props.left : ''};
right: ${props => props.right ? props.right : ''};
top: ${props => props.top ? props.top : ''};
bottom: ${props => props.bottom ? props.bottom : ''};
`
