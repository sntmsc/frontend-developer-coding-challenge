import styled from 'styled-components'

export const Image = styled.img`
object-fit: ${props => props.objectFit ? props.objectFit : ''};
padding: ${props=>props.p ? props.p : ''};
opacity: ${props => props.opacity ? props.opacity :  ''};
width: ${props => props.boxSize ? props.boxSize : props.w ? props.w : '3em'};
height: ${props => props.boxSize ? props.boxSize : props.h ? props.h : '3em'};
cursor: ${props => props.cursor ? props.cursor : ''};
margin: ${props => props.m ? props.m : '0'};
transform: ${props => props.transform ? props.transform : ''};
position: ${props => props.position ? props.position : ''};
left: ${props => props.left ? props.left : ''};
right: ${props => props.right ? props.right : ''};
top: ${props => props.top ? props.top : ''};
bottom: ${props => props.bottom ? props.bottom : ''};
`
