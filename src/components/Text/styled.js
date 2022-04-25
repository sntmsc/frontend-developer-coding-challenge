import styled from 'styled-components'

export const Text = styled.p`
margin:${props => props.m ? props.m : '0'};
margin-top: ${props => props.mt ? props.mt : '0'};
margin-left: ${props => props.ml ? props.ml : '0'};
margin-bottom: ${props => props.mb ? props.mb : '0'};
margin-right: ${props => props.mr ? props.mr : '0'};
padding:0;
width: ${props => props.w ? props.w : ''};
background: ${props => props.background === 'gradient' ?
            '-webkit-linear-gradient(left,#176FEB, #FF80FF)' : props.background ?
             props.background : ' #7C899C'};
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
font-family: 'Montserrat', sans-serif;
font-size: ${props => props.fontSize ? props.fontSize : '18px'};
font-weight: ${props => props.weight ? props.weight : '600'};
line-height: ${props => props.lineHeight ? props.lineHeight : '150%'};
letter-spacing: ${props => props.spacing ? props.spacing : '0%'};
text-style: none;
text-align: ${props => props.textAlign ? props.textAlign : 'center'};
user-select:  ${props => props.userSelect ? props.userSelect : '' };
`
