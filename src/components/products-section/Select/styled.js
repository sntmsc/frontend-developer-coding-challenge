import styled from 'styled-components'

export const Select = styled.select`

padding: ${props => props.p ? props.p : '1em'};
margin: ${props => props.m ? props.m : ''};
width: ${props => props.boxSize ? props.boxSize : props.w ? props.w : '100px'};
height: ${props => props.boxSize ? props.boxSize : props.h ? props.h : '20px'};
background: ${props => props.background ? props.background : '-webkit-linear-gradient(left,#176FEB, #FF80FF)'};
border-radius: ${props => props.borderRadius ? props.borderRadius : '20px'};
border: ${props => props.border ? props.border : '20px'};
`

export const Option = styled.option`

padding: ${props => props.p ? props.p : '1em'};
margin: ${props => props.m ? props.m : ''};
width: ${props => props.boxSize ? props.boxSize : props.w ? props.w : ''};
height: ${props => props.boxSize ? props.boxSize : props.h ? props.h : ''};
`





