import styled from 'styled-components'

export const Text = styled.p`
margin:0;
width: ${props => props.w ? props.w : ''};
background: -webkit-linear-gradient(left,#176FEB, #FF80FF);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
font-family: 'Montserrat', sans-serif;
font-size: 18px;
font-weight: ${props => props.weight ? props.weight : '600'};
line-height: 150%;
letter-spacing: 0%;
text-style: none;
text-align: center;
`
