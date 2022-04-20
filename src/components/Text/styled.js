import styled from 'styled-components'

export const Text = styled.p`
margin:0;
padding:0;
width: ${props => props.w ? props.w : ''};
background: ${props => props.background === 'gradient' ?
            '-webkit-linear-gradient(left,#176FEB, #FF80FF)' : props.background ?
             props.background : '#7c899c'};
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
font-family: 'Montserrat', sans-serif;
font-size: ${props => props.fontSize ? props.fontSize : '18px'};
font-weight: ${props => props.weight ? props.weight : '600'};
line-height: ${props => props.lineHeight ? props.lineHeight : '150%'};
letter-spacing: 0%;
text-style: none;
text-align: ${props => props.textAlign ? props.textAlign : 'center'};
`
