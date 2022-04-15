import styled from 'styled-components'

export const Image = styled.img`
width: ${props => props.boxSize ? props.boxSize : '3em'};
height: ${props => props.boxSize ? props.boxSize : '3em'};
transform: ${props => props.transform ? props.transform : 'rotate(0deg)'};
`
