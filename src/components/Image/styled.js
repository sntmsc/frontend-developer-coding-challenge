import styled from 'styled-components'

export const Image = styled.img`
width: ${props => props.boxSize ? props.boxSize : props.w ? props.w : '3em'};
height: ${props => props.boxSize ? props.boxSize : props.h ? props.h : '3em'};
margin: ${props => props.margin ? props.margin : '0'};
transform: ${props => props.transform ? props.transform : 'rotate(0deg)'};
`
